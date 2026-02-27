"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// --- SHADERS ---
const starVert = `
precision highp float;
precision highp int;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec4 mouse;
attribute vec2 aFront;
attribute float random;

uniform vec2 resolution;
uniform float pixelRatio;
uniform float timestamp;

uniform float size;
uniform float minSize;
uniform float speed;
uniform float far;
uniform float spread;
uniform float maxSpread;
uniform float maxZ;
uniform float maxDiff;
uniform float diffPow;

varying float vProgress;
varying float vRandom;
varying float vDiff;
varying float vSpreadLength;
varying float vPositionZ;

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

const float PI = 3.1415926;
const float PI2 = PI * 2.;

void main () {
  float progress = clamp((timestamp - mouse.z) * speed, 0., 1.);
  progress *= step(0., mouse.x);

  float startX = mouse.x - resolution.x / 2.;
  float startY = mouse.y - resolution.y / 2.;
  vec3 startPosition = vec3(startX, startY, random);

  float diff = clamp(mouse.w / maxDiff, 0., 1.);
  diff = pow(diff, diffPow);

  vec3 cPosition = position * 2. - 1.;

  float radian = cPosition.x * PI2 - PI;
  vec2 xySpread = vec2(cos(radian), sin(radian)) * spread * mix(1., maxSpread, diff) * cPosition.y;

  vec3 endPosition = startPosition;
  endPosition.xy += xySpread;
  endPosition.xy -= aFront * far * random;
  endPosition.z += cPosition.z * maxZ * (pixelRatio > 1. ? 1.2 : 1.);

  float positionProgress = cubicOut(progress * random);
  vec3 currentPosition = mix(startPosition, endPosition, positionProgress);

  vProgress = progress;
  vRandom = random;
  vDiff = diff;
  vSpreadLength = cPosition.y;
  vPositionZ = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(currentPosition, 1.);
  gl_PointSize = max(currentPosition.z * size * diff * pixelRatio, minSize * (pixelRatio > 1. ? 1.3 : 1.));
}
`;

const starFrag = `
precision highp float;
precision highp int;

uniform float fadeSpeed;
uniform float shortRangeFadeSpeed;
uniform float minFlashingSpeed;
uniform float blur;
uniform vec3 color;

varying float vProgress;
varying float vRandom;
varying float vDiff;
varying float vSpreadLength;
varying float vPositionZ;

highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float quadraticIn(float t) {
  return t * t;
}

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float sineOut(float t) {
  return sin(t * HALF_PI);
}

void main(){
	vec2 p = gl_PointCoord * 2. - 1.;
	float len = length(p);

  float cRandom = random(vec2(vProgress * mix(minFlashingSpeed, 1., vRandom)));
  cRandom = mix(0.3, 2., cRandom);

  float cBlur = blur * mix(1., 0.3, vPositionZ);
	float shape = smoothstep(1. - cBlur, 1. + cBlur, (1. - cBlur) / len);
  shape *= mix(0.5, 1., vRandom);

  if (shape == 0.) discard;

  float darkness = mix(0.1, 1., vPositionZ);

  float alphaProgress = vProgress * fadeSpeed * mix(2.5, 1., pow(vDiff, 0.6));
  alphaProgress *= mix(shortRangeFadeSpeed, 1., sineOut(vSpreadLength) * quadraticIn(vDiff));
  float alpha = 1. - min(alphaProgress, 1.);
  alpha *= cRandom * vDiff;

	gl_FragColor = vec4(color * darkness * cRandom, shape * alpha);
}
`;



// --- CORE LOGIC ---
export interface ShootingStarProps {
    className?: string;

    // Customizes colors
    starColor?: string;

    // Uniforms options
    size?: number;
    minSize?: number;
    speed?: number;
    fadeSpeed?: number;
    shortRangeFadeSpeed?: number;
    minFlashingSpeed?: number;
    spread?: number;
    maxSpread?: number;
    maxZ?: number;
    blur?: number;
    far?: number;
    maxDiff?: number;
    diffPow?: number;
}

const CONSTANTS = {
    PER_MOUSE: 800,
    COUNT: 800 * 400,
    CAMERA_Z: 5000,
    FIRST_DURATION: 1080
};

export function ShootingStar({
    className,
    starColor = "#aa8558", // Roughly vec3(170, 133, 88)
    // Options
    size = 0.05,
    minSize = 1,
    speed = 0.002,
    fadeSpeed = 1.1,
    shortRangeFadeSpeed = 1.3,
    minFlashingSpeed = 0.1,
    spread = 7,
    maxSpread = 5,
    maxZ = 100,
    blur = 1,
    far = 10,
    maxDiff = 100,
    diffPow = 0.24,
}: ShootingStarProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        let animationFrameId: number;
        let initialWidth = containerRef.current.clientWidth;
        let initialHeight = containerRef.current.clientHeight;

        // Config Store
        const store = {
            clientWidth: initialWidth,
            clientHeight: initialHeight,
            clientHalfWidth: initialWidth / 2,
            clientHalfHeight: initialHeight / 2,
            resolution: new THREE.Vector2(initialWidth, initialHeight),
            pixelRatio: window.devicePixelRatio,
            mouseI: 0,
            oldPosition: null as THREE.Vector2 | null,
            timestamp: 0,
            rate: 1,
            pointers: [] as { clientX: number, clientY: number }[]
        };

        // THREE Setup
        const fov = Math.atan((initialHeight / 2) / CONSTANTS.CAMERA_Z) * (180 / Math.PI) * 2;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: window.devicePixelRatio === 1,
            alpha: true,
        });
        renderer.setPixelRatio(store.pixelRatio);
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(initialWidth, initialHeight);

        const camera = new THREE.PerspectiveCamera(fov, initialWidth / initialHeight, 0.1, CONSTANTS.CAMERA_Z * 2);
        camera.position.set(0, 0, CONSTANTS.CAMERA_Z);
        camera.updateProjectionMatrix();

        const scene = new THREE.Scene();



        // 2. Stars
        let starsMesh: THREE.Points;
        let starsUniforms: any;
        let starsGeometry: THREE.BufferGeometry;

        const initStars = () => {
            const front = new THREE.Vector2();
            starsUniforms = {
                resolution: { value: store.resolution },
                pixelRatio: { value: store.pixelRatio },
                timestamp: { value: 0 },
                color: { value: new THREE.Color(starColor) },
                size: { value: size },
                minSize: { value: minSize },
                speed: { value: speed },
                fadeSpeed: { value: fadeSpeed },
                shortRangeFadeSpeed: { value: shortRangeFadeSpeed },
                minFlashingSpeed: { value: minFlashingSpeed },
                spread: { value: spread },
                maxSpread: { value: maxSpread },
                maxZ: { value: maxZ },
                blur: { value: blur },
                far: { value: far },
                maxDiff: { value: maxDiff },
                diffPow: { value: diffPow }
            };

            starsGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(CONSTANTS.COUNT * 3);
            const mouseData = new Float32Array(CONSTANTS.COUNT * 4);
            const aFrontData = new Float32Array(CONSTANTS.COUNT * 2);
            const randomData = new Float32Array(CONSTANTS.COUNT);

            for (let i = 0; i < CONSTANTS.COUNT; i++) {
                positions[3 * i] = Math.random();
                positions[3 * i + 1] = Math.random();
                positions[3 * i + 2] = Math.random();

                mouseData[4 * i] = -1;
                mouseData[4 * i + 1] = -1;
                mouseData[4 * i + 2] = 0;
                mouseData[4 * i + 3] = 0;

                aFrontData[2 * i] = front.x;
                aFrontData[2 * i + 1] = front.y;

                randomData[i] = Math.random();
            }

            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            starsGeometry.setAttribute('mouse', new THREE.BufferAttribute(mouseData, 4));
            starsGeometry.setAttribute('aFront', new THREE.BufferAttribute(aFrontData, 2));
            starsGeometry.setAttribute('random', new THREE.BufferAttribute(randomData, 1));

            const material = new THREE.RawShaderMaterial({
                uniforms: starsUniforms,
                vertexShader: starVert,
                fragmentShader: starFrag,
                transparent: true,
                depthTest: false,
                blending: THREE.AdditiveBlending
            });

            starsMesh = new THREE.Points(starsGeometry, material);
            starsMesh.frustumCulled = false;
            scene.add(starsMesh);
        };
        initStars();

        const drawMove = (clientX: number, clientY: number) => {
            const x = clientX * store.rate + store.clientHalfWidth;
            const y = store.clientHeight - (clientY * store.rate + store.clientHalfHeight);
            const newPos = new THREE.Vector2(x, y);

            const diff = store.oldPosition ? newPos.clone().sub(store.oldPosition) : new THREE.Vector2();
            const length = diff.length();
            const front = diff.clone().normalize();

            const mouseAttr = starsGeometry.attributes.mouse;
            const aFrontAttr = starsGeometry.attributes.aFront;

            for (let i = 0; i < CONSTANTS.PER_MOUSE; i++) {
                const ci = (store.mouseI % (CONSTANTS.COUNT * 4)) + (i * 4);
                const fi = (store.mouseI % (CONSTANTS.COUNT * 4)) / 2 + (i * 2);

                const position = store.oldPosition
                    ? store.oldPosition.clone().add(diff.clone().multiplyScalar(i / CONSTANTS.PER_MOUSE))
                    : newPos;

                // @ts-ignore
                mouseAttr.array[ci] = position.x;
                // @ts-ignore
                mouseAttr.array[ci + 1] = position.y;
                // @ts-ignore
                mouseAttr.array[ci + 2] = store.timestamp;
                // @ts-ignore
                mouseAttr.array[ci + 3] = length;

                // @ts-ignore
                aFrontAttr.array[fi] = front.x;
                // @ts-ignore
                aFrontAttr.array[fi + 1] = front.y;
            }

            store.oldPosition = newPos;
            mouseAttr.needsUpdate = true;
            aFrontAttr.needsUpdate = true;
            store.mouseI += 4 * CONSTANTS.PER_MOUSE;
        };

        const handlePointerMove = (e: PointerEvent) => {
            drawMove(e.clientX - store.clientHalfWidth, e.clientY - store.clientHalfHeight);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!e.touches[0]) return;
            drawMove(e.touches[0].clientX - store.clientHalfWidth, e.touches[0].clientY - store.clientHalfHeight);
        };

        let isInView = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView = entry.isIntersecting;
            },
            { threshold: 0 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Main Loop
        let startTime = performance.now();
        const tick = (now: number) => {
            if (isInView) {
                store.timestamp = now - startTime;
                starsUniforms.timestamp.value = store.timestamp;

                renderer.render(scene, camera);
            }
            animationFrameId = requestAnimationFrame(tick);
        };
        animationFrameId = requestAnimationFrame(tick);


        // Connect event handlers immediately
        window.addEventListener('pointermove', handlePointerMove as any);
        window.addEventListener('touchmove', handleTouchMove as any, { passive: true });

        // Resize Handling
        const handleResize = () => {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;

            store.rate = Math.min(w / initialWidth, 1) * (1 / (h / initialHeight));

            store.clientWidth = w;
            store.clientHeight = h;
            store.clientHalfWidth = w / 2;
            store.clientHalfHeight = h / 2;
            store.resolution.set(w, h);

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);

            starsUniforms.resolution.value = store.resolution;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('pointermove', handlePointerMove as any);
            window.removeEventListener('touchmove', handleTouchMove as any);

            // cleanup threejs
            renderer.dispose();
            starsGeometry.dispose();
            (starsMesh.material as THREE.Material).dispose();
        };
    }, [
        starColor,
        size, minSize, speed, fadeSpeed, shortRangeFadeSpeed, minFlashingSpeed,
        spread, maxSpread, maxZ, blur, far, maxDiff, diffPow
    ]);

    return (
        <div
            ref={containerRef}
            className={cn("fixed inset-0 pointer-events-none z-[-1] overflow-hidden", className)}
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}

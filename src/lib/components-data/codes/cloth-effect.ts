// Auto-generated from cloth-effect.tsx
// Run: npm run generate-codes

export const clothEffectCodeTS = `"use client"

import React, { useRef, useEffect } from "react"
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber"
import * as THREE from "three"
import { shaderMaterial, OrbitControls, useVideoTexture } from "@react-three/drei"

// --- SHADERS ---
const vertexShader = \`
    uniform float uTime;
    uniform float uWindStrength;
    uniform float uFabricFreq;

    varying vec2 vUv;
    varying float vZ;

    void main() {
        vUv = uv;
        vec3 pos = position;

        // WIND LOGIC
        float looseFactor = 1.0 - uv.y;
        float pinInfluence = pow(looseFactor, 1.8);

        float wave1 = sin(uv.x * 5.0 + uTime * 2.0);
        float wave2 = sin(uv.x * 12.0 + uTime * 4.0 + uv.y * 5.0);
        float wave3 = sin(uTime * 1.5);

        float ripples = (wave1 * 0.5 + wave2 * 0.2 + wave3 * 0.3);

        float displacement = (uWindStrength * 2.0 + ripples * uFabricFreq) * pinInfluence;

        pos.y += (sin(displacement) * 0.1) * pinInfluence;
        pos.z += displacement;

        vZ = displacement;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
\`

const fragmentShader = \`
    uniform sampler2D uTexture;
    uniform float uRatio;

    // Geometry
    uniform float uEdgeScale;
    uniform float uEdgeAmp;
    uniform float uFrameSize;
    uniform float uPhotoInset;
    uniform vec3 uPaperColor;

    // FX
    uniform float uScratchAmp;
    uniform float uGrainAmp;
    uniform float uVignette;
    uniform float uSeed;
    uniform float uShadowOpacity;

    // EDGE SHADOW
    uniform vec3 uEdgeShadowColor;
    uniform float uEdgeShadowOpacity;

    varying vec2 vUv;
    varying float vZ;

    // --- Noise Utils ---
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
    float fbm(vec2 x) {
        float v = 0.0; float a = 0.5; vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < 5; ++i) { v += a * snoise(x + uSeed); x = rot * x * 2.0 + shift; a *= 0.5; }
        return v;
    }

    void main() {
        vec2 uv = vUv - 0.5;
        vec2 aspectUV = uv;
        aspectUV.x *= uRatio;

        // 1. SHAPE
        float noise = fbm(aspectUV * uEdgeScale);
        float dist = max(abs(uv.x), abs(uv.y));
        float raggedDist = dist + noise * uEdgeAmp;

        float borderLimit = 0.5 - uFrameSize;
        float alpha = 1.0 - smoothstep(borderLimit, borderLimit + 0.01, raggedDist);
        if (alpha < 0.01) discard;

        // 2. PAPER
        float paperGrain = fbm(vUv * 60.0);
        vec3 paperCol = uPaperColor - paperGrain * 0.05;

        // 3. PHOTO/VIDEO
        vec4 photoTex = texture2D(uTexture, vUv);
        float photoNoise = snoise(aspectUV * 30.0) * 0.005;
        float photoDist = max(abs(uv.x), abs(uv.y)) + photoNoise;
        float photoLimit = borderLimit - uPhotoInset;
        float photoMask = 1.0 - smoothstep(photoLimit, photoLimit + 0.02, photoDist);

        // 4. GRUNGE
        float scratches = snoise(vec2(vUv.x * 300.0, vUv.y * 3.0));
        float dust = fbm(vUv * 40.0 + uSeed);

        vec3 grungePhoto = photoTex.rgb;
        grungePhoto = mix(grungePhoto, vec3(0.6, 0.5, 0.4), dust * uGrainAmp);
        grungePhoto -= scratches * uScratchAmp;
        float len = length(uv);
        grungePhoto -= len * uVignette;

        // Mix Paper and Photo
        vec3 finalRGB = mix(paperCol, grungePhoto, photoMask);

        // 5. CLOTH SHADOWS
        finalRGB += vZ * uShadowOpacity;

        // 6. EDGE SHADOW
        float edgeShadowFactor = smoothstep(borderLimit - 0.05, borderLimit, raggedDist);
        finalRGB = mix(finalRGB, uEdgeShadowColor, edgeShadowFactor * uEdgeShadowOpacity);

        gl_FragColor = vec4(finalRGB, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
\`

// --- MATERIAL DECLARATION ---
const ClothShaderMaterial = shaderMaterial(
    {
        uTexture: null,
        uRatio: 1.0,
        uTime: 0,
        uWindStrength: 0.2,
        uFabricFreq: 0.45,
        uShadowOpacity: 0.4,
        uEdgeScale: 8.8,
        uEdgeAmp: 0.0328,
        uFrameSize: 0.0,
        uPhotoInset: 0.013,
        uPaperColor: new THREE.Color(0xf0ebe0),
        uScratchAmp: 0.0106272,
        uGrainAmp: 0.034925,
        uVignette: 0.0,
        uSeed: 0.0,
        uEdgeShadowColor: new THREE.Color(0x000000),
        uEdgeShadowOpacity: 0.071
    },
    vertexShader,
    fragmentShader
)

extend({ ClothShaderMaterial })

interface ClothPlaneOptions {
    windForce?: number
    fabricDetail?: number
    shadowOpacity?: number
    edgeScale?: number
    edgeAmp?: number
    frameSize?: number
    photoInset?: number
    paperColor?: string
    edgeShadowColor?: string
    edgeShadowOpacity?: number
    grainAmp?: number
    scratchAmp?: number
    vignette?: number
    seed?: number
}

interface ClothPlaneProps {
    texture: THREE.Texture
    options?: ClothPlaneOptions
}

const ClothMesh = ({ texture, options }: ClothPlaneProps) => {
    const materialRef = useRef<any>(null)
    const meshRef = useRef<THREE.Mesh>(null)

    useEffect(() => {
        if (texture) {
            texture.minFilter = THREE.LinearFilter
            texture.magFilter = THREE.LinearFilter
            texture.generateMipmaps = false
        }
    }, [texture])

    // Update ratio and texture when loaded
    useEffect(() => {
        if (materialRef.current && texture) {
             const { width, height } = texture.image
             // Guard against 0 dimensions
             if (width && height) {
                 const aspect = width / height
                 materialRef.current.uRatio = aspect
                 materialRef.current.uTexture = texture

                 // Update mesh scale to match aspect ratio
                 if (meshRef.current) {
                     const baseHeight = 1.3
                     meshRef.current.scale.set(baseHeight * aspect, baseHeight, 1)
                 }
             }
        }
    }, [texture])

    // Update uniforms from options
    useEffect(() => {
        if (materialRef.current && options) {
             if (options.windForce !== undefined) materialRef.current.uWindStrength = options.windForce
             if (options.fabricDetail !== undefined) materialRef.current.uFabricFreq = options.fabricDetail
             if (options.shadowOpacity !== undefined) materialRef.current.uShadowOpacity = options.shadowOpacity
             if (options.edgeScale !== undefined) materialRef.current.uEdgeScale = options.edgeScale
             if (options.edgeAmp !== undefined) materialRef.current.uEdgeAmp = options.edgeAmp
             if (options.frameSize !== undefined) materialRef.current.uFrameSize = options.frameSize
             if (options.photoInset !== undefined) materialRef.current.uPhotoInset = options.photoInset
             if (options.paperColor !== undefined) materialRef.current.uPaperColor.set(options.paperColor)
             if (options.edgeShadowColor !== undefined) materialRef.current.uEdgeShadowColor.set(options.edgeShadowColor)
             if (options.edgeShadowOpacity !== undefined) materialRef.current.uEdgeShadowOpacity = options.edgeShadowOpacity
             if (options.grainAmp !== undefined) materialRef.current.uGrainAmp = options.grainAmp
             if (options.scratchAmp !== undefined) materialRef.current.uScratchAmp = options.scratchAmp
             if (options.vignette !== undefined) materialRef.current.uVignette = options.vignette
             if (options.seed !== undefined) materialRef.current.uSeed = options.seed
        }
    }, [options])


    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime

            // Wind gust logic
            const time = state.clock.elapsedTime
            let gust = (Math.sin(time * 0.7) + Math.sin(time * 2.3) * 0.5) + 0.5
            gust = Math.max(0.0, gust)

            // If windForce is provided in options, use it as base multiplier, else default 0.2
            const baseWind = options?.windForce ?? 0.2
            materialRef.current.uWindStrength = gust * baseWind * 0.3
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <planeGeometry args={[1, 1, 64, 64]} />
            {/* @ts-ignore */}
            <clothShaderMaterial ref={materialRef} side={THREE.DoubleSide} transparent />
        </mesh>
    )
}

const ImageCloth = ({ image, options }: { image: string, options?: ClothPlaneOptions }) => {
    const texture = useLoader(THREE.TextureLoader, image)
    return <ClothMesh texture={texture} options={options} />
}

const VideoCloth = ({ video, options }: { video: string, options?: ClothPlaneOptions }) => {
    const texture = useVideoTexture(video)
    return <ClothMesh texture={texture} options={options} />
}

interface ClothEffectProps {
    className?: string
    image?: string
    video?: string
    options?: ClothPlaneOptions
    height?: string | number
    width?: string | number
}

export default function ClothEffect({
    className,
    image,
    video,
    options,
    height = "100%",
    width = "100%"
}: ClothEffectProps) {
    return (
        <div
            className={className}
            style={{
                width: width,
                height: height,
                minHeight: 300,
                position: 'relative',
                overflow: 'visible'
            }}
        >
            <Canvas
                style={{ width: '100%', height: '100%' }}
                camera={{ position: [0, 0, 3.0], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <OrbitControls enableDamping enableZoom={false} />
                {video ? (
                    <VideoCloth video={video} options={options} />
                ) : (
                    <ImageCloth image={image || "https://iili.io/fvTp5sS.md.jpg"} options={options} />
                )}
            </Canvas>
        </div>
    )
}
`

export const clothEffectCodeJS = clothEffectCodeTS

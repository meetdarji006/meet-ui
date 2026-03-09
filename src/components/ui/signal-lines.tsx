"use client"

import React, { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

// --- TYPES ---
interface SignalLinesOptions {
    // Colors
    colorBg?: string
    colorLine?: string
    colorSignal?: string
    colorSignal2?: string
    colorSignal3?: string
    useColor2?: boolean
    useColor3?: boolean
    transparent?: boolean  // NEW: transparent background option

    // Global Transform
    lineCount?: number
    globalRotation?: number
    positionX?: number
    positionY?: number

    // Geometry
    spreadHeight?: number
    spreadDepth?: number
    curveLength?: number
    straightLength?: number
    curvePower?: number

    // Line Animation
    waveSpeed?: number
    waveHeight?: number
    lineOpacity?: number

    // Signals
    signalCount?: number
    speedGlobal?: number
    trailLength?: number

    // Bloom
    bloomStrength?: number
    bloomRadius?: number
}

const defaultOptions: Required<SignalLinesOptions> = {
    colorBg: '#060010',             // Dark blue-purple background
    colorLine: '#4a5568',           // Line color
    colorSignal: '#00d4ff',         // Signal color (same as line by default)
    colorSignal2: '#ff3366',        // Hot pink
    colorSignal3: '#ffcc00',        // Gold
    useColor2: false,               // Disabled - use single color
    useColor3: false,               // Disabled - use single color
    transparent: false,             // Default: has background
    lineCount: 60,                  // Fewer lines, cleaner look
    globalRotation: 0,
    positionX: 0,
    positionY: 0,
    spreadHeight: 35,               // Taller spread
    spreadDepth: 0,
    curveLength: 60,                // Longer curve
    straightLength: 80,             // Shorter straight section
    curvePower: 0.7,                // Smoother curve
    waveSpeed: 1.8,                 // Gentler wave
    waveHeight: 0.3,                // More visible wave
    lineOpacity: 0.8,               // Much more visible lines
    signalCount: 120,               // More signals
    speedGlobal: 0.5,               // Faster signals
    trailLength: 15,                // Longer trails
    bloomStrength: 3.0,
    bloomRadius: 0.5
}

const SEGMENT_COUNT = 150
const MAX_TRAIL = 150

// --- PATH CALCULATION ---
function getPathPoint(
    t: number,
    lineIndex: number,
    lineCount: number,
    time: number,
    options: Required<SignalLinesOptions>
): THREE.Vector3 {
    const totalLen = options.curveLength + options.straightLength
    const currentX = -options.curveLength + t * totalLen

    let y = 0
    let z = 0
    const spreadFactor = (lineIndex / lineCount - 0.5) * 2

    if (currentX < 0) {
        const ratio = (currentX + options.curveLength) / options.curveLength
        let shapeFactor = (Math.cos(ratio * Math.PI) + 1) / 2
        shapeFactor = Math.pow(shapeFactor, options.curvePower)

        y = spreadFactor * options.spreadHeight * shapeFactor
        z = spreadFactor * options.spreadDepth * shapeFactor

        const waveFactor = shapeFactor
        const wave = Math.sin(time * options.waveSpeed + currentX * 0.1 + lineIndex) * options.waveHeight * waveFactor
        y += wave
    }

    return new THREE.Vector3(currentX, y, z)
}

// --- BACKGROUND LINES COMPONENT ---
interface BackgroundLinesProps {
    options: Required<SignalLinesOptions>
}

function BackgroundLines({ options }: BackgroundLinesProps) {
    const linesRef = useRef<THREE.Group>(null)

    const lineObjects = useMemo(() => {
        const arr: THREE.Line[] = []
        for (let i = 0; i < options.lineCount; i++) {
            const geometry = new THREE.BufferGeometry()
            const positions = new Float32Array(SEGMENT_COUNT * 3)
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            const material = new THREE.LineBasicMaterial({
                color: options.colorLine,
                transparent: true,
                opacity: options.lineOpacity,
                depthWrite: false
            })
            const line = new THREE.Line(geometry, material)
            line.userData = { id: i }
            arr.push(line)
        }
        return arr
    }, [options.lineCount, options.colorLine, options.lineOpacity])

    useEffect(() => {
        if (linesRef.current) {
            while (linesRef.current.children.length > 0) {
                linesRef.current.remove(linesRef.current.children[0])
            }
            lineObjects.forEach(line => linesRef.current?.add(line))
        }
        return () => {
            lineObjects.forEach(line => {
                line.geometry.dispose()
                    ; (line.material as THREE.Material).dispose()
            })
        }
    }, [lineObjects])

    useFrame((state) => {
        const time = state.clock.elapsedTime
        lineObjects.forEach((line) => {
            const positions = line.geometry.attributes.position.array as Float32Array
            const lineId = line.userData.id as number
            for (let j = 0; j < SEGMENT_COUNT; j++) {
                const t = j / (SEGMENT_COUNT - 1)
                const vec = getPathPoint(t, lineId, options.lineCount, time, options)
                positions[j * 3] = vec.x
                positions[j * 3 + 1] = vec.y
                positions[j * 3 + 2] = vec.z
            }
            line.geometry.attributes.position.needsUpdate = true
        })
    })

    return <group ref={linesRef} />
}

// --- SIGNALS COMPONENT ---
interface Signal {
    mesh: THREE.Line
    laneIndex: number
    speed: number
    progress: number
    history: THREE.Vector3[]
    assignedColor: THREE.Color
}

interface SignalsProps {
    options: Required<SignalLinesOptions>
}

function Signals({ options }: SignalsProps) {
    const signalsRef = useRef<Signal[]>([])
    const groupRef = useRef<THREE.Group>(null)

    const signalColors = useMemo(() => ({
        color1: new THREE.Color(options.colorSignal),
        color2: new THREE.Color(options.colorSignal2),
        color3: new THREE.Color(options.colorSignal3)
    }), [options.colorSignal, options.colorSignal2, options.colorSignal3])

    const pickSignalColor = () => {
        // Use colorSignal as main, optionally add color2/color3 if enabled
        const choices = [new THREE.Color(options.colorLine)]  // Always use line color
        if (options.useColor2) choices.push(signalColors.color2)
        if (options.useColor3) choices.push(signalColors.color3)
        return choices[Math.floor(Math.random() * choices.length)].clone()
    }

    useEffect(() => {
        if (!groupRef.current) return

        signalsRef.current.forEach(sig => {
            groupRef.current?.remove(sig.mesh)
            sig.mesh.geometry.dispose()
        })
        signalsRef.current = []

        for (let i = 0; i < options.signalCount; i++) {
            const geometry = new THREE.BufferGeometry()
            const positions = new Float32Array(MAX_TRAIL * 3)
            const colors = new Float32Array(MAX_TRAIL * 3)

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

            const material = new THREE.LineBasicMaterial({
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                depthTest: false,
                transparent: true
            })

            const mesh = new THREE.Line(geometry, material)
            mesh.frustumCulled = false
            mesh.renderOrder = 1
            groupRef.current.add(mesh)

            signalsRef.current.push({
                mesh,
                laneIndex: Math.floor(Math.random() * options.lineCount),
                speed: 0.2 + Math.random() * 0.5,
                progress: Math.random(),
                history: [],
                assignedColor: pickSignalColor()
            })
        }

        return () => {
            signalsRef.current.forEach(sig => {
                sig.mesh.geometry.dispose()
                    ; (sig.mesh.material as THREE.Material).dispose()
            })
        }
    }, [options.signalCount, options.lineCount])

    useFrame((state) => {
        const time = state.clock.elapsedTime

        signalsRef.current.forEach(sig => {
            sig.progress += sig.speed * 0.005 * options.speedGlobal

            if (sig.progress > 1.0) {
                sig.progress = 0
                sig.laneIndex = Math.floor(Math.random() * options.lineCount)
                sig.history = []
                sig.assignedColor = pickSignalColor()
            }

            const pos = getPathPoint(sig.progress, sig.laneIndex, options.lineCount, time, options)
            sig.history.push(pos.clone())

            if (sig.history.length > options.trailLength + 1) {
                sig.history.shift()
            }

            const positions = sig.mesh.geometry.attributes.position.array as Float32Array
            const colors = sig.mesh.geometry.attributes.color.array as Float32Array

            const drawCount = Math.max(1, options.trailLength)
            const currentLen = sig.history.length

            for (let i = 0; i < drawCount; i++) {
                let index = currentLen - 1 - i
                if (index < 0) index = 0

                const p = sig.history[index] || new THREE.Vector3()

                positions[i * 3] = p.x
                positions[i * 3 + 1] = p.y
                positions[i * 3 + 2] = p.z

                let alpha = 1
                if (options.trailLength > 0) {
                    alpha = Math.max(0, 1 - i / options.trailLength)
                }

                colors[i * 3] = sig.assignedColor.r * alpha
                colors[i * 3 + 1] = sig.assignedColor.g * alpha
                colors[i * 3 + 2] = sig.assignedColor.b * alpha
            }

            sig.mesh.geometry.setDrawRange(0, drawCount)
            sig.mesh.geometry.attributes.position.needsUpdate = true
            sig.mesh.geometry.attributes.color.needsUpdate = true
        })
    })

    return <group ref={groupRef} />
}

// --- SCENE CONTENT ---
interface SceneContentProps {
    options: Required<SignalLinesOptions>
}

function SceneContent({ options }: SceneContentProps) {
    const groupRef = useRef<THREE.Group>(null)
    const { scene, gl } = useThree()

    useEffect(() => {
        // Properly toggle background based on transparent option
        if (options.transparent) {
            scene.background = null
            scene.fog = null
            gl.setClearColor(0x000000, 0) // Fully transparent clear
        } else {
            scene.background = new THREE.Color(options.colorBg)
            scene.fog = new THREE.FogExp2(options.colorBg, 0.002)
            gl.setClearColor(options.colorBg, 1) // Opaque clear
        }
    }, [options.colorBg, options.transparent, scene, gl])

    const posX = useMemo(() => {
        const autoCenter = (options.curveLength - options.straightLength) / 2
        return options.positionX + autoCenter
    }, [options.positionX, options.curveLength, options.straightLength])

    return (
        <group
            ref={groupRef}
            position={[posX, options.positionY, 0]}
            rotation={[0, 0, THREE.MathUtils.degToRad(options.globalRotation)]}
        >
            <BackgroundLines options={options} />
            <Signals options={options} />
        </group>
    )
}

// --- MAIN COMPONENT ---
interface SignalLinesProps {
    className?: string
    height?: string | number
    width?: string | number
    options?: SignalLinesOptions
}

export default function SignalLines({
    className,
    height = "100%",
    width = "100%",
    options = {}
}: SignalLinesProps) {
    const mergedOptions: Required<SignalLinesOptions> = { ...defaultOptions, ...options }

    return (
        <div
            className={className}
            style={{
                width,
                height,
                minHeight: 300,
                position: 'relative',
                overflow: 'hidden',
                background: mergedOptions.transparent ? 'transparent' : mergedOptions.colorBg
            }}
        >
            <Canvas
                key={`canvas-${mergedOptions.transparent}`}
                style={{ width: '100%', height: '100%', background: 'transparent' }}
                camera={{ position: [0, 0, 90], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    premultipliedAlpha: false,
                    preserveDrawingBuffer: true
                }}
                dpr={[1, 2]}
            >
                <SceneContent options={mergedOptions} />
                {/* Skip bloom when transparent to avoid opaque render targets */}
                {!mergedOptions.transparent && (
                    <EffectComposer>
                        <Bloom
                            intensity={mergedOptions.bloomStrength}
                            luminanceThreshold={0}
                            luminanceSmoothing={0.9}
                            radius={mergedOptions.bloomRadius}
                        />
                    </EffectComposer>
                )}
            </Canvas>
        </div>
    )
}

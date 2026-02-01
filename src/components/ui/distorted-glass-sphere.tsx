"use client"

import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei"
import * as THREE from "three"

// Only import if you want to support arbitrary props or styling on the wrapper
import { cn } from "@/lib/utils"

interface DistortedGlassSphereProps {
    className?: string
    color?: string
    distort?: number
    speed?: number
    cursorFollow?: boolean
    roughness?: number
    metalness?: number
    transmission?: number
    ior?: number
    thickness?: number
    chromaticAberration?: number
    scale?: number
    environmentPreset?: "apartment" | "city" | "dawn" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse" | "none"
    environmentFiles?: string
}

const Sphere = ({
    color = "#1a1a1a",
    distort = 0.4,
    speed = 2,
    cursorFollow = false,
    roughness = 0,
    metalness = 1,
    transmission = 0,
    ior = 1.2,
    thickness = 0,
    chromaticAberration = 0,
    scale = 2
}: DistortedGlassSphereProps) => {
    const mesh = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!mesh.current) return
        const t = state.clock.getElapsedTime()

        // Gentle rotation
        mesh.current.rotation.x = t * 0.2
        mesh.current.rotation.y = t * 0.3

        if (cursorFollow) {
            // Mouse follow effect (subtle)
            const mouseX = state.mouse.x * 0.5
            const mouseY = state.mouse.y * 0.5
            mesh.current.rotation.x += (mouseY - mesh.current.rotation.x) * 0.05
            mesh.current.rotation.y += (mouseX - mesh.current.rotation.y) * 0.05
        }
    })

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} scale={scale} frustumCulled={false}>
                <icosahedronGeometry args={[1, 12]} />
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={metalness}
                    roughness={roughness}
                    transmission={transmission}
                    ior={ior}
                    thickness={thickness}
                    chromaticAberration={chromaticAberration}
                    distort={distort}
                    speed={speed}
                />
            </mesh>
        </Float>
    )
}

export function DistortedGlassSphere({
    className,
    color,
    distort,
    speed,
    cursorFollow,
    roughness,
    metalness,
    transmission,
    ior,
    thickness,
    chromaticAberration,
    scale = 2,
    environmentPreset = "city",
    environmentFiles
}: DistortedGlassSphereProps) {
    const isStatic = environmentPreset === "none" && !environmentFiles
    const effectiveTransmission = transmission ?? (isStatic ? 1 : 0)
    const effectiveMetalness = metalness ?? (isStatic ? 0 : 1)

    return (
        <div className={cn("h-screen w-full", className)}>
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Sphere
                    color={color}
                    distort={distort}
                    speed={speed}
                    cursorFollow={cursorFollow}
                    roughness={roughness}
                    metalness={effectiveMetalness}
                    transmission={effectiveTransmission}
                    ior={ior}
                    thickness={thickness}
                    chromaticAberration={chromaticAberration}
                    scale={scale} // Pass the scale prop
                />

                {environmentFiles ? (
                    <Environment files={environmentFiles} />
                ) : environmentPreset && environmentPreset !== "none" ? (
                    <Environment preset={environmentPreset as any} />
                ) : null}
            </Canvas>
        </div>
    )
}

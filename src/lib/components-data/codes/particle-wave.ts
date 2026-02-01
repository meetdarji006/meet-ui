export const particleWaveCode = {
    react: `"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { cn } from '@/lib/utils'

function Wave({ color = "#4f46e5", speed = 1, amplitude = 1 }) {
    const points = useRef<THREE.Points>(null)

    // Generate grid of points
    const count = 100 // 100x100 grid
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * count * 3)
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const x = (i - count / 2) * 0.3 // Increased spread
                const z = (j - count / 2) * 0.3 // Increased spread
                const y = 0

                const index = (i * count + j) * 3
                positions[index] = x
                positions[index + 1] = y
                positions[index + 2] = z
            }
        }
        return positions
    }, [])

    useFrame((state) => {
        if (!points.current) return
        const time = state.clock.getElapsedTime() * speed
        const positions = points.current.geometry.attributes.position.array as Float32Array

        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const index = (i * count + j) * 3
                const x = positions[index]
                const z = positions[index + 2]

                // Classic sine wave formula
                positions[index + 1] = Math.sin(x * 0.5 + time) * Math.cos(z * 0.5 + time) * amplitude
            }
        }
        points.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color={color}
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    )
}

interface ParticleWaveProps {
    className?: string
    color?: string
    speed?: number
    amplitude?: number
}

export function ParticleWave({ className, color, speed, amplitude }: ParticleWaveProps) {
    return (
        <div className={cn("w-full h-[600px]", className)}>
            <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <Wave color={color} speed={speed} amplitude={amplitude} />
            </Canvas>
        </div>
    )
}`
}

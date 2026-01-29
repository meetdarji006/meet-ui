"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function ConnectedNet() {
    const lineGeo = useRef<THREE.Group>(null!)

    useFrame((state) => {
        if (lineGeo.current) {
            lineGeo.current.rotation.y = state.clock.getElapsedTime() * 0.1
        }
    })

    // Create curves that look like the globe in the reference
    // The reference has lines starting from a top pole and draping down
    return (
        <group ref={lineGeo} position={[0, -0.5, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                {/* Main Longitude Lines */}
                {[...Array(12)].map((_, i) => (
                    <mesh key={`long-${i}`} rotation={[0, (Math.PI / 6) * i, 0]}>
                        <torusGeometry args={[5.5, 0.015, 16, 100]} />
                        <meshBasicMaterial color="#4f46e5" opacity={0.6} transparent />
                    </mesh>
                ))}

                {/* Secondary Cross/Latitude Lines at an angle to create the 'net' effect */}
                {[...Array(8)].map((_, i) => (
                    <mesh key={`lat-${i}`} rotation={[Math.PI / 3, 0, (Math.PI / 4) * i]}>
                        <torusGeometry args={[5.6, 0.01, 16, 100]} />
                        <meshBasicMaterial color="#6366f1" opacity={0.3} transparent />
                    </mesh>
                ))}
            </Float>
        </group>
    )
}

function FloatingParticles() {
    // Add subtle floating specs like in the reference background
    const particles = useRef<THREE.Group>(null!)
    useFrame((state) => {
        if (particles.current) {
            particles.current.rotation.y = state.clock.getElapsedTime() * 0.05
        }
    })

    return (
        <group ref={particles}>
            {[...Array(20)].map((_, i) => {
                // Deterministic random-like positions to avoid hydration mismatch
                const x = Math.sin(i * 1324) * 8
                const y = Math.cos(i * 2354) * 5
                const z = Math.sin(i * 5443) * 5
                return (
                    <mesh key={i} position={[x, y, z]}>
                        <sphereGeometry args={[0.03, 8, 8]} />
                        <meshBasicMaterial color="#818cf8" transparent opacity={0.6} />
                    </mesh>
                )
            })}
        </group>
    )
}

export function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 22], fov: 40 }}>
                <ambientLight intensity={0.5} />

                <ConnectedNet />
                <FloatingParticles />

                <fog attach="fog" args={['#0d1021', 10, 40]} />
            </Canvas>
        </div>
    )
}

// Auto-generated from cursor-trail.tsx
// Run: npm run generate-codes

export const cursorTrailCodeTS = `"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    color: string
    createdAt: number
}

interface CursorTrailProps {
    /** Number of particles in the trail */
    particleCount?: number
    /** Size range of particles [min, max] */
    particleSize?: [number, number]
    /** Colors for particles (will cycle through) */
    colors?: string[]
    /** How long particles live in ms */
    particleLifetime?: number
    /** Minimum distance to spawn new particle */
    minDistance?: number
    /** Whether the component is enabled */
    enabled?: boolean
}

export const CursorTrail = ({
    particleCount = 20,
    particleSize = [5, 15],
    colors = ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe"],
    particleLifetime = 800,
    minDistance = 10,
    enabled = true,
}: CursorTrailProps) => {
    const [particles, setParticles] = useState<Particle[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const lastPosRef = useRef({ x: 0, y: 0 })
    const idCounterRef = useRef(0)
    const colorIndexRef = useRef(0)

    const getRandomSize = useCallback(() => {
        return Math.random() * (particleSize[1] - particleSize[0]) + particleSize[0]
    }, [particleSize])

    const getNextColor = useCallback(() => {
        const color = colors[colorIndexRef.current % colors.length]
        colorIndexRef.current++
        return color
    }, [colors])

    const getDistance = useCallback((x1: number, y1: number, x2: number, y2: number) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }, [])

    useEffect(() => {
        if (!enabled) return

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e

            if (!isVisible) setIsVisible(true)

            const distance = getDistance(
                lastPosRef.current.x,
                lastPosRef.current.y,
                clientX,
                clientY
            )

            if (distance >= minDistance) {
                lastPosRef.current = { x: clientX, y: clientY }

                const newParticle: Particle = {
                    id: idCounterRef.current++,
                    x: clientX,
                    y: clientY,
                    size: getRandomSize(),
                    color: getNextColor(),
                    createdAt: Date.now(),
                }

                setParticles((prev) => {
                    const filtered = prev.slice(-(particleCount - 1))
                    return [...filtered, newParticle]
                })
            }
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [enabled, minDistance, particleCount, getDistance, getRandomSize, getNextColor, isVisible])

    // Clean up old particles
    useEffect(() => {
        if (!enabled) return

        const cleanup = setInterval(() => {
            const now = Date.now()
            setParticles((prev) =>
                prev.filter((p) => now - p.createdAt < particleLifetime)
            )
        }, 50)

        return () => clearInterval(cleanup)
    }, [enabled, particleLifetime])

    if (!enabled || !isVisible) return null

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
                overflow: "hidden",
            }}
        >
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{
                            scale: 1,
                            opacity: 0.9,
                            x: particle.x - particle.size / 2,
                            y: particle.y - particle.size / 2,
                        }}
                        animate={{
                            scale: 0.2,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: particleLifetime / 1000,
                            ease: "easeOut",
                        }}
                        style={{
                            position: "absolute",
                            width: particle.size,
                            height: particle.size,
                            borderRadius: "50%",
                            backgroundColor: particle.color,
                            boxShadow: \`0 0 \${particle.size * 2}px \${particle.color}, 0 0 \${particle.size * 4}px \${particle.color}50\`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}
`

export const cursorTrailCodeJS = `"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const CursorTrail = ({ particleCount = 20, particleSize = [5, 15], colors = ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe"], particleLifetime = 800, minDistance = 10, enabled = true, }) => {
    const [particles, setParticles] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const lastPosRef = useRef({ x: 0, y: 0 });
    const idCounterRef = useRef(0);
    const colorIndexRef = useRef(0);
    const getRandomSize = useCallback(() => {
        return Math.random() * (particleSize[1] - particleSize[0]) + particleSize[0];
    }, [particleSize]);
    const getNextColor = useCallback(() => {
        const color = colors[colorIndexRef.current % colors.length];
        colorIndexRef.current++;
        return color;
    }, [colors]);
    const getDistance = useCallback((x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }, []);
    useEffect(() => {
        if (!enabled)
            return;
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (!isVisible)
                setIsVisible(true);
            const distance = getDistance(lastPosRef.current.x, lastPosRef.current.y, clientX, clientY);
            if (distance >= minDistance) {
                lastPosRef.current = { x: clientX, y: clientY };
                const newParticle = {
                    id: idCounterRef.current++,
                    x: clientX,
                    y: clientY,
                    size: getRandomSize(),
                    color: getNextColor(),
                    createdAt: Date.now(),
                };
                setParticles((prev) => {
                    const filtered = prev.slice(-(particleCount - 1));
                    return [...filtered, newParticle];
                });
            }
        };
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [enabled, minDistance, particleCount, getDistance, getRandomSize, getNextColor, isVisible]);
    // Clean up old particles
    useEffect(() => {
        if (!enabled)
            return;
        const cleanup = setInterval(() => {
            const now = Date.now();
            setParticles((prev) => prev.filter((p) => now - p.createdAt < particleLifetime));
        }, 50);
        return () => clearInterval(cleanup);
    }, [enabled, particleLifetime]);
    if (!enabled || !isVisible)
        return null;
    return (<div style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9999,
            overflow: "hidden",
        }}>
            <AnimatePresence>
                {particles.map((particle) => (<motion.div key={particle.id} initial={{
                scale: 1,
                opacity: 0.9,
                x: particle.x - particle.size / 2,
                y: particle.y - particle.size / 2,
            }} animate={{
                scale: 0.2,
                opacity: 0,
            }} exit={{ opacity: 0 }} transition={{
                duration: particleLifetime / 1000,
                ease: "easeOut",
            }} style={{
                position: "absolute",
                width: particle.size,
                height: particle.size,
                borderRadius: "50%",
                backgroundColor: particle.color,
                boxShadow: \`0 0 \${particle.size * 2}px \${particle.color}, 0 0 \${particle.size * 4}px \${particle.color}50\`,
            }}/>))}
            </AnimatePresence>
        </div>);
};
`

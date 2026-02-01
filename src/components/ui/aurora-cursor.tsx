"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AuroraCursorProps {
    /** Size of the aurora effect */
    size?: number
    /** Smoothing factor (0-1) */
    smoothing?: number
    /** Whether the component is enabled */
    enabled?: boolean
}

export const AuroraCursor = ({
    size = 100,
    smoothing = 0.12,
    enabled = true,
}: AuroraCursorProps) => {
    const [position, setPosition] = useState({ x: -500, y: -500 })
    const [isVisible, setIsVisible] = useState(false)
    const targetRef = useRef({ x: -500, y: -500 })
    const currentRef = useRef({ x: -500, y: -500 })
    const frameRef = useRef<number | null>(null)
    const timeRef = useRef(0)

    useEffect(() => {
        if (!enabled) return

        const animate = () => {
            timeRef.current += 0.02
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * smoothing
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * smoothing

            setPosition({ ...currentRef.current })
            frameRef.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true)
            targetRef.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)
        frameRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [enabled, smoothing, isVisible])

    if (!enabled) return null

    const layers = [
        {
            colors: ['#667eea', '#764ba2', '#6B8DD6'],
            blur: 80,
            scale: 1,
            rotation: 0,
            animationDuration: 8,
        },
        {
            colors: ['#f093fb', '#f5576c', '#4facfe'],
            blur: 60,
            scale: 0.8,
            rotation: 60,
            animationDuration: 10,
        },
        {
            colors: ['#43e97b', '#38f9d7', '#667eea'],
            blur: 50,
            scale: 0.6,
            rotation: 120,
            animationDuration: 12,
        },
    ]

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
            {layers.map((layer, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isVisible ? 0.6 - index * 0.1 : 0,
                        scale: isVisible ? layer.scale : 0.5,
                        rotate: [layer.rotation, layer.rotation + 360],
                    }}
                    transition={{
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                        rotate: {
                            duration: layer.animationDuration,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                    style={{
                        position: "absolute",
                        left: position.x - size / 2,
                        top: position.y - size / 2,
                        width: size,
                        height: size,
                        borderRadius: "50%",
                        background: `conic-gradient(from 0deg, ${layer.colors[0]}, ${layer.colors[1]}, ${layer.colors[2]}, ${layer.colors[0]})`,
                        filter: `blur(${layer.blur}px)`,
                        mixBlendMode: "screen",
                    }}
                />
            ))}

            {/* Center glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isVisible ? 0.8 : 0,
                    scale: isVisible ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    left: position.x - size * 0.15,
                    top: position.y - size * 0.15,
                    width: size * 0.3,
                    height: size * 0.3,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    )
}

"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Ripple {
    id: number
    x: number
    y: number
    createdAt: number
}

interface ClickRippleProps {
    /** Size of the ripple at full expansion */
    rippleSize?: number
    /** Duration of ripple animation in ms */
    duration?: number
    /** Color of the ripple */
    color?: string
    /** Whether the component is enabled */
    enabled?: boolean
}

export const ClickRipple = ({
    rippleSize = 400,
    duration = 800,
    color = "#667eea",
    enabled = true,
}: ClickRippleProps) => {
    const [ripples, setRipples] = useState<Ripple[]>([])
    const [idCounter, setIdCounter] = useState(0)

    const handleClick = useCallback((e: MouseEvent) => {
        const newRipple: Ripple = {
            id: idCounter,
            x: e.clientX,
            y: e.clientY,
            createdAt: Date.now(),
        }

        setIdCounter(prev => prev + 1)
        setRipples(prev => [...prev, newRipple])

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id))
        }, duration + 100)
    }, [idCounter, duration])

    useEffect(() => {
        if (!enabled) return

        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [enabled, handleClick])

    if (!enabled) return null

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
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{
                            scale: 0,
                            opacity: 0.6,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: duration / 1000,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{
                            position: "absolute",
                            left: ripple.x - rippleSize / 2,
                            top: ripple.y - rippleSize / 2,
                            width: rippleSize,
                            height: rippleSize,
                            borderRadius: "50%",
                            border: `2px solid ${color}`,
                            boxShadow: `0 0 20px ${color}60, inset 0 0 20px ${color}30`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

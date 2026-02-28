"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TiltTag {
    id: string
    text: string
    // Optional custom colors
    color?: string
    bgColor?: string
    // Base visual styling
    theme?: "dark" | "light"
    // Layout positioning via left/top or absolute values
    x: string | number
    y: string | number
    // Baseline rotation of the tag before 3D tilt
    rotate?: number
    // The depth magnitude (creates the parallex effect during tilt)
    z?: number
}

export interface FloatingTiltTagsProps {
    tags: TiltTag[]
    className?: string
    // Intensity of the 3D tilt effect
    tiltMagnitude?: number
}

export function FloatingTiltTags({
    tags,
    className,
    tiltMagnitude = 20 // Max degrees of rotation
}: FloatingTiltTagsProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [bounds, setBounds] = useState({ width: 0, height: 0, left: 0, top: 0 })

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth physics for the tilt
    const springConfig = { damping: 20, stiffness: 100, mass: 1 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    // Map normalized mouse coordinates [-0.5, 0.5] to rotation degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], [tiltMagnitude, -tiltMagnitude])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltMagnitude, tiltMagnitude])

    useEffect(() => {
        // Measure container for accurate center-point calculation on mouse move
        if (!containerRef.current) return
        const updateBounds = () => {
            setBounds(containerRef.current!.getBoundingClientRect())
        }
        updateBounds()
        window.addEventListener("resize", updateBounds)
        return () => window.removeEventListener("resize", updateBounds)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!bounds.width || !bounds.height) return

        // Calculate mouse position relative to container
        const localX = e.clientX - bounds.left
        const localY = e.clientY - bounds.top

        // Normalize to [-0.5, 0.5] from container center
        const normalizedX = (localX / bounds.width) - 0.5
        const normalizedY = (localY / bounds.height) - 0.5

        mouseX.set(normalizedX)
        mouseY.set(normalizedY)
    }

    const handleMouseLeave = () => {
        // Snap back to 0 tilt gracefully when mouse leaves
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative flex items-center justify-center overflow-hidden perspective-distant",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative w-full h-full flex items-center justify-center preserve-3d"
                style={{
                    rotateX,
                    rotateY,
                    // transformStyle needed for children translateZ to work
                    transformStyle: "preserve-3d"
                }}
            >
                {tags.map((tag, index) => {
                    const isDark = tag.theme === "dark" || !tag.theme
                    // Calculate a deterministic Z-depth so tags don't clip through each other.
                    // Tags higher in the array sit "higher" physically on the Z axis.
                    const dynamicZ = tag.z !== undefined ? tag.z : (index * 15)

                    return (
                        <div
                            key={tag.id}
                            className="absolute"
                            style={{
                                left: tag.x,
                                top: tag.y,
                                transform: `translate(-50%, -50%) translateZ(${dynamicZ}px) rotate(${tag.rotate || 0}deg)`,
                            }}
                        >
                            <motion.div
                                animate={{ y: index % 2 === 0 ? ["-4px", "4px"] : ["4px", "-4px"] }}
                                transition={{
                                    duration: 3 + (index % 3) * 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                                className={cn(
                                    "font-semibold tracking-tight px-4 py-2 text-2xl md:text-5xl shadow-lg select-none whitespace-nowrap",
                                    !tag.bgColor && !tag.color && (
                                        isDark
                                            ? "bg-[#2A2929] text-[#FBF3D4] border border-[#FBF3D4]/10"
                                            : "bg-[#FBF3D4] text-[#2A2929] border border-[#2A2929]/10"
                                    )
                                )}
                                style={{
                                    ...(tag.bgColor ? { backgroundColor: tag.bgColor } : {}),
                                    ...(tag.color ? { color: tag.color } : {}),
                                }}
                            >
                                {tag.text}
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

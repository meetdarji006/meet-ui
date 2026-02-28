"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ZajnoTextHoverProps {
    text: string
    slices?: number
    className?: string
    textClassName?: string
    displacement?: number // Max pixels to move up/down
    displacementX?: number // Max pixels to move left/right
    activationDistance?: number // How close the mouse needs to be to affect a slice
}

export const ZajnoTextHover = ({
    text,
    slices = 20,
    className,
    textClassName,
    displacement = 40,
    displacementX = 10,
    activationDistance = 150,
}: ZajnoTextHoverProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(-1000)
    const [isHovered, setIsHovered] = useState(false)

    // Using a softer spring for smoother trailing of the "glitch" and returning to rest
    const smoothMouseX = useSpring(mouseX, { damping: 40, stiffness: 150 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        // We don't snap mouseX to -1000 anymore.
        // We let isHovered gently animate the displacement down to 0 inside the Slice component.
    }

    // Pre-calculate slice percentages
    const sliceWidthPercent = 100 / slices

    return (
        <div
            ref={containerRef}
            className={cn("relative inline-block overflow-hidden", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "default" }}
        >
            {/* Base Text (Invisible, just for sizing the container properly) */}
            <span
                className={cn(
                    "invisible opacity-0 select-none",
                    textClassName
                )}
            >
                {text}
            </span>

            {/* Sliced Overlay Text */}
            <div className="absolute inset-0 flex w-full h-full pointer-events-none">
                {Array.from({ length: slices }).map((_, i) => {
                    // For each slice, calculate its center X position percentage
                    const sliceCenterXPercent = (i + 0.5) * sliceWidthPercent

                    return (
                        <Slice
                            key={i}
                            index={i}
                            text={text}
                            textClassName={textClassName}
                            sliceWidthPercent={sliceWidthPercent}
                            sliceCenterXPercent={sliceCenterXPercent}
                            smoothMouseX={smoothMouseX}
                            isHovered={isHovered}
                            displacement={displacement}
                            displacementX={displacementX}
                            activationDistance={activationDistance}
                            containerRef={containerRef}
                        />
                    )
                })}
            </div>
        </div>
    )
}

// Inner component for each vertical slice to compute its own transform
const Slice = ({
    index,
    text,
    textClassName,
    sliceWidthPercent,
    sliceCenterXPercent,
    smoothMouseX,
    isHovered,
    displacement,
    displacementX,
    activationDistance,
    containerRef
}: {
    index: number
    text: string
    textClassName?: string
    sliceWidthPercent: number
    sliceCenterXPercent: number
    smoothMouseX: any
    isHovered: boolean
    displacement: number
    displacementX: number
    activationDistance: number
    containerRef: React.RefObject<HTMLDivElement | null>
}) => {
    const [sliceCenterX, setSliceCenterX] = useState(0)

    useEffect(() => {
        // Calculate the absolute pixel center of this slice for distance math
        const calculateCenter = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth
                setSliceCenterX((sliceCenterXPercent / 100) * width)
            }
        }

        calculateCenter()
        window.addEventListener("resize", calculateCenter)
        return () => window.removeEventListener("resize", calculateCenter)
    }, [containerRef, sliceCenterXPercent])

    // Calculate how far this specific slice is from the mouse pointer dynamically
    const distanceToMouse = useTransform(smoothMouseX, (currentMouseX: number) => {
        if (!isHovered) return activationDistance // Force it to act like it's outside the radius when not hovered
        return Math.abs(currentMouseX - sliceCenterX)
    })

    // Spring the distance so that when isHovered changes, the text gracefully returns to center
    const smoothDistance = useSpring(distanceToMouse, { damping: 40, stiffness: 150 })

    const yTransform = useTransform(smoothDistance, (dist: number) => {
        // If the mouse is within the activation radius, displace it!
        if (dist < activationDistance) {
            // Normalized distance from 0 to 1 (0 is exactly on cursor, 1 is at the edge of activation)
            const normalizedDistance = dist / activationDistance
            // We want maximum displacement at the center (0), fading to 0 displacement at the edges (1)
            const intensity = 1 - normalizedDistance

            // To make it look like a glitch rather than a smooth wave, we map the displacement direction alternately
            // based on the slice index (even goes up, odd goes down)
            const direction = index % 2 === 0 ? -1 : 1

            return intensity * displacement * direction
        }
        return 0
    })

    const xTransform = useTransform(smoothDistance, (dist: number) => {
        if (dist < activationDistance) {
            const normalizedDistance = dist / activationDistance
            const intensity = 1 - normalizedDistance
            // Alternate horizontal direction differently than vertical (e.g. based on index modulo 3) to add chaos
            const direction = index % 3 === 0 ? -1 : 1
            return intensity * displacementX * direction
        }
        return 0
    })

    return (
        <div
            className="h-full overflow-hidden relative"
            style={{ width: `${sliceWidthPercent}%` }}
        >
            <motion.div
                style={{ y: yTransform, x: xTransform }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
            >
                <span
                    className={cn(
                        "absolute transform origin-left whitespace-nowrap",
                        textClassName
                    )}
                    style={{
                        // The critical trick: Offset the inner text to the left by exactly this slice's horizontal starting position
                        // This makes the text segment inside the hidden overflow align perfectly as if it was one continuous string
                        left: `-${index * 100}%`
                    }}
                >
                    {text}
                </span>
            </motion.div>
        </div>
    )
}

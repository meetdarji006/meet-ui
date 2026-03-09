// Auto-generated from cursor-spotlight.tsx
// Run: npm run generate-codes

export const cursorSpotlightCodeTS = `"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CursorSpotlightProps {
    /** Size of the spotlight circle in pixels */
    spotlightSize?: number
    /** Color of the spotlight glow */
    glowColor?: string
    /** Intensity of the glow (0-1) */
    glowIntensity?: number
    /** Smoothing factor for cursor following (0-1) */
    smoothing?: number
    /** Whether the spotlight is enabled */
    enabled?: boolean
    /** Additional class name for the container */
    className?: string
    /** Children to render inside the spotlight container */
    children?: React.ReactNode
}

interface Position {
    x: number
    y: number
}

export const CursorSpotlight = ({
    spotlightSize = 300,
    glowColor = "#667eea",
    glowIntensity = 0.4,
    smoothing = 0.15,
    enabled = true,
    className,
    children,
}: CursorSpotlightProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState<Position>({ x: -1000, y: -1000 })
    const [isInside, setIsInside] = useState(false)
    const targetRef = useRef<Position>({ x: -1000, y: -1000 })
    const currentRef = useRef<Position>({ x: -1000, y: -1000 })
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        if (!enabled || !containerRef.current) return

        const container = containerRef.current

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            targetRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        const handleMouseEnter = () => setIsInside(true)
        const handleMouseLeave = () => {
            setIsInside(false)
            targetRef.current = { x: -1000, y: -1000 }
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseenter", handleMouseEnter)
        container.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseenter", handleMouseEnter)
            container.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [enabled])

    useEffect(() => {
        if (!enabled) return

        const animate = () => {
            const target = targetRef.current
            const current = currentRef.current

            currentRef.current = {
                x: current.x + (target.x - current.x) * smoothing,
                y: current.y + (target.y - current.y) * smoothing,
            }

            setPosition({ ...currentRef.current })
            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [enabled, smoothing])

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden", className)}
        >
            {/* Spotlight gradient overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: isInside
                        ? \`radial-gradient(circle \${spotlightSize}px at \${position.x}px \${position.y}px,
                            \${glowColor}\${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')},
                            transparent 70%)\`
                        : "transparent",
                    opacity: isInside ? 1 : 0,
                }}
            />

            {/* Border glow effect */}
            <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
                style={{
                    background: isInside
                        ? \`radial-gradient(circle \${spotlightSize * 0.8}px at \${position.x}px \${position.y}px,
                            \${glowColor}20,
                            transparent 50%)\`
                        : "transparent",
                    opacity: isInside ? 1 : 0,
                }}
            />

            {/* Content */}
            <div className="relative z-0">
                {children}
            </div>
        </div>
    )
}
`

export const cursorSpotlightCodeJS = `"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
export const CursorSpotlight = ({ spotlightSize = 300, glowColor = "#667eea", glowIntensity = 0.4, smoothing = 0.15, enabled = true, className, children, }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: -1000, y: -1000 });
    const [isInside, setIsInside] = useState(false);
    const targetRef = useRef({ x: -1000, y: -1000 });
    const currentRef = useRef({ x: -1000, y: -1000 });
    const frameRef = useRef(null);
    useEffect(() => {
        if (!enabled || !containerRef.current)
            return;
        const container = containerRef.current;
        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            targetRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };
        const handleMouseEnter = () => setIsInside(true);
        const handleMouseLeave = () => {
            setIsInside(false);
            targetRef.current = { x: -1000, y: -1000 };
        };
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [enabled]);
    useEffect(() => {
        if (!enabled)
            return;
        const animate = () => {
            const target = targetRef.current;
            const current = currentRef.current;
            currentRef.current = {
                x: current.x + (target.x - current.x) * smoothing,
                y: current.y + (target.y - current.y) * smoothing,
            };
            setPosition({ ...currentRef.current });
            frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [enabled, smoothing]);
    return (<div ref={containerRef} className={cn("relative overflow-hidden", className)}>
            {/* Spotlight gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300" style={{
            background: isInside
                ? \`radial-gradient(circle \${spotlightSize}px at \${position.x}px \${position.y}px,
                            \${glowColor}\${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')},
                            transparent 70%)\`
                : "transparent",
            opacity: isInside ? 1 : 0,
        }}/>

            {/* Border glow effect */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300" style={{
            background: isInside
                ? \`radial-gradient(circle \${spotlightSize * 0.8}px at \${position.x}px \${position.y}px,
                            \${glowColor}20,
                            transparent 50%)\`
                : "transparent",
            opacity: isInside ? 1 : 0,
        }}/>

            {/* Content */}
            <div className="relative z-0">
                {children}
            </div>
        </div>);
};
`

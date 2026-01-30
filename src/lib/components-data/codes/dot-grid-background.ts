// Auto-generated from dot-grid-background.tsx
// Run: npm run generate-codes

export const dotGridBackgroundCodeTS = `"use client"

import React, { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DotGridBackgroundProps {
    children?: React.ReactNode
    className?: string
    dotColor?: string
    glowColor?: string
    dotSize?: number
    gap?: number
    glowRadius?: number
}

export const DotGridBackground = ({
    children,
    className,
    dotColor = "rgba(255, 255, 255, 0.2)",
    glowColor = "#667eea",
    dotSize = 2,
    gap = 24,
    glowRadius = 150,
}: DotGridBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }, [])

    const handleMouseLeave = useCallback(() => {
        setMousePosition({ x: -1000, y: -1000 })
    }, [])

    // Generate dots
    const dots = []
    const cols = Math.ceil(400 / gap)
    const rows = Math.ceil(300 / gap)

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * gap + gap / 2
            const y = row * gap + gap / 2
            const distance = Math.sqrt(
                Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
            )
            const isNear = distance < glowRadius
            const intensity = isNear ? 1 - distance / glowRadius : 0

            dots.push(
                <motion.circle
                    key={\`\${row}-\${col}\`}
                    cx={x}
                    cy={y}
                    r={dotSize + intensity * 2}
                    fill={isNear ? glowColor : dotColor}
                    animate={{
                        opacity: isNear ? 0.5 + intensity * 0.5 : 0.3,
                        scale: isNear ? 1 + intensity * 0.5 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                />
            )
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Dot Grid SVG */}
            <svg
                className="absolute inset-0 h-full w-full"
                style={{ minHeight: "300px" }}
            >
                {dots}
            </svg>

            {/* Glow effect following cursor */}
            <div
                className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300"
                style={{
                    width: glowRadius * 2,
                    height: glowRadius * 2,
                    left: mousePosition.x - glowRadius,
                    top: mousePosition.y - glowRadius,
                    background: \`radial-gradient(circle, \${glowColor}30, transparent 70%)\`,
                    opacity: mousePosition.x > -500 ? 1 : 0,
                }}
            />

            {/* Content */}
            {children && (
                <div className="relative z-10">{children}</div>
            )}
        </div>
    )
}
`

export const dotGridBackgroundCodeJS = `"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const DotGridBackground = ({ children, className, dotColor = "rgba(255, 255, 255, 0.2)", glowColor = "#667eea", dotSize = 2, gap = 24, glowRadius = 150, }) => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }, []);
    const handleMouseLeave = useCallback(() => {
        setMousePosition({ x: -1000, y: -1000 });
    }, []);
    // Generate dots
    const dots = [];
    const cols = Math.ceil(400 / gap);
    const rows = Math.ceil(300 / gap);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * gap + gap / 2;
            const y = row * gap + gap / 2;
            const distance = Math.sqrt(Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2));
            const isNear = distance < glowRadius;
            const intensity = isNear ? 1 - distance / glowRadius : 0;
            dots.push(<motion.circle key={\`\${row}-\${col}\`} cx={x} cy={y} r={dotSize + intensity * 2} fill={isNear ? glowColor : dotColor} animate={{
                    opacity: isNear ? 0.5 + intensity * 0.5 : 0.3,
                    scale: isNear ? 1 + intensity * 0.5 : 1,
                }} transition={{ duration: 0.15 }}/>);
        }
    }
    return (<div ref={containerRef} className={cn("relative overflow-hidden", className)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Dot Grid SVG */}
            <svg className="absolute inset-0 h-full w-full" style={{ minHeight: "300px" }}>
                {dots}
            </svg>

            {/* Glow effect following cursor */}
            <div className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-300" style={{
            width: glowRadius * 2,
            height: glowRadius * 2,
            left: mousePosition.x - glowRadius,
            top: mousePosition.y - glowRadius,
            background: \`radial-gradient(circle, \${glowColor}30, transparent 70%)\`,
            opacity: mousePosition.x > -500 ? 1 : 0,
        }}/>

            {/* Content */}
            {children && (<div className="relative z-10">{children}</div>)}
        </div>);
};
`

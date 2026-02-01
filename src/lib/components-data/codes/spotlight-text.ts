// Auto-generated from spotlight-text.tsx
// Run: npm run generate-codes

export const spotlightTextCodeTS = `"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface SpotlightTextProps {
    text: string
    className?: string
    spotlightSize?: number
    litColor?: string
    dimColor?: string
}

export const SpotlightText = ({
    text = "Hover Me",
    className,
    spotlightSize = 100,
    litColor = "#ffffff",
    dimColor = "rgba(255, 255, 255, 0.2)"
}: SpotlightTextProps) => {
    const containerRef = useRef<HTMLSpanElement>(null)
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    const handleMouseEnter = () => setOpacity(1)
    const handleMouseLeave = () => setOpacity(0)

    const isLitTailwind = litColor.startsWith('text-')
    const isDimTailwind = dimColor.startsWith('text-')

    return (
        <span
            ref={containerRef}
            className={cn("relative inline-block overflow-visible cursor-default select-none pb-1", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base Text (Dimmed) */}
            <span
                className={cn("block", isDimTailwind ? dimColor : "")}
                style={!isDimTailwind ? { color: dimColor } : undefined}
            >
                {text}
            </span>

            {/* Spotlight Text (Lit) */}
            <motion.span
                className={cn("absolute inset-0 z-10 pointer-events-none block whitespace-nowrap", isLitTailwind ? litColor : "")}
                style={{
                    maskImage: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, black, transparent)\`,
                    WebkitMaskImage: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, black, transparent)\`,
                    color: !isLitTailwind ? litColor : undefined
                }}
                animate={{
                    opacity: opacity,
                }}
                transition={{ duration: 0.2 }}
            >
                {text}
            </motion.span>
        </span>
    )
}
`

export const spotlightTextCodeJS = `"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const SpotlightText = ({ text = "Hover Me", className, spotlightSize = 100, litColor = "#ffffff", dimColor = "rgba(255, 255, 255, 0.2)" }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [opacity, setOpacity] = useState(0);
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);
    const isLitTailwind = litColor.startsWith('text-');
    const isDimTailwind = dimColor.startsWith('text-');
    return (<span ref={containerRef} className={cn("relative inline-block overflow-visible cursor-default select-none pb-1", className)} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Base Text (Dimmed) */}
            <span className={cn("block", isDimTailwind ? dimColor : "")} style={!isDimTailwind ? { color: dimColor } : undefined}>
                {text}
            </span>

            {/* Spotlight Text (Lit) */}
            <motion.span className={cn("absolute inset-0 z-10 pointer-events-none block whitespace-nowrap", isLitTailwind ? litColor : "")} style={{
            maskImage: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, black, transparent)\`,
            WebkitMaskImage: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, black, transparent)\`,
            color: !isLitTailwind ? litColor : undefined
        }} animate={{
            opacity: opacity,
        }} transition={{ duration: 0.2 }}>
                {text}
            </motion.span>
        </span>);
};
`

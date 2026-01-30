// Auto-generated from glitch-text.tsx
// Run: npm run generate-codes

export const glitchTextCodeTS = `"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
    text: string
    speed?: number
    enableHover?: boolean
    className?: string
}

export function GlitchText({
    text,
    speed = 1,
    enableHover = true,
    className,
}: GlitchTextProps) {
    const glitchVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: {
            opacity: 1,
            x: [0, -2, 2, -2, 2, 0],
            y: [0, 1, -1, 1, -1, 0],
            transition: {
                duration: 0.5 / speed,
                repeat: Infinity,
                repeatType: "reverse" as const,
                repeatDelay: Math.random() * 3 + 1,
            },
        },
        hover: {
            opacity: 1,
            x: [0, -4, 4, -4, 4, 0],
            y: [0, 2, -2, 2, -2, 0],
            transition: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse" as const,
            },
        },
    }

    return (
        <div
            className={cn(
                "relative inline-block font-mono font-bold overflow-hidden",
                className
            )}
        >
            {/* Main Text */}
            <motion.span
                className="relative z-10 block"
                whileHover={enableHover ? { x: [-1, 1, -1], y: [1, -1, 1] } : undefined}
            >
                {text}
            </motion.span>

            {/* Red Channel Glitch */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 mix-blend-screen"
                variants={glitchVariants}
                initial="hidden"
                animate="visible"
                whileHover={enableHover ? "hover" : undefined}
            >
                {text}
            </motion.span>

            {/* Blue Channel Glitch */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 mix-blend-screen"
                variants={glitchVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                whileHover={enableHover ? "hover" : undefined}
            >
                {text}
            </motion.span>
        </div>
    )
}
`

export const glitchTextCodeJS = `"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function GlitchText({ text, speed = 1, enableHover = true, className, }) {
    const glitchVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: {
            opacity: 1,
            x: [0, -2, 2, -2, 2, 0],
            y: [0, 1, -1, 1, -1, 0],
            transition: {
                duration: 0.5 / speed,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 3 + 1,
            },
        },
        hover: {
            opacity: 1,
            x: [0, -4, 4, -4, 4, 0],
            y: [0, 2, -2, 2, -2, 0],
            transition: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };
    return (<div className={cn("relative inline-block font-mono font-bold overflow-hidden", className)}>
            {/* Main Text */}
            <motion.span className="relative z-10 block" whileHover={enableHover ? { x: [-1, 1, -1], y: [1, -1, 1] } : undefined}>
                {text}
            </motion.span>

            {/* Red Channel Glitch */}
            <motion.span className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 mix-blend-screen" variants={glitchVariants} initial="hidden" animate="visible" whileHover={enableHover ? "hover" : undefined}>
                {text}
            </motion.span>

            {/* Blue Channel Glitch */}
            <motion.span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 mix-blend-screen" variants={glitchVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }} whileHover={enableHover ? "hover" : undefined}>
                {text}
            </motion.span>
        </div>);
}
`

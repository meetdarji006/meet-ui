// Auto-generated from flip-text.tsx
// Run: npm run generate-codes

export const flipTextCodeTS = `"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipTextProps {
    words: string[]
    className?: string
    duration?: number
    direction?: "up" | "down"
}

export function FlipText({
    words,
    className,
    duration = 3000,
    direction = "up",
}: FlipTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
    }, [words.length])

    useEffect(() => {
        const interval = setInterval(next, duration)
        return () => clearInterval(interval)
    }, [next, duration])

    const variants = {
        enter: {
            rotateX: direction === "up" ? 90 : -90,
            opacity: 0,
            y: direction === "up" ? 20 : -20,
        },
        center: {
            rotateX: 0,
            opacity: 1,
            y: 0,
        },
        exit: {
            rotateX: direction === "up" ? -90 : 90,
            opacity: 0,
            y: direction === "up" ? -20 : 20,
        },
    }

    return (
        <div
            className={cn(
                "relative inline-flex items-center justify-center overflow-hidden",
                className
            )}
            style={{ perspective: "500px" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block origin-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}
`

export const flipTextCodeJS = `"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
export function FlipText({ words, className, duration = 3000, direction = "up", }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
    }, [words.length]);
    useEffect(() => {
        const interval = setInterval(next, duration);
        return () => clearInterval(interval);
    }, [next, duration]);
    const variants = {
        enter: {
            rotateX: direction === "up" ? 90 : -90,
            opacity: 0,
            y: direction === "up" ? 20 : -20,
        },
        center: {
            rotateX: 0,
            opacity: 1,
            y: 0,
        },
        exit: {
            rotateX: direction === "up" ? -90 : 90,
            opacity: 0,
            y: direction === "up" ? -20 : 20,
        },
    };
    return (<div className={cn("relative inline-flex items-center justify-center overflow-hidden", className)} style={{ perspective: "500px" }}>
            <AnimatePresence mode="wait">
                <motion.span key={currentIndex} variants={variants} initial="enter" animate="center" exit="exit" transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        }} className="inline-block origin-center" style={{ transformStyle: "preserve-3d" }}>
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>);
}
`

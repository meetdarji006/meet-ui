"use client"

import React, { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export interface StackedInfoItem {
    label: string
    title: string
    description: string
}

export interface StackedInfoCardsProps {
    items: StackedInfoItem[]
    className?: string
    cardColor?: string
    stackColor?: string
    textColor?: string
    navColor?: string
    navActiveColor?: string
    borderRadius?: number
    showDashedLine?: boolean
}

export function StackedInfoCards({
    items,
    className,
    cardColor = "#7c3aed",
    stackColor = "#a78bfa",
    textColor = "#ffffff",
    navColor = "#ffffff",
    navActiveColor = "#7c3aed",
    borderRadius = 20,
    showDashedLine = true,
}: StackedInfoCardsProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const paginate = useCallback(
        (dir: number) => {
            setDirection(dir)
            setCurrentIndex((prev) => {
                const next = prev + dir
                if (next < 0) return items.length - 1
                if (next >= items.length) return 0
                return next
            })
        },
        [items.length]
    )

    // Responsive stack depth: 1 on mobile, 2 on desktop
    const [maxDepth, setMaxDepth] = useState(2)
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 639px)")
        const update = () => setMaxDepth(mq.matches ? 1 : 2)
        update()
        mq.addEventListener("change", update)
        return () => mq.removeEventListener("change", update)
    }, [])

    // Build left stack (previous cards) and right stack (upcoming cards)
    const getLeftStack = () => {
        const stack = []
        for (let i = 1; i <= Math.min(maxDepth, currentIndex); i++) {
            stack.push({ index: currentIndex - i, depth: i })
        }
        return stack
    }

    const getRightStack = () => {
        const stack = []
        const remaining = items.length - 1 - currentIndex
        for (let i = 1; i <= Math.min(maxDepth, remaining); i++) {
            stack.push({ index: currentIndex + i, depth: i })
        }
        return stack
    }

    const leftStack = getLeftStack()
    const rightStack = getRightStack()

    return (
        <div className={cn("relative w-full px-8 sm:px-10 overflow-hidden sm:overflow-visible", className)}>
            <div
                className="relative w-full mx-auto"
                style={{ minHeight: "clamp(340px, 65vw, 480px)", maxWidth: 520 }}
            >
                {/* Left stack — previous cards */}
                {leftStack.map(({ index, depth }) => (
                    <motion.div
                        key={`left-${index}`}
                        className="absolute inset-0"
                        style={{
                            backgroundColor: stackColor,
                            borderRadius,
                            zIndex: 5 - depth,
                        }}
                        animate={{
                            x: depth * -40,
                            y: 0,
                            scale: 1 - depth * 0.08,
                            opacity: depth === 1 ? 0.7 : 0.45,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 22,
                            mass: 0.9,
                        }}
                    />
                ))}

                {/* Right stack — upcoming cards */}
                {rightStack.map(({ index, depth }) => (
                    <motion.div
                        key={`right-${index}`}
                        className="absolute inset-0"
                        style={{
                            backgroundColor: stackColor,
                            borderRadius,
                            zIndex: 5 - depth,
                        }}
                        animate={{
                            x: depth * 40,
                            y: 0,
                            scale: 1 - depth * 0.08,
                            opacity: depth === 1 ? 0.7 : 0.45,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 22,
                            mass: 0.9,
                        }}
                    />
                ))}

                {/* Active card */}
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        className="absolute inset-0"
                        style={{
                            backgroundColor: cardColor,
                            borderRadius,
                            color: textColor,
                            zIndex: 10,
                        }}
                        variants={{
                            enter: (dir: number) => ({
                                x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
                                scale: 0.88,
                                opacity: 0,
                            }),
                            center: {
                                x: 0,
                                scale: 1,
                                opacity: 1,
                            },
                            exit: (dir: number) => ({
                                x: dir > 0 ? -60 : 60,
                                scale: 0.88,
                                opacity: 0,
                            }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 22,
                            mass: 0.9,
                        }}
                    >
                        <div
                            className="p-5 sm:p-8 md:p-10 flex flex-col h-full"
                            style={{ minHeight: "clamp(340px, 65vw, 480px)" }}
                        >
                            <div className="mb-2">
                                <span
                                    className="text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: textColor }}
                                >
                                    {items[currentIndex].label}
                                </span>
                            </div>

                            {showDashedLine && (
                                <div
                                    className="w-full mb-6"
                                    style={{
                                        borderTop: `2px dashed ${textColor}`,
                                        opacity: 0.4,
                                    }}
                                />
                            )}

                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-3 sm:mb-4"
                                style={{ color: textColor, fontFamily: "serif" }}
                            >
                                {items[currentIndex].title}
                            </h3>

                            <p
                                className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90"
                                style={{ color: textColor }}
                            >
                                {items[currentIndex].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 z-20 flex items-center gap-2">
                    <button
                        onClick={() => paginate(-1)}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                        style={{
                            backgroundColor: "#fff",
                            color: cardColor,
                        }}
                        aria-label="Previous"
                    >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                        style={{
                            backgroundColor: "#fff",
                            color: cardColor,
                        }}
                        aria-label="Next"
                    >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

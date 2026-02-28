"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface HoverMenuItem {
    id: string | number
    title: string
    description?: string
}

export interface InteractiveHoverMenuProps {
    items: HoverMenuItem[]
    activeColor?: string
    activeTextColor?: string
    baseTextColor?: string
    className?: string
    titleClassName?: string
    descriptionClassName?: string
}

export const InteractiveHoverMenu = ({
    items,
    activeColor = "#8b5cf6",
    activeTextColor = "#ffffff",
    baseTextColor = "#a1a1aa",
    className,
    titleClassName,
    descriptionClassName,
}: InteractiveHoverMenuProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className={cn("w-full py-12 flex flex-col", className)}>
            {items.map((item, index) => {
                const isHovered = hoveredIndex === index

                return (
                    <div
                        key={item.id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="w-full cursor-pointer relative"
                    >
                        {/* Static divider lines to separate rows (like the reference) */}
                        <div className="absolute top-0 left-0 w-full h-px bg-zinc-800/50" />

                        {/* --- BASE LAYER (Inactive State) --- */}
                        <div className="w-full flex items-center justify-between px-4 md:px-12 py-2">
                            <span
                                style={{ color: baseTextColor }}
                                className={cn(
                                    "text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8]",
                                    titleClassName
                                )}
                            >
                                {item.title}
                            </span>
                        </div>

                        {/* --- REVEAL LAYER (Active State) --- */}
                        {/* We use a clip-path that expands from the vertical center to reveal the background and active text simultaneously */}
                        <motion.div
                            initial={false}
                            animate={{
                                clipPath: isHovered ? "inset(0% 0 0% 0)" : "inset(50% 0 50% 0)"
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{ backgroundColor: activeColor }}
                            className="absolute inset-0 w-full h-full flex items-center justify-between px-4 md:px-12 py-2 overflow-hidden"
                        >
                            {/* Duplicate title for the active layer */}
                            <span
                                style={{ color: activeTextColor }}
                                className={cn(
                                    "text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8]",
                                    titleClassName
                                )}
                            >
                                {item.title}
                            </span>

                            {/* The description only lives in the active layer so it gets clipped/revealed naturally */}
                            {item.description && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                        x: isHovered ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut", delay: isHovered ? 0.1 : 0 }}
                                    className="hidden md:block max-w-[300px] ml-12"
                                >
                                    <p
                                        style={{ color: activeTextColor }}
                                        className={cn(
                                            "text-sm font-medium leading-tight",
                                            descriptionClassName
                                        )}
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Bottom divider for the last item */}
                        {index === items.length - 1 && (
                            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-800/50" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

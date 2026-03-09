// Auto-generated from highlight-gallery.tsx
// Run: npm run generate-codes

export const highlightGalleryCodeTS = `"use client"

import React, { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface HighlightGalleryItem {
    label: string
    image: string
}

interface HighlightGalleryProps {
    items: HighlightGalleryItem[]
    className?: string

    // Customization
    barColor?: string
    textColor?: string
    activeTextColor?: string
    bgColor?: string
    imageWidth?: number
    imageHeight?: number
    fontSize?: string
    barStiffness?: number
    barDamping?: number
    border?: boolean
}

export function HighlightGallery({
    items,
    className,
    barColor = "#ffffff",
    textColor = "#ffffff",
    activeTextColor = "#060010",
    bgColor = "transparent",
    imageWidth = 180,
    imageHeight = 240,
    fontSize = "clamp(2.5rem, 8vw, 7rem)",
    barStiffness = 500,
    barDamping = 35,
    border = false,
}: HighlightGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const rowRefs = useRef<(HTMLDivElement | null)[]>([])

    const setRowRef = useCallback(
        (el: HTMLDivElement | null, index: number) => {
            rowRefs.current[index] = el
        },
        []
    )

    // Get the active row's position relative to the container
    const getBarStyle = () => {
        if (activeIndex === null) return { top: -100, height: 0 }
        const row = rowRefs.current[activeIndex]
        const container = containerRef.current
        if (!row || !container) return { top: -100, height: 0 }
        const containerRect = container.getBoundingClientRect()
        const rowRect = row.getBoundingClientRect()
        return {
            top: rowRect.top - containerRect.top,
            height: rowRect.height,
        }
    }

    const barStyle = getBarStyle()

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-hidden select-none",
                className
            )}
            style={{ backgroundColor: bgColor }}
            onMouseLeave={() => setActiveIndex(null)}
        >
            {/* Text rows */}
            <div className="relative flex flex-col items-center py-8 md:py-12">
                {/* Sliding bar */}
                <motion.div
                    className="absolute left-0 w-full z-0 pointer-events-none"
                    animate={{
                        top: barStyle.top,
                        height: barStyle.height,
                        opacity: activeIndex !== null ? 1 : 0,
                        backgroundColor: barColor,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: barStiffness,
                        damping: barDamping,
                    }}
                />

                {items.map((item, index) => {
                    const isActive = index === activeIndex

                    return (
                        <div
                            key={index}
                            ref={(el) => setRowRef(el, index)}
                            className="relative z-10 w-full cursor-pointer"
                            onMouseEnter={() => setActiveIndex(index)}
                            style={{
                                borderBottom: border ? \`1px solid \${barColor}\` : undefined,
                            }}
                        >
                            <div className="flex items-center justify-center px-4 md:px-8 py-1 md:py-2">
                                <h2
                                    className="font-black text-center uppercase tracking-tighter leading-[0.85]"
                                    style={{
                                        fontSize,
                                        color: (activeIndex !== null && isActive) ? activeTextColor : textColor,
                                        transition: "color 0.15s ease",
                                    }}
                                >
                                    {item.label}
                                </h2>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Floating image with clip-path wipe reveal */}
            <motion.div
                className="absolute z-20 pointer-events-none"
                style={{
                    right: "8%",
                    width: imageWidth,
                    height: imageHeight,
                }}
                initial={{ opacity: 0 }}
                animate={{
                    top: activeIndex !== null ? barStyle.top - barStyle.height * 0.3 : barStyle.top,
                    opacity: activeIndex !== null ? 1 : 0,
                    scale: activeIndex !== null ? 1 : 0.85,
                }}
                transition={{
                    type: "spring",
                    stiffness: barStiffness,
                    damping: barDamping,
                }}
            >
                <div className="w-full h-full overflow-hidden shadow-2xl relative">
                    <AnimatePresence mode="popLayout">
                        {activeIndex !== null && (
                            <motion.img
                                key={activeIndex}
                                src={items[activeIndex]?.image}
                                alt={items[activeIndex]?.label}
                                className="absolute inset-0 w-full h-full object-cover"
                                draggable={false}
                                initial={{
                                    clipPath: "inset(100% 0 0 0)",
                                    scale: 1.15,
                                }}
                                animate={{
                                    clipPath: "inset(0% 0 0 0)",
                                    scale: 1,
                                }}
                                exit={{
                                    clipPath: "inset(0 0 100% 0)",
                                    scale: 1.05,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    )
}
`

export const highlightGalleryCodeJS = `"use client";
import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
export function HighlightGallery({ items, className, barColor = "#ffffff", textColor = "#ffffff", activeTextColor = "#060010", bgColor = "transparent", imageWidth = 180, imageHeight = 240, fontSize = "clamp(2.5rem, 8vw, 7rem)", barStiffness = 500, barDamping = 35, border = false, }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);
    const rowRefs = useRef([]);
    const setRowRef = useCallback((el, index) => {
        rowRefs.current[index] = el;
    }, []);
    // Get the active row's position relative to the container
    const getBarStyle = () => {
        if (activeIndex === null)
            return { top: -100, height: 0 };
        const row = rowRefs.current[activeIndex];
        const container = containerRef.current;
        if (!row || !container)
            return { top: -100, height: 0 };
        const containerRect = container.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
        return {
            top: rowRect.top - containerRect.top,
            height: rowRect.height,
        };
    };
    const barStyle = getBarStyle();
    return (<div ref={containerRef} className={cn("relative w-full overflow-hidden select-none", className)} style={{ backgroundColor: bgColor }} onMouseLeave={() => setActiveIndex(null)}>
            {/* Text rows */}
            <div className="relative flex flex-col items-center py-8 md:py-12">
                {/* Sliding bar */}
                <motion.div className="absolute left-0 w-full z-0 pointer-events-none" animate={{
            top: barStyle.top,
            height: barStyle.height,
            opacity: activeIndex !== null ? 1 : 0,
            backgroundColor: barColor,
        }} transition={{
            type: "spring",
            stiffness: barStiffness,
            damping: barDamping,
        }}/>

                {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (<div key={index} ref={(el) => setRowRef(el, index)} className="relative z-10 w-full cursor-pointer" onMouseEnter={() => setActiveIndex(index)} style={{
                    borderBottom: border ? \`1px solid \${barColor}\` : undefined,
                }}>
                            <div className="flex items-center justify-center px-4 md:px-8 py-1 md:py-2">
                                <h2 className="font-black text-center uppercase tracking-tighter leading-[0.85]" style={{
                    fontSize,
                    color: (activeIndex !== null && isActive) ? activeTextColor : textColor,
                    transition: "color 0.15s ease",
                }}>
                                    {item.label}
                                </h2>
                            </div>
                        </div>);
        })}
            </div>

            {/* Floating image with clip-path wipe reveal */}
            <motion.div className="absolute z-20 pointer-events-none" style={{
            right: "8%",
            width: imageWidth,
            height: imageHeight,
        }} initial={{ opacity: 0 }} animate={{
            top: activeIndex !== null ? barStyle.top - barStyle.height * 0.3 : barStyle.top,
            opacity: activeIndex !== null ? 1 : 0,
            scale: activeIndex !== null ? 1 : 0.85,
        }} transition={{
            type: "spring",
            stiffness: barStiffness,
            damping: barDamping,
        }}>
                <div className="w-full h-full overflow-hidden shadow-2xl relative">
                    <AnimatePresence mode="popLayout">
                        {activeIndex !== null && (<motion.img key={activeIndex} src={items[activeIndex]?.image} alt={items[activeIndex]?.label} className="absolute inset-0 w-full h-full object-cover" draggable={false} initial={{
                clipPath: "inset(100% 0 0 0)",
                scale: 1.15,
            }} animate={{
                clipPath: "inset(0% 0 0 0)",
                scale: 1,
            }} exit={{
                clipPath: "inset(0 0 100% 0)",
                scale: 1.05,
            }} transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }}/>)}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>);
}
`

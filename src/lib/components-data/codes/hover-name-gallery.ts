// Auto-generated from hover-name-gallery.tsx
// Run: npm run generate-codes

export const hoverNameGalleryCodeTS = `"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GalleryItem {
    id: string
    name: string
    image: string
}

export interface HoverNameGalleryProps {
    className?: string
    items?: GalleryItem[]
    defaultTitle?: string
}

const defaultItems: GalleryItem[] = [
    {
        id: "brian",
        name: "BRIAN",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "jess",
        name: "JESS",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "miranda",
        name: "MIRAND",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "jim",
        name: "JIM",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "sarah",
        name: "SARAH",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "alex",
        name: "ALEX",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "michael",
        name: "MICHAEL",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop&q=80"
    },
]

export function HoverNameGallery({
    className,
    items = defaultItems,
    defaultTitle = "DIRECTORS"
}: HoverNameGalleryProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    // Determine the current title string
    const activeItem = items.find(item => item.id === hoveredId)
    const currentText = activeItem ? activeItem.name : defaultTitle

    return (
        <div className={cn("relative w-full min-h-[500px] flex flex-col items-center justify-center p-8 bg-[#111]", className)}>

            {/* Gallery Row */}
            <div
                className="flex items-center justify-center gap-2 mb-16 h-[200px]"
                onMouseLeave={() => setHoveredId(null)}
            >
                {items.map((item) => {
                    const isHovered = hoveredId === item.id
                    const isOtherHovered = hoveredId !== null && hoveredId !== item.id

                    return (
                        <motion.button
                            key={item.id}
                            layout
                            onMouseEnter={() => setHoveredId(item.id)}
                            onFocus={() => setHoveredId(item.id)}
                            className="relative overflow-hidden rounded-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                            initial={false}
                            animate={{
                                width: isHovered ? 140 : 60,
                                height: isHovered ? 160 : 70,
                                zIndex: isHovered ? 10 : 1,
                                opacity: isOtherHovered ? 0.5 : 1,
                                filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover origin-center pointer-events-none"
                            />
                        </motion.button>
                    )
                })}
            </div>

            {/* Title Display */}
            <div className="relative w-full max-w-7xl h-[250px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentText}
                        className={cn(
                            "absolute flex items-center justify-center text-[12vw] sm:text-[180px] leading-none font-black tracking-tighter uppercase scale-y-[1.5]",
                            hoveredId ? "text-purple-500" : "text-white"
                        )}
                        style={{
                            fontFamily: "'Impact', 'Arial Black', sans-serif"
                        }}
                    >
                        {currentText.split("").map((char, i) => {
                            const centerIndex = currentText.length / 2
                            const dist = Math.abs(i - centerIndex)
                            const staggerDelay = dist * 0.04

                            return (
                                <div key={i} className="overflow-hidden relative flex flex-col justify-end"
                                    style={{
                                        paddingTop: '0.2em',
                                        paddingBottom: '0.2em',
                                        paddingLeft: '0.1em',
                                        paddingRight: '0.1em',
                                        marginTop: '-0.2em',
                                        marginBottom: '-0.2em',
                                        marginLeft: '-0.1em',
                                        marginRight: '-0.1em',
                                    }}
                                >
                                    <motion.span
                                        initial={{ y: "110%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "-110%", opacity: 0 }}
                                        transition={{
                                            delay: staggerDelay,
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className={cn(
                                            "inline-block will-change-transform leading-none text-center",
                                            char === " " ? "min-w-[0.2em]" : ""
                                        )}
                                    >
                                        {char === " " ? "\\u00A0" : char}
                                    </motion.span>
                                </div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    )
}
`

export const hoverNameGalleryCodeJS = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
const defaultItems = [
    {
        id: "brian",
        name: "BRIAN",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "jess",
        name: "JESS",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "miranda",
        name: "MIRAND",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "jim",
        name: "JIM",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "sarah",
        name: "SARAH",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "alex",
        name: "ALEX",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
        id: "michael",
        name: "MICHAEL",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&auto=format&fit=crop&q=80"
    },
];
export function HoverNameGallery({ className, items = defaultItems, defaultTitle = "DIRECTORS" }) {
    const [hoveredId, setHoveredId] = useState(null);
    // Determine the current title string
    const activeItem = items.find(item => item.id === hoveredId);
    const currentText = activeItem ? activeItem.name : defaultTitle;
    return (<div className={cn("relative w-full min-h-[500px] flex flex-col items-center justify-center p-8 bg-[#111]", className)}>

            {/* Gallery Row */}
            <div className="flex items-center justify-center gap-2 mb-16 h-[200px]" onMouseLeave={() => setHoveredId(null)}>
                {items.map((item) => {
            const isHovered = hoveredId === item.id;
            const isOtherHovered = hoveredId !== null && hoveredId !== item.id;
            return (<motion.button key={item.id} layout onMouseEnter={() => setHoveredId(item.id)} onFocus={() => setHoveredId(item.id)} className="relative overflow-hidden rounded-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-500" initial={false} animate={{
                    width: isHovered ? 140 : 60,
                    height: isHovered ? 160 : 70,
                    zIndex: isHovered ? 10 : 1,
                    opacity: isOtherHovered ? 0.5 : 1,
                    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                }} transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}>
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover origin-center pointer-events-none"/>
                        </motion.button>);
        })}
            </div>

            {/* Title Display */}
            <div className="relative w-full max-w-7xl h-[250px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div key={currentText} className={cn("absolute flex items-center justify-center text-[12vw] sm:text-[180px] leading-none font-black tracking-tighter uppercase scale-y-[1.5]", hoveredId ? "text-purple-500" : "text-white")} style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif"
        }}>
                        {currentText.split("").map((char, i) => {
            const centerIndex = currentText.length / 2;
            const dist = Math.abs(i - centerIndex);
            const staggerDelay = dist * 0.04;
            return (<div key={i} className="overflow-hidden relative flex flex-col justify-end" style={{
                    paddingTop: '0.2em',
                    paddingBottom: '0.2em',
                    paddingLeft: '0.1em',
                    paddingRight: '0.1em',
                    marginTop: '-0.2em',
                    marginBottom: '-0.2em',
                    marginLeft: '-0.1em',
                    marginRight: '-0.1em',
                }}>
                                    <motion.span initial={{ y: "110%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ y: "-110%", opacity: 0 }} transition={{
                    delay: staggerDelay,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }} className={cn("inline-block will-change-transform leading-none text-center", char === " " ? "min-w-[0.2em]" : "")}>
                                        {char === " " ? "\\u00A0" : char}
                                    </motion.span>
                                </div>);
        })}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>);
}
`

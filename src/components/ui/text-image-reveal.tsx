"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextImageRevealItem {
    id: string;
    text: string;
    imageUrl: string;
    thumbnailUrl?: string;
    marqueeText?: string;
    direction?: "left" | "right";
    className?: string;
    lineHeight?: number;
}

export interface TextImageRevealProps {
    items: TextImageRevealItem[];
    className?: string;
}

export const TextImageReveal = ({ items, className }: TextImageRevealProps) => {
    return (
        <div className={cn("w-full flex flex-col", className)}>
            {items.map((item) => (
                <RevealRow key={item.id} item={item} />
            ))}
        </div>
    );
};

function RevealRow({ item }: { item: TextImageRevealItem }) {
    const { text, imageUrl, thumbnailUrl, marqueeText, direction = "left", className, lineHeight = 1 } = item;

    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for floating thumbnail
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    // Marquee content
    const bgText = marqueeText || `${text} - `.repeat(15);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative group w-full flex items-center justify-center",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* 1. Base Text (Opaque when NOT hovered, transparent when hovered) */}
            <span
                className="relative z-10 transition-colors duration-500 will-change-transform"
                style={{
                    color: isHovered ? "transparent" : "currentColor",
                    lineHeight // Uses the prop to allow customizable vertical spacing
                }}
            >
                {text}
            </span>

            {/* 2. Marquee Background (Fades in on hover) */}
            <div
                className="absolute inset-0 z-0 flex items-center overflow-hidden pointer-events-none transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <motion.div
                    initial={{ x: direction === "left" ? "0%" : "-50%" }}
                    animate={{ x: direction === "left" ? "-50%" : "0%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    className="flex whitespace-nowrap opacity-[0.03] text-[1.5em] font-black leading-none"
                >
                    <span className="pe-8">{bgText}</span>
                    <span className="pe-8">{bgText}</span>
                </motion.div>
            </div>

            {/* 3. Floating Thumbnail (Follows cursor) */}
            {thumbnailUrl && (
                <motion.div
                    className="absolute left-1/2 top-1/2 z-20 h-24 w-36 sm:h-40 sm:w-60 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ x: springX, y: springY }}
                >
                    <img src={thumbnailUrl} alt={text} className="w-full h-full object-cover" />
                </motion.div>
            )}

            {/* 4. Masked Panning Image over Text */}
            <div
                className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                {/* CSS Background Clip technique instead of SVG */}
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        backgroundSize: "200% auto",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center",
                        lineHeight,
                    }}
                    animate={{
                        backgroundPositionX: direction === "left" ? ["0%", "100%"] : ["100%", "0%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 15
                    }}
                >
                    {text}
                </motion.div>
            </div>
        </div>
    );
}

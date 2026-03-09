// Auto-generated from mask-text-hover.tsx
// Run: npm run generate-codes

export const maskTextHoverCodeTS = `"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export interface HeroTextLine {
    text: string
    color?: string
}

export interface MaskTextHoverProps {
    baseText: string | HeroTextLine[]
    revealText: string | HeroTextLine[]
    baseLayerClassName?: string
    revealLayerClassName?: string
    className?: string
    maskSize?: number
    damping?: number
    stiffness?: number
    mass?: number
    maskColor?: string
    backgroundColor?: string
}

export const MaskTextHover = ({
    baseText,
    revealText,
    baseLayerClassName,
    revealLayerClassName,
    className,
    maskSize = 400,
    damping = 40,
    stiffness = 400,
    mass = 0.1,
    maskColor,
    backgroundColor,
}: MaskTextHoverProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Track mouse position relative to the container
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Apply spring physics for smooth tracking - extremely tight for 1-to-1 feel
    const springConfig = { damping, stiffness, mass }
    const smoothX = useSpring(mouseX, springConfig)
    const smoothY = useSpring(mouseY, springConfig)

    // Handle mouse movement
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        // Calculate center of the cursor relative to the container
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    // Determine the mask size based on hover state (much larger to match Minh Pham)
    const size = useSpring(0, { damping, stiffness })

    useEffect(() => {
        size.set(isHovered ? maskSize : 0)
    }, [isHovered, size, maskSize])

    const xOffset = useTransform([smoothX, size], ([x, s]) => (x as number) - (s as number) / 2)
    const yOffset = useTransform([smoothY, size], ([y, s]) => (y as number) - (s as number) / 2)
    const maskPosition = useMotionTemplate\`\${xOffset}px \${yOffset}px\`
    const maskSizeStyle = useMotionTemplate\`\${size}px \${size}px\`

    const renderText = (textRef: string | HeroTextLine[]) => {
        if (typeof textRef === 'string') {
            return textRef.split('\\n').map((line, i) => (
                <span key={i} className="block leading-[0.8]">{line}</span>
            ))
        }

        return textRef.map((line, i) => (
            <span key={i} className="block  leading-[0.8]" style={line.color ? { color: line.color } : {}}>
                {line.text}
            </span>
        ))
    }

    return (
        <div
            ref={containerRef}
            className={cn("relative flex items-center justify-center overflow-hidden py-20 px-4", className)}
            style={backgroundColor ? { backgroundColor } : undefined}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base Layer (Bottom) */}
            <div className={cn("w-full h-full flex flex-col items-center justify-center text-center text-8xl md:text-[12rem] leading-[0.7] font-black tracking-tighter text-zinc-800 select-none uppercase", baseLayerClassName)}>
                {renderText(baseText)}
            </div>

            {/* Revealed Layer (Top) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                    WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'50\\' fill=\\'black\\'/%3E%3C/svg%3E")',
                    maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'50\\' fill=\\'black\\'/%3E%3C/svg%3E")',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: maskSizeStyle,
                    maskSize: maskSizeStyle,
                    WebkitMaskPosition: maskPosition,
                    maskPosition: maskPosition,
                } as any}
            >
                <div className={cn("w-full h-full flex flex-col items-center justify-center text-center text-8xl md:text-[12rem] leading-[0.7] font-black tracking-tighter text-white select-none uppercase", revealLayerClassName)} style={maskColor ? { backgroundColor: maskColor } : undefined}>
                    {renderText(revealText)}
                </div>
            </motion.div>
        </div>
    )
}
`

export const maskTextHoverCodeJS = `"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
export const MaskTextHover = ({ baseText, revealText, baseLayerClassName, revealLayerClassName, className, maskSize = 400, damping = 40, stiffness = 400, mass = 0.1, maskColor, backgroundColor, }) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    // Track mouse position relative to the container
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    // Apply spring physics for smooth tracking - extremely tight for 1-to-1 feel
    const springConfig = { damping, stiffness, mass };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);
    // Handle mouse movement
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate center of the cursor relative to the container
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    // Determine the mask size based on hover state (much larger to match Minh Pham)
    const size = useSpring(0, { damping, stiffness });
    useEffect(() => {
        size.set(isHovered ? maskSize : 0);
    }, [isHovered, size, maskSize]);
    const xOffset = useTransform([smoothX, size], ([x, s]) => x - s / 2);
    const yOffset = useTransform([smoothY, size], ([y, s]) => y - s / 2);
    const maskPosition = useMotionTemplate \`\${xOffset}px \${yOffset}px\`;
    const maskSizeStyle = useMotionTemplate \`\${size}px \${size}px\`;
    const renderText = (textRef) => {
        if (typeof textRef === 'string') {
            return textRef.split('\\n').map((line, i) => (<span key={i} className="block leading-[0.8]">{line}</span>));
        }
        return textRef.map((line, i) => (<span key={i} className="block  leading-[0.8]" style={line.color ? { color: line.color } : {}}>
                {line.text}
            </span>));
    };
    return (<div ref={containerRef} className={cn("relative flex items-center justify-center overflow-hidden py-20 px-4", className)} style={backgroundColor ? { backgroundColor } : undefined} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Base Layer (Bottom) */}
            <div className={cn("w-full h-full flex flex-col items-center justify-center text-center text-8xl md:text-[12rem] leading-[0.7] font-black tracking-tighter text-zinc-800 select-none uppercase", baseLayerClassName)}>
                {renderText(baseText)}
            </div>

            {/* Revealed Layer (Top) */}
            <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'50\\' fill=\\'black\\'/%3E%3C/svg%3E")',
            maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'50\\' fill=\\'black\\'/%3E%3C/svg%3E")',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: maskSizeStyle,
            maskSize: maskSizeStyle,
            WebkitMaskPosition: maskPosition,
            maskPosition: maskPosition,
        }}>
                <div className={cn("w-full h-full flex flex-col items-center justify-center text-center text-8xl md:text-[12rem] leading-[0.7] font-black tracking-tighter text-white select-none uppercase", revealLayerClassName)} style={maskColor ? { backgroundColor: maskColor } : undefined}>
                    {renderText(revealText)}
                </div>
            </motion.div>
        </div>);
};
`

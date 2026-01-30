// Auto-generated from tilt-card.tsx
// Run: npm run generate-codes

export const tiltCardCodeTS = `"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
    children: React.ReactNode
    className?: string
    containerClassName?: string
    rotationFactor?: number
    borderGlow?: boolean
    glowColor?: string
}

export const TiltCard = ({
    children,
    className,
    containerClassName,
    rotationFactor = 15,
    borderGlow = true,
    glowColor = "rgba(102, 126, 234, 0.5)",
}: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const mouseX = e.clientX - centerX
        const mouseY = e.clientY - centerY

        const rotateXValue = (mouseY / (rect.height / 2)) * -rotationFactor
        const rotateYValue = (mouseX / (rect.width / 2)) * rotationFactor

        setRotateX(rotateXValue)
        setRotateY(rotateYValue)
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        })
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <div
            className={cn("perspective-1000", containerClassName)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                ref={ref}
                className={cn(
                    "relative rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 transition-shadow duration-300",
                    borderGlow && "hover:shadow-xl",
                    className
                )}
                style={{
                    transformStyle: "preserve-3d",
                    boxShadow: borderGlow && (rotateX !== 0 || rotateY !== 0)
                        ? \`0 20px 40px \${glowColor}, 0 0 30px \${glowColor}\`
                        : undefined,
                }}
                animate={{
                    rotateX,
                    rotateY,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Glare effect */}
                {borderGlow && (rotateX !== 0 || rotateY !== 0) && (
                    <div
                        className="pointer-events-none absolute inset-0 rounded-xl opacity-30"
                        style={{
                            background: \`radial-gradient(circle at \${mousePosition.x}% \${mousePosition.y}%, rgba(255,255,255,0.3), transparent 50%)\`,
                        }}
                    />
                )}

                {/* Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}
`

export const tiltCardCodeJS = `"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const TiltCard = ({ children, className, containerClassName, rotationFactor = 15, borderGlow = true, glowColor = "rgba(102, 126, 234, 0.5)", }) => {
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        if (!ref.current)
            return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateXValue = (mouseY / (rect.height / 2)) * -rotationFactor;
        const rotateYValue = (mouseX / (rect.width / 2)) * rotationFactor;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };
    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };
    return (<div className={cn("perspective-1000", containerClassName)} style={{ perspective: "1000px" }}>
            <motion.div ref={ref} className={cn("relative rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 transition-shadow duration-300", borderGlow && "hover:shadow-xl", className)} style={{
            transformStyle: "preserve-3d",
            boxShadow: borderGlow && (rotateX !== 0 || rotateY !== 0)
                ? \`0 20px 40px \${glowColor}, 0 0 30px \${glowColor}\`
                : undefined,
        }} animate={{
            rotateX,
            rotateY,
        }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
        }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                {/* Glare effect */}
                {borderGlow && (rotateX !== 0 || rotateY !== 0) && (<div className="pointer-events-none absolute inset-0 rounded-xl opacity-30" style={{
                background: \`radial-gradient(circle at \${mousePosition.x}% \${mousePosition.y}%, rgba(255,255,255,0.3), transparent 50%)\`,
            }}/>)}

                {/* Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    {children}
                </div>
            </motion.div>
        </div>);
};
`

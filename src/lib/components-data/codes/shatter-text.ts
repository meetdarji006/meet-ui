// Auto-generated from shatter-text.tsx
// Run: npm run generate-codes

export const shatterTextCodeTS = `"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ShatterTextProps {
    /** Text to shatter */
    text?: string
    /** Duration of shatter animation */
    duration?: number
    /** Scatter distance */
    scatter?: number
    /** Initial delay */
    delay?: number
    /** Trigger animation only once */
    once?: boolean
    /** Additional CSS classes */
    className?: string
}

export const ShatterText = ({
    text = "SHATTER",
    duration = 0.8,
    scatter = 100,
    delay = 0,
    once = false,
    className
}: ShatterTextProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-10%" })
    const [isClient, setIsClient] = useState(false)
    const [transforms, setTransforms] = useState<{ x: number; y: number; rotate: number; scale: number }[]>([])

    const characters = text.split("")

    // Generate random transforms only on client side to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true)
        const newTransforms = characters.map(() => {
            const angle = Math.random() * 360
            const radians = (angle * Math.PI) / 180
            const distance = scatter * (0.5 + Math.random() * 0.5)

            return {
                x: Math.cos(radians) * distance,
                y: Math.sin(radians) * distance,
                rotate: (Math.random() - 0.5) * 180,
                scale: 0.5 + Math.random() * 0.5,
            }
        })
        setTransforms(newTransforms)
    }, [text, scatter])

    return (
        <motion.span
            ref={ref}
            className={cn("inline-flex flex-wrap justify-center", className)}
            initial="hidden"
            animate={isClient && isInView ? "visible" : "hidden"}
        >
            {characters.map((char, i) => {
                const transform = transforms[i] || { x: 0, y: 0, rotate: 0, scale: 1 }

                return (
                    <motion.span
                        key={i}
                        className="inline-block will-change-transform"
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: transform.x,
                                y: transform.y,
                                rotate: transform.rotate,
                                scale: transform.scale,
                                filter: "blur(10px)",
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration,
                            delay: delay + i * 0.03,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                    >
                        {char === " " ? "\\u00A0" : char}
                    </motion.span>
                )
            })}
        </motion.span>
    )
}
`

export const shatterTextCodeJS = `"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
export const ShatterText = ({ text = "SHATTER", duration = 0.8, scatter = 100, delay = 0, once = false, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });
    const [isClient, setIsClient] = useState(false);
    const [transforms, setTransforms] = useState([]);
    const characters = text.split("");
    // Generate random transforms only on client side to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
        const newTransforms = characters.map(() => {
            const angle = Math.random() * 360;
            const radians = (angle * Math.PI) / 180;
            const distance = scatter * (0.5 + Math.random() * 0.5);
            return {
                x: Math.cos(radians) * distance,
                y: Math.sin(radians) * distance,
                rotate: (Math.random() - 0.5) * 180,
                scale: 0.5 + Math.random() * 0.5,
            };
        });
        setTransforms(newTransforms);
    }, [text, scatter]);
    return (<motion.span ref={ref} className={cn("inline-flex flex-wrap justify-center", className)} initial="hidden" animate={isClient && isInView ? "visible" : "hidden"}>
            {characters.map((char, i) => {
            const transform = transforms[i] || { x: 0, y: 0, rotate: 0, scale: 1 };
            return (<motion.span key={i} className="inline-block will-change-transform" variants={{
                    hidden: {
                        opacity: 0,
                        x: transform.x,
                        y: transform.y,
                        rotate: transform.rotate,
                        scale: transform.scale,
                        filter: "blur(10px)",
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        filter: "blur(0px)",
                    },
                }} transition={{
                    duration,
                    delay: delay + i * 0.03,
                    ease: [0.25, 0.4, 0.25, 1],
                }}>
                        {char === " " ? "\\u00A0" : char}
                    </motion.span>);
        })}
        </motion.span>);
};
`

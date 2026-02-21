// Auto-generated from shatter-text.tsx
// Run: npm run generate-codes

export const shatterTextCodeTS = `"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useLayoutEffect } from "react"
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
    // Stable ref on wrapper — never changes, so useInView always tracks correctly
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-10%" })
    const [transforms, setTransforms] = useState<{ x: number; y: number; rotate: number; scale: number }[]>([])

    const characters = text.split("")
    const ready = transforms.length > 0

    // useLayoutEffect: client-only, runs before paint
    useLayoutEffect(() => {
        setTransforms(
            characters.map(() => {
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
        )
    }, [text, scatter]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <span ref={ref} className={cn("inline-flex flex-wrap justify-center", className)}>
            {ready ? (
                <motion.span
                    className="inline-flex flex-wrap justify-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {characters.map((char, i) => {
                        const t = transforms[i]
                        return (
                            <motion.span
                                key={i}
                                className="inline-block will-change-transform"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: t.x,
                                        y: t.y,
                                        rotate: t.rotate,
                                        scale: t.scale,
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
            ) : (
                characters.map((char, i) => (
                    <span key={i} className="inline-block opacity-0">
                        {char === " " ? "\\u00A0" : char}
                    </span>
                ))
            )}
        </span>
    )
}
`

export const shatterTextCodeJS = `"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
export const ShatterText = ({ text = "SHATTER", duration = 0.8, scatter = 100, delay = 0, once = false, className }) => {
    // Stable ref on wrapper — never changes, so useInView always tracks correctly
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });
    const [transforms, setTransforms] = useState([]);
    const characters = text.split("");
    const ready = transforms.length > 0;
    // useLayoutEffect: client-only, runs before paint
    useLayoutEffect(() => {
        setTransforms(characters.map(() => {
            const angle = Math.random() * 360;
            const radians = (angle * Math.PI) / 180;
            const distance = scatter * (0.5 + Math.random() * 0.5);
            return {
                x: Math.cos(radians) * distance,
                y: Math.sin(radians) * distance,
                rotate: (Math.random() - 0.5) * 180,
                scale: 0.5 + Math.random() * 0.5,
            };
        }));
    }, [text, scatter]); // eslint-disable-line react-hooks/exhaustive-deps
    return (<span ref={ref} className={cn("inline-flex flex-wrap justify-center", className)}>
            {ready ? (<motion.span className="inline-flex flex-wrap justify-center" initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    {characters.map((char, i) => {
                const t = transforms[i];
                return (<motion.span key={i} className="inline-block will-change-transform" variants={{
                        hidden: {
                            opacity: 0,
                            x: t.x,
                            y: t.y,
                            rotate: t.rotate,
                            scale: t.scale,
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
                </motion.span>) : (characters.map((char, i) => (<span key={i} className="inline-block opacity-0">
                        {char === " " ? "\\u00A0" : char}
                    </span>)))}
        </span>);
};
`

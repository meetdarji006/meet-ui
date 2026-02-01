// Auto-generated from split-text-reveal.tsx
// Run: npm run generate-codes

export const splitTextRevealCodeTS = `"use client"

import { motion, useAnimation, useInView, Variants } from "framer-motion"
import { useEffect, useRef } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface SplitTextRevealProps {
    text?: string
    className?: string
    delay?: number
    duration?: number
    stagger?: number
    once?: boolean
}

export const SplitTextReveal = ({
    text = "ELEGANT",
    className,
    delay = 0,
    duration = 1.5,
    stagger = 0.05,
    once = false
}: SplitTextRevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-10%" })

    const characters = text.split("")
    const centerIndex = characters.length / 2

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
            },
        },
    }

    const charVariants: Variants = {
        hidden: {
            y: "110%", // Reduced travel distance for "quicker" reveal feel
            opacity: 0,
        },
        visible: (i: number) => {
            const dist = Math.abs(i - centerIndex)
            const staggerDelay = dist * stagger

            return {
                y: "0%",
                opacity: 1,
                transition: {
                    delay: staggerDelay,
                    duration: duration,
                    ease: [0.22, 1, 0.36, 1],
                },
            }
        },
    }

    return (
        <div ref={ref} className={cn("flex relative", className)}>
            <motion.div
                key={\`\${text}-\${duration}-\${stagger}-\${delay}\`}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-end flex-wrap justify-center overflow-visible gap-[0.1em]"
            >
                {characters.map((char, i) => (
                    <div
                        key={i}
                        className="overflow-hidden relative flex flex-col justify-end"
                        style={{
                            // Tighter padding for a more compact mask
                            paddingTop: '0.2em',
                            paddingBottom: '0.2em', // Just enough to cover descenders mostly
                            paddingLeft: '0.2em',
                            paddingRight: '0.2em',

                            // Compensate to maintain natural flow
                            marginTop: '-0.1em',
                            marginBottom: '-0.1em',
                            marginLeft: '-0.2em',
                            marginRight: '-0.2em',
                        }}
                    >
                        <motion.span
                            custom={i}
                            variants={charVariants}
                            className={cn(
                                "inline-block will-change-transform leading-none text-center",
                                char === " " ? "min-w-[0.2em]" : ""
                            )}
                        >
                            {char === " " ? "\\u00A0" : char}
                        </motion.span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
`

export const splitTextRevealCodeJS = `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const SplitTextReveal = ({ text = "ELEGANT", className, delay = 0, duration = 1.5, stagger = 0.05, once = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });
    const characters = text.split("");
    const centerIndex = characters.length / 2;
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
            },
        },
    };
    const charVariants = {
        hidden: {
            y: "110%", // Reduced travel distance for "quicker" reveal feel
            opacity: 0,
        },
        visible: (i) => {
            const dist = Math.abs(i - centerIndex);
            const staggerDelay = dist * stagger;
            return {
                y: "0%",
                opacity: 1,
                transition: {
                    delay: staggerDelay,
                    duration: duration,
                    ease: [0.22, 1, 0.36, 1],
                },
            };
        },
    };
    return (<div ref={ref} className={cn("flex relative", className)}>
            <motion.div key={\`\${text}-\${duration}-\${stagger}-\${delay}\`} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex items-end flex-wrap justify-center overflow-visible gap-[0.1em]">
                {characters.map((char, i) => (<div key={i} className="overflow-hidden relative flex flex-col justify-end" style={{
                // Tighter padding for a more compact mask
                paddingTop: '0.2em',
                paddingBottom: '0.2em', // Just enough to cover descenders mostly
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
                // Compensate to maintain natural flow
                marginTop: '-0.1em',
                marginBottom: '-0.1em',
                marginLeft: '-0.2em',
                marginRight: '-0.2em',
            }}>
                        <motion.span custom={i} variants={charVariants} className={cn("inline-block will-change-transform leading-none text-center", char === " " ? "min-w-[0.2em]" : "")}>
                            {char === " " ? "\\u00A0" : char}
                        </motion.span>
                    </div>))}
            </motion.div>
        </div>);
};
`

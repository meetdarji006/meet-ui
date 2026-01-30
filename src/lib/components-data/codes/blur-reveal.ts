// Auto-generated from blur-reveal.tsx
// Run: npm run generate-codes

export const blurRevealCodeTS = `"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurRevealProps {
    text: string
    duration?: number
    delay?: number
    blur?: string
    yOffset?: number
    className?: string
    childClassName?: string
}

export function BlurReveal({
    text,
    duration = 0.8,
    delay = 0,
    blur = "10px",
    yOffset = 20,
    className,
    childClassName,
}: BlurRevealProps) {
    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    }

    const child = {
        hidden: {
            opacity: 0,
            filter: \`blur(\${blur})\`,
            y: yOffset,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration,
            },
        },
    }

    return (
        <motion.div
            className={cn("flex flex-wrap gap-2", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className={cn("inline-block", childClassName)}
                    variants={child}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}
`

export const blurRevealCodeJS = `"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function BlurReveal({ text, duration = 0.8, delay = 0, blur = "10px", yOffset = 20, className, childClassName, }) {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };
    const child = {
        hidden: {
            opacity: 0,
            filter: \`blur(\${blur})\`,
            y: yOffset,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration,
            },
        },
    };
    return (<motion.div className={cn("flex flex-wrap gap-2", className)} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
            {words.map((word, index) => (<motion.span key={index} className={cn("inline-block", childClassName)} variants={child}>
                    {word}
                </motion.span>))}
        </motion.div>);
}
`

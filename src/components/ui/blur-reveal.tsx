"use client"

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface BlurRevealProps {
    text: string;
    duration?: number;
    delay?: number;
    blur?: string;
    yOffset?: number;
    className?: string;
    childClassName?: string;
}

export const BlurReveal = ({
    text,
    duration = 0.8,
    delay = 0,
    blur = "10px",
    yOffset = 20,
    className,
    childClassName,
}: BlurRevealProps) => {
    const words = text.split(" ")

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        },
    }

    const child: Variants = {
        hidden: {
            opacity: 0,
            filter: `blur(${blur})`,
            y: yOffset,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring" as const,
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

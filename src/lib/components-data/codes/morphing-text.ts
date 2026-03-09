// Auto-generated from morphing-text.tsx
// Run: npm run generate-codes

export const morphingTextCodeTS = `"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface MorphingTextProps {
    /** Array of words to morph between */
    words?: string[]
    /** Time between morphs in milliseconds */
    interval?: number
    /** Morph animation duration */
    morphDuration?: number
    /** Additional CSS classes */
    className?: string
}

export const MorphingText = ({
    words = ["CREATIVE", "DYNAMIC", "POWERFUL"],
    interval = 3000,
    morphDuration = 1.2,
    className
}: MorphingTextProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [displayWord, setDisplayWord] = useState(words[0])
    const [width, setWidth] = useState<number | "auto">("auto")
    const measureRef = useRef<HTMLSpanElement>(null)

    const nextWord = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
    }, [words.length])

    useEffect(() => {
        const timer = setInterval(nextWord, interval)
        return () => clearInterval(timer)
    }, [interval, nextWord])

    useEffect(() => {
        setDisplayWord(words[currentIndex])
    }, [currentIndex, words])

    // Measure width after word changes
    useEffect(() => {
        if (measureRef.current) {
            const measuredWidth = measureRef.current.offsetWidth
            setWidth(measuredWidth)
        }
    }, [displayWord])

    return (
        <motion.span
            className={cn("inline-flex relative align-baseline overflow-hidden", className)}
            animate={{ width: width === "auto" ? undefined : width }}
            transition={{
                duration: morphDuration * 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }}
        >
            {/* Invisible measurement element */}
            <span
                ref={measureRef}
                className="invisible absolute whitespace-nowrap"
                aria-hidden
            >
                {displayWord}
            </span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={displayWord}
                    className="inline-flex whitespace-nowrap"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {displayWord.split("").map((char, i) => (
                        <motion.span
                            key={\`\${displayWord}-\${i}\`}
                            className="inline-block will-change-transform"
                            variants={{
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    rotateX: -45,
                                    filter: "blur(8px)",
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    filter: "blur(0px)",
                                    transition: {
                                        duration: morphDuration,
                                        delay: i * 0.04,
                                        ease: [0.25, 0.4, 0.25, 1],
                                    },
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20,
                                    rotateX: 45,
                                    filter: "blur(8px)",
                                    transition: {
                                        duration: morphDuration * 0.4,
                                        delay: i * 0.02,
                                        ease: [0.25, 0.4, 0.25, 1],
                                    },
                                },
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: "800px",
                            }}
                        >
                            {char === " " ? "\\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    )
}
`

export const morphingTextCodeJS = `"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const MorphingText = ({ words = ["CREATIVE", "DYNAMIC", "POWERFUL"], interval = 3000, morphDuration = 1.2, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(words[0]);
    const [width, setWidth] = useState("auto");
    const measureRef = useRef(null);
    const nextWord = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
    }, [words.length]);
    useEffect(() => {
        const timer = setInterval(nextWord, interval);
        return () => clearInterval(timer);
    }, [interval, nextWord]);
    useEffect(() => {
        setDisplayWord(words[currentIndex]);
    }, [currentIndex, words]);
    // Measure width after word changes
    useEffect(() => {
        if (measureRef.current) {
            const measuredWidth = measureRef.current.offsetWidth;
            setWidth(measuredWidth);
        }
    }, [displayWord]);
    return (<motion.span className={cn("inline-flex relative align-baseline overflow-hidden", className)} animate={{ width: width === "auto" ? undefined : width }} transition={{
            duration: morphDuration * 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }}>
            {/* Invisible measurement element */}
            <span ref={measureRef} className="invisible absolute whitespace-nowrap" aria-hidden>
                {displayWord}
            </span>

            <AnimatePresence mode="wait">
                <motion.span key={displayWord} className="inline-flex whitespace-nowrap" initial="initial" animate="animate" exit="exit">
                    {displayWord.split("").map((char, i) => (<motion.span key={\`\${displayWord}-\${i}\`} className="inline-block will-change-transform" variants={{
                initial: {
                    opacity: 0,
                    y: 20,
                    rotateX: -45,
                    filter: "blur(8px)",
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    transition: {
                        duration: morphDuration,
                        delay: i * 0.04,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
                exit: {
                    opacity: 0,
                    y: -20,
                    rotateX: 45,
                    filter: "blur(8px)",
                    transition: {
                        duration: morphDuration * 0.4,
                        delay: i * 0.02,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
            }} style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
            }}>
                            {char === " " ? "\\u00A0" : char}
                        </motion.span>))}
                </motion.span>
            </AnimatePresence>
        </motion.span>);
};
`

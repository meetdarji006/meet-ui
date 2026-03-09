"use client"

import { motion, useScroll, useTransform, MotionValue, cubicBezier } from "framer-motion"
import { useRef, useMemo } from "react"

// Preset easing functions
const easings = {
    linear: [0, 0, 1, 1] as const,
    easeIn: [0.4, 0, 1, 1] as const,
    easeOut: [0, 0, 0.2, 1] as const,
    easeInOut: [0.4, 0, 0.2, 1] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
}

type EasingPreset = keyof typeof easings

interface ScrollFillTextProps {
    text?: string
    className?: string
    fillColor?: string
    emptyColor?: string
    // Scroll trigger control (0 to 1, where 0 = top of viewport, 1 = bottom)
    start?: number  // When element reaches this viewport position, animation starts
    end?: number    // When element reaches this viewport position, animation ends
    // Animation control
    easing?: EasingPreset | [number, number, number, number]
    stagger?: number  // Overlap between characters (0 = no overlap, 1 = full overlap)
}

export const ScrollFillText = ({
    text = "MeetUI - A Open Source Treasure",
    className = "",
    fillColor = "#ffffff",
    emptyColor = "#2f2f2f",
    start = 0.8,
    end = 0.2,
    easing = "easeOut",
    stagger = 0,
}: ScrollFillTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [`start ${start}`, `end ${end}`] as ["start 0.8", "end 0.2"]
    })

    // Get easing values
    const easingValues = useMemo(() => {
        if (Array.isArray(easing)) return easing
        return easings[easing] || easings.easeOut
    }, [easing])

    const words = text.split(" ")

    return (
        <p ref={containerRef} className={className}>
            {words.map((word, wordIndex) => {
                const wordStart = wordIndex / words.length
                const wordEnd = (wordIndex + 1) / words.length

                return (
                    <Word
                        key={wordIndex}
                        word={word}
                        range={[wordStart, wordEnd]}
                        progress={scrollYProgress}
                        fillColor={fillColor}
                        emptyColor={emptyColor}
                        easing={easingValues}
                        stagger={stagger}
                    />
                )
            })}
        </p>
    )
}

interface WordProps {
    word: string
    range: [number, number]
    progress: MotionValue<number>
    fillColor: string
    emptyColor: string
    easing: readonly [number, number, number, number]
    stagger: number
}

const Word = ({ word, range, progress, fillColor, emptyColor, easing, stagger }: WordProps) => {
    const characters = word.split("")
    const charCount = characters.length
    const [start, end] = range

    const adjustedEnd = end - (end - start) * stagger
    const step = (adjustedEnd - start) / charCount

    return (
        <span style={{ display: "inline-block", marginRight: "0.25em" }}>
            {characters.map((char, charIndex) => {
                const charStart = start + charIndex * step
                const charEnd = charStart + step + (stagger * step)

                return (
                    <Character
                        key={charIndex}
                        char={char}
                        range={[charStart, Math.min(charEnd, end)]}
                        progress={progress}
                        fillColor={fillColor}
                        emptyColor={emptyColor}
                        easing={easing}
                    />
                )
            })}
        </span>
    )
}

interface CharacterProps {
    char: string
    range: [number, number]
    progress: MotionValue<number>
    fillColor: string
    emptyColor: string
    easing: readonly [number, number, number, number]
}

const Character = ({ char, range, progress, fillColor, emptyColor, easing }: CharacterProps) => {
    const easingFn = cubicBezier(...easing)
    const opacity = useTransform(progress, range, [0, 1], { ease: easingFn })

    return (
        <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ color: emptyColor }}>{char}</span>
            <motion.span
                style={{
                    position: "absolute",
                    inset: 0,
                    color: fillColor,
                    opacity
                }}
            >
                {char}
            </motion.span>
        </span>
    )
}

// Scroll Fill Text - Pure text fill effect, no wrapper styles

export const scrollFillTextCodeTS = `"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

interface ScrollFillTextProps {
    text?: string
    className?: string
    fillColor?: string
    emptyColor?: string
}

export const ScrollFillText = ({
    text = "YOUR TEXT HERE",
    className = "",
    fillColor = "#1a1a1a",
    emptyColor = "#c4c4b8",
}: ScrollFillTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"]
    })

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
}

const Word = ({ word, range, progress, fillColor, emptyColor }: WordProps) => {
    const characters = word.split("")
    const charCount = characters.length
    const [start, end] = range
    const step = (end - start) / charCount

    return (
        <span style={{ display: "inline-block", marginRight: "0.25em" }}>
            {characters.map((char, charIndex) => {
                const charStart = start + charIndex * step
                const charEnd = charStart + step

                return (
                    <Character
                        key={charIndex}
                        char={char}
                        range={[charStart, charEnd]}
                        progress={progress}
                        fillColor={fillColor}
                        emptyColor={emptyColor}
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
}

const Character = ({ char, range, progress, fillColor, emptyColor }: CharacterProps) => {
    const opacity = useTransform(progress, range, [0, 1])

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
}`

export const scrollFillTextCodeJS = `"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ScrollFillText = ({
    text = "YOUR TEXT HERE",
    className = "",
    fillColor = "#1a1a1a",
    emptyColor = "#c4c4b8",
}) => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"]
    })

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
                    />
                )
            })}
        </p>
    )
}

const Word = ({ word, range, progress, fillColor, emptyColor }) => {
    const characters = word.split("")
    const charCount = characters.length
    const [start, end] = range
    const step = (end - start) / charCount

    return (
        <span style={{ display: "inline-block", marginRight: "0.25em" }}>
            {characters.map((char, charIndex) => {
                const charStart = start + charIndex * step
                const charEnd = charStart + step

                return (
                    <Character
                        key={charIndex}
                        char={char}
                        range={[charStart, charEnd]}
                        progress={progress}
                        fillColor={fillColor}
                        emptyColor={emptyColor}
                    />
                )
            })}
        </span>
    )
}

const Character = ({ char, range, progress, fillColor, emptyColor }) => {
    const opacity = useTransform(progress, range, [0, 1])

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
}`

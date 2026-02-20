export const loopingWordsCodeTS = `"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoopingWordsProps {
    words: string[]
    className?: string
}

export default function LoopingWords({
    words = ["Design", "Develop", "Execute", "Succeed"],
    className,
}: LoopingWordsProps) {
    const loopedWords = [...words, ...words, ...words]
    const listRef = useRef<HTMLUListElement>(null)
    const currentIndexRef = useRef(0)

    const yPercent = useMotionValue(0)
    const yTransform = useTransform(yPercent, (v) => \`\${v}%\`)
    const selectorWidth = useMotionValue(0)
    const selectorWidthSpring = useSpring(selectorWidth, { stiffness: 400, damping: 30 })

    useEffect(() => {
        const wordList = listRef.current
        if (!wordList) return
        const totalItems = loopedWords.length
        const wordHeight = 100 / totalItems
        const wordCount = words.length

        function updateEdgeWidth() {
            if (!wordList) return
            const children = Array.from(wordList.children) as HTMLElement[]
            const centerIndex = (currentIndexRef.current + 1) % children.length
            const centerWord = children[centerIndex]
            if (!centerWord) return
            const centerWordWidth = centerWord.getBoundingClientRect().width
            selectorWidth.set(centerWordWidth + centerWordWidth * 0.06)
        }

        function moveWords() {
            currentIndexRef.current++
            updateEdgeWidth()
            animate(yPercent, -wordHeight * currentIndexRef.current, {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                onComplete: () => {
                    if (currentIndexRef.current >= wordCount * 2) {
                        requestAnimationFrame(() => {
                            currentIndexRef.current -= wordCount
                            yPercent.jump(-wordHeight * currentIndexRef.current)
                        })
                    }
                    scheduleNext()
                },
            })
        }

        let timeoutId: ReturnType<typeof setTimeout>
        function scheduleNext() { timeoutId = setTimeout(moveWords, 1500) }
        updateEdgeWidth()
        timeoutId = setTimeout(moveWords, 1500)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <div className={cn("relative w-full h-[2.7em] px-[0.1em] text-[10vw] md:text-[8vw] leading-[0.9] font-bold select-none font-heading", className)}>
            <div className="relative w-full h-full overflow-hidden">
                <motion.ul ref={listRef} className="relative flex flex-col items-center m-0 p-0 list-none" style={{ y: yTransform }}>
                    {loopedWords.map((word, i) => (
                        <li key={i} className="flex items-center justify-center text-center uppercase whitespace-nowrap">
                            <p className="m-0">{word}</p>
                        </li>
                    ))}
                </motion.ul>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_5%,transparent_40%,transparent_60%,hsl(var(--background))_95%)] pointer-events-none z-10" />
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[0.9em] pointer-events-none z-20" style={{ width: selectorWidthSpring }}>
                <div className="absolute top-0 left-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-l-[0.035em] border-current text-white" />
                <div className="absolute top-0 right-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-r-[0.035em] border-current text-white" />
                <div className="absolute bottom-0 left-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-l-[0.035em] border-current text-white" />
                <div className="absolute bottom-0 right-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-r-[0.035em] border-current text-white" />
            </motion.div>
        </div>
    )
}
`

export const loopingWordsCodeJS = `"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion"
import { cn } from "@/lib/utils"

export default function LoopingWords({
    words = ["Design", "Develop", "Execute", "Succeed"],
    className,
}) {
    const loopedWords = [...words, ...words, ...words]
    const listRef = useRef(null)
    const currentIndexRef = useRef(0)

    const yPercent = useMotionValue(0)
    const yTransform = useTransform(yPercent, (v) => \`\${v}%\`)
    const selectorWidth = useMotionValue(0)
    const selectorWidthSpring = useSpring(selectorWidth, { stiffness: 400, damping: 30 })

    useEffect(() => {
        const wordList = listRef.current
        if (!wordList) return
        const totalItems = loopedWords.length
        const wordHeight = 100 / totalItems
        const wordCount = words.length

        function updateEdgeWidth() {
            if (!wordList) return
            const children = Array.from(wordList.children)
            const centerIndex = (currentIndexRef.current + 1) % children.length
            const centerWord = children[centerIndex]
            if (!centerWord) return
            const centerWordWidth = centerWord.getBoundingClientRect().width
            selectorWidth.set(centerWordWidth + centerWordWidth * 0.06)
        }

        function moveWords() {
            currentIndexRef.current++
            updateEdgeWidth()
            animate(yPercent, -wordHeight * currentIndexRef.current, {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                onComplete: () => {
                    if (currentIndexRef.current >= wordCount * 2) {
                        requestAnimationFrame(() => {
                            currentIndexRef.current -= wordCount
                            yPercent.jump(-wordHeight * currentIndexRef.current)
                        })
                    }
                    scheduleNext()
                },
            })
        }

        let timeoutId
        function scheduleNext() { timeoutId = setTimeout(moveWords, 1500) }
        updateEdgeWidth()
        timeoutId = setTimeout(moveWords, 1500)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <div className={cn("relative w-full h-[2.7em] px-[0.1em] text-[10vw] md:text-[8vw] leading-[0.9] font-bold select-none font-heading", className)}>
            <div className="relative w-full h-full overflow-hidden">
                <motion.ul ref={listRef} className="relative flex flex-col items-center m-0 p-0 list-none" style={{ y: yTransform }}>
                    {loopedWords.map((word, i) => (
                        <li key={i} className="flex items-center justify-center text-center uppercase whitespace-nowrap">
                            <p className="m-0">{word}</p>
                        </li>
                    ))}
                </motion.ul>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_5%,transparent_40%,transparent_60%,hsl(var(--background))_95%)] pointer-events-none z-10" />
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[0.9em] pointer-events-none z-20" style={{ width: selectorWidthSpring }}>
                <div className="absolute top-0 left-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-l-[0.035em] border-current text-white" />
                <div className="absolute top-0 right-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-r-[0.035em] border-current text-white" />
                <div className="absolute bottom-0 left-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-l-[0.035em] border-current text-white" />
                <div className="absolute bottom-0 right-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-r-[0.035em] border-current text-white" />
            </motion.div>
        </div>
    )
}
`

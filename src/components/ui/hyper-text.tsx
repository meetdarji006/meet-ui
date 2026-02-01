import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, Variants } from "framer-motion"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface HyperTextProps {
    text: string
    duration?: number
    framerProps?: Variants
    className?: string
    animateOnLoad?: boolean
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export function HyperText({
    text,
    duration = 800,
    framerProps = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 3 },
    },
    className,
    animateOnLoad = true,
}: HyperTextProps) {
    const [displayText, setDisplayText] = useState(text.split(""))
    const [trigger, setTrigger] = useState(false)
    const iterations = useRef(0)
    const isFirstRender = useRef(true)

    const triggerAnimation = () => {
        iterations.current = 0
        setTrigger(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!trigger) {
                clearInterval(interval)
                return
            }
            if (iterations.current < text.length) {
                setDisplayText((t) =>
                    t.map((l, i) =>
                        l === " "
                            ? l
                            : i <= iterations.current
                                ? text[i]
                                : alphabets[getRandomInt(26)]
                    )
                )
                iterations.current = iterations.current + 0.1
            } else {
                setTrigger(false)
                clearInterval(interval)
            }
        }, duration / (text.length * 10))
        // Clean up interval on unmount
        return () => clearInterval(interval)
    }, [text, duration, trigger, animateOnLoad])

    useEffect(() => {
        if (!animateOnLoad && isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        triggerAnimation()
    }, [text])

    return (
        <div
            className="overflow-hidden py-2 flex cursor-default scale-100"
            onMouseEnter={triggerAnimation}
        >
            <AnimatePresence mode="wait">
                {displayText.map((letter, i) => (
                    <motion.h1
                        key={i}
                        className={cn("font-mono", letter === " " ? "w-3" : "", className)}
                        {...framerProps}
                    >
                        {letter.toUpperCase()}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    )
}

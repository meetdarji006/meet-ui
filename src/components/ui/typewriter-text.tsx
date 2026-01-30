"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
    text: string | string[]
    speed?: number
    deleteSpeed?: number
    waitTime?: number
    cursor?: boolean
    cursorChar?: string
    loop?: boolean
    className?: string
}

export function TypewriterText({
    text,
    speed = 100,
    deleteSpeed = 50,
    waitTime = 2000,
    cursor = true,
    cursorChar = "|",
    loop = true,
    className,
}: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(speed)

    const textArray = Array.isArray(text) ? text : [text]

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % textArray.length
            const fullText = textArray[i]

            // Faster logic for deleting text
            setDisplayText(
                isDeleting
                    ? fullText.substring(0, displayText.length - 1)
                    : fullText.substring(0, displayText.length + 1)
            )

            setTypingSpeed(isDeleting ? deleteSpeed : speed)

            if (!isDeleting && displayText === fullText) {
                if (!loop && loopNum === textArray.length - 1) return
                setTimeout(() => setIsDeleting(true), waitTime)
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)

        return () => clearTimeout(timer)
    }, [
        displayText,
        isDeleting,
        loopNum,
        textArray,
        speed,
        deleteSpeed,
        waitTime,
        loop,
        typingSpeed,
    ])

    return (
        <div className={cn("inline-flex items-center", className)}>
            <span>{displayText}</span>
            {cursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={cn("ml-1", className)}
                >
                    {cursorChar}
                </motion.span>
            )}
        </div>
    )
}

"use client"

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    strength?: number
}

export function MagneticButton({
    children,
    className,
    strength = 0.5,
    ...props
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const button = buttonRef.current
        if (!button) return

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

        const xToText = gsap.quickTo(textRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
        const yToText = gsap.quickTo(textRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { left, top, width, height } = button.getBoundingClientRect()
            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)

            xTo(x * strength)
            yTo(y * strength)

            if (textRef.current) {
                xToText(x * strength * 0.5)
                yToText(y * strength * 0.5)
            }
        }

        const handleMouseLeave = () => {
            xTo(0)
            yTo(0)
            if (textRef.current) {
                xToText(0)
                yToText(0)
            }
        }

        button.addEventListener("mousemove", handleMouseMove)
        button.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            button.removeEventListener("mousemove", handleMouseMove)
            button.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [strength])

    return (
        <button
            ref={buttonRef}
            className={cn("relative px-6 py-3 rounded-full bg-zinc-900 text-white font-medium transition-colors hover:bg-zinc-800", className)}
            {...props}
        >
            <span ref={textRef} className="relative block z-10 pointer-events-none">
                {children}
            </span>
        </button>
    )
}

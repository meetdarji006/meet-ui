export const animatedCounterCodeTS = `"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
    value?: number
    duration?: number
    delay?: number
    prefix?: string
    suffix?: string
    separator?: boolean
    className?: string
}

function Digit({ digit, duration, delay }: { digit: number; duration: number; delay: number }) {
    const mv = useMotionValue(0)
    const spring = useSpring(mv, {
        stiffness: 100,
        damping: 30,
        duration: duration,
    })
    const y = useTransform(spring, (v) => \`\${-v * 10}%\`)

    useEffect(() => {
        const timeout = setTimeout(() => {
            mv.set(digit)
        }, delay * 1000)
        return () => clearTimeout(timeout)
    }, [digit, delay, mv])

    return (
        <span className="relative inline-flex h-[1em] w-[0.65em] overflow-hidden">
            <motion.span
                className="absolute inset-x-0 flex flex-col items-center"
                style={{ y }}
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} className="flex h-[1em] items-center justify-center leading-none tabular-nums">
                        {i}
                    </span>
                ))}
            </motion.span>
        </span>
    )
}

function Separator() {
    return <span className="inline-block w-[0.3em] text-center">,</span>
}

export default function AnimatedCounter({
    value = 1234,
    duration = 2,
    delay = 0,
    prefix = "",
    suffix = "",
    separator = true,
    className,
}: AnimatedCounterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    const valueStr = String(Math.floor(Math.abs(value)))
    const digits = valueStr.split("").map(Number)

    const elements: { type: "digit" | "separator"; value: number }[] = []
    const len = digits.length
    digits.forEach((d, i) => {
        elements.push({ type: "digit", value: d })
        const posFromRight = len - 1 - i
        if (separator && posFromRight > 0 && posFromRight % 3 === 0) {
            elements.push({ type: "separator", value: 0 })
        }
    })

    return (
        <span
            ref={ref}
            className={cn(
                "inline-flex items-center font-bold tabular-nums",
                className
            )}
        >
            {prefix && <span className="mr-[0.05em]">{prefix}</span>}
            {value < 0 && <span>-</span>}
            {elements.map((el, i) =>
                el.type === "separator" ? (
                    <Separator key={\`sep-\${i}\`} />
                ) : (
                    <Digit
                        key={\`digit-\${i}\`}
                        digit={isInView ? el.value : 0}
                        duration={duration}
                        delay={delay + i * 0.08}
                    />
                )
            )}
            {suffix && <span className="ml-[0.05em]">{suffix}</span>}
        </span>
    )
}
`

export const animatedCounterCodeJS = `"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function Digit({ digit, duration, delay }) {
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { stiffness: 100, damping: 30, duration });
    const y = useTransform(spring, (v) => \`\${-v * 10}%\`);
    useEffect(() => {
        const timeout = setTimeout(() => { mv.set(digit); }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [digit, delay, mv]);
    return (
        <span className="relative inline-flex h-[1em] w-[0.65em] overflow-hidden">
            <motion.span className="absolute inset-x-0 flex flex-col items-center" style={{ y }}>
                {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} className="flex h-[1em] items-center justify-center leading-none tabular-nums">{i}</span>
                ))}
            </motion.span>
        </span>
    );
}

function Separator() {
    return <span className="inline-block w-[0.3em] text-center">,</span>;
}

export default function AnimatedCounter({ value = 1234, duration = 2, delay = 0, prefix = "", suffix = "", separator = true, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const valueStr = String(Math.floor(Math.abs(value)));
    const digits = valueStr.split("").map(Number);
    const elements = [];
    const len = digits.length;
    digits.forEach((d, i) => {
        elements.push({ type: "digit", value: d });
        const posFromRight = len - 1 - i;
        if (separator && posFromRight > 0 && posFromRight % 3 === 0) {
            elements.push({ type: "separator", value: 0 });
        }
    });
    return (
        <span ref={ref} className={cn("inline-flex items-center font-bold tabular-nums", className)}>
            {prefix && <span className="mr-[0.05em]">{prefix}</span>}
            {value < 0 && <span>-</span>}
            {elements.map((el, i) =>
                el.type === "separator" ? (
                    <Separator key={\`sep-\${i}\`} />
                ) : (
                    <Digit key={\`digit-\${i}\`} digit={isInView ? el.value : 0} duration={duration} delay={delay + i * 0.08} />
                )
            )}
            {suffix && <span className="ml-[0.05em]">{suffix}</span>}
        </span>
    );
}
`

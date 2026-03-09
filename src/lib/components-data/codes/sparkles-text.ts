// Auto-generated from sparkles-text.tsx
// Run: npm run generate-codes

export const sparklesTextCodeTS = `"use client"

import CSS from 'csstype'
import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface SparklesTextProps {
    /** Text to display */
    text: string
    /** Color of sparkles */
    colors?: { first: string, second: string }
    /** Additional CSS classes */
    className?: string
    /** Size of sparkles */
    sparklesCount?: number
}

const Sparkle = ({ size, color, style, onComplete }: any) => {
    return (
        <motion.span
            className="absolute pointer-events-none block z-20"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
                scale: [0, 1, 0],
                rotate: [0, 180],
                opacity: [1, 1, 0]
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
            style={{
                top: style.top,
                left: style.left,
                width: size,
                height: size,
            }}
        >
            <svg
                viewBox="0 0 160 160"
                style={{ width: '100%', height: '100%', fill: color }}
            >
                <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
            </svg>
        </motion.span>
    )
}

export const SparklesText = ({
    text = "Sparkles",
    colors = { first: "#FFC233", second: "#FFA500" },
    className,
    sparklesCount = 10,
}: SparklesTextProps) => {
    const [sparkles, setSparkles] = useState<any[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now()
            const size = Math.random() * 12 + 8
            const color = Math.random() > 0.5 ? colors.first : colors.second
            const style = {
                top: \`\${Math.random() * 100}%\`,
                left: \`\${Math.random() * 100}%\`,
            }

            setSparkles(prev => {
                // Keep array size manageable
                const next = [...prev, { id: now, size, color, style }]
                if (next.length > sparklesCount) return next.slice(next.length - sparklesCount)
                return next
            })
        }, 600)

        return () => clearInterval(interval)
    }, [colors.first, colors.second, sparklesCount])

    const removeSparkle = (id: number) => {
        setSparkles(prev => prev.filter(s => s.id !== id))
    }

    return (
        <span className={cn("inline-block relative isolate", className)}>
            {/* Base text */}
            <span className="relative z-10">{text}</span>

            {/* Sparkles Overlay */}
            <span className="absolute inset-0 z-20 pointer-events-none">
                {sparkles.map(sparkle => (
                    <Sparkle
                        key={sparkle.id}
                        {...sparkle}
                        onComplete={() => removeSparkle(sparkle.id)}
                    />
                ))}
            </span>
        </span>
    )
}
`

export const sparklesTextCodeJS = `"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Sparkle = ({ size, color, style, onComplete }) => {
    return (<motion.span className="absolute pointer-events-none block z-20" initial={{ scale: 0, rotate: 0 }} animate={{
            scale: [0, 1, 0],
            rotate: [0, 180],
            opacity: [1, 1, 0]
        }} transition={{ duration: 0.6, ease: "easeInOut" }} onAnimationComplete={onComplete} style={{
            top: style.top,
            left: style.left,
            width: size,
            height: size,
        }}>
            <svg viewBox="0 0 160 160" style={{ width: '100%', height: '100%', fill: color }}>
                <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"/>
            </svg>
        </motion.span>);
};
export const SparklesText = ({ text = "Sparkles", colors = { first: "#FFC233", second: "#FFA500" }, className, sparklesCount = 10, }) => {
    const [sparkles, setSparkles] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const size = Math.random() * 12 + 8;
            const color = Math.random() > 0.5 ? colors.first : colors.second;
            const style = {
                top: \`\${Math.random() * 100}%\`,
                left: \`\${Math.random() * 100}%\`,
            };
            setSparkles(prev => {
                // Keep array size manageable
                const next = [...prev, { id: now, size, color, style }];
                if (next.length > sparklesCount)
                    return next.slice(next.length - sparklesCount);
                return next;
            });
        }, 600);
        return () => clearInterval(interval);
    }, [colors.first, colors.second, sparklesCount]);
    const removeSparkle = (id) => {
        setSparkles(prev => prev.filter(s => s.id !== id));
    };
    return (<span className={cn("inline-block relative isolate", className)}>
            {/* Base text */}
            <span className="relative z-10">{text}</span>

            {/* Sparkles Overlay */}
            <span className="absolute inset-0 z-20 pointer-events-none">
                {sparkles.map(sparkle => (<Sparkle key={sparkle.id} {...sparkle} onComplete={() => removeSparkle(sparkle.id)}/>))}
            </span>
        </span>);
};
`

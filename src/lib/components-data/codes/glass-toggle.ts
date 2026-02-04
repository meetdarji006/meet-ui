// Auto-generated from glass-toggle.tsx
// Run: npm run generate-codes

export const glassToggleCodeTS = `"use client"

import React from "react"
import { motion, Transition } from "framer-motion"
import { cn } from "@/lib/utils"
import { Moon, User } from "lucide-react"

interface GlassToggleProps {
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
    disabled?: boolean
    className?: string

    // Dimensions
    width?: number
    height?: number
    orbSize?: number

    // Configuration
    labels?: {
        on?: string
        off?: string
    }
    icons?: {
        on?: React.ReactNode
        off?: React.ReactNode
    }

    // Styling
    colors?: {
        trackOn?: string
        trackOff?: string
        orbOn?: string
        orbOff?: string
        textOn?: string
        textOff?: string
    }

    easing?: string | number[] // "easeInOut", "linear" or cubic-bezier array
    showText?: boolean
}

export function GlassToggle({
    checked = false,
    onCheckedChange,
    disabled = false,
    className,

    width = 300,  // Slightly reduced default width for better proportion with 100px orb
    height = 100,
    orbSize = 100,

    labels = { on: "Work", off: "Sleep" },
    icons,

    colors = {
        trackOn: "linear-gradient(90deg, rgba(255, 220, 100, 0.1), rgba(255, 200, 0, 0.3))",
        trackOff: "linear-gradient(90deg, rgba(20, 20, 60, 0.7), rgba(80, 40, 200, 0.5))",
        orbOn: "radial-gradient(circle at 35% 35%, rgba(255,220,0,0.8) 0%, rgba(255,180,0,0.2) 50%, transparent 100%)",
        orbOff: "radial-gradient(circle at 65% 35%, rgba(60,60,200,0.9) 0%, rgba(30,30,150,0.2) 50%, transparent 100%)",
    },

    easing = "anticipate", // "spring" effect by default via transition prop, or custom string
    showText = true,
}: GlassToggleProps) {
    const [isOn, setIsOn] = React.useState(checked)

    React.useEffect(() => {
        setIsOn(checked)
    }, [checked])

    const handleToggle = () => {
        if (disabled) return
        const newState = !isOn
        setIsOn(newState)
        onCheckedChange?.(newState)
    }

    // Calculate Layout
    const padding = 16
    const travelDistance = width - orbSize - (padding * 2)

    // Transition Config
    // If easing is a spring name like "spring", we use type: spring.
    // Otherwise we use type: tween with ease prop.
    const isSpring = easing === "spring" || easing === "bouncy"

    const transitionConfig: Transition = isSpring ? {
        type: "spring",
        stiffness: 300,
        damping: 20
    } : {
        type: "tween",
        ease: easing as any, // "linear", "circIn", "anticipate", etc.
        duration: 0.6
    }

    return (
        <div
            onClick={handleToggle}
            className={cn(
                "relative flex cursor-pointer items-center transition-transform duration-300",
                disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105",
                className
            )}
            style={{
                width,
                height
            }}
        >
            {/* Background Capsule - The Track */}
            <div
                className="absolute inset-x-8 inset-y-2 rounded-full transition-all duration-700 ease-out border border-white/10"
                style={{
                    background: isOn ? colors.trackOn : colors.trackOff,
                    backdropFilter: "blur(12px)",
                    boxShadow: \`
                inset 1px 1px 2px rgba(255, 255, 255, 0.2),
                inset -1px -1px 2px rgba(0, 0, 0, 0.3),
                0 10px 40px -10px rgba(0,0,0,0.4)
            \`
                }}
            >
            </div>

            {/* Text Labels */}
            {showText && <div
                className="absolute inset-0 flex items-center justify-between px-16 pointer-events-none z-10"
                style={{ paddingLeft: width * 0.22, paddingRight: width * 0.22 }}
            >
                {/* Off Label (Sleep) */}
                <div className="relative h-10 w-20 flex items-center justify-center">
                    <motion.span
                        initial={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        animate={{
                            opacity: isOn ? 0 : 1,
                            x: isOn ? -20 : 0,
                            filter: isOn ? "blur(10px)" : "blur(0px)"
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute whitespace-nowrap text-3xl font-semibold tracking-wide mix-blend-overlay"
                        style={{ color: colors.textOff || "white" }}
                    >
                        {labels.off}
                    </motion.span>
                </div>

                {/* On Label (Work) */}
                <div className="relative h-10 w-20 flex items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                        animate={{
                            opacity: isOn ? 1 : 0,
                            x: isOn ? 0 : 20,
                            filter: isOn ? "blur(0px)" : "blur(10px)"
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute whitespace-nowrap text-3xl font-semibold tracking-wide mix-blend-overlay"
                        style={{ color: colors.textOn || "white" }}
                    >
                        {labels.on}
                    </motion.span>
                </div>
            </div>}

            {/* The Orb - Floating sphere that moves */}
            <motion.div
                className="absolute rounded-full z-20 flex items-center justify-center"
                initial={false}
                animate={{
                    x: isOn ? padding : (padding + travelDistance),
                }}
                transition={transitionConfig}
                style={{
                    width: orbSize,
                    height: orbSize,
                    left: 0
                }}
            >
                {/* ORB GLASS LAYER 1 */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.0) 100%)",
                        backdropFilter: "blur(5px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        boxShadow: \`
                    inset 4px 4px 10px rgba(255,255,255,0.3),
                    inset -4px -4px 10px rgba(0,0,0,0.1),
                    0 15px 40px rgba(0,0,0,0.3)
                \`
                    }}
                />

                {/* ORB GLOW - Specific to state */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-80"
                    animate={{
                        background: isOn ? colors.orbOn : colors.orbOff
                    }}
                />

                {/* ORB REFLECTIONS */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute -left-2 -top-2 h-2/3 w-2/3 rounded-full bg-linear-to-br from-white to-transparent opacity-40 blur-md" />
                    <div className="absolute right-4 bottom-4 h-1/3 w-1/3 rounded-full bg-linear-to-tl from-white/20 to-transparent opacity-30 blur-lg" />
                </div>

                {/* ICON CONTAINER */}
                <motion.div
                    className="relative z-10 text-white drop-shadow-md"
                    animate={{
                        scale: [1, 0.8, 1],
                        rotate: isOn ? 0 : -10
                    }}
                    transition={{ duration: 0.4 }}
                >
                    {isOn
                        ? (icons?.on || <User size={orbSize * 0.5} fill="white" className="drop-shadow-lg" />)
                        : (icons?.off || <Moon size={orbSize * 0.5} fill="white" className="drop-shadow-lg" />)
                    }
                </motion.div>

            </motion.div>
        </div>
    )
}
`

export const glassToggleCodeJS = `"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, User } from "lucide-react";
export function GlassToggle({ checked = false, onCheckedChange, disabled = false, className, width = 300, // Slightly reduced default width for better proportion with 100px orb
height = 100, orbSize = 100, labels = { on: "Work", off: "Sleep" }, icons, colors = {
    trackOn: "linear-gradient(90deg, rgba(255, 220, 100, 0.1), rgba(255, 200, 0, 0.3))",
    trackOff: "linear-gradient(90deg, rgba(20, 20, 60, 0.7), rgba(80, 40, 200, 0.5))",
    orbOn: "radial-gradient(circle at 35% 35%, rgba(255,220,0,0.8) 0%, rgba(255,180,0,0.2) 50%, transparent 100%)",
    orbOff: "radial-gradient(circle at 65% 35%, rgba(60,60,200,0.9) 0%, rgba(30,30,150,0.2) 50%, transparent 100%)",
}, easing = "anticipate", // "spring" effect by default via transition prop, or custom string
showText = true, }) {
    const [isOn, setIsOn] = React.useState(checked);
    React.useEffect(() => {
        setIsOn(checked);
    }, [checked]);
    const handleToggle = () => {
        if (disabled)
            return;
        const newState = !isOn;
        setIsOn(newState);
        onCheckedChange?.(newState);
    };
    // Calculate Layout
    const padding = 16;
    const travelDistance = width - orbSize - (padding * 2);
    // Transition Config
    // If easing is a spring name like "spring", we use type: spring.
    // Otherwise we use type: tween with ease prop.
    const isSpring = easing === "spring" || easing === "bouncy";
    const transitionConfig = isSpring ? {
        type: "spring",
        stiffness: 300,
        damping: 20
    } : {
        type: "tween",
        ease: easing, // "linear", "circIn", "anticipate", etc.
        duration: 0.6
    };
    return (<div onClick={handleToggle} className={cn("relative flex cursor-pointer items-center transition-transform duration-300", disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105", className)} style={{
            width,
            height
        }}>
            {/* Background Capsule - The Track */}
            <div className="absolute inset-x-8 inset-y-2 rounded-full transition-all duration-700 ease-out border border-white/10" style={{
            background: isOn ? colors.trackOn : colors.trackOff,
            backdropFilter: "blur(12px)",
            boxShadow: \`
                inset 1px 1px 2px rgba(255, 255, 255, 0.2),
                inset -1px -1px 2px rgba(0, 0, 0, 0.3),
                0 10px 40px -10px rgba(0,0,0,0.4)
            \`
        }}>
            </div>

            {/* Text Labels */}
            {showText && <div className="absolute inset-0 flex items-center justify-between px-16 pointer-events-none z-10" style={{ paddingLeft: width * 0.22, paddingRight: width * 0.22 }}>
                {/* Off Label (Sleep) */}
                <div className="relative h-10 w-20 flex items-center justify-center">
                    <motion.span initial={{ opacity: 1, x: 0, filter: "blur(0px)" }} animate={{
                opacity: isOn ? 0 : 1,
                x: isOn ? -20 : 0,
                filter: isOn ? "blur(10px)" : "blur(0px)"
            }} transition={{ duration: 0.5 }} className="absolute whitespace-nowrap text-3xl font-semibold tracking-wide mix-blend-overlay" style={{ color: colors.textOff || "white" }}>
                        {labels.off}
                    </motion.span>
                </div>

                {/* On Label (Work) */}
                <div className="relative h-10 w-20 flex items-center justify-center">
                    <motion.span initial={{ opacity: 0, x: 20, filter: "blur(10px)" }} animate={{
                opacity: isOn ? 1 : 0,
                x: isOn ? 0 : 20,
                filter: isOn ? "blur(0px)" : "blur(10px)"
            }} transition={{ duration: 0.5 }} className="absolute whitespace-nowrap text-3xl font-semibold tracking-wide mix-blend-overlay" style={{ color: colors.textOn || "white" }}>
                        {labels.on}
                    </motion.span>
                </div>
            </div>}

            {/* The Orb - Floating sphere that moves */}
            <motion.div className="absolute rounded-full z-20 flex items-center justify-center" initial={false} animate={{
            x: isOn ? padding : (padding + travelDistance),
        }} transition={transitionConfig} style={{
            width: orbSize,
            height: orbSize,
            left: 0
        }}>
                {/* ORB GLASS LAYER 1 */}
                <div className="absolute inset-0 rounded-full" style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.0) 100%)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: \`
                    inset 4px 4px 10px rgba(255,255,255,0.3),
                    inset -4px -4px 10px rgba(0,0,0,0.1),
                    0 15px 40px rgba(0,0,0,0.3)
                \`
        }}/>

                {/* ORB GLOW - Specific to state */}
                <motion.div className="absolute inset-0 rounded-full opacity-80" animate={{
            background: isOn ? colors.orbOn : colors.orbOff
        }}/>

                {/* ORB REFLECTIONS */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute -left-2 -top-2 h-2/3 w-2/3 rounded-full bg-linear-to-br from-white to-transparent opacity-40 blur-md"/>
                    <div className="absolute right-4 bottom-4 h-1/3 w-1/3 rounded-full bg-linear-to-tl from-white/20 to-transparent opacity-30 blur-lg"/>
                </div>

                {/* ICON CONTAINER */}
                <motion.div className="relative z-10 text-white drop-shadow-md" animate={{
            scale: [1, 0.8, 1],
            rotate: isOn ? 0 : -10
        }} transition={{ duration: 0.4 }}>
                    {isOn
            ? (icons?.on || <User size={orbSize * 0.5} fill="white" className="drop-shadow-lg"/>)
            : (icons?.off || <Moon size={orbSize * 0.5} fill="white" className="drop-shadow-lg"/>)}
                </motion.div>

            </motion.div>
        </div>);
}
`

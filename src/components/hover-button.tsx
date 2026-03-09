"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends HTMLMotionProps<"button"> {
    /** First state text (default visible) */
    text: string
    /** Optional second state text (translation target). Defaults to `text` if not provided. */
    hoverText?: string
    /** Optional icon to display next to the text */
    icon?: React.ReactNode
    /** Custom class name for the wrapper button */
    className?: string
}

export const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
    ({ text, hoverText, icon, className, ...props }, ref) => {
        // Fallback to original text if hoverText isn't supplied
        const alternateText = hoverText || text

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative flex items-center justify-center h-11 px-6 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden group border border-white/10",
                    "bg-[#512FEB] hover:!shadow-[0_0_5px_rgba(255,255,255,0.4)] cursor-pointer", // Primary Background & hover shadow
                    className
                )}
                {...props}
            >
                <div className="relative h-[24px] overflow-hidden flex items-start justify-center">
                    <div className="flex flex-col items-center gap-[16px] transform group-hover:-translate-y-[40px] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">
                        {/* First state */}
                        <div className="flex items-center gap-2 h-[24px]">
                            <span className="text-[14px] leading-tight">{text}</span>
                            {icon && <span className="flex items-center justify-center shrink-0 w-4 h-4">{icon}</span>}
                        </div>
                        {/* Second state */}
                        <div className="flex items-center gap-2 h-[24px]">
                            <span className="text-[14px] leading-tight">{alternateText}</span>
                            {icon && <span className="flex items-center justify-center shrink-0 w-4 h-4 rotate-45">{icon}</span>}
                        </div>
                    </div>
                </div>
            </motion.button>
        )
    }
)

HoverButton.displayName = "HoverButton"

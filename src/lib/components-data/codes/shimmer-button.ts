// Auto-generated from shimmer-button.tsx
// Run: npm run generate-codes

export const shimmerButtonCodeTS = `"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    shimmerColor?: string
    shimmerSize?: string
    borderRadius?: string
    shimmerDuration?: string
    background?: string
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            children,
            className,
            shimmerColor = "#ffffff",
            shimmerSize = "0.1em",
            borderRadius = "100px",
            shimmerDuration = "2s",
            background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            ...props
        },
        ref
    ) => {
        return (
            <motion.button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center overflow-hidden px-6 py-3 font-medium text-white transition-all",
                    "hover:scale-105 active:scale-95",
                    className
                )}
                style={{
                    borderRadius,
                    background,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {/* Shimmer effect */}
                <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ borderRadius }}
                >
                    <span
                        className="absolute inset-0 -translate-x-full animate-shimmer"
                        style={{
                            background: \`linear-gradient(90deg, transparent, \${shimmerColor}40, transparent)\`,
                            animationDuration: shimmerDuration,
                        }}
                    />
                </span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>

                {/* Glow effect */}
                <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{
                        borderRadius,
                        boxShadow: \`0 0 20px \${shimmerColor}60, 0 0 40px \${shimmerColor}30\`,
                    }}
                />
            </motion.button>
        )
    }
)

ShimmerButton.displayName = "ShimmerButton"
`

export const shimmerButtonCodeJS = `"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const ShimmerButton = React.forwardRef(({ children, className, shimmerColor = "#ffffff", shimmerSize = "0.1em", borderRadius = "100px", shimmerDuration = "2s", background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", ...props }, ref) => {
    return (<motion.button ref={ref} className={cn("relative inline-flex items-center justify-center overflow-hidden px-6 py-3 font-medium text-white transition-all", "hover:scale-105 active:scale-95", className)} style={{
            borderRadius,
            background,
        }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
                {/* Shimmer effect */}
                <span className="absolute inset-0 overflow-hidden" style={{ borderRadius }}>
                    <span className="absolute inset-0 -translate-x-full animate-shimmer" style={{
            background: \`linear-gradient(90deg, transparent, \${shimmerColor}40, transparent)\`,
            animationDuration: shimmerDuration,
        }}/>
                </span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>

                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" style={{
            borderRadius,
            boxShadow: \`0 0 20px \${shimmerColor}60, 0 0 40px \${shimmerColor}30\`,
        }}/>
            </motion.button>);
});
ShimmerButton.displayName = "ShimmerButton";
`

"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    size?: "sm" | "md" | "lg"
    showText?: boolean
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
    const sizes = {
        sm: { icon: "w-6 h-6", text: "text-lg" },
        md: { icon: "w-8 h-8", text: "text-xl" },
        lg: { icon: "w-10 h-10", text: "text-2xl" }
    }

    return (
        <div className={cn("flex items-center gap-2.5", className)}>
            {/* Logo Icon - Abstract M shape with gradient */}
            <div className={cn("relative", sizes[size].icon)}>
                {/* Gradient background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-50" />

                {/* Main icon container */}
                <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* Abstract M design */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-[70%] h-[70%]"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* M shape made with paths */}
                        <path
                            d="M4 18V6L8 12L12 6L16 12L20 6V18"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        {/* Decorative dots */}
                        <circle cx="12" cy="18" r="1.5" fill="white" opacity="0.8" />
                    </svg>

                    {/* Shine effect */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/20 to-transparent" />
                </div>
            </div>

            {/* Logo Text */}
            {showText && (
                <span className={cn(
                    "font-heading font-semibold tracking-tight",
                    sizes[size].text
                )}>
                    <span className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">
                        Meet
                    </span>
                    <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        UI
                    </span>
                </span>
            )}
        </div>
    )
}

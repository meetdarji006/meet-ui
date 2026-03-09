"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    size?: "sm" | "md" | "lg"
    showText?: boolean
    variant?: "default" | "square"
}

export function Logo({ className, size = "md", showText = true, variant = "default" }: LogoProps) {
    const sizes = {
        sm: { icon: "w-6 h-6", text: "text-lg" },
        md: { icon: "w-8 h-8", text: "text-xl" },
        lg: { icon: "w-10 h-10", text: "text-2xl" }
    }

    const rounding = variant === "square" ? "rounded-[6px]" : "rounded-lg"

    return (
        <div className={cn("flex items-center gap-2.5", className)}>
            {/* Logo Icon - Abstract M shape with solid color */}
            <div className={cn("relative", sizes[size].icon)}>
                {/* Glow effect */}
                <div className={cn("absolute inset-0 bg-primary/30 blur-sm transition-all duration-300", rounding)} />

                {/* Main icon container */}
                <div className={cn(
                    "relative w-full h-full bg-primary flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(81,47,235,0.2)]",
                    rounding
                )}>
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
                        <circle cx="12" cy="18" r="1.5" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Logo Text */}
            {showText && (
                <span className={cn(
                    "font-heading font-semibold tracking-tight",
                    sizes[size].text
                )}>
                    <span className="text-white">
                        Meetui
                    </span>
                </span>
            )}
        </div>
    )
}

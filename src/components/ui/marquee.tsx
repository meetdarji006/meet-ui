"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MarqueeProps {
    /** Content items to scroll */
    children?: ReactNode
    /** Speed in pixels per second */
    speed?: number
    /** Gap between items in pixels */
    gap?: number
    /** Scroll direction */
    direction?: "left" | "right"
    /** Pause on hover */
    pauseOnHover?: boolean
    /** Show fade masks on edges */
    fade?: boolean
    /** Additional CSS classes for the container */
    className?: string
}

export default function Marquee({
    children,
    speed = 40,
    gap = 40,
    direction = "left",
    pauseOnHover = true,
    fade = true,
    className,
}: MarqueeProps) {
    // Calculate animation duration based on speed — higher speed = shorter duration
    const duration = Math.max(400 / speed, 2)

    const content = children ?? <DefaultMarqueeItems />

    return (
        <div
            className={cn(
                "group relative flex w-full overflow-hidden",
                className
            )}
            style={fade ? {
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            } : undefined}
        >

            {/* Scrolling track — duplicate content for seamless loop */}
            {[0, 1].map((i) => (
                <div
                    key={i}
                    className="marquee-track flex shrink-0 items-center"
                    style={{
                        gap: `${gap}px`,
                        paddingRight: `${gap}px`,
                        animation: `marqueeScroll ${duration}s linear infinite`,
                        animationDirection: direction === "right" ? "reverse" : "normal",
                    }}
                    aria-hidden={i === 1}
                >
                    {content}
                </div>
            ))}

            <style>{`
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                ${pauseOnHover ? `.group:hover .marquee-track { animation-play-state: paused !important; }` : ''}
            `}</style>
        </div>
    )
}

function DefaultMarqueeItems() {
    const items = [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Framer Motion", "Vercel", "Prisma", "tRPC",
    ]

    return (
        <>
            {items.map((item, i) => (
                <div
                    key={i}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 whitespace-nowrap backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                >
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    {item}
                </div>
            ))}
        </>
    )
}

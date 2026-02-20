export const marqueeCodeTS = `"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MarqueeProps {
    children?: ReactNode
    speed?: number
    gap?: number
    direction?: "left" | "right"
    pauseOnHover?: boolean
    className?: string
}

export default function Marquee({
    children,
    speed = 40,
    gap = 40,
    direction = "left",
    pauseOnHover = true,
    className,
}: MarqueeProps) {
    const duration = Math.max(400 / speed, 2)

    return (
        <div
            className={cn(
                "relative flex w-full overflow-hidden",
                pauseOnHover && "group",
                className
            )}
        >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

            {[0, 1].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 items-center",
                        pauseOnHover && "group-hover:[animation-play-state:paused]"
                    )}
                    style={{
                        gap: \\\`\\\${gap}px\\\`,
                        paddingRight: \\\`\\\${gap}px\\\`,
                        animation: \\\`marqueeScroll \\\${duration}s linear infinite\\\`,
                        animationDirection: direction === "right" ? "reverse" : "normal",
                    }}
                    aria-hidden={i === 1}
                >
                    {children}
                </div>
            ))}

            <style jsx>{\\\`
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
            \\\`}</style>
        </div>
    )
}
`

export const marqueeCodeJS = `"use client";
import { cn } from "@/lib/utils";

export default function Marquee({
    children,
    speed = 40,
    gap = 40,
    direction = "left",
    pauseOnHover = true,
    className,
}) {
    const duration = Math.max(400 / speed, 2);

    return (
        <div
            className={cn(
                "relative flex w-full overflow-hidden",
                pauseOnHover && "group",
                className
            )}
        >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

            {[0, 1].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 items-center",
                        pauseOnHover && "group-hover:[animation-play-state:paused]"
                    )}
                    style={{
                        gap: \\\`\\\${gap}px\\\`,
                        paddingRight: \\\`\\\${gap}px\\\`,
                        animation: \\\`marqueeScroll \\\${duration}s linear infinite\\\`,
                        animationDirection: direction === "right" ? "reverse" : "normal",
                    }}
                    aria-hidden={i === 1}
                >
                    {children}
                </div>
            ))}

            <style jsx>{\\\`
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
            \\\`}</style>
        </div>
    );
}
`

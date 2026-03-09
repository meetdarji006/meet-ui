import React from "react"
import { cn } from "@/lib/utils"

export interface SocialIconHoverProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: React.ReactNode
    /** The background color that fills on hover (and is always visible on mobile). */
    color?: string
    /** Color applied to the icon. */
    iconColor?: string
    /** Background color of the button in its inactive (non-hovered) state. */
    bgColor?: string
    /** CSS easing function for the fill & icon animation. */
    easing?: string
    /** Animation duration in milliseconds. */
    duration?: number
}

export function SocialIconHover({
    icon,
    color = "#a855f7",
    iconColor = "#ffffff",
    bgColor = "#2A2929",
    easing = "cubic-bezier(0.23,1,0.32,1)",
    duration = 600,
    className,
    href,
    ...props
}: SocialIconHoverProps) {
    const Component = href ? "a" : "button"
    const componentProps = href ? { href, ...props } : { type: "button", ...props }

    const durationClass = `sm:duration-[${duration}ms]`
    const easingClass = `sm:ease-[${easing}]`

    return (
        <Component
            className={cn(
                "relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden group/social hover:scale-[1.02] active:scale-95 transition-transform",
                className
            )}
            style={{ backgroundColor: bgColor }}
            {...(componentProps as any)}
        >
            {/* Hover Background Fill — on mobile always visible, on desktop slides up on hover */}
            <span
                className={cn(
                    "absolute inset-0 w-full h-full rounded-full translate-y-0 sm:translate-y-[102%] sm:group-hover/social:translate-y-0 transition-none sm:transition-transform",
                    durationClass,
                    easingClass
                )}
                style={{ backgroundColor: color }}
            />

            {/* Icon Wrapper — on mobile pre-scaled, on desktop scales down on hover */}
            <span
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center scale-75 sm:scale-100 sm:group-hover/social:scale-75 transition-none sm:transition-transform",
                    durationClass,
                    easingClass
                )}
                style={{ color: iconColor }}
            >
                {icon}
            </span>
        </Component>
    )
}

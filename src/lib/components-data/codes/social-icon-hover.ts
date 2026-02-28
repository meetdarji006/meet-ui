// Auto-generated from social-icon-hover.tsx
// Run: npm run generate-codes

export const socialIconHoverCodeTS = `import React from "react"
import { cn } from "@/lib/utils"

export interface SocialIconHoverProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: React.ReactNode
    color?: string
}

export function SocialIconHover({
    icon,
    color = "#a855f7", // Default purple-500 shade
    className,
    href,
    ...props
}: SocialIconHoverProps) {
    const Component = href ? "a" : "button"
    const componentProps = href ? { href, ...props } : { type: "button", ...props }

    return (
        <Component
            className={cn(
                "relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-[#2A2929] group/social hover:scale-[1.02] active:scale-95 transition-transform",
                className
            )}
            {...(componentProps as any)}
        >
            {/* Hover Background Fill */}
            <span
                className="absolute inset-0 w-full h-full rounded-full translate-y-[102%] group-hover/social:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                    backgroundColor: color,
                }}
            />

            {/* Icon Wrapper */}
            <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white group-hover/social:scale-75 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
                {icon}
            </span>
        </Component>
    )
}
`

export const socialIconHoverCodeJS = `import React from "react";
import { cn } from "@/lib/utils";
export function SocialIconHover({ icon, color = "#a855f7", // Default purple-500 shade
className, href, ...props }) {
    const Component = href ? "a" : "button";
    const componentProps = href ? { href, ...props } : { type: "button", ...props };
    return (<Component className={cn("relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-[#2A2929] group/social hover:scale-[1.02] active:scale-95 transition-transform", className)} {...componentProps}>
            {/* Hover Background Fill */}
            <span className="absolute inset-0 w-full h-full rounded-full translate-y-[102%] group-hover/social:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{
            backgroundColor: color,
        }}/>

            {/* Icon Wrapper */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white group-hover/social:scale-75 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
                {icon}
            </span>
        </Component>);
}
`

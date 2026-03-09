// Auto-generated from bouncing-loader.tsx
// Run: npm run generate-codes

export const bouncingLoaderCodeTS = `"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface BouncingLoaderProps {
    text?: string
    color?: string
    fontSize?: number
    delay?: number
    className?: string
}

export function BouncingLoader({
    text = "Loading",
    color = "#a78bfa",
    fontSize = 48,
    delay = 70,
    className,
}: BouncingLoaderProps) {
    const uid = React.useId().replace(/:/g, "")
    const chars = text.split("")

    return (
        <>
            <style>{\`
                @keyframes bl-bounce-\${uid} {
                    0% { transform: translateY(1.2em); }
                    100% { transform: translateY(0); }
                }
                .bl-\${uid} span {
                    display: inline-block;
                    letter-spacing: -0.08em;
                    transform: translateY(1.2em);
                    animation: bl-bounce-\${uid} 1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
                }
            \`}</style>

            <div
                className={cn(
                    \`bl-\${uid}\`,
                    "flex items-center justify-center overflow-hidden select-none",
                    className
                )}
                style={{
                    fontSize,
                    fontWeight: 700,
                    color,
                    height: "1.3em",
                }}
                role="status"
                aria-label="Loading"
            >
                {chars.map((ch, i) => (
                    <span
                        key={i}
                        style={{
                            animationDelay: \`\${i * delay}ms\`,
                            minWidth: ch === " " ? "0.3em" : undefined,
                        }}
                    >
                        {ch === " " ? "\\u00A0" : ch}
                    </span>
                ))}
            </div>
        </>
    )
}
`

export const bouncingLoaderCodeJS = `"use client";
import React from "react";
import { cn } from "@/lib/utils";
export function BouncingLoader({ text = "Loading", color = "#a78bfa", fontSize = 48, delay = 70, className, }) {
    const uid = React.useId().replace(/:/g, "");
    const chars = text.split("");
    return (<>
            <style>{\`
                @keyframes bl-bounce-\${uid} {
                    0% { transform: translateY(1.2em); }
                    100% { transform: translateY(0); }
                }
                .bl-\${uid} span {
                    display: inline-block;
                    letter-spacing: -0.08em;
                    transform: translateY(1.2em);
                    animation: bl-bounce-\${uid} 1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
                }
            \`}</style>

            <div className={cn(\`bl-\${uid}\`, "flex items-center justify-center overflow-hidden select-none", className)} style={{
            fontSize,
            fontWeight: 700,
            color,
            height: "1.3em",
        }} role="status" aria-label="Loading">
                {chars.map((ch, i) => (<span key={i} style={{
                animationDelay: \`\${i * delay}ms\`,
                minWidth: ch === " " ? "0.3em" : undefined,
            }}>
                        {ch === " " ? "\\u00A0" : ch}
                    </span>))}
            </div>
        </>);
}
`

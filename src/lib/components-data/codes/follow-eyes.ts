// Auto-generated from follow-eyes.tsx
// Run: npm run generate-codes

export const followEyesCodeTS = `"use client"

import React, { useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

export interface FollowEyesProps {
    eyeSize?: number
    pupilSize?: number
    gap?: number
    eyeColor?: string
    pupilColor?: string
    glintColor?: string
    maxTravel?: number
    className?: string
}

export function FollowEyes({
    eyeSize = 60,
    pupilSize = 20,
    gap = 16,
    eyeColor = "#ffffff",
    pupilColor = "#1a1028",
    glintColor = "#ffffff",
    maxTravel = 0.35,
    className,
}: FollowEyesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const leftPupilRef = useRef<HTMLDivElement>(null)
    const rightPupilRef = useRef<HTMLDivElement>(null)

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!containerRef.current || !leftPupilRef.current || !rightPupilRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const eyes = [
                { ref: leftPupilRef, cx: rect.left + eyeSize / 2, cy: rect.top + eyeSize / 2 },
                { ref: rightPupilRef, cx: rect.left + eyeSize + gap + eyeSize / 2, cy: rect.top + eyeSize / 2 },
            ]

            const travel = (eyeSize - pupilSize) / 2 * maxTravel

            eyes.forEach(({ ref, cx, cy }) => {
                const dx = e.clientX - cx
                const dy = e.clientY - cy
                const dist = Math.sqrt(dx * dx + dy * dy)
                const angle = Math.atan2(dy, dx)

                const clamp = Math.min(dist, travel)
                const x = Math.cos(angle) * clamp
                const y = Math.sin(angle) * clamp

                ref.current!.style.transform = \`translate(\${x}px, \${y}px)\`
            })
        },
        [eyeSize, pupilSize, gap, maxTravel]
    )

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [onMouseMove])

    const glintSize = pupilSize * 0.3

    return (
        <div
            ref={containerRef}
            className={cn("inline-flex items-center", className)}
            style={{ gap }}
        >
            {[leftPupilRef, rightPupilRef].map((ref, i) => (
                <div
                    key={i}
                    className="relative rounded-full flex items-center justify-center"
                    style={{
                        width: eyeSize,
                        height: eyeSize,
                        background: eyeColor,
                        boxShadow: \`inset 0 \${eyeSize * 0.05}px \${eyeSize * 0.15}px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.2)\`,
                    }}
                >
                    {/* Pupil */}
                    <div
                        ref={ref}
                        className="rounded-full relative"
                        style={{
                            width: pupilSize,
                            height: pupilSize,
                            background: \`radial-gradient(circle at 40% 35%, \${pupilColor === '#1a1028' ? '#2d1f3d' : pupilColor}, \${pupilColor})\`,
                            transition: "transform 0.08s ease-out",
                        }}
                    >
                        {/* Glint */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: glintSize,
                                height: glintSize,
                                background: glintColor,
                                top: pupilSize * 0.15,
                                left: pupilSize * 0.55,
                                opacity: 0.9,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
`

export const followEyesCodeJS = `"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
export function FollowEyes({ eyeSize = 60, pupilSize = 20, gap = 16, eyeColor = "#ffffff", pupilColor = "#1a1028", glintColor = "#ffffff", maxTravel = 0.35, className, }) {
    const containerRef = useRef(null);
    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);
    const onMouseMove = useCallback((e) => {
        if (!containerRef.current || !leftPupilRef.current || !rightPupilRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        const eyes = [
            { ref: leftPupilRef, cx: rect.left + eyeSize / 2, cy: rect.top + eyeSize / 2 },
            { ref: rightPupilRef, cx: rect.left + eyeSize + gap + eyeSize / 2, cy: rect.top + eyeSize / 2 },
        ];
        const travel = (eyeSize - pupilSize) / 2 * maxTravel;
        eyes.forEach(({ ref, cx, cy }) => {
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            const clamp = Math.min(dist, travel);
            const x = Math.cos(angle) * clamp;
            const y = Math.sin(angle) * clamp;
            ref.current.style.transform = \`translate(\${x}px, \${y}px)\`;
        });
    }, [eyeSize, pupilSize, gap, maxTravel]);
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [onMouseMove]);
    const glintSize = pupilSize * 0.3;
    return (<div ref={containerRef} className={cn("inline-flex items-center", className)} style={{ gap }}>
            {[leftPupilRef, rightPupilRef].map((ref, i) => (<div key={i} className="relative rounded-full flex items-center justify-center" style={{
                width: eyeSize,
                height: eyeSize,
                background: eyeColor,
                boxShadow: \`inset 0 \${eyeSize * 0.05}px \${eyeSize * 0.15}px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.2)\`,
            }}>
                    {/* Pupil */}
                    <div ref={ref} className="rounded-full relative" style={{
                width: pupilSize,
                height: pupilSize,
                background: \`radial-gradient(circle at 40% 35%, \${pupilColor === '#1a1028' ? '#2d1f3d' : pupilColor}, \${pupilColor})\`,
                transition: "transform 0.08s ease-out",
            }}>
                        {/* Glint */}
                        <div className="absolute rounded-full" style={{
                width: glintSize,
                height: glintSize,
                background: glintColor,
                top: pupilSize * 0.15,
                left: pupilSize * 0.55,
                opacity: 0.9,
            }}/>
                    </div>
                </div>))}
        </div>);
}
`

"use client"

import React, { useId, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface TechStackItem {
    id: string
    label: string
}

function SolidCard({
    width,
    height,
    x = 0,
    y = 0,
    zOffset = 0,
    delay = 0,
    expandDelay = 1.6,
    color = "#8b5cf6",
    depth = 12,
    isSatellite = false,
    className,
    children,
}: {
    width: number
    height: number
    x?: number
    y?: number
    zOffset?: number
    delay?: number
    expandDelay?: number
    color?: string
    depth?: number
    isSatellite?: boolean
    className?: string
    children?: React.ReactNode
}) {
    const animationRules = isSatellite
        ? `vh-drop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards, vh-expand 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards, vh-float 5s ease-in-out infinite alternate`
        : `vh-float 5s ease-in-out infinite alternate`

    const delayRules = isSatellite
        ? `${delay}s, ${expandDelay}s, ${expandDelay + 1.0 + delay * 2}s`
        : `0s`

    return (
        <div
            className={cn("absolute rounded-2xl flex items-center justify-center", className)}
            style={{
                width,
                height,
                left: `calc(50% - ${width / 2}px)`,
                top: `calc(50% - ${height / 2}px)`,
                transformStyle: "preserve-3d",
                animation: animationRules,
                animationDelay: delayRules,
                opacity: isSatellite ? 0 : 1,
                "--tx": `${x}px`,
                "--ty": `${y}px`,
                "--vt-z": `${zOffset}px`,
            } as any}
        >
            {/* 3D Extrusion Layers (Bottom to Top) */}
            {Array.from({ length: depth }).map((_, i) => (
                <div
                    key={i}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        backgroundColor: color,
                        transform: `translateZ(-${i + 1}px)`,
                        opacity: 1 - (i / depth) * 0.4,
                        boxShadow: i === depth - 1 ? `0 0 20px ${color}80` : "none",
                    }}
                />
            ))}

            {/* Top Surface */}
            <div
                className="absolute inset-0 z-10 rounded-2xl bg-[#09090b] flex items-center justify-center border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-white/90 font-mono text-sm font-semibold tracking-wider backdrop-blur-sm"
                style={{ transform: "translateZ(0px)" }}
            >
                {children}
            </div>
        </div>
    )
}

export const defaultTechStacks: TechStackItem[] = [
    { id: "vue", label: ".VUE" },
    { id: "css", label: ".CSS" },
    { id: "js", label: ".JS" },
    { id: "html", label: ".HTML" },
    { id: "json", label: ".JSON" },
]

export interface FloatingTechStackProps {
    techStacks?: TechStackItem[]
    radius?: number
    className?: string
}

export function FloatingTechStack({ techStacks = defaultTechStacks, radius = 170, className }: FloatingTechStackProps) {
    const uid = useId().replace(/:/g, "")
    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<HTMLDivElement>(null)

    const calculatedNodes = React.useMemo(() => {
        const count = techStacks.length
        return techStacks.map((stack, i) => {
            // Start from top (-90 degrees)
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2
            return {
                ...stack,
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                delay: i * 0.2, // Staggered animation delay
            }
        })
    }, [techStacks, radius])

    const maxDelay = Math.max(0, (techStacks.length - 1) * 0.2)
    const expandDelay = maxDelay + 0.8

    useEffect(() => {
        const container = containerRef.current
        const scene = sceneRef.current
        if (!container || !scene) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
            // Base isometric rotation is rotateX(60deg) rotateZ(-45deg)
            // We add slight mouse offset to it
            scene.style.transform = `rotateX(${60 - y}deg) rotateZ(${-45 + x}deg)`
        }

        const handleMouseLeave = () => {
            scene.style.transform = `rotateX(60deg) rotateZ(-45deg)`
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseleave", handleMouseLeave)
        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className={cn(
                `fts-${uid} relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#000000] perspective-[1500px]`,
                className
            )}
            style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, #151520 0%, #000000 80%)",
            }}
        >
            <style>{`
                @keyframes vh-drop {
                    0% { transform: translate3d(0, 0, calc(var(--vt-z) + 600px)); opacity: 0; }
                    100% { transform: translate3d(0, 0, var(--vt-z)); opacity: 1; }
                }
                @keyframes vh-expand {
                    0% { transform: translate3d(0, 0, var(--vt-z)); opacity: 1; }
                    100% { transform: translate3d(var(--tx), var(--ty), calc(var(--vt-z) - 15px)); opacity: 1; }
                }
                @keyframes vh-float {
                    0% { transform: translate3d(var(--tx), var(--ty), calc(var(--vt-z) - 15px)); }
                    100% { transform: translate3d(var(--tx), var(--ty), calc(var(--vt-z) + 15px)); }
                }
                .vh-scene-${uid} {
                    transform: rotateX(60deg) rotateZ(-45deg);
                    transform-style: preserve-3d;
                    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
            `}</style>

            <div ref={sceneRef} className={cn(`vh-scene-${uid} relative w-0 h-0`)}>
                {/* Satellite Nodes */}
                {calculatedNodes.map((n) => (
                    <SolidCard
                        key={n.id}
                        width={64}
                        height={64}
                        x={n.x}
                        y={n.y}
                        zOffset={0}
                        delay={n.delay}
                        expandDelay={expandDelay}
                        depth={8}
                        color="#4c1d95"
                        isSatellite={true}
                    >
                        {n.label}
                    </SolidCard>
                ))}

                {/* Center Main Plate */}
                <SolidCard width={160} height={160} zOffset={0} delay={0} depth={18} color="#6d28d9">
                    {/* Inner glowing logo box */}
                    <div className="w-20 h-20 rounded-2xl bg-[#111118] border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(109,40,217,0.5)]">
                        {/* Dynamic lightning logo */}
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                                fill="#a855f7"
                                stroke="#d8b4fe"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </SolidCard>


            </div>
        </div>
    )
}

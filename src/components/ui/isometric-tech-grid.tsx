"use client"

import React, { useId, useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface TechItem {
    id?: string
    text?: string
    icon?: React.ReactNode
    x?: number // grid x position
    y?: number // grid y position
    isCenter?: boolean
}

export interface IsometricTechGridProps {
    className?: string
    items?: TechItem[]
    spacing?: number
    gridSize?: number // Number of cells to render in the floor grid (e.g., 5x5)
}

const defaultItems: TechItem[] = [
    {
        id: "chrome",
        x: -1, y: -1,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3B3B4F" />
                <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="#FFF" />
                <path d="M12 7.5L16.2426 2.05025C17.7086 3.19323 18.8876 4.67134 19.6803 6.37258L12 7.5Z" fill="#FFF" />
                <path d="M7.5 12L2.05025 16.2426C3.19323 17.7086 4.67134 18.8876 6.37258 19.6803L7.5 12Z" fill="#FFF" />
                <path d="M16.5 12L21.9497 7.75736C20.8068 6.29135 19.3287 5.11244 17.6274 4.31969L16.5 12Z" fill="#FFF" />
            </svg>
        )
    },
    {
        id: "html5",
        x: 0, y: -1,
        icon: <span className="text-xl font-bold text-white/40">HTML5</span>
    },
    {
        id: "ts",
        x: 1, y: -1,
        icon: <span className="text-xl font-bold text-white/50">TS</span>
    },
    {
        id: "react",
        x: -1, y: 0,
        icon: (
            <svg width="32" height="32" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#3B3B4F" />
                <g stroke="#3B3B4F" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        id: "js",
        x: 0, y: 0,
        isCenter: true,
        icon: (
            <div className="bg-white w-20 h-20 rounded shadow-md flex items-end justify-end p-2 relative">
                <span className="text-black font-bold text-4xl leading-none absolute bottom-1 right-2">JS</span>
            </div>
        )
    },
    {
        id: "wa",
        x: 0, y: 1,
        icon: <span className="text-xl font-bold text-white/80">WA</span>
    },
    {
        id: "css3",
        x: -1, y: 1,
        icon: <span className="text-xl font-bold text-white/30">CSS3</span>
    },
]

function BaseNode({
    x, y, spacing, children, isCenter, text
}: {
    x: number, y: number, spacing: number, children?: React.ReactNode, isCenter?: boolean, text?: string
}) {
    // Top-left coordinate relative to center 0,0
    const left = x * spacing
    const top = y * spacing
    const size = isCenter ? 140 : 120

    return (
        <div
            className="absolute flex items-center justify-center transition-all duration-700 ease-out"
            style={{
                width: size,
                height: size,
                transform: `translate3d(calc(${left}px - 50%), calc(${top}px - 50%), ${isCenter ? '40px' : '20px'})`,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dashed Drop Line down to the floor */}
            <div
                className="absolute top-1/2 left-1/2 w-0 border-l border-dashed border-white/20 pointer-events-none"
                style={{
                    height: isCenter ? '200px' : '120px',
                    transformOrigin: 'top',
                    transform: 'translate(-50%, 0) rotateX(-90deg)', // Drop straight down in local Z
                }}
            />

            {isCenter ? (
                // Center Glowing Node Extrusions
                // We layer multiple div elements stacked on Z
                <>
                    {/* Dark backing base */}
                    <div className="absolute inset-0 bg-[#12121a] rounded-3xl" style={{ transform: 'translateZ(-20px)' }} />

                    {/* Purple glowing layers */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 rounded-3xl opacity-60 pointer-events-none"
                            style={{
                                backgroundColor: '#a855f7',
                                transform: `translateZ(${-15 + (i * 2)}px)`,
                                boxShadow: i === 0 ? '0 0 40px #a855f7, 0 0 80px #9333ea' : 'none',
                                filter: i === 0 ? 'blur(2px)' : 'none'
                            }}
                        />
                    ))}

                    <div className="absolute inset-0 bg-linear-to-br from-[#1a1a24] to-[#0f0f15] rounded-3xl border border-white/10 flex items-center justify-center text-white font-bold backdrop-blur-md shadow-2xl"
                        style={{ transform: 'translateZ(0px)' }}>
                        {children || (text && (
                            <div className="bg-white w-20 h-20 rounded shadow-md flex items-end justify-end p-2 relative">
                                <span className="text-black font-bold text-4xl leading-none absolute bottom-1 right-2">{text}</span>
                            </div>
                        )) || null}
                    </div>
                </>
            ) : (
                // Standard Flat Node
                <>
                    <div className="absolute inset-0 bg-[#151520] rounded-3xl" style={{ transform: 'translateZ(-4px)' }} />
                    <div className="absolute inset-0 bg-[#151520] rounded-3xl border border-white/5 flex items-center justify-center text-white/80 font-bold hover:bg-[#1a1a24] transition-colors cursor-pointer"
                        style={{ transform: 'translateZ(0px)' }}>
                        {children || (text && <span className="text-xl font-bold text-white/50">{text}</span>)}
                    </div>
                </>
            )}
        </div>
    )
}

export function IsometricTechGrid({
    className,
    items = defaultItems,
    spacing = 160,
    gridSize = 7 // 7x7 base floor grid
}: IsometricTechGridProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [mouseRotation, setMouseRotation] = useState({ x: 60, y: 0, z: -45 })

    const positionedItems = React.useMemo(() => {
        let centerItem = items.find(item => item.isCenter)
        let otherItems = items.filter(item => !item.isCenter)

        const result: TechItem[] = []

        if (centerItem) {
            result.push({ ...centerItem, x: centerItem.x ?? 0, y: centerItem.y ?? 0 })
        } else if (items.length > 0) {
            const centerIdx = Math.floor(items.length / 2)
            centerItem = items[centerIdx]
            otherItems = items.filter((_, i) => i !== centerIdx)
            result.push({ ...centerItem, isCenter: true, x: 0, y: 0 })
        }

        const coords = [
            { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 },
            { x: -1, y: 0 }, { x: 1, y: 0 },
            { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 },
            { x: -2, y: -2 }, { x: -1, y: -2 }, { x: 0, y: -2 }, { x: 1, y: -2 }, { x: 2, y: -2 },
            { x: -2, y: -1 }, { x: 2, y: -1 },
            { x: -2, y: 0 }, { x: 2, y: 0 },
            { x: -2, y: 1 }, { x: 2, y: 1 },
            { x: -2, y: 2 }, { x: -1, y: 2 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        ]

        let coordIdx = 0
        otherItems.forEach((item) => {
            const hasPosition = item.x !== undefined && item.y !== undefined
            if (hasPosition) {
                result.push(item)
            } else {
                const c = coords[coordIdx % coords.length]
                result.push({ ...item, x: c.x, y: c.y })
                coordIdx++
            }
        })

        return result
    }, [items])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            // Calculate mouse position relative to center (-1 to 1)
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

            // Subtly tilt the base isometric angles
            // Base: rotateX(60deg) rotateZ(-45deg)
            setMouseRotation({
                x: 60 - y * 5, // Tilt up/down up to 5 degrees
                y: x * 5,      // Small roll
                z: -45 + x * 5 // Pan left/right up to 5 degrees
            })
        }

        const handleMouseLeave = () => {
            setMouseRotation({ x: 60, y: 0, z: -45 })
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('mouseleave', handleMouseLeave)
        }
        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove)
                container.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0A0F] perspective-[2000px]", className)}
        >
            {/* The 3D Scene Container */}
            <div
                className="relative w-0 h-0 transition-transform duration-200 ease-out"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${mouseRotation.x}deg) rotateY(${mouseRotation.y}deg) rotateZ(${mouseRotation.z}deg)`,
                }}
            >
                {/* Floor Grid Lines */}
                <div
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                        width: gridSize * spacing,
                        height: gridSize * spacing,
                        transform: `translate(-50%, -50%) translateZ(-100px)`,
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                        backgroundSize: `${spacing}px ${spacing}px`,
                        backgroundPosition: 'center center'
                    }}
                >
                    {/* Glowing footprint under center node */}
                    <div
                        className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 blur-[50px] rounded-full"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    />
                </div>

                {/* Render Nodes */}
                {positionedItems.map((item, idx) => (
                    <BaseNode
                        key={item.id ?? idx}
                        x={item.x!}
                        y={item.y!}
                        spacing={spacing}
                        isCenter={item.isCenter}
                        text={item.text}
                    >
                        {item.icon}
                    </BaseNode>
                ))}
            </div>
        </div>
    )
}

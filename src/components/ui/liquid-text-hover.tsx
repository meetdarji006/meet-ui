'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface LiquidTextHoverProps {
    text: string
    textureUrl?: string
    blobColor?: string
    className?: string
}

export function LiquidTextHover({
    text,
    textureUrl = '',
    blobColor = 'hsl(var(--primary))',
    className
}: LiquidTextHoverProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    const [isHovering, setIsHovering] = useState(false)
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 })
    const [fontStyles, setFontStyles] = useState({
        fontSize: 0,
        fontWeight: 700,
        fontFamily: 'sans-serif'
    })

    /* -------------------------------
       Measure container + font styles
    -------------------------------- */
    useEffect(() => {
        if (!containerRef.current) return

        const update = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect()
            const computed = window.getComputedStyle(containerRef.current)

            setSvgSize({
                width: rect.width,
                height: rect.height
            })

            setFontStyles({
                fontSize: parseFloat(computed.fontSize),
                fontWeight: parseInt(computed.fontWeight),
                fontFamily: computed.fontFamily
            })
        }

        update()

        const resizeObserver = new ResizeObserver(update)
        resizeObserver.observe(containerRef.current)

        return () => resizeObserver.disconnect()
    }, [])

    /* -------------------------------
       Spring Physics
    -------------------------------- */
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }

    const mouseX = useSpring(0, springConfig)
    const mouseY = useSpring(0, springConfig)
    const radiusLeader = useSpring(0, springConfig)

    const followX1 = useSpring(0, { ...springConfig, damping: 25, stiffness: 150 })
    const followY1 = useSpring(0, { ...springConfig, damping: 25, stiffness: 150 })
    const radiusFollow1 = useSpring(0, { ...springConfig, damping: 25, stiffness: 150 })

    const followX2 = useSpring(0, { ...springConfig, damping: 30, stiffness: 100 })
    const followY2 = useSpring(0, { ...springConfig, damping: 30, stiffness: 100 })
    const radiusFollow2 = useSpring(0, { ...springConfig, damping: 30, stiffness: 100 })

    /* -------------------------------
       Mouse Handlers
    -------------------------------- */
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        mouseX.set(x)
        mouseY.set(y)

        followX1.set(x)
        followY1.set(y)

        followX2.set(x)
        followY2.set(y)
    }

    const handleMouseEnter = (e: React.MouseEvent) => {
        setIsHovering(true)

        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        mouseX.jump(x)
        mouseY.jump(y)
        followX1.jump(x)
        followY1.jump(y)
        followX2.jump(x)
        followY2.jump(y)
    }

    /* -------------------------------
       Center Reset Logic
    -------------------------------- */
    useEffect(() => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        if (!isHovering) {
            mouseX.set(centerX)
            mouseY.set(centerY)
            followX1.set(centerX)
            followY1.set(centerY)
            followX2.set(centerX)
            followY2.set(centerY)

            radiusLeader.set(0)
            radiusFollow1.set(0)
            radiusFollow2.set(0)
        } else {
            radiusLeader.set(fontStyles.fontSize * 0.6)
            radiusFollow1.set(fontStyles.fontSize * 0.5)
            radiusFollow2.set(fontStyles.fontSize * 0.35)
        }
    }, [isHovering, svgSize, fontStyles])

    const filterId = React.useId()
    const maskId = React.useId()
    const patternId = React.useId()

    return (
        <div
            ref={containerRef}
            className={cn(
                'relative inline-block overflow-hidden font-bold leading-none select-none whitespace-pre',
                'text-neutral-300 dark:text-neutral-800',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Invisible structural text layer for container sizing */}
            <div className="opacity-0">
                {text}
            </div>

            {/* SVG overlay */}
            {svgSize.width > 0 && (
                <svg
                    width={svgSize.width}
                    height={svgSize.height}
                    viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
                    className="absolute inset-0 pointer-events-none"
                >
                    <defs>
                        {/* Goo Filter */}
                        <filter
                            id={filterId}
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        >
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 25 -10
                "
                                result="goo"
                            />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>

                        {/* Text Mask */}
                        <mask id={maskId} x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse">
                            <rect
                                width="100%"
                                height="100%"
                                fill="black"
                            />
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                style={{
                                    fontSize: `${fontStyles.fontSize}px`,
                                    fontWeight: fontStyles.fontWeight,
                                    fontFamily: fontStyles.fontFamily
                                }}
                            >
                                {text}
                            </text>
                        </mask>

                        {/* Texture Pattern */}
                        {textureUrl && (
                            <pattern
                                id={patternId}
                                patternUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <image
                                    href={textureUrl}
                                    width={svgSize.width}
                                    height={svgSize.height}
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </pattern>
                        )}
                    </defs>

                    {/* Base SVG Text Layer */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="currentColor"
                        style={{
                            fontSize: `${fontStyles.fontSize}px`,
                            fontWeight: fontStyles.fontWeight,
                            fontFamily: fontStyles.fontFamily
                        }}
                    >
                        {text}
                    </text>

                    <g mask={`url(#${maskId})`}>
                        <g filter={`url(#${filterId})`}>
                            <motion.circle
                                cx={mouseX}
                                cy={mouseY}
                                r={radiusLeader}
                                fill={textureUrl ? `url(#${patternId})` : blobColor}
                            />
                            <motion.circle
                                cx={followX1}
                                cy={followY1}
                                r={radiusFollow1}
                                fill={textureUrl ? `url(#${patternId})` : blobColor}
                            />
                            <motion.circle
                                cx={followX2}
                                cy={followY2}
                                r={radiusFollow2}
                                fill={textureUrl ? `url(#${patternId})` : blobColor}
                            />
                        </g>
                    </g>
                </svg>
            )}
        </div>
    )
}

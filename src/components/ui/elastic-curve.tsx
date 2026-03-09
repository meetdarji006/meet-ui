"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface ElasticCurveProps {
    className?: string
    height?: number
    strokeWidth?: number
    hitAreaWidth?: number
    gradientStart?: string
    gradientEnd?: string
    stiffness?: number
    damping?: number
}

export default function ElasticCurve({
    className,
    height = 400,
    strokeWidth = 2,
    hitAreaWidth = 60,
    gradientStart = "rgb(255, 135, 9)",
    gradientEnd = "rgb(247, 189, 248)",
    stiffness = 400,
    damping = 12
}: ElasticCurveProps) {
    const svgRef = useRef<SVGSVGElement>(null)
    const [isConnected, setIsConnected] = useState(false)

    const startY = height / 2

    // Spring animation for the control point Y
    const controlY = useSpring(startY, {
        stiffness: stiffness,
        damping: damping,
        mass: 1
    })

    // Transform to create the curved effect (amplify the movement)
    const curveY = useTransform(controlY, (y) => y)

    const [pathD, setPathD] = useState(`M0,${startY} Q400,${startY} 800,${startY}`)

    // Update path when curveY changes
    useEffect(() => {
        const unsubscribe = curveY.on("change", (y) => {
            setPathD(`M0,${startY} Q400,${y} 800,${startY}`)
        })
        return () => unsubscribe()
    }, [curveY, startY])

    const handlePointerMove = useCallback((e: React.PointerEvent<SVGPathElement>) => {
        if (!svgRef.current) return

        const rect = svgRef.current.getBoundingClientRect()
        const scaleY = height / rect.height
        const mouseY = (e.clientY - rect.top) * scaleY

        // Calculate new control point Y (amplify movement from center)
        const newY = mouseY * 2 - startY

        if (!isConnected) {
            setIsConnected(true)
        }

        controlY.set(newY)
    }, [isConnected, controlY, height, startY])

    const handlePointerLeave = useCallback(() => {
        setIsConnected(false)
        // Spring back to center
        controlY.set(startY)
    }, [controlY, startY])

    const gradientId = `elastic-curve-gradient-${React.useId()}`

    return (
        <div className={className} style={{ width: '100%', height }}>
            <svg
                ref={svgRef}
                viewBox={`0 0 800 ${height}`}
                style={{ width: '100%', height: '100%' }}
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1="0"
                        y1="0"
                        x2="596"
                        y2="600"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.2" stopColor={gradientStart} />
                        <stop offset="0.7" stopColor={gradientEnd} />
                    </linearGradient>
                </defs>

                {/* Visible curved line */}
                <motion.path
                    d={pathD}
                    stroke={`url(#${gradientId})`}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Invisible hit area for hover detection */}
                <path
                    d={pathD}
                    stroke="transparent"
                    strokeWidth={hitAreaWidth}
                    fill="none"
                    style={{ cursor: 'pointer' }}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                />
            </svg>
        </div>
    )
}

// Auto-generated from glow-cursor.tsx
// Run: npm run generate-codes

export const glowCursorCodeTS = `"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface GlowCursorProps {
    /** Size of the glow orb */
    size?: number
    /** Color of the glow */
    color?: string
    /** Smoothing factor (0-1, lower = more lag) */
    smoothing?: number
    /** Intensity of the glow (blur amount) */
    glowIntensity?: number
    /** Whether the component is enabled */
    enabled?: boolean
}

export const GlowCursor = ({
    size = 200,
    color = "#667eea",
    smoothing = 0.15,
    glowIntensity = 60,
    enabled = true,
}: GlowCursorProps) => {
    const [position, setPosition] = useState({ x: -500, y: -500 })
    const [isVisible, setIsVisible] = useState(false)
    const targetRef = useRef({ x: -500, y: -500 })
    const currentRef = useRef({ x: -500, y: -500 })
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        if (!enabled) return

        const animate = () => {
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * smoothing
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * smoothing

            setPosition({ ...currentRef.current })
            frameRef.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true)
            targetRef.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)
        frameRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [enabled, smoothing, isVisible])

    if (!enabled) return null

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    left: position.x - size / 2,
                    top: position.y - size / 2,
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: \`radial-gradient(circle, \${color} 0%, \${color}80 20%, \${color}40 40%, transparent 70%)\`,
                    filter: \`blur(\${glowIntensity}px)\`,
                    mixBlendMode: "screen",
                }}
            />
        </div>
    )
}
`

export const glowCursorCodeJS = `"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export const GlowCursor = ({ size = 200, color = "#667eea", smoothing = 0.15, glowIntensity = 60, enabled = true, }) => {
    const [position, setPosition] = useState({ x: -500, y: -500 });
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef({ x: -500, y: -500 });
    const currentRef = useRef({ x: -500, y: -500 });
    const frameRef = useRef(null);
    useEffect(() => {
        if (!enabled)
            return;
        const animate = () => {
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * smoothing;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * smoothing;
            setPosition({ ...currentRef.current });
            frameRef.current = requestAnimationFrame(animate);
        };
        const handleMouseMove = (e) => {
            if (!isVisible)
                setIsVisible(true);
            targetRef.current = { x: e.clientX, y: e.clientY };
        };
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        frameRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (frameRef.current)
                cancelAnimationFrame(frameRef.current);
        };
    }, [enabled, smoothing, isVisible]);
    if (!enabled)
        return null;
    return (<div style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9999,
            overflow: "hidden",
        }}>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.5,
        }} transition={{ duration: 0.3 }} style={{
            position: "absolute",
            left: position.x - size / 2,
            top: position.y - size / 2,
            width: size,
            height: size,
            borderRadius: "50%",
            background: \`radial-gradient(circle, \${color} 0%, \${color}80 20%, \${color}40 40%, transparent 70%)\`,
            filter: \`blur(\${glowIntensity}px)\`,
            mixBlendMode: "screen",
        }}/>
        </div>);
};
`

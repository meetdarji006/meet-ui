"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas to full window size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setCanvasSize()
        window.addEventListener("resize", setCanvasSize)

        // Particle System
        const particles: { x: number; y: number; radius: number; vx: number; vy: number; baseAlpha: number }[] = []
        const particleCount = Math.min(window.innerWidth / 15, 100)

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,   // Slow drift
                vy: (Math.random() - 0.5) * 0.3,
                baseAlpha: Math.random() * 0.5 + 0.1,
            })
        }

        let animationFrameId: number

        const render = () => {
            // Clear canvas with a very slight fade for trailing effect (optional, here we clear fully)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges smoothly
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Subtle twinkle effect
                const alpha = p.baseAlpha + Math.sin(Date.now() * 0.002 + p.x) * 0.2

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.3, alpha)})`
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener("resize", setCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Minimalist Top Grid */}
            <div
                className="absolute inset-0 dot-grid pointer-events-none opacity-30"
                style={{
                    maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 70%)"
                }}
            />

            {/* Single Impactful Top Glow */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] max-w-[1000px] h-[400px] bg-[#512FEB] rounded-full blur-[120px] opacity-25 pointer-events-none mix-blend-screen" />

            {/* The Weaving Particles Canvas - Kept very subtle */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-30 z-0"
            />
        </div>
    )
}

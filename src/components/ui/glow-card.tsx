"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface GlowCardProps {
    value?: string
    label?: string
    accentColor?: string
    bgColor?: string
    showRay?: boolean
    showGrid?: boolean
    showDot?: boolean
    className?: string
}

export function GlowCard({
    value = "750k",
    label = "Views",
    accentColor = "#a78bfa",
    bgColor = "#09090b",
    showRay = true,
    showGrid = true,
    showDot = true,
    className,
}: GlowCardProps) {
    const uid = React.useId().replace(/:/g, "")

    return (
        <>
            <style>{`
                .gc-${uid} {
                    --accent: ${accentColor};
                    --bg: ${bgColor};
                    position: relative;
                    width: 300px;
                    height: 250px;
                    border-radius: 16px;
                }


                /* ── Border gradient ── */
                .gc-${uid}::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 16px;
                    padding: 1px;
                    background: radial-gradient(
                        ellipse 200px 140px at 15% 15%,
                        color-mix(in srgb, var(--accent), transparent 20%),
                        color-mix(in srgb, var(--accent), transparent 80%) 50%,
                        color-mix(in srgb, var(--accent), transparent 95%)
                    );
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }

                /* ── Inner card ── */
                .gc-${uid} .gc-inner {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    background:
                        radial-gradient(ellipse 300px 180px at 10% 10%, color-mix(in srgb, var(--accent), transparent 75%), transparent),
                        var(--bg);
                }

                /* ── Light ray ── */
                .gc-${uid} .gc-ray {
                    position: absolute;
                    top: -20px;
                    left: -30px;
                    width: 200px;
                    height: 60px;
                    border-radius: 100px;
                    background: radial-gradient(ellipse at center, color-mix(in srgb, var(--accent), transparent 40%), transparent 70%);
                    transform: rotate(40deg);
                    filter: blur(15px);
                    pointer-events: none;
                }

                /* ── Orbiting dot ── */
                .gc-${uid} .gc-dot {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    z-index: 3;
                    background: white;
                    box-shadow:
                        0 0 6px 2px var(--accent),
                        0 0 20px 4px color-mix(in srgb, var(--accent), transparent 50%);
                    animation: gc-orbit-${uid} 6s linear infinite;
                }

                /* ── Value text ── */
                .gc-${uid} .gc-value {
                    font-size: 4.5rem;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.04em;
                    background: linear-gradient(
                        180deg,
                        #fff 0%,
                        color-mix(in srgb, var(--accent), #fff 60%) 50%,
                        color-mix(in srgb, var(--accent), transparent 40%) 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                    z-index: 2;
                }

                /* ── Label ── */
                .gc-${uid} .gc-label {
                    font-size: 0.85rem;
                    color: color-mix(in srgb, var(--accent), #fff 30%);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-top: 6px;
                    position: relative;
                    z-index: 2;
                }

                /* ── Grid lines ── */
                .gc-${uid} .gc-grid-h,
                .gc-${uid} .gc-grid-v {
                    position: absolute;
                    background: color-mix(in srgb, var(--accent), transparent 82%);
                    pointer-events: none;
                    z-index: 1;
                }
                .gc-${uid} .gc-grid-h {
                    width: 100%;
                    height: 1px;
                }
                .gc-${uid} .gc-grid-v {
                    width: 1px;
                    height: 100%;
                }

                /* ── Keyframes ── */
                @keyframes gc-spin-${uid} {
                    to { transform: rotate(360deg); }
                }
                @keyframes gc-orbit-${uid} {
                    0%, 100% { top: calc(12% - 3px); right: calc(12% - 3px); }
                    25% { top: calc(12% - 3px); right: calc(88% - 3px); }
                    50% { top: calc(88% - 3px); right: calc(88% - 3px); }
                    75% { top: calc(88% - 3px); right: calc(12% - 3px); }
                }
            `}</style>

            <div className={cn(`gc-${uid}`, className)}>
                {/* Spinning conic halo is ::before */}
                {/* Gradient border is ::after */}

                {/* Orbiting dot */}
                {showDot && <div className="gc-dot" />}

                {/* Inner card surface */}
                <div className="gc-inner">
                    {/* Light ray */}
                    {showRay && <div className="gc-ray" />}

                    {/* Value */}
                    <div className="gc-value">{value}</div>

                    {/* Label */}
                    <div className="gc-label">{label}</div>

                    {/* Grid lines */}
                    {showGrid && (
                        <>
                            <div className="gc-grid-h" style={{ top: "12%" }} />
                            <div className="gc-grid-h" style={{ bottom: "12%" }} />
                            <div className="gc-grid-v" style={{ left: "12%" }} />
                            <div className="gc-grid-v" style={{ right: "12%" }} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

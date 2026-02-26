"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface LuminousCardProps {
    title?: string
    description?: string
    icon?: React.ReactNode
    accentColor?: string
    bgColor?: string
    intensity?: number
    showFrame?: boolean
    showIcon?: boolean
    titleClass?: string
    descriptionClass?: string
    className?: string
}

const DefaultIcon = ({ color }: { color: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

export function LuminousCard({
    title = "Luminous Design",
    description = "Light Folds Around Form\nRevealing Layers Of Depth",
    icon,
    accentColor = "#a78bfa",
    bgColor = "#1a1028",
    intensity = 0.7,
    showFrame = true,
    showIcon = true,
    titleClass,
    descriptionClass,
    className,
}: LuminousCardProps) {
    const uid = React.useId().replace(/:/g, "")

    return (
        <div className={cn(`lc-${uid}`, "relative flex items-center justify-center", className)}>
            <style>{`
                .lc-${uid} {
                    --accent: ${accentColor};
                    --bg: ${bgColor};
                    --intensity: ${intensity};
                    font-size: clamp(14px, 1.8vw, 18px);
                }
                .lc-${uid} .lc-card {
                    position: relative;
                    background: radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent), #000 75%) 0%, var(--bg) 64%);
                    box-shadow:
                        inset 0 1em 0.3em -0.8em color-mix(in srgb, var(--accent), transparent 20%),
                        inset 0 -3em 2.5em -2em rgba(0,0,0,0.5),
                        0 0 0 1px color-mix(in srgb, var(--accent), transparent 75%),
                        0 0 15px -3px color-mix(in srgb, var(--accent), transparent 60%),
                        0 8px 20px -4px rgba(0,0,0,0.6),
                        0 20px 40px -8px rgba(0,0,0,0.4);
                    width: 14em;
                    height: 18em;
                    border-radius: 1.4em;
                    color: #fff;
                    padding: 0.8em;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    transition: all 0.4s ease-in-out, translate 0.4s ease-out;
                    overflow: hidden;
                }
                .lc-${uid} .lc-card::before {
                    content: "";
                    display: block;
                    --offset: 0.8em;
                    width: calc(100% + 2 * var(--offset));
                    height: calc(100% + 2 * var(--offset));
                    position: absolute;
                    left: calc(-1 * var(--offset));
                    top: calc(-1 * var(--offset));
                    box-shadow: inset 0 0 0 0.05em color-mix(in srgb, var(--accent), transparent 70%);
                    border-radius: 2em;
                    --ax: 3em;
                    clip-path: polygon(
                        var(--ax) 0, 0 0, 0 var(--ax), var(--ax) var(--ax),
                        var(--ax) calc(100% - var(--ax)), 0 calc(100% - var(--ax)), 0 100%, var(--ax) 100%,
                        var(--ax) calc(100% - var(--ax)), calc(100% - var(--ax)) calc(100% - var(--ax)),
                        calc(100% - var(--ax)) 100%, 100% 100%, 100% calc(100% - var(--ax)),
                        calc(100% - var(--ax)) calc(100% - var(--ax)), calc(100% - var(--ax)) var(--ax),
                        100% var(--ax), 100% 0, calc(100% - var(--ax)) 0,
                        calc(100% - var(--ax)) var(--ax), var(--ax) var(--ax)
                    );
                    transition: all 0.4s ease-in-out;
                    pointer-events: none;
                    opacity: ${showFrame ? 1 : 0};
                }
                .lc-${uid} .lc-card:hover {
                    translate: 0 -0.25em;
                    box-shadow:
                        inset 0 1em 0.3em -0.8em color-mix(in srgb, var(--accent), transparent 10%),
                        inset 0 -3em 2.5em -2em rgba(0,0,0,0.5),
                        0 0 0 1px color-mix(in srgb, var(--accent), transparent 65%),
                        0 0 25px -3px color-mix(in srgb, var(--accent), transparent 40%),
                        0 12px 30px -4px rgba(0,0,0,0.6),
                        0 30px 60px -10px rgba(0,0,0,0.45);
                }
                .lc-${uid} .lc-card:hover::before {
                    --offset: 0.4em;
                    --ax: 6em;
                    border-radius: 1.8em;
                    box-shadow: inset 0 0 0 0.06em color-mix(in srgb, var(--accent), transparent 85%);
                }

                /* ── Slit ── */
                .lc-${uid} .lc-slit {
                    position: absolute;
                    left: 0; right: 0; top: 0; bottom: 0; margin: auto;
                    width: 60%; height: 1em;
                    transform: perspective(300px) rotateX(-76deg);
                    background: var(--accent);
                    box-shadow: 0 0 6px 1px var(--accent);
                    pointer-events: none;
                    opacity: var(--intensity);
                }

                /* ── Lumen ── */
                .lc-${uid} .lc-lumen {
                    position: absolute; inset: 0;
                    pointer-events: none; perspective: 300px;
                    opacity: calc(0.5 * var(--intensity));
                }
                .lc-${uid} .lc-lumen > div {
                    position: absolute;
                    left: 0; right: 0; margin: auto;
                }
                .lc-${uid} .lc-lm {
                    width: 66%; height: 2.4em;
                    background: linear-gradient(transparent, color-mix(in srgb, var(--accent), transparent 30%));
                    top: 0; bottom: 2em;
                    transform: rotateX(-42deg);
                    opacity: 0.4;
                }
                .lc-${uid} .lc-lmd {
                    width: 70%; height: 10em;
                    background: linear-gradient(transparent, color-mix(in srgb, var(--accent), transparent 30%));
                    top: 0; bottom: 8em;
                    transform: rotateX(-42deg);
                    filter: blur(0.8em);
                    opacity: 0.8;
                    border-radius: 100% 100% 0 0;
                }
                .lc-${uid} .lc-lh {
                    width: 46%; height: 10em;
                    background: linear-gradient(transparent, color-mix(in srgb, var(--accent), transparent 30%));
                    top: 0; bottom: 9em;
                    transform: rotateX(22deg);
                    filter: blur(0.8em);
                    opacity: 0.6;
                    border-radius: 100% 100% 0 0;
                }

                /* ── Darken ── */
                .lc-${uid} .lc-darken {
                    position: absolute; inset: 0;
                    pointer-events: none; perspective: 300px;
                    opacity: calc(0.8 * var(--intensity));
                }
                .lc-${uid} .lc-darken > div { position: absolute; margin: auto; }
                .lc-${uid} .lc-ds {
                    width: 60%; height: 8em;
                    background: linear-gradient(#000, transparent);
                    left: 0; right: 0; top: 7.5em; bottom: 0;
                    filter: blur(0.2em); opacity: 0.2;
                    border-radius: 0 0 100% 100%;
                    transform: rotateX(-22deg);
                }
                .lc-${uid} .lc-dl {
                    width: 58%; height: 8em;
                    background: linear-gradient(rgba(0,0,0,0.6), transparent);
                    left: 0; right: 0; top: 8.5em; bottom: 0;
                    filter: blur(0.6em); opacity: 1;
                    border-radius: 0 0 100% 100%;
                    transform: rotateX(22deg);
                }
                .lc-${uid} .lc-dlt {
                    width: 0.4em; height: 3em;
                    background: linear-gradient(rgba(0,0,0,0.3), transparent);
                    left: 0; right: 8.5em; top: 3em; bottom: 0;
                    opacity: 1; border-radius: 0 0 100% 100%;
                    transform: skewY(42deg);
                }
                .lc-${uid} .lc-drt {
                    width: 0.4em; height: 3em;
                    background: linear-gradient(rgba(0,0,0,0.3), transparent);
                    right: 0; left: 8.5em; top: 3em; bottom: 0;
                    opacity: 1; border-radius: 0 0 100% 100%;
                    transform: skewY(-42deg);
                }

                /* ── Icon ── */
                .lc-${uid} .lc-icon {
                    position: absolute;
                    top: 2.5em; left: 0; right: 0; margin: auto;
                    width: fit-content;
                    filter: drop-shadow(0 -0.8em 2px rgba(0,0,0,0.2)) brightness(1.5);
                    z-index: 2;
                }

                /* ── Content ── */
                .lc-${uid} .lc-title {
                    font-size: 1em;
                    font-weight: 500;
                    margin-bottom: 0.5em;
                    color: color-mix(in srgb, var(--accent), #fff 60%);
                }
                .lc-${uid} .lc-desc {
                    color: color-mix(in srgb, var(--accent), #aaa 50%);
                    font-size: 0.55em;
                    font-weight: 300;
                    line-height: 1.6;
                    white-space: pre-line;
                }
            `}</style>

            <div className="lc-card">
                <div className="lc-slit" />
                <div className="lc-lumen">
                    <div className="lc-lm" />
                    <div className="lc-lmd" />
                    <div className="lc-lh" />
                </div>
                <div className="lc-darken">
                    <div className="lc-ds" />
                    <div className="lc-dl" />
                    <div className="lc-dlt" />
                    <div className="lc-drt" />
                </div>

                {showIcon && (
                    <div className="lc-icon">
                        {icon || <DefaultIcon color={accentColor} />}
                    </div>
                )}

                <div className="relative z-1">
                    <div className={cn("lc-title", titleClass)}>{title}</div>
                    <div className={cn("lc-desc", descriptionClass)}>{description}</div>
                </div>
            </div>
        </div>
    )
}

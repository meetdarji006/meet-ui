"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface SplashButtonProps {
    text?: string
    bgColor?: string
    accentColor?: string
    textColor?: string
    className?: string
    onClick?: () => void
}

export function SplashButton({
    text = "Join Today",
    bgColor = "#7c3aed",
    accentColor = "#a78bfa",
    textColor = "#fff",
    className,
    onClick,
}: SplashButtonProps) {
    const uid = React.useId().replace(/:/g, "")

    const chars = text.split("")

    return (
        <>
            <style>{`
                .sb-${uid} {
                    --bg: ${bgColor};
                    --accent: ${accentColor};
                    --text: ${textColor};
                    --shadow: ${bgColor}66;
                    --radius: 18px;
                    border-radius: var(--radius);
                    outline: none;
                    cursor: pointer;
                    font-size: 24px;
                    background: transparent;
                    letter-spacing: -0.5px;
                    border: 0;
                    position: relative;
                    width: 220px;
                    height: 80px;
                }

                .sb-${uid} .sb-bg {
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    filter: blur(1px);
                }

                .sb-${uid} .sb-bg::before {
                    filter: blur(5px);
                    transition: all 0.3s ease;
                    box-shadow:
                        -7px 6px 0 0 var(--shadow),
                        -14px 12px 0 0 color-mix(in srgb, var(--shadow), transparent 20%),
                        -21px 18px 4px 0 color-mix(in srgb, var(--shadow), transparent 40%),
                        -28px 24px 8px 0 color-mix(in srgb, var(--shadow), transparent 60%),
                        -35px 30px 12px 0 color-mix(in srgb, var(--shadow), transparent 75%);
                }

                .sb-${uid} .sb-wrap {
                    border-radius: inherit;
                    overflow: hidden;
                    height: 100%;
                    transform: translate(6px, -6px);
                    padding: 3px;
                    background: linear-gradient(to bottom, var(--accent) 0%, var(--bg) 100%);
                    position: relative;
                    transition: all 0.3s ease;
                }

                .sb-${uid} .sb-outline {
                    position: absolute;
                    overflow: hidden;
                    inset: 0;
                    opacity: 0;
                    border-radius: inherit;
                    transition: all 0.4s ease;
                }
                .sb-${uid} .sb-outline::before {
                    content: "";
                    position: absolute;
                    inset: 2px;
                    width: 120px;
                    height: 300px;
                    margin: auto;
                    background: linear-gradient(to right, transparent 0%, white 50%, transparent 100%);
                    animation: sb-spin-${uid} 3s linear infinite;
                    animation-play-state: paused;
                }

                .sb-${uid} .sb-content {
                    pointer-events: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    position: relative;
                    height: 100%;
                    gap: 16px;
                    border-radius: calc(var(--radius) * 0.85);
                    font-weight: 600;
                    transition: all 0.3s ease;
                    background: linear-gradient(to bottom, var(--accent) 0%, var(--bg) 100%);
                    box-shadow:
                        inset -2px 12px 11px -5px color-mix(in srgb, var(--accent), transparent 30%),
                        inset 1px -3px 11px 0px rgba(0,0,0,0.35);
                }
                .sb-${uid} .sb-content::before {
                    content: "";
                    inset: 0;
                    position: absolute;
                    z-index: 10;
                    width: 80%;
                    top: 45%;
                    bottom: 35%;
                    opacity: 0.7;
                    margin: auto;
                    background: linear-gradient(to bottom, transparent, var(--bg));
                    filter: brightness(1.3) blur(5px);
                }

                .sb-${uid} .sb-char {
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sb-${uid} .sb-char span {
                    display: block;
                    color: var(--text);
                    position: relative;
                    text-shadow: -1px 1px 2px color-mix(in srgb, var(--bg), #000 30%);
                }
                .sb-${uid} .sb-char span.sb-space {
                    width: 5px;
                }
                .sb-${uid} .sb-char span {
                    animation: sb-charAppear-${uid} 1.2s ease backwards calc(var(--i) * 0.03s);
                }

                .sb-${uid} .sb-icon {
                    animation: sb-resetArrow-${uid} 0.8s cubic-bezier(0.7,-0.5,0.3,1.2) forwards;
                    z-index: 10;
                }
                .sb-${uid} .sb-arrow,
                .sb-${uid} .sb-arrow::before,
                .sb-${uid} .sb-arrow::after {
                    height: 3px;
                    border-radius: 1px;
                    background-color: var(--text);
                }
                .sb-${uid} .sb-arrow::before,
                .sb-${uid} .sb-arrow::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    transform-origin: center right;
                    width: 14px;
                    border-radius: 15px;
                    transition: all 0.3s ease;
                }
                .sb-${uid} .sb-arrow {
                    position: relative;
                    width: 24px;
                    box-shadow: -2px 2px 5px var(--bg);
                    transform: scale(0.9);
                    background: linear-gradient(to bottom, var(--text), var(--accent));
                    animation: sb-swingArrow-${uid} 1s ease-in-out infinite;
                    animation-play-state: paused;
                }
                .sb-${uid} .sb-arrow::before {
                    transform: rotate(44deg); top: 1px;
                    box-shadow: 1px -2px 3px -1px var(--bg);
                    animation: sb-rotLine1-${uid} 1s linear infinite;
                    animation-play-state: paused;
                }
                .sb-${uid} .sb-arrow::after {
                    bottom: 1px;
                    transform: rotate(316deg);
                    box-shadow: -2px 2px 3px 0 var(--bg);
                    background: linear-gradient(200deg, var(--text), var(--accent));
                    animation: sb-rotLine2-${uid} 1s linear infinite;
                    animation-play-state: paused;
                }

                .sb-${uid} .sb-path {
                    position: absolute;
                    z-index: 12;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    stroke-dasharray: 150 480;
                    stroke-dashoffset: 150;
                    pointer-events: none;
                }

                .sb-${uid} .sb-splash {
                    position: absolute;
                    top: 0; left: 0;
                    pointer-events: none;
                    stroke-dasharray: 60 60;
                    stroke-dashoffset: 60;
                    transform: translate(-17%, -31%);
                    stroke: var(--accent);
                }

                /* Hover */
                .sb-${uid}:hover .sb-outline {
                    opacity: 1;
                }
                .sb-${uid}:hover .sb-outline::before,
                .sb-${uid}:hover .sb-arrow::before,
                .sb-${uid}:hover .sb-arrow::after,
                .sb-${uid}:hover .sb-arrow {
                    animation-play-state: running;
                }

                .sb-${uid}:hover .sb-splash {
                    animation: sb-splash-${uid} 0.8s cubic-bezier(0.3,0,0,1) forwards 0.05s;
                }

                /* Active */
                .sb-${uid}:active .sb-bg::before {
                    filter: blur(5px);
                    opacity: 0.7;
                    box-shadow:
                        -7px 6px 0 0 var(--shadow),
                        -14px 12px 0 0 color-mix(in srgb, var(--shadow), transparent 40%),
                        -21px 18px 4px 0 color-mix(in srgb, var(--shadow), transparent 70%);
                }
                .sb-${uid}:active .sb-content {
                    box-shadow:
                        inset -1px 12px 8px -5px rgba(0,0,0,0.3),
                        inset 0px -3px 8px 0px var(--accent);
                }
                .sb-${uid}:active .sb-outline {
                    opacity: 0;
                }
                .sb-${uid}:active .sb-wrap {
                    transform: translate(3px, -3px);
                }
                .sb-${uid}:active .sb-splash {
                    animation: sb-splash-${uid} 0.8s cubic-bezier(0.3,0,0,1) forwards 0.05s;
                }

                /* Focus - now empty as effects moved to hover */

                @keyframes sb-spin-${uid} { to { transform: rotate(360deg); } }
                @keyframes sb-charAppear-${uid} {
                    0% { transform: translateY(50%); opacity: 0; filter: blur(20px); }
                    20% { transform: translateY(70%); opacity: 1; }
                    50% { transform: translateY(-15%); opacity: 1; filter: blur(0); }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes sb-swingArrow-${uid} { 50% { transform: translateX(5px) scale(0.9); } }
                @keyframes sb-rotLine1-${uid} { 50% { transform: rotate(30deg); } 80% { transform: rotate(55deg); } }
                @keyframes sb-rotLine2-${uid} { 50% { transform: rotate(330deg); } 80% { transform: rotate(300deg); } }
                @keyframes sb-resetArrow-${uid} { 0% { transform: translateX(-128px); } 100% { transform: translateX(0); } }
                @keyframes sb-path-${uid} { from { stroke: white; } to { stroke-dashoffset: -480; stroke: var(--accent); } }
                @keyframes sb-splash-${uid} { to { stroke-dasharray: 2 60; stroke-dashoffset: -60; } }
            `}</style>

            <button
                className={cn(`sb-${uid}`, className)}
                onClick={onClick}
            >
                <div className="sb-bg" />

                {/* Splash SVG */}
                <svg className="sb-splash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 342 208" height="208" width="342">
                    <path strokeLinecap="round" strokeWidth="3" d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362" />
                    <path strokeLinecap="round" strokeWidth="3" d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449" />
                    <path strokeLinecap="round" strokeWidth="3" d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998" />
                    <path strokeLinecap="round" strokeWidth="3" d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924" />
                    <path strokeLinecap="round" strokeWidth="3" d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998" />
                    <path strokeLinecap="round" strokeWidth="3" d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272" />
                    <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449" />
                </svg>

                <div className="sb-wrap">
                    {/* Path SVG */}
                    <svg className="sb-path" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 221 42" height="42" width="221">
                        <path strokeLinecap="round" strokeWidth="3" d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855" />
                    </svg>

                    <div className="sb-outline" />

                    <div className="sb-content">
                        {/* Text */}
                        <span className="sb-char">
                            {chars.map((ch, i) => (
                                <span
                                    key={i}
                                    className={ch === " " ? "sb-space" : ""}
                                    style={{ "--i": i + 1 } as React.CSSProperties}
                                >
                                    {ch}
                                </span>
                            ))}
                        </span>

                        {/* Arrow icon */}
                        <div className="sb-icon">
                            <div className="sb-arrow" />
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}

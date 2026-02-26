// Auto-generated from social-clock.tsx
// Run: npm run generate-codes

export const socialClockCodeTS = `"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface SocialItem {
    label: string
    icon: React.ReactNode
    link: string
    color: string // RGB format e.g. "24,119,242"
}

/* ── Default socials (used when none are passed) ── */
const defaultSocials: SocialItem[] = [
    {
        label: "Facebook",
        link: "https://facebook.com",
        color: "24,119,242",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        link: "https://twitter.com",
        color: "29,161,242",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        link: "https://instagram.com",
        color: "225,48,108",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        link: "https://github.com",
        color: "110,84,148",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
        ),
    },
    {
        label: "Discord",
        link: "https://discord.com",
        color: "88,101,242",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M524.5 69.8a1.5 1.5 0 00-.8-.7A485.1 485.1 0 00404.1 32a1.8 1.8 0 00-1.9.9 337.5 337.5 0 00-14.9 30.6 447.8 447.8 0 00-134.4 0 309.5 309.5 0 00-15.1-30.6 1.9 1.9 0 00-1.9-.9A483.7 483.7 0 00116.1 69.1a1.7 1.7 0 00-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 00.8 1.4A487.7 487.7 0 00176 479.9a1.9 1.9 0 002.1-.7A348.2 348.2 0 00208.1 430.4a1.9 1.9 0 00-1-2.6 321.2 321.2 0 01-45.9-21.9 1.9 1.9 0 01-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 011.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 011.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 01-.2 3.1 301.4 301.4 0 01-45.9 21.8 1.9 1.9 0 00-1 2.6 391.1 391.1 0 0030 48.8 1.9 1.9 0 002.1.7A486 486 0 00610.7 405.7a1.9 1.9 0 00.8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        link: "https://whatsapp.com",
        color: "37,211,102",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
        ),
    },
    {
        label: "Reddit",
        link: "https://reddit.com",
        color: "255,87,0",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34-34.5 3.7-61.4 33-61.4 68.4v.2c-37.5 1.6-71.8 12.3-99 29.1-10.1-7.8-22.8-12.5-36.5-12.5-33 0-59.8 26.8-59.8 59.8 0 24 14.1 44.6 34.4 54.1 2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54 0-33-26.8-59.8-59.8-59.8-13.7 0-26.3 4.6-36.4 12.4-27.4-17-62.1-27.7-100-29.1v-.2c0-25.4 18.9-46.5 43.4-49.9 4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6-31.4-8.8-30.4-30.5 15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9.8-6.2 3.9-6.5 18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1.3 5.1 3.6 3.9 6.5z" />
            </svg>
        ),
    },
]

export interface SocialClockProps {
    socials?: SocialItem[]
    size?: number
    buttonSize?: number
    triggerColor?: string
    hoverColor?: string
    className?: string
}

export function SocialClock({
    socials = defaultSocials,
    size = 220,
    buttonSize = 52,
    triggerColor = "#a78bfa",
    hoverColor = "167,139,250",
    className,
}: SocialClockProps) {
    const uid = React.useId().replace(/:/g, "")
    const count = socials.length
    const padding = 6
    const iconScale = 0.6

    return (
        <>
            <style>{\`
                .sc-\${uid} {
                    --size: \${size}px;
                    --btn: \${buttonSize}px;
                    --count: \${count};
                    position: relative;
                    width: var(--size);
                    height: var(--size);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: default;
                    pointer-events: none;
                }

                /* ── Button list ring ── */
                .sc-\${uid} .sc-ring {
                    position: absolute;
                    width: calc(var(--btn) + \${padding * 2}px);
                    height: calc(var(--btn) + \${padding * 2}px);
                    left: calc(50% - (var(--btn) + \${padding * 2}px) / 2);
                    top: calc(50% - (var(--btn) + \${padding * 2}px) / 2);
                    border-radius: 50%;
                    pointer-events: all;
                    transition: all 0.35s ease-in-out, transform 0.4s linear;
                }
                .sc-\${uid}:hover .sc-ring {
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    transform: rotate(360deg);
                }

                /* ── Social button ── */
                .sc-\${uid} .sc-btn {
                    --angle: calc(var(--i) * 360deg / var(--count));
                    position: absolute;
                    width: var(--btn);
                    height: calc(100% - \${padding * 2}px);
                    left: calc(50% - var(--btn) / 2);
                    top: \${padding}px;
                    transform: rotate(var(--angle));
                    border: none;
                    background: none;
                    border-radius: var(--btn);
                    box-sizing: content-box;
                    cursor: pointer;
                    pointer-events: none;
                    padding: 0;
                    text-decoration: none;
                    display: block;
                }
                /* Icon bg circle */
                .sc-\${uid} .sc-btn::before {
                    content: "";
                    position: absolute;
                    width: var(--btn);
                    height: var(--btn);
                    left: calc(50% - var(--btn) / 2);
                    top: 0;
                    border-radius: 50%;
                    background: rgba(\${hoverColor}, 0.5);
                    pointer-events: all;
                    transition: background 0.3s linear;
                }
                .sc-\${uid}:hover .sc-btn::before {
                    background: rgba(\${hoverColor}, 0.4);
                }
                /* Fill on hover */
                .sc-\${uid} .sc-btn::after {
                    content: "";
                    position: absolute;
                    width: var(--btn);
                    height: calc(50% + var(--btn) / 2);
                    left: calc(50% - var(--btn) / 2);
                    bottom: calc(100% - (50% + var(--btn) / 2));
                    border-radius: var(--btn);
                    box-shadow: inset 0 0 0 rgba(\${hoverColor}, 0.6);
                    pointer-events: none;
                    transition: box-shadow 0.3s ease-in-out;
                }
                .sc-\${uid} .sc-btn:hover::after {
                    box-shadow: inset 0 calc(-0.5 * (var(--size) + var(--btn))) 0 rgba(\${hoverColor}, 0.6);
                    pointer-events: all;
                }
                .sc-\${uid} .sc-btn:active::after {
                    box-shadow: inset 0 calc(-0.5 * (var(--size) + var(--btn))) 0 rgba(\${hoverColor}, 0.9);
                }

                /* Icon SVG */
                .sc-\${uid} .sc-btn svg {
                    --icon-size: calc(var(--btn) * \${iconScale});
                    --pad: calc((var(--btn) - var(--icon-size)) / 2);
                    position: absolute;
                    width: var(--icon-size);
                    height: var(--icon-size);
                    left: var(--pad);
                    top: var(--pad);
                    fill: #fff;
                    z-index: 2;
                    transform: rotate(calc(-1 * var(--angle)));
                    pointer-events: none;
                }
            \`}</style>

            <div className={cn(\`sc-\${uid}\`, className)}>
                {/* Ring of social buttons */}
                <div className="sc-ring">
                    {socials.map((item, i) => (
                        <div
                            key={item.label}
                            className="sc-btn"
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                if (item.link) {
                                    window.open(item.link, "_blank", "noopener,noreferrer")
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            style={{ "--i": i, "--sc-color": item.color } as React.CSSProperties}
                            aria-label={item.label}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>

                {/* Center trigger */}
                <button
                    className="relative z-10 rounded-full flex items-center justify-center pointer-events-auto border-none cursor-pointer"
                    style={{
                        width: buttonSize,
                        height: buttonSize,
                        background: triggerColor,
                    }}
                    aria-label="Share"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" style={{ width: buttonSize * 0.55, height: buttonSize * 0.55, paddingRight: buttonSize * 0.04 }}>
                        <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                    </svg>
                </button>
            </div>
        </>
    )
}
`

export const socialClockCodeJS = `"use client";
import React from "react";
import { cn } from "@/lib/utils";
/* ── Default socials (used when none are passed) ── */
const defaultSocials = [
    {
        label: "Facebook",
        link: "https://facebook.com",
        color: "24,119,242",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z"/>
            </svg>),
    },
    {
        label: "Twitter",
        link: "https://twitter.com",
        color: "29,161,242",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
            </svg>),
    },
    {
        label: "Instagram",
        link: "https://instagram.com",
        color: "225,48,108",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>),
    },
    {
        label: "GitHub",
        link: "https://github.com",
        color: "110,84,148",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
            </svg>),
    },
    {
        label: "Discord",
        link: "https://discord.com",
        color: "88,101,242",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M524.5 69.8a1.5 1.5 0 00-.8-.7A485.1 485.1 0 00404.1 32a1.8 1.8 0 00-1.9.9 337.5 337.5 0 00-14.9 30.6 447.8 447.8 0 00-134.4 0 309.5 309.5 0 00-15.1-30.6 1.9 1.9 0 00-1.9-.9A483.7 483.7 0 00116.1 69.1a1.7 1.7 0 00-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 00.8 1.4A487.7 487.7 0 00176 479.9a1.9 1.9 0 002.1-.7A348.2 348.2 0 00208.1 430.4a1.9 1.9 0 00-1-2.6 321.2 321.2 0 01-45.9-21.9 1.9 1.9 0 01-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 011.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 011.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 01-.2 3.1 301.4 301.4 0 01-45.9 21.8 1.9 1.9 0 00-1 2.6 391.1 391.1 0 0030 48.8 1.9 1.9 0 002.1.7A486 486 0 00610.7 405.7a1.9 1.9 0 00.8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
            </svg>),
    },
    {
        label: "WhatsApp",
        link: "https://whatsapp.com",
        color: "37,211,102",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>),
    },
    {
        label: "Reddit",
        link: "https://reddit.com",
        color: "255,87,0",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34-34.5 3.7-61.4 33-61.4 68.4v.2c-37.5 1.6-71.8 12.3-99 29.1-10.1-7.8-22.8-12.5-36.5-12.5-33 0-59.8 26.8-59.8 59.8 0 24 14.1 44.6 34.4 54.1 2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54 0-33-26.8-59.8-59.8-59.8-13.7 0-26.3 4.6-36.4 12.4-27.4-17-62.1-27.7-100-29.1v-.2c0-25.4 18.9-46.5 43.4-49.9 4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6-31.4-8.8-30.4-30.5 15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9.8-6.2 3.9-6.5 18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1.3 5.1 3.6 3.9 6.5z"/>
            </svg>),
    },
];
export function SocialClock({ socials = defaultSocials, size = 220, buttonSize = 52, triggerColor = "#a78bfa", hoverColor = "167,139,250", className, }) {
    const uid = React.useId().replace(/:/g, "");
    const count = socials.length;
    const padding = 6;
    const iconScale = 0.6;
    return (<>
            <style>{\`
                .sc-\${uid} {
                    --size: \${size}px;
                    --btn: \${buttonSize}px;
                    --count: \${count};
                    position: relative;
                    width: var(--size);
                    height: var(--size);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: default;
                    pointer-events: none;
                }

                /* ── Button list ring ── */
                .sc-\${uid} .sc-ring {
                    position: absolute;
                    width: calc(var(--btn) + \${padding * 2}px);
                    height: calc(var(--btn) + \${padding * 2}px);
                    left: calc(50% - (var(--btn) + \${padding * 2}px) / 2);
                    top: calc(50% - (var(--btn) + \${padding * 2}px) / 2);
                    border-radius: 50%;
                    pointer-events: all;
                    transition: all 0.35s ease-in-out, transform 0.4s linear;
                }
                .sc-\${uid}:hover .sc-ring {
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    transform: rotate(360deg);
                }

                /* ── Social button ── */
                .sc-\${uid} .sc-btn {
                    --angle: calc(var(--i) * 360deg / var(--count));
                    position: absolute;
                    width: var(--btn);
                    height: calc(100% - \${padding * 2}px);
                    left: calc(50% - var(--btn) / 2);
                    top: \${padding}px;
                    transform: rotate(var(--angle));
                    border: none;
                    background: none;
                    border-radius: var(--btn);
                    box-sizing: content-box;
                    cursor: pointer;
                    pointer-events: none;
                    padding: 0;
                    text-decoration: none;
                    display: block;
                }
                /* Icon bg circle */
                .sc-\${uid} .sc-btn::before {
                    content: "";
                    position: absolute;
                    width: var(--btn);
                    height: var(--btn);
                    left: calc(50% - var(--btn) / 2);
                    top: 0;
                    border-radius: 50%;
                    background: rgba(\${hoverColor}, 0.5);
                    pointer-events: all;
                    transition: background 0.3s linear;
                }
                .sc-\${uid}:hover .sc-btn::before {
                    background: rgba(\${hoverColor}, 0.4);
                }
                /* Fill on hover */
                .sc-\${uid} .sc-btn::after {
                    content: "";
                    position: absolute;
                    width: var(--btn);
                    height: calc(50% + var(--btn) / 2);
                    left: calc(50% - var(--btn) / 2);
                    bottom: calc(100% - (50% + var(--btn) / 2));
                    border-radius: var(--btn);
                    box-shadow: inset 0 0 0 rgba(\${hoverColor}, 0.6);
                    pointer-events: none;
                    transition: box-shadow 0.3s ease-in-out;
                }
                .sc-\${uid} .sc-btn:hover::after {
                    box-shadow: inset 0 calc(-0.5 * (var(--size) + var(--btn))) 0 rgba(\${hoverColor}, 0.6);
                    pointer-events: all;
                }
                .sc-\${uid} .sc-btn:active::after {
                    box-shadow: inset 0 calc(-0.5 * (var(--size) + var(--btn))) 0 rgba(\${hoverColor}, 0.9);
                }

                /* Icon SVG */
                .sc-\${uid} .sc-btn svg {
                    --icon-size: calc(var(--btn) * \${iconScale});
                    --pad: calc((var(--btn) - var(--icon-size)) / 2);
                    position: absolute;
                    width: var(--icon-size);
                    height: var(--icon-size);
                    left: var(--pad);
                    top: var(--pad);
                    fill: #fff;
                    z-index: 2;
                    transform: rotate(calc(-1 * var(--angle)));
                    pointer-events: none;
                }
            \`}</style>

            <div className={cn(\`sc-\${uid}\`, className)}>
                {/* Ring of social buttons */}
                <div className="sc-ring">
                    {socials.map((item, i) => (<div key={item.label} className="sc-btn" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (item.link) {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                }
            }} role="button" tabIndex={0} style={{ "--i": i, "--sc-color": item.color }} aria-label={item.label}>
                            {item.icon}
                        </div>))}
                </div>

                {/* Center trigger */}
                <button className="relative z-10 rounded-full flex items-center justify-center pointer-events-auto border-none cursor-pointer" style={{
            width: buttonSize,
            height: buttonSize,
            background: triggerColor,
        }} aria-label="Share">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" style={{ width: buttonSize * 0.55, height: buttonSize * 0.55, paddingRight: buttonSize * 0.04 }}>
                        <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                    </svg>
                </button>
            </div>
        </>);
}
`

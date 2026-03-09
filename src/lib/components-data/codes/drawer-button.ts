// Auto-generated from drawer-button.tsx
// Run: npm run generate-codes

export const drawerButtonCodeTS = `"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface DrawerButtonProps {
    text?: string
    drawerTopText?: string
    drawerBottomText?: string
    btnColor?: string
    drawerColor?: string
    textColor?: string
    cornerColor?: string
    className?: string
    onClick?: () => void
}

export function DrawerButton({
    text = "Get Started",
    drawerTopText = "limited time...",
    drawerBottomText = "...offer ends soon",
    btnColor = "#7c3aed",
    drawerColor = "#a78bfa",
    textColor = "#ffffff",
    cornerColor = "rgba(255,255,255,0.25)",
    className,
    onClick,
}: DrawerButtonProps) {
    const uid = React.useId().replace(/:/g, "")

    return (
        <>
            <style>{\`
                .db-\${uid} {
                    --btn-color: \${btnColor};
                    --drawer-color: \${drawerColor};
                    --corner-color: \${cornerColor};
                    --corner-dist: 22px;
                    --corner-mul: 1.4;
                    --ease: cubic-bezier(0.22, 1, 0.36, 1);
                    --dur: 350ms;
                }

                .db-\${uid} .db-main {
                    background: var(--btn-color);
                    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }

                .db-\${uid} .db-drawer {
                    background: var(--drawer-color);
                    transition: transform var(--dur) var(--ease), opacity calc(var(--dur) * 0.6) var(--ease), filter var(--dur) var(--ease);
                }

                .db-\${uid} .db-label {
                    transition: transform var(--dur) var(--ease);
                }

                .db-\${uid} .db-corner {
                    stroke: var(--corner-color);
                    transition: transform var(--dur) var(--ease), opacity var(--dur) var(--ease);
                }
                .db-\${uid} .db-corner:nth-of-type(1) {
                    top:0; left:0;
                    transform: translate(calc(-1*var(--corner-dist)), calc(-1*var(--corner-dist))) rotate(90deg);
                }
                .db-\${uid} .db-corner:nth-of-type(2) {
                    top:0; right:0;
                    transform: translate(var(--corner-dist), calc(-1*var(--corner-dist))) rotate(180deg);
                }
                .db-\${uid} .db-corner:nth-of-type(3) {
                    bottom:0; right:0;
                    transform: translate(var(--corner-dist), var(--corner-dist)) rotate(-90deg);
                }
                .db-\${uid} .db-corner:nth-of-type(4) {
                    bottom:0; left:0;
                    transform: translate(calc(-1*var(--corner-dist)), var(--corner-dist)) rotate(0deg);
                }

                /* Hover */
                .db-\${uid}:hover .db-main {
                    transform: scale(1.04);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }
                .db-\${uid}:hover .db-top {
                    transform: translateY(-26px) rotateZ(3deg);
                    filter: blur(0px); opacity: 1;
                }
                .db-\${uid}:hover .db-bottom {
                    transform: translateY(26px) rotateZ(3deg);
                    filter: blur(0px); opacity: 1;
                }
                .db-\${uid}:hover .db-label {
                    transform: scale(1.03);
                }
                .db-\${uid}:hover .db-corner { opacity: 1; }
                .db-\${uid}:hover .db-corner:nth-of-type(1) {
                    transform: translate(calc(-1*var(--corner-mul)*var(--corner-dist)), calc(-1*var(--corner-mul)*var(--corner-dist))) rotate(90deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(2) {
                    transform: translate(calc(var(--corner-mul)*var(--corner-dist)), calc(-1*var(--corner-mul)*var(--corner-dist))) rotate(180deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(3) {
                    transform: translate(calc(var(--corner-mul)*var(--corner-dist)), calc(var(--corner-mul)*var(--corner-dist))) rotate(-90deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(4) {
                    transform: translate(calc(-1*var(--corner-mul)*var(--corner-dist)), calc(var(--corner-mul)*var(--corner-dist))) rotate(0deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }

                /* Active */
                .db-\${uid}:active .db-main {
                    transform: scale(0.97);
                    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
                }
                .db-\${uid}:active .db-top,
                .db-\${uid}:active .db-bottom {
                    transform: translateY(0) scale(0.8); opacity: 0.5;
                }
                .db-\${uid}:active .db-label { transform: scale(0.98); }
                .db-\${uid}:active .db-corner { opacity: 0.8; }
                .db-\${uid}:active .db-corner:nth-of-type(1) {
                    transform: translate(calc(-0.9*var(--corner-dist)), calc(-0.9*var(--corner-dist))) rotate(90deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(2) {
                    transform: translate(calc(0.9*var(--corner-dist)), calc(-0.9*var(--corner-dist))) rotate(180deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(3) {
                    transform: translate(calc(0.9*var(--corner-dist)), calc(0.9*var(--corner-dist))) rotate(-90deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(4) {
                    transform: translate(calc(-0.9*var(--corner-dist)), calc(0.9*var(--corner-dist))) rotate(0deg);
                }
            \`}</style>

            <div className={cn(\`db-\${uid}\`, "relative flex items-center justify-center", className)}>
                {/* Top drawer */}
                <div
                    className="db-drawer db-top absolute top-0 left-2 flex items-center justify-center min-h-[30px] border-none px-4 py-1 text-xs font-medium tracking-wide rounded-t-[10px] opacity-0 blur-[4px]"
                    style={{ color: textColor }}
                >
                    {drawerTopText}
                </div>

                {/* Bottom drawer */}
                <div
                    className="db-drawer db-bottom absolute bottom-0 right-2 flex items-center justify-center min-h-[30px] border-none px-4 py-1 text-xs font-medium tracking-wide rounded-b-[10px] opacity-0 blur-[4px]"
                    style={{ color: textColor }}
                >
                    {drawerBottomText}
                </div>

                {/* Button */}
                <button
                    className="db-main relative min-w-[160px] min-h-[44px] rounded-[14px] border-none px-7 py-2 cursor-pointer"
                    style={{ color: textColor }}
                    onClick={onClick}
                >
                    <span className="db-label inline-block text-lg font-semibold leading-none" style={{ color: textColor }}>
                        {text}
                    </span>
                </button>

                {/* Corner marks */}
                {[0, 1, 2, 3].map((i) => (
                    <svg
                        key={i}
                        className="db-corner absolute w-7 fill-none opacity-60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 1 32 32"
                    >
                        <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
                    </svg>
                ))}
            </div>
        </>
    )
}
`

export const drawerButtonCodeJS = `"use client";
import React from "react";
import { cn } from "@/lib/utils";
export function DrawerButton({ text = "Get Started", drawerTopText = "limited time...", drawerBottomText = "...offer ends soon", btnColor = "#7c3aed", drawerColor = "#a78bfa", textColor = "#ffffff", cornerColor = "rgba(255,255,255,0.25)", className, onClick, }) {
    const uid = React.useId().replace(/:/g, "");
    return (<>
            <style>{\`
                .db-\${uid} {
                    --btn-color: \${btnColor};
                    --drawer-color: \${drawerColor};
                    --corner-color: \${cornerColor};
                    --corner-dist: 22px;
                    --corner-mul: 1.4;
                    --ease: cubic-bezier(0.22, 1, 0.36, 1);
                    --dur: 350ms;
                }

                .db-\${uid} .db-main {
                    background: var(--btn-color);
                    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }

                .db-\${uid} .db-drawer {
                    background: var(--drawer-color);
                    transition: transform var(--dur) var(--ease), opacity calc(var(--dur) * 0.6) var(--ease), filter var(--dur) var(--ease);
                }

                .db-\${uid} .db-label {
                    transition: transform var(--dur) var(--ease);
                }

                .db-\${uid} .db-corner {
                    stroke: var(--corner-color);
                    transition: transform var(--dur) var(--ease), opacity var(--dur) var(--ease);
                }
                .db-\${uid} .db-corner:nth-of-type(1) {
                    top:0; left:0;
                    transform: translate(calc(-1*var(--corner-dist)), calc(-1*var(--corner-dist))) rotate(90deg);
                }
                .db-\${uid} .db-corner:nth-of-type(2) {
                    top:0; right:0;
                    transform: translate(var(--corner-dist), calc(-1*var(--corner-dist))) rotate(180deg);
                }
                .db-\${uid} .db-corner:nth-of-type(3) {
                    bottom:0; right:0;
                    transform: translate(var(--corner-dist), var(--corner-dist)) rotate(-90deg);
                }
                .db-\${uid} .db-corner:nth-of-type(4) {
                    bottom:0; left:0;
                    transform: translate(calc(-1*var(--corner-dist)), var(--corner-dist)) rotate(0deg);
                }

                /* Hover */
                .db-\${uid}:hover .db-main {
                    transform: scale(1.04);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }
                .db-\${uid}:hover .db-top {
                    transform: translateY(-26px) rotateZ(3deg);
                    filter: blur(0px); opacity: 1;
                }
                .db-\${uid}:hover .db-bottom {
                    transform: translateY(26px) rotateZ(3deg);
                    filter: blur(0px); opacity: 1;
                }
                .db-\${uid}:hover .db-label {
                    transform: scale(1.03);
                }
                .db-\${uid}:hover .db-corner { opacity: 1; }
                .db-\${uid}:hover .db-corner:nth-of-type(1) {
                    transform: translate(calc(-1*var(--corner-mul)*var(--corner-dist)), calc(-1*var(--corner-mul)*var(--corner-dist))) rotate(90deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(2) {
                    transform: translate(calc(var(--corner-mul)*var(--corner-dist)), calc(-1*var(--corner-mul)*var(--corner-dist))) rotate(180deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(3) {
                    transform: translate(calc(var(--corner-mul)*var(--corner-dist)), calc(var(--corner-mul)*var(--corner-dist))) rotate(-90deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }
                .db-\${uid}:hover .db-corner:nth-of-type(4) {
                    transform: translate(calc(-1*var(--corner-mul)*var(--corner-dist)), calc(var(--corner-mul)*var(--corner-dist))) rotate(0deg);
                    filter: drop-shadow(-8px 8px 0 var(--corner-color)) drop-shadow(-16px 16px 0 var(--corner-color));
                }

                /* Active */
                .db-\${uid}:active .db-main {
                    transform: scale(0.97);
                    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
                }
                .db-\${uid}:active .db-top,
                .db-\${uid}:active .db-bottom {
                    transform: translateY(0) scale(0.8); opacity: 0.5;
                }
                .db-\${uid}:active .db-label { transform: scale(0.98); }
                .db-\${uid}:active .db-corner { opacity: 0.8; }
                .db-\${uid}:active .db-corner:nth-of-type(1) {
                    transform: translate(calc(-0.9*var(--corner-dist)), calc(-0.9*var(--corner-dist))) rotate(90deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(2) {
                    transform: translate(calc(0.9*var(--corner-dist)), calc(-0.9*var(--corner-dist))) rotate(180deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(3) {
                    transform: translate(calc(0.9*var(--corner-dist)), calc(0.9*var(--corner-dist))) rotate(-90deg);
                }
                .db-\${uid}:active .db-corner:nth-of-type(4) {
                    transform: translate(calc(-0.9*var(--corner-dist)), calc(0.9*var(--corner-dist))) rotate(0deg);
                }
            \`}</style>

            <div className={cn(\`db-\${uid}\`, "relative flex items-center justify-center", className)}>
                {/* Top drawer */}
                <div className="db-drawer db-top absolute top-0 left-2 flex items-center justify-center min-h-[30px] border-none px-4 py-1 text-xs font-medium tracking-wide rounded-t-[10px] opacity-0 blur-[4px]" style={{ color: textColor }}>
                    {drawerTopText}
                </div>

                {/* Bottom drawer */}
                <div className="db-drawer db-bottom absolute bottom-0 right-2 flex items-center justify-center min-h-[30px] border-none px-4 py-1 text-xs font-medium tracking-wide rounded-b-[10px] opacity-0 blur-[4px]" style={{ color: textColor }}>
                    {drawerBottomText}
                </div>

                {/* Button */}
                <button className="db-main relative min-w-[160px] min-h-[44px] rounded-[14px] border-none px-7 py-2 cursor-pointer" style={{ color: textColor }} onClick={onClick}>
                    <span className="db-label inline-block text-lg font-semibold leading-none" style={{ color: textColor }}>
                        {text}
                    </span>
                </button>

                {/* Corner marks */}
                {[0, 1, 2, 3].map((i) => (<svg key={i} className="db-corner absolute w-7 fill-none opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="-1 1 32 32">
                        <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z"/>
                    </svg>))}
            </div>
        </>);
}
`

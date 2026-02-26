// Auto-generated from wave-card.tsx
// Run: npm run generate-codes

export const waveCardCodeTS = `"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface WaveCardProps {
    title?: string
    subtitle?: string
    gradient?: string
    icon?: React.ReactNode
    iconSize?: number
    speed?: number
    titleClass?: string
    subtitleClass?: string
    className?: string
}

const DefaultIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-12 h-12">
        <path
            fill="currentColor"
            d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
        />
    </svg>
)

export function WaveCard({
    title = "UI / UX Designer",
    subtitle = "MikeAndrewDesigner",
    gradient = "linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)",
    icon,
    iconSize = 48,
    speed = 3,
    titleClass,
    subtitleClass,
    className,
}: WaveCardProps) {
    const uid = React.useId().replace(/:/g, "")

    return (
        <>
            <style>{\`
                @keyframes wc-wave-\${uid} {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .wc-\${uid} .wc-wave {
                    position: absolute;
                    width: 540px;
                    height: 700px;
                    opacity: 0.6;
                    left: 0;
                    top: 0;
                    margin-left: -50%;
                    margin-top: -70%;
                    border-radius: 40%;
                    background: var(--wc-gradient);
                    animation: wc-wave-\${uid} \${speed}s infinite linear;
                }
                .wc-\${uid} .wc-wave:nth-child(2),
                .wc-\${uid} .wc-wave:nth-child(3) {
                    top: 210px;
                }
                .wc-\${uid} .wc-wave:nth-child(2) {
                    animation-duration: \${speed + 1}s;
                }
                .wc-\${uid} .wc-wave:nth-child(3) {
                    animation-duration: \${speed + 2}s;
                }
            \`}</style>

            <div
                className={cn(
                    \`wc-\${uid}\`,
                    "relative w-[240px] h-[330px] rounded-2xl overflow-hidden bg-transparent",
                    className
                )}
                style={{
                    boxShadow: "0px 8px 28px -9px rgba(0,0,0,0.45)",
                    ["--wc-gradient" as string]: gradient,
                }}
            >
                {/* Background image area */}
                <div className="absolute inset-0 bg-[#1a1a2e]" />

                {/* Waves */}
                <div className="wc-wave" />
                <div className="wc-wave" />
                <div className="wc-wave" />

                {/* Info overlay */}
                <div className="absolute inset-x-0 top-[5.6em] text-center text-white font-semibold text-xl z-10">
                    {/* Icon */}
                    <div
                        className="flex justify-center pb-4 -mt-4"
                        style={{ width: iconSize, height: iconSize, margin: "0 auto 16px" }}
                    >
                        {icon || <DefaultIcon />}
                    </div>

                    {/* Title */}
                    <div className={titleClass}>{title}</div>

                    {/* Subtitle */}
                    <div className={cn("text-sm font-light mt-4 lowercase opacity-80", subtitleClass)}>
                        {subtitle}
                    </div>
                </div>
            </div>
        </>
    )
}
`

export const waveCardCodeJS = `"use client";
import React from "react";
import { cn } from "@/lib/utils";
const DefaultIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"/>
    </svg>);
export function WaveCard({ title = "UI / UX Designer", subtitle = "MikeAndrewDesigner", gradient = "linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)", icon, iconSize = 48, speed = 3, titleClass, subtitleClass, className, }) {
    const uid = React.useId().replace(/:/g, "");
    return (<>
            <style>{\`
                @keyframes wc-wave-\${uid} {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .wc-\${uid} .wc-wave {
                    position: absolute;
                    width: 540px;
                    height: 700px;
                    opacity: 0.6;
                    left: 0;
                    top: 0;
                    margin-left: -50%;
                    margin-top: -70%;
                    border-radius: 40%;
                    background: var(--wc-gradient);
                    animation: wc-wave-\${uid} \${speed}s infinite linear;
                }
                .wc-\${uid} .wc-wave:nth-child(2),
                .wc-\${uid} .wc-wave:nth-child(3) {
                    top: 210px;
                }
                .wc-\${uid} .wc-wave:nth-child(2) {
                    animation-duration: \${speed + 1}s;
                }
                .wc-\${uid} .wc-wave:nth-child(3) {
                    animation-duration: \${speed + 2}s;
                }
            \`}</style>

            <div className={cn(\`wc-\${uid}\`, "relative w-[240px] h-[330px] rounded-2xl overflow-hidden bg-transparent", className)} style={{
            boxShadow: "0px 8px 28px -9px rgba(0,0,0,0.45)",
            ["--wc-gradient"]: gradient,
        }}>
                {/* Background image area */}
                <div className="absolute inset-0 bg-[#1a1a2e]"/>

                {/* Waves */}
                <div className="wc-wave"/>
                <div className="wc-wave"/>
                <div className="wc-wave"/>

                {/* Info overlay */}
                <div className="absolute inset-x-0 top-[5.6em] text-center text-white font-semibold text-xl z-10">
                    {/* Icon */}
                    <div className="flex justify-center pb-4 -mt-4" style={{ width: iconSize, height: iconSize, margin: "0 auto 16px" }}>
                        {icon || <DefaultIcon />}
                    </div>

                    {/* Title */}
                    <div className={titleClass}>{title}</div>

                    {/* Subtitle */}
                    <div className={cn("text-sm font-light mt-4 lowercase opacity-80", subtitleClass)}>
                        {subtitle}
                    </div>
                </div>
            </div>
        </>);
}
`

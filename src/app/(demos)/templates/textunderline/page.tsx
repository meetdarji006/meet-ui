"use client"

import { useRef } from "react";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);

/* ================= SVG VARIANTS ================= */

const SVG_VARIANTS = {
    wave: `
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  `,
    straight: `
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20C80 20 160 20 305 20"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  `,
    scribble: `
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 29.5C30 10 60 35 90 18 120 5 150 40 180 20 210 5 240 35 270 18 290 10 305 20"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  `
};

/* ================= COMPONENT ================= */

function TextUnderline({
    children,
    variant = "wave",
    color = "#e55050",
    strokeWidth = 8,
    duration = 0.6,
    height = "0.7em",
    bottomOffset = "0.25em",   // 🔥 spacing between text and svg
    direction = "right",
    className = ""
}) {
    const boxRef = useRef(null);
    const textRef = useRef(null);
    const enterTween = useRef(null);
    const leaveTween = useRef(null);

    const mountSVG = () => {
        if (!boxRef.current) return;

        boxRef.current.innerHTML = SVG_VARIANTS[variant] || SVG_VARIANTS.wave;

        const svg = boxRef.current.querySelector("svg");
        const path = svg.querySelector("path");

        // SVG sizing
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.setAttribute("preserveAspectRatio", "none");

        // Stroke styles
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-width", strokeWidth);
    };

    const getDrawDir = () => {
        switch (direction) {
            case "left":
                return { from: "100% 100%", to: "0% 100%" };
            case "up":
                return { from: "0% 100%", to: "100% 100%" };
            default:
                return { from: "0%", to: "100%" };
        }
    };

    const onEnter = () => {
        if (enterTween.current?.isActive()) return;
        if (leaveTween.current?.isActive()) leaveTween.current.kill();

        mountSVG();
        const path = boxRef.current.querySelector("path");

        const { from, to } = getDrawDir();

        // gsap.set(path, { drawSVG: from });
        // enterTween.current = gsap.to(path, {
        //     drawSVG: to,
        //     duration,
        //     ease: "power2.inOut"
        // });
        gsap.fromTo(path, { strokeDasharray: 1000, strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration, ease: "power2.inOut" });
    };

    const onLeave = () => {
        const path = boxRef.current?.querySelector("path");
        if (!path) return;

        // leaveTween.current = gsap.to(path, {
        //     drawSVG: "100% 100%",
        //     duration: duration * 0.8,
        //     ease: "power2.inOut",
        //     onComplete: () => {
        //         if (boxRef.current) boxRef.current.innerHTML = "";
        //     }
        // });
        leaveTween.current = gsap.to(path, {
            strokeDashoffset: -1000,
            duration: duration * 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                if (boxRef.current) boxRef.current.innerHTML = "";
            }
        });
    };

    return (
        <span
            className={`text-underline ${className}`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
                position: "relative",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",   // 🔥 exact horizontal centering
                cursor: "pointer"
            }}
        >
            {/* TEXT */}
            <span
                ref={textRef}
                style={{
                    display: "inline-block",
                    whiteSpace: "nowrap"
                }}
            >
                {children}
            </span>

            {/* SPACING */}
            <span style={{ height: bottomOffset }} />

            {/* SVG */}
            <span
                ref={boxRef}
                style={{
                    width: "100%",        // matches text width
                    height,
                    display: "block",
                    color
                }}
            />
        </span>
    );
}

export default function page() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">

            <TextUnderline className="text-6xl" variant="wave" color="#ff3c3c" strokeWidth={10} duration={0.7}>
                Branding
            </TextUnderline>
        </div>
    )
}

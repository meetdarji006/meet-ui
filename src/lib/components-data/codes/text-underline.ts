// Auto-generated from text-underline.tsx
// Run: npm run generate-codes

export const textUnderlineCodeTS = `"use client"

import { useRef } from "react";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);

/* ================= SVG VARIANTS ================= */

const SVG_VARIANTS = {
    wave1: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,

    wave2: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,

    scribble1: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,

    scribble2: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,

    curve: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,

    straight: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`
}

interface TextUnderlineProps {
    children: React.ReactNode
    variant?: keyof typeof SVG_VARIANTS
    color?: string
    strokeWidth?: number
    duration?: number
    height?: string
    bottomOffset?: string
    direction?: "right" | "left" | "up"
    className?: string
    fontSize?: string | number
    lineHeight?: string | number
}

export default function TextUnderline({
    children,
    variant = "wave1",
    color = "#667eea",
    strokeWidth = 8,
    duration = 0.6,
    height = "0.7em",
    bottomOffset = "0.25em",
    direction = "right",
    className = "",
    fontSize = "1em",
    lineHeight = 0.8
}: TextUnderlineProps) {
    const boxRef = useRef<HTMLSpanElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const enterTween = useRef<gsap.core.Tween | null>(null)
    const leaveTween = useRef<gsap.core.Tween | null>(null)

    const mountSVG = () => {
        if (!boxRef.current) return

        boxRef.current.innerHTML = SVG_VARIANTS[variant] || SVG_VARIANTS.wave1

        const svg = boxRef.current.querySelector("svg")
        const path = svg?.querySelector("path")

        if (!svg || !path) return

        // SVG sizing
        svg.style.width = "100%"
        svg.style.height = "100%"
        svg.setAttribute("preserveAspectRatio", "none")

        // Stroke styles
        path.setAttribute("stroke", color)
        path.setAttribute("stroke-width", String(strokeWidth))
    }

    const getDrawDir = () => {
        switch (direction) {
            case "left":
                return { from: "100% 100%", to: "0% 100%" }
            case "up":
                return { from: "0% 100%", to: "100% 100%" }
            default:
                return { from: "0%", to: "100%" }
        }
    }

    const onEnter = () => {
        if (enterTween.current?.isActive()) return
        if (leaveTween.current?.isActive()) leaveTween.current?.kill()

        mountSVG();
        const path = boxRef.current?.querySelector("path");

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
                if (boxRef.current) boxRef.current.innerHTML = ""
            },
        })
    }

    return (
        <span
            className={\`text-underline \${className}\`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
                position: "relative",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                fontSize: fontSize,
                lineHeight: lineHeight
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
                    width: "100%",
                    height,
                    display: "block",
                    color,
                }}
            />
        </span>
    )
}
`

export const textUnderlineCodeJS = `"use client";
import { useRef } from "react";
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);
/* ================= SVG VARIANTS ================= */
const SVG_VARIANTS = {
    wave1: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,
    wave2: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,
    scribble1: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,
    scribble2: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,
    curve: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`,
    straight: \`
    <svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998"
        stroke="currentColor" fill="none" stroke-linecap="round"/>
    </svg>
  \`
};
export default function TextUnderline({ children, variant = "wave1", color = "#667eea", strokeWidth = 8, duration = 0.6, height = "0.7em", bottomOffset = "0.25em", direction = "right", className = "", fontSize = "1em", lineHeight = 0.8 }) {
    const boxRef = useRef(null);
    const textRef = useRef(null);
    const enterTween = useRef(null);
    const leaveTween = useRef(null);
    const mountSVG = () => {
        if (!boxRef.current)
            return;
        boxRef.current.innerHTML = SVG_VARIANTS[variant] || SVG_VARIANTS.wave1;
        const svg = boxRef.current.querySelector("svg");
        const path = svg?.querySelector("path");
        if (!svg || !path)
            return;
        // SVG sizing
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.setAttribute("preserveAspectRatio", "none");
        // Stroke styles
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-width", String(strokeWidth));
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
        if (enterTween.current?.isActive())
            return;
        if (leaveTween.current?.isActive())
            leaveTween.current?.kill();
        mountSVG();
        const path = boxRef.current?.querySelector("path");
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
        if (!path)
            return;
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
                if (boxRef.current)
                    boxRef.current.innerHTML = "";
            },
        });
    };
    return (<span className={\`text-underline \${className}\`} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            fontSize: fontSize,
            lineHeight: lineHeight
        }}>
            {/* TEXT */}
            <span ref={textRef} style={{
            display: "inline-block",
            whiteSpace: "nowrap"
        }}>
                {children}
            </span>

            {/* SPACING */}
            <span style={{ height: bottomOffset }}/>

            {/* SVG */}
            <span ref={boxRef} style={{
            width: "100%",
            height,
            display: "block",
            color,
        }}/>
        </span>);
}
`

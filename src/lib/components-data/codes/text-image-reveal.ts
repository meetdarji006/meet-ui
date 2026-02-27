// Auto-generated from text-image-reveal.tsx
// Run: npm run generate-codes

export const textImageRevealCodeTS = `"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextImageRevealProps {
    text: string;
    imageUrl: string;
    thumbnailUrl?: string;
    marqueeText?: string;
    direction?: "left" | "right";
    className?: string;
}

export const TextImageReveal = ({
    text,
    imageUrl,
    thumbnailUrl,
    marqueeText,
    direction = "left",
    className,
}: TextImageRevealProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
    const [fontStyles, setFontStyles] = useState({
        fontSize: 100, // Fallback
        fontWeight: 400,
        fontFamily: "inherit",
    });

    // Cursor tracking for thumbnail
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Sync SVG size and font styles with invisible DOM text
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current && textRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const textRect = textRef.current.getBoundingClientRect();

                // Use the container width but bounded text height
                setSvgSize({
                    width: containerRect.width,
                    height: textRect.height * 1.2 // Pad height slightly to prevent clipping
                });

                const computedStyle = window.getComputedStyle(textRef.current);
                const fontSize = parseFloat(computedStyle.fontSize);
                setFontStyles({
                    fontSize: isNaN(fontSize) ? 100 : fontSize,
                    fontWeight: parseInt(computedStyle.fontWeight) || 400,
                    fontFamily: computedStyle.fontFamily,
                });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, [text, className]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Mouse position relative to center of the container
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    // Auto-generate marquee array
    const bgText = marqueeText || \`\${text} - \`.repeat(10);
    const marqueeDirection = direction === "left" ? "-50%" : "0%";
    const initialMarquee = direction === "left" ? "0%" : "-50%";

    // Unique IDs for SVG elements
    const uniqueId = useRef(Math.random().toString(36).substring(7)).current;
    const clipId = \`text-clip-\${uniqueId}\`;

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative z-10 flex w-full items-center justify-center overflow-hidden py-4 cursor-default select-none",
                className
            )}
            style={{ minHeight: "1.2em" }} // Ensure minimum height based on font size
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Invisible structural text block for accurate height/width sizing */}
            <span
                ref={textRef}
                className="invisible opacity-0 px-8 text-center whitespace-nowrap"
                style={{
                    lineHeight: 1.1, // slightly taller to capture full font ascenders/descenders
                    fontSize: fontStyles.fontSize,
                    fontWeight: fontStyles.fontWeight,
                    fontFamily: fontStyles.fontFamily,
                }}
            >
                {text}
            </span>

            {/* LAYER 1: Background Marquee (Scrolling Faint Text) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center"
            >
                <motion.div
                    initial={{ x: initialMarquee }}
                    animate={{ x: marqueeDirection }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 15, // Speed of marquee
                    }}
                    className="flex whitespace-nowrap opacity-10 -translate-y-[15%]"
                >
                    <span className="pe-8">{bgText}</span>
                    <span className="pe-8">{bgText}</span>
                </motion.div>
            </motion.div>

            {/* LAYER 2: Following Thumbnail Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isHovered && thumbnailUrl ? 1 : 0,
                    scale: isHovered && thumbnailUrl ? 1 : 0.5
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-32 w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl"
                style={{
                    x: springX,
                    y: springY,
                }}
            >
                {thumbnailUrl && (
                    <img
                        src={thumbnailUrl}
                        alt="thumbnail"
                        className="h-full w-full object-cover"
                    />
                )}
            </motion.div>

            {/* LAYER 3: SVG Masking Layer (Core Text & Image Pan) */}
            {svgSize.width > 0 && (
                <svg
                    width={svgSize.width}
                    height={svgSize.height}
                    viewBox={\`0 0 \${svgSize.width} \${svgSize.height}\`}
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{ overflow: "visible" }}
                >
                    <defs>
                        {/* Define the text shape as a clip path */}
                        <clipPath id={clipId}>
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="central"
                                style={{
                                    fontSize: fontStyles.fontSize,
                                    fontWeight: fontStyles.fontWeight,
                                    fontFamily: fontStyles.fontFamily,
                                }}
                            >
                                {text}
                            </text>
                        </clipPath>
                    </defs>

                    {/* Default Base Text (Visible when NOT hovered) */}
                    <motion.text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="currentColor"
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            fontSize: fontStyles.fontSize,
                            fontWeight: fontStyles.fontWeight,
                            fontFamily: fontStyles.fontFamily,
                        }}
                    >
                        {text}
                    </motion.text>

                    {/* Revealed Panning Image (Clipped inside the text) */}
                    <motion.g
                        clipPath={\`url(#\${clipId})\`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/*
                            We need the image to be much wider than the SVG for panning.
                            By using 300% width, it provides a long seamless strip to scroll through.
                        */}
                        <motion.image
                            href={imageUrl}
                            y="0"
                            width="200%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                            initial={{ x: initialMarquee }}
                            animate={{ x: marqueeDirection }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20, // Determines panning speed inside the text
                            }}
                        />
                    </motion.g>
                </svg>
            )}
        </div>
    );
};
`

export const textImageRevealCodeJS = `"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
export const TextImageReveal = ({ text, imageUrl, thumbnailUrl, marqueeText, direction = "left", className, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
    const [fontStyles, setFontStyles] = useState({
        fontSize: 100, // Fallback
        fontWeight: 400,
        fontFamily: "inherit",
    });
    // Cursor tracking for thumbnail
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    // Sync SVG size and font styles with invisible DOM text
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current && textRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const textRect = textRef.current.getBoundingClientRect();
                // Use the container width but bounded text height
                setSvgSize({
                    width: containerRect.width,
                    height: textRect.height * 1.2 // Pad height slightly to prevent clipping
                });
                const computedStyle = window.getComputedStyle(textRef.current);
                const fontSize = parseFloat(computedStyle.fontSize);
                setFontStyles({
                    fontSize: isNaN(fontSize) ? 100 : fontSize,
                    fontWeight: parseInt(computedStyle.fontWeight) || 400,
                    fontFamily: computedStyle.fontFamily,
                });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, [text, className]);
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        // Mouse position relative to center of the container
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    // Auto-generate marquee array
    const bgText = marqueeText || \`\${text} - \`.repeat(10);
    const marqueeDirection = direction === "left" ? "-50%" : "0%";
    const initialMarquee = direction === "left" ? "0%" : "-50%";
    // Unique IDs for SVG elements
    const uniqueId = useRef(Math.random().toString(36).substring(7)).current;
    const clipId = \`text-clip-\${uniqueId}\`;
    return (<div ref={containerRef} className={cn("relative z-10 flex w-full items-center justify-center overflow-hidden py-4 cursor-default select-none", className)} style={{ minHeight: "1.2em" }} // Ensure minimum height based on font size
     onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove}>
            {/* Invisible structural text block for accurate height/width sizing */}
            <span ref={textRef} className="invisible opacity-0 px-8 text-center whitespace-nowrap" style={{
            lineHeight: 1.1, // slightly taller to capture full font ascenders/descenders
            fontSize: fontStyles.fontSize,
            fontWeight: fontStyles.fontWeight,
            fontFamily: fontStyles.fontFamily,
        }}>
                {text}
            </span>

            {/* LAYER 1: Background Marquee (Scrolling Faint Text) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center">
                <motion.div initial={{ x: initialMarquee }} animate={{ x: marqueeDirection }} transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15, // Speed of marquee
        }} className="flex whitespace-nowrap opacity-10 -translate-y-[15%]">
                    <span className="pe-8">{bgText}</span>
                    <span className="pe-8">{bgText}</span>
                </motion.div>
            </motion.div>

            {/* LAYER 2: Following Thumbnail Image */}
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{
            opacity: isHovered && thumbnailUrl ? 1 : 0,
            scale: isHovered && thumbnailUrl ? 1 : 0.5
        }} transition={{ duration: 0.4, ease: "easeOut" }} className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-32 w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl" style={{
            x: springX,
            y: springY,
        }}>
                {thumbnailUrl && (<img src={thumbnailUrl} alt="thumbnail" className="h-full w-full object-cover"/>)}
            </motion.div>

            {/* LAYER 3: SVG Masking Layer (Core Text & Image Pan) */}
            {svgSize.width > 0 && (<svg width={svgSize.width} height={svgSize.height} viewBox={\`0 0 \${svgSize.width} \${svgSize.height}\`} className="pointer-events-none absolute inset-0 z-20" style={{ overflow: "visible" }}>
                    <defs>
                        {/* Define the text shape as a clip path */}
                        <clipPath id={clipId}>
                            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" style={{
                fontSize: fontStyles.fontSize,
                fontWeight: fontStyles.fontWeight,
                fontFamily: fontStyles.fontFamily,
            }}>
                                {text}
                            </text>
                        </clipPath>
                    </defs>

                    {/* Default Base Text (Visible when NOT hovered) */}
                    <motion.text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="currentColor" animate={{ opacity: isHovered ? 0 : 1 }} transition={{ duration: 0.3 }} style={{
                fontSize: fontStyles.fontSize,
                fontWeight: fontStyles.fontWeight,
                fontFamily: fontStyles.fontFamily,
            }}>
                        {text}
                    </motion.text>

                    {/* Revealed Panning Image (Clipped inside the text) */}
                    <motion.g clipPath={\`url(#\${clipId})\`} initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4 }}>
                        {/*
                We need the image to be much wider than the SVG for panning.
                By using 300% width, it provides a long seamless strip to scroll through.
            */}
                        <motion.image href={imageUrl} y="0" width="200%" height="100%" preserveAspectRatio="xMidYMid slice" initial={{ x: initialMarquee }} animate={{ x: marqueeDirection }} transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20, // Determines panning speed inside the text
            }}/>
                    </motion.g>
                </svg>)}
        </div>);
};
`

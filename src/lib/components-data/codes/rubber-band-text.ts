// Auto-generated from rubber-band-text.tsx
// Run: npm run generate-codes

export const rubberBandTextCodeTS = `"use client"

import { useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface RubberBandTextProps {
    text: string
    className?: string
    hoverColor?: string
    textColor?: string
    duration?: number
}

export const RubberBandText = ({
    text = "Hover Me",
    className,
    hoverColor = "#667eea",
    textColor = "#ffffff",
    duration = 0.8
}: RubberBandTextProps) => {
    return (
        <span className={cn("inline-flex overflow-hidden", className)}>
            {text.split("").map((letter, i) => (
                <RubberLetter
                    key={i}
                    letter={letter === " " ? "\\u00A0" : letter}
                    hoverColor={hoverColor}
                    textColor={textColor}
                    duration={duration}
                />
            ))}
        </span>
    )
}

const RubberLetter = ({ letter, hoverColor, textColor, duration }: { letter: string; hoverColor: string; textColor: string; duration: number }) => {
    const controls = useAnimationControls()
    const [isPlaying, setIsPlaying] = useState(false)

    const rubberBand = () => {
        if (!isPlaying) {
            setIsPlaying(true)
            controls.start({
                transform: [
                    "scale3d(1, 1, 1)",
                    "scale3d(1.4, .55, 1)",
                    "scale3d(.75, 1.25, 1)",
                    "scale3d(1.25, .85, 1)",
                    "scale3d(.9, 1.05, 1)",
                    "scale3d(1, 1, 1)",
                ],
                transition: {
                    times: [0, .4, .6, .7, .8, .9],
                    duration: duration
                }
            }).then(() => setIsPlaying(false))
        }
    }

    // specific check for hex/rgb/hsl to avoid applying invalid classes
    const isHoverTailwind = hoverColor.startsWith('text-');
    const hoverStyle = !isHoverTailwind ? { color: hoverColor } : undefined;

    const isTextTailwind = textColor.startsWith('text-');
    const textStyle = !isTextTailwind ? { color: textColor } : undefined;

    return (
        <motion.span
            animate={controls}
            onMouseOver={rubberBand}
            whileHover={hoverStyle}
            style={textStyle}
            className={cn(
                "inline-block cursor-default select-none",
                isTextTailwind ? textColor : "",
                isHoverTailwind && \`hover:\${hoverColor}\`
            )}
            transition={{ color: { duration: 0 } }}
        >
            {letter}
        </motion.span>
    )
}
`

export const rubberBandTextCodeJS = `"use client";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const RubberBandText = ({ text = "Hover Me", className, hoverColor = "#667eea", textColor = "#ffffff", duration = 0.8 }) => {
    return (<span className={cn("inline-flex overflow-hidden", className)}>
            {text.split("").map((letter, i) => (<RubberLetter key={i} letter={letter === " " ? "\\u00A0" : letter} hoverColor={hoverColor} textColor={textColor} duration={duration}/>))}
        </span>);
};
const RubberLetter = ({ letter, hoverColor, textColor, duration }) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const rubberBand = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            controls.start({
                transform: [
                    "scale3d(1, 1, 1)",
                    "scale3d(1.4, .55, 1)",
                    "scale3d(.75, 1.25, 1)",
                    "scale3d(1.25, .85, 1)",
                    "scale3d(.9, 1.05, 1)",
                    "scale3d(1, 1, 1)",
                ],
                transition: {
                    times: [0, .4, .6, .7, .8, .9],
                    duration: duration
                }
            }).then(() => setIsPlaying(false));
        }
    };
    // specific check for hex/rgb/hsl to avoid applying invalid classes
    const isHoverTailwind = hoverColor.startsWith('text-');
    const hoverStyle = !isHoverTailwind ? { color: hoverColor } : undefined;
    const isTextTailwind = textColor.startsWith('text-');
    const textStyle = !isTextTailwind ? { color: textColor } : undefined;
    return (<motion.span animate={controls} onMouseOver={rubberBand} whileHover={hoverStyle} style={textStyle} className={cn("inline-block cursor-default select-none", isTextTailwind ? textColor : "", isHoverTailwind && \`hover:\${hoverColor}\`)} transition={{ color: { duration: 0 } }}>
            {letter}
        </motion.span>);
};
`

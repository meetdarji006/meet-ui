// Auto-generated from stretch-text.tsx
// Run: npm run generate-codes

export const stretchTextCodeTS = `"use client"

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue
} from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

interface StretchTextProps {
    text: string;
    className?: string;
    stretchIntensity?: number;
    stretchRange?: number;
}

export const StretchText = ({
    text,
    className = "",
    stretchIntensity = 1.5,
    stretchRange = 200
}: StretchTextProps) => {
    const mouseX = useMotionValue<number>(Infinity);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        mouseX.set(e.clientX);
    }, [mouseX]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(Infinity);
    }, [mouseX]);

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={\`flex flex-row items-end cursor-default select-none \${className}\`}
        >
            {text.split("").map((char, i) => (
                <StretchChar
                    key={i}
                    char={char}
                    mouseX={mouseX}
                    stretchIntensity={stretchIntensity}
                    stretchRange={stretchRange}
                />
            ))}
        </div>
    );
};

interface StretchCharProps {
    char: string;
    mouseX: MotionValue<number>;
    stretchIntensity: number;
    stretchRange: number;
}

const StretchChar = ({
    char,
    mouseX,
    stretchIntensity,
    stretchRange
}: StretchCharProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [elementCenter, setElementCenter] = useState(0);

    // Update position on mount and resize
    useEffect(() => {
        const updatePosition = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setElementCenter(rect.left + rect.width / 2);
            }
        };

        updatePosition();

        // Debounced resize handler
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updatePosition, 100);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Calculate raw scale based on mouse distance
    const rawScale = useTransform(mouseX, (val) => {
        if (val === Infinity) return 1;

        const distance = Math.abs(val - elementCenter);

        if (distance < stretchRange) {
            // Smooth cubic bezier-like easing
            const progress = 1 - distance / stretchRange;
            // Smoother easing curve
            const easedProgress = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
            return 1 + (stretchIntensity - 1) * easedProgress;
        }

        return 1;
    });

    // Ultra-smooth spring physics
    const scaleY = useSpring(rawScale, {
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    });

    // Slight horizontal squeeze for natural rubber effect
    const scaleX = useTransform(scaleY,
        [1, stretchIntensity],
        [1, 0.92]
    );

    const springScaleX = useSpring(scaleX, {
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    });

    return (
        <motion.span
            ref={ref}
            style={{
                scaleY,
                scaleX: springScaleX,
            }}
            className="inline-block origin-bottom will-change-transform"
        >
            {char === " " ? "\\u00A0" : char}
        </motion.span>
    );
};
`

export const stretchTextCodeJS = `"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
export const StretchText = ({ text, className = "", stretchIntensity = 1.5, stretchRange = 200 }) => {
    const mouseX = useMotionValue(Infinity);
    const handleMouseMove = useCallback((e) => {
        mouseX.set(e.clientX);
    }, [mouseX]);
    const handleMouseLeave = useCallback(() => {
        mouseX.set(Infinity);
    }, [mouseX]);
    return (<div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={\`flex flex-row items-end cursor-default select-none \${className}\`}>
            {text.split("").map((char, i) => (<StretchChar key={i} char={char} mouseX={mouseX} stretchIntensity={stretchIntensity} stretchRange={stretchRange}/>))}
        </div>);
};
const StretchChar = ({ char, mouseX, stretchIntensity, stretchRange }) => {
    const ref = useRef(null);
    const [elementCenter, setElementCenter] = useState(0);
    // Update position on mount and resize
    useEffect(() => {
        const updatePosition = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setElementCenter(rect.left + rect.width / 2);
            }
        };
        updatePosition();
        // Debounced resize handler
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updatePosition, 100);
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);
    // Calculate raw scale based on mouse distance
    const rawScale = useTransform(mouseX, (val) => {
        if (val === Infinity)
            return 1;
        const distance = Math.abs(val - elementCenter);
        if (distance < stretchRange) {
            // Smooth cubic bezier-like easing
            const progress = 1 - distance / stretchRange;
            // Smoother easing curve
            const easedProgress = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
            return 1 + (stretchIntensity - 1) * easedProgress;
        }
        return 1;
    });
    // Ultra-smooth spring physics
    const scaleY = useSpring(rawScale, {
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    });
    // Slight horizontal squeeze for natural rubber effect
    const scaleX = useTransform(scaleY, [1, stretchIntensity], [1, 0.92]);
    const springScaleX = useSpring(scaleX, {
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    });
    return (<motion.span ref={ref} style={{
            scaleY,
            scaleX: springScaleX,
        }} className="inline-block origin-bottom will-change-transform">
            {char === " " ? "\\u00A0" : char}
        </motion.span>);
};
`

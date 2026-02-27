'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface RingCursorProps {
    className?: string;
    /**
     * Color of the cursor elements
     * @default "#ffffff"
     */
    color?: string;
    /**
     * Diameter of the central tracking dot in pixels
     * @default 6
     */
    dotSize?: number;
    /**
     * Base diameter of the outer lagging ring in pixels
     * @default 32
     */
    ringSize?: number;
    /**
     * Stroke thickness of the outer ring in pixels
     * @default 1.5
     */
    ringThickness?: number;
    /**
     * Spring stiffness for the outer ring
     * @default 200
     */
    ringStiffness?: number;
    /**
     * Spring damping for the outer ring
     * @default 20
     */
    ringDamping?: number;
    /**
     * Spring mass for the outer ring
     * @default 0.5
     */
    ringMass?: number;
    /**
     * Spring stiffness for the central tracking dot
     * @default 800
     */
    dotStiffness?: number;
    /**
     * Spring damping for the central tracking dot
     * @default 35
     */
    dotDamping?: number;
    /**
     * Spring mass for the central tracking dot
     * @default 0.5
     */
    dotMass?: number;
}

export function RingCursor({
    className,
    color = '#ffffff',
    dotSize = 6,
    ringSize = 32,
    ringThickness = 1.5,
    ringStiffness = 200,
    ringDamping = 20,
    ringMass = 0.5,
    dotStiffness = 800,
    dotDamping = 35,
    dotMass = 0.5,
}: RingCursorProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Spring configurations
    const dotSpringConfig = { damping: dotDamping, stiffness: dotStiffness, mass: dotMass };
    const ringSpringConfig = { damping: ringDamping, stiffness: ringStiffness, mass: ringMass };

    const dotSpringX = useSpring(0, dotSpringConfig);
    const dotSpringY = useSpring(0, dotSpringConfig);
    const ringSpringX = useSpring(0, ringSpringConfig);
    const ringSpringY = useSpring(0, ringSpringConfig);

    useEffect(() => {
        let hideTimeout: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            dotSpringX.set(e.clientX);
            dotSpringY.set(e.clientY);
            ringSpringX.set(e.clientX);
            ringSpringY.set(e.clientY);

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable = target && target.closest('a, button, input, select, textarea, [role="button"], [data-cursor-hover]');
            setIsHovering(!!isClickable);

            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 2000);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseDown = () => setIsHovering(true); // Simulate a pinch effect on click
        const handleMouseUp = () => {
            // Restore hover state based on current target if still hovering, else false.
            // A simple timeout or relying on the next mousemove works smoothly.
            setTimeout(() => {
                setIsHovering(false);
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            clearTimeout(hideTimeout);
        };
    }, [isVisible, dotSpringX, dotSpringY, ringSpringX, ringSpringY]);

    return (
        <div
            className={cn(
                "fixed inset-0 pointer-events-none z-9999 overflow-hidden transition-opacity duration-300",
                isVisible ? "opacity-100" : "opacity-0",
                className
            )}
        >
            {/* Outer Lagging Ring */}
            <motion.div
                className="absolute top-0 left-0 rounded-full border-solid flex items-center justify-center pointer-events-none"
                style={{
                    x: ringSpringX,
                    y: ringSpringY,
                    // Centers the ring around the mouse coordinates
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovering ? dotSize * 2 : ringSize,
                    height: isHovering ? dotSize * 2 : ringSize,
                    borderColor: color,
                    borderWidth: isHovering ? 0 : ringThickness,
                    backgroundColor: isHovering ? color : 'transparent',
                }}
                transition={{
                    width: { type: "spring", stiffness: 300, damping: 20 },
                    height: { type: "spring", stiffness: 300, damping: 20 },
                    backgroundColor: { duration: 0.2 },
                    borderWidth: { duration: 0.2 }
                }}
            />

            {/* Inner Spring Dot */}
            <motion.div
                className="absolute top-0 left-0 rounded-full pointer-events-none transition-opacity duration-300"
                style={{
                    x: dotSpringX,
                    y: dotSpringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: color,
                    opacity: isHovering ? 0 : 1 // Hide dot when outer ring turns into the solid merged hover state
                }}
            />
        </div>
    );
}

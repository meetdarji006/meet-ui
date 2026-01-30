"use client";

import { useEffect, useRef, useState } from "react";

interface MagneticCursorProps {
    /** Number of trailing circles */
    circleCount?: number;
    /** Base size of the circles in pixels */
    circleSize?: number;
    /** Color of the circles */
    color?: string;
    /** Smoothing factor (0-1, lower = more lag) */
    smoothing?: number;
    /** Border width of circles */
    borderWidth?: number;
    /** Whether to show the component */
    enabled?: boolean;
    /** Scale factor when hovering interactive elements */
    hoverScale?: number;
    /** CSS selector for interactive elements */
    interactiveSelector?: string;
}

interface CirclePosition {
    x: number;
    y: number;
}

export const MagneticCursor = ({
    circleCount = 5,
    circleSize = 40,
    color = "rgba(255, 255, 255, 0.6)",
    smoothing = 0.15,
    borderWidth = 1,
    enabled = true,
    hoverScale = 1.5,
    interactiveSelector = "a, button, [role='button'], input, textarea, [data-magnetic-hover]",
}: MagneticCursorProps) => {
    const [positions, setPositions] = useState<CirclePosition[]>(
        Array(circleCount).fill({ x: 0, y: 0 })
    );
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef<CirclePosition>({ x: 0, y: 0 });
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Check if hovering over interactive elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as Element;
            const isInteractive = target.closest(interactiveSelector);
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousemove", handleElementHover);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousemove", handleElementHover);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [enabled, interactiveSelector, isVisible]);

    useEffect(() => {
        if (!enabled) return;

        const animate = () => {
            setPositions((prev) => {
                const newPositions = [...prev];
                const target = targetRef.current;

                for (let i = 0; i < circleCount; i++) {
                    const prevPos = i === 0 ? target : newPositions[i - 1];
                    // Each circle follows the previous one with increasing lag
                    const lagFactor = smoothing * (1 - i * 0.1);
                    newPositions[i] = {
                        x: newPositions[i].x + (prevPos.x - newPositions[i].x) * lagFactor,
                        y: newPositions[i].y + (prevPos.y - newPositions[i].y) * lagFactor,
                    };
                }

                return newPositions;
            });

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [enabled, circleCount, smoothing]);

    if (!enabled || !isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
                overflow: "hidden",
            }}
        >
            {positions.map((pos, i) => {
                const scale = isHovering ? hoverScale : 1;
                const size = circleSize * scale;
                const opacity = 1 - i * 0.15;

                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            left: pos.x,
                            top: pos.y,
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            border: `${borderWidth}px solid ${color}`,
                            transform: "translate(-50%, -50%)",
                            opacity: opacity,
                            transition: isHovering ? "width 0.3s, height 0.3s" : "none",
                            mixBlendMode: "difference",
                        }}
                    />
                );
            })}
        </div>
    );
};

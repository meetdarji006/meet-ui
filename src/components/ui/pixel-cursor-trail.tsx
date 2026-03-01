"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface PixelCursorTrailProps extends React.HTMLAttributes<HTMLDivElement> {
    pixelSize?: number;
    trailLength?: number;
    fadeSpeed?: number;
    pixelColor?: string;
    isGlobal?: boolean;
}

interface Pixel {
    id: number;
    x: number;
    y: number;
    opacity: number;
    age: number;
}

export function PixelCursorTrail({
    pixelSize = 12,
    trailLength = 40,
    fadeSpeed = 0.04,
    pixelColor,
    isGlobal = false,
    className,
    ...props
}: PixelCursorTrailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pixels, setPixels] = useState<Pixel[]>([]);
    const pixelIdRef = useRef(0);
    const lastPositionRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);

    const createPixel = useCallback((x: number, y: number) => {
        return {
            id: pixelIdRef.current++,
            x,
            y,
            opacity: 1,
            age: 0,
        };
    }, []);

    const handleMouseMove = useCallback(
        (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
            let x, y;
            if (isGlobal) {
                x = e.clientX;
                y = e.clientY;
            } else {
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }

            const dx = x - lastPositionRef.current.x;
            const dy = y - lastPositionRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > pixelSize) {
                const newPixel = createPixel(x, y);
                setPixels((prev) => [...prev.slice(-trailLength), newPixel]);
                lastPositionRef.current = { x, y };
            }
        },
        [createPixel, pixelSize, trailLength, isGlobal]
    );

    useEffect(() => {
        if (isGlobal) {
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isGlobal, handleMouseMove]);

    useEffect(() => {
        const animate = () => {
            setPixels((prev) =>
                prev
                    .map((pixel) => ({
                        ...pixel,
                        opacity: pixel.opacity - fadeSpeed,
                        age: pixel.age + 1,
                    }))
                    .filter((pixel) => pixel.opacity > 0)
            );
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [fadeSpeed]);

    return (
        <div
            ref={containerRef}
            onMouseMove={!isGlobal ? handleMouseMove : undefined}
            className={cn(
                isGlobal
                    ? "fixed inset-0 pointer-events-none z-9999 overflow-hidden"
                    : "relative w-full h-full min-h-[400px] overflow-hidden cursor-crosshair select-none bg-background",
                className
            )}
            {...props}
        >
            {pixels.map((pixel) => {
                // Calculate size based on age - older pixels are smaller
                const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100);
                const currentSize = pixelSize * sizeMultiplier;

                return (
                    <div
                        key={pixel.id}
                        className={cn("absolute pointer-events-none", !pixelColor && "bg-foreground")}
                        style={{
                            left: pixel.x - currentSize / 2,
                            top: pixel.y - currentSize / 2,
                            width: currentSize,
                            height: currentSize,
                            opacity: pixel.opacity,
                            transition: "width 0.1s ease-out, height 0.1s ease-out",
                            backgroundColor: pixelColor,
                        }}
                    />
                );
            })}
            {!isGlobal && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/20">Move cursor</span>
                </div>
            )}
        </div>
    );
}

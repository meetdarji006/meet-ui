"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    PanInfo,
} from "framer-motion";
import React, { useEffect, useRef, useState, useCallback } from "react";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface CircularGalleryProps {
    items: {
        image: string;
        text?: string;
    }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
}

export const CircularGallery: React.FC<CircularGalleryProps> = ({
    items,
    bend = 0,
    textColor = "#ffffff",
    borderRadius = 0.05,
    font = "font-sans",
    autoRotate = true,
    autoRotateSpeed = 0.5,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rotation = useMotionValue(0);

    // Use a spring for smooth momentum stopping
    const smoothRotation = useSpring(rotation, {
        damping: 20,
        stiffness: 100,
        mass: 1,
    });

    const [isInteracting, setIsInteracting] = useState(false);
    const velocity = useRef(0);
    const friction = 0.95; // Friction factor for momentum
    const animationFrameId = useRef<number | null>(null);
    const autoRotateFrameId = useRef<number | null>(null);

    // Responsive dimensions
    const [dimensions, setDimensions] = useState({ width: 300, height: 200, gap: 40, containerHeight: 500 });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                // Mobile
                setDimensions({ width: 180, height: 120, gap: 20, containerHeight: 350 });
            } else if (screenWidth < 1024) {
                // Tablet
                setDimensions({ width: 240, height: 160, gap: 30, containerHeight: 420 });
            } else {
                // Desktop
                setDimensions({ width: 300, height: 200, gap: 40, containerHeight: 500 });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const { width: itemWidth, height: itemHeight, gap, containerHeight } = dimensions;
    const totalCircumference = items.length * (itemWidth + gap);
    // bend affects the radius - higher bend = smaller radius = more curved
    const baseRadius = totalCircumference / (2 * Math.PI);
    const radius = baseRadius * (11 - bend) / 10; // bend 0 = 1.1x radius (flat), bend 10 = 0.1x radius (tight)

    const angleStep = 360 / items.length;

    // Auto-rotation logic
    const startAutoRotate = useCallback(() => {
        if (isInteracting) return;

        rotation.set(rotation.get() + autoRotateSpeed);
        autoRotateFrameId.current = requestAnimationFrame(startAutoRotate);
    }, [isInteracting, autoRotateSpeed, rotation]);

    const stopAutoRotate = useCallback(() => {
        if (autoRotateFrameId.current) {
            cancelAnimationFrame(autoRotateFrameId.current);
            autoRotateFrameId.current = null;
        }
    }, []);

    useEffect(() => {
        if (autoRotate && !isInteracting) {
            startAutoRotate();
        } else {
            stopAutoRotate();
        }
        return () => stopAutoRotate();
    }, [autoRotate, isInteracting, startAutoRotate, stopAutoRotate]);

    const handleDrag = (_: any, info: PanInfo) => {
        const delta = info.delta.x;
        rotation.set(rotation.get() + delta * 0.5);
        velocity.current = info.velocity.x * 0.02;
    };

    const startDrag = () => {
        setIsInteracting(true);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        stopAutoRotate();
        smoothRotation.stop();
    };

    const endDrag = () => {
        startMomentum();
    };

    const startMomentum = useCallback(() => {
        if (Math.abs(velocity.current) < 0.01) {
            setIsInteracting(false);
            return;
        }

        rotation.set(rotation.get() + velocity.current);
        velocity.current *= friction;

        animationFrameId.current = requestAnimationFrame(startMomentum);
    }, [friction, rotation]);

    const handleWheel = (e: React.WheelEvent) => {
        setIsInteracting(true);
        stopAutoRotate();
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

        rotation.set(rotation.get() - e.deltaY * 0.2);

        // Resume auto-rotate after a short delay
        setTimeout(() => setIsInteracting(false), 1500);
    };

    useEffect(() => {
        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            if (autoRotateFrameId.current) cancelAnimationFrame(autoRotateFrameId.current);
        };
    }, []);

    return (
        <div
            className={cn("relative flex w-full items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing", font)}
            style={{ height: `${containerHeight}px` }}
            onWheel={handleWheel}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
        >
            <div
                ref={containerRef}
                className="relative flex h-full w-full items-center justify-center"
                style={{ perspective: "1200px" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDragStart={startDrag}
                    onDrag={handleDrag}
                    onDragEnd={endDrag}
                    style={{
                        rotateY: rotation,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative flex items-center justify-center"
                // Give it an explicit size to house items
                // The actual items are positioned absolutely
                >
                    {items.map((item, index) => {
                        const angle = index * angleStep;

                        return (
                            <div
                                key={index}
                                className="absolute origin-center backface-visible"
                                style={{
                                    width: `${itemWidth}px`,
                                    height: `${itemHeight}px`,
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                            >
                                <motion.div
                                    className="relative h-full w-full overflow-hidden"
                                    style={{ borderRadius: `${borderRadius * 100}px` }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.text || `Gallery Item ${index + 1}`}
                                        className="pointer-events-none h-full w-full object-cover"
                                    />
                                    {item.text && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 backdrop-blur-sm">
                                            <p style={{ color: textColor }} className="text-center text-sm font-medium">{item.text}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

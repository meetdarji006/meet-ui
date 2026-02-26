// Auto-generated from stacked-carousel.tsx
// Run: npm run generate-codes

export const stackedCarouselCodeTS = `"use client"

import React, { useState, useEffect, useRef, useCallback, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface CarouselItemData {
    id: string | number
    title: string
    subtitle?: string
    image: string
    content?: ReactNode
}

interface StackedCarouselProps {
    items: CarouselItemData[]
    className?: string

    // Interaction tweakables
    speedDrag?: number
    speedWheel?: number

    // Styling
    itemWidth?: string | number
    itemHeight?: string | number

    // Navigation
    showDots?: boolean
    autoPlay?: boolean
    autoPlayInterval?: number

    onActiveChange?: (index: number) => void
}

export function StackedCarousel({
    items,
    className,
    speedDrag = -0.1,
    speedWheel = 0.02,
    itemWidth = "300px",
    itemHeight = "400px",
    showDots = true,
    autoPlay = false,
    autoPlayInterval = 3000,
    onActiveChange
}: StackedCarouselProps) {
    const [progress, setProgress] = useState(50)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Momentum / inertia state
    const velocityRef = useRef(0)
    const lastXRef = useRef(0)
    const lastTimeRef = useRef(0)
    const rafRef = useRef<number | null>(null)

    // Calculate the integer active index based on floating progress
    const activeIndex = Math.floor((progress / 100) * (items.length - 1))

    // Notify parent if active index changes
    useEffect(() => {
        onActiveChange?.(activeIndex)
    }, [activeIndex, onActiveChange])

    // Auto-play
    useEffect(() => {
        if (!autoPlay || isDown) return
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (100 / (items.length - 1))
                return next > 100 ? 0 : next
            })
        }, autoPlayInterval)
        return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, items.length, isDown])

    // z-index calculation
    const getZindex = useCallback((index: number, active: number) => {
        return index === active ? items.length : items.length - Math.abs(active - index)
    }, [items.length])

    // --- Momentum decay animation ---
    const startMomentum = useCallback(() => {
        const decay = () => {
            velocityRef.current *= 0.92 // friction
            if (Math.abs(velocityRef.current) < 0.01) {
                velocityRef.current = 0
                return
            }
            setProgress((prev) => Math.max(0, Math.min(prev + velocityRef.current, 100)))
            rafRef.current = requestAnimationFrame(decay)
        }
        rafRef.current = requestAnimationFrame(decay)
    }, [])

    const stopMomentum = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }
    }, [])

    // --- Interaction Handlers ---
    const handleWheel = (e: React.WheelEvent) => {
        stopMomentum()
        const wheelProgress = e.deltaY * speedWheel
        setProgress((prev) => Math.max(0, Math.min(prev + wheelProgress, 100)))
    }

    const handlePointerDown = (e: React.PointerEvent) => {
        stopMomentum()
        setIsDown(true)
        setStartX(e.clientX)
        lastXRef.current = e.clientX
        lastTimeRef.current = Date.now()
        velocityRef.current = 0
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDown) return
        const dx = e.clientX - startX
        const mouseProgress = dx * speedDrag
        setProgress((prev) => Math.max(0, Math.min(prev + mouseProgress, 100)))
        setStartX(e.clientX)

        // Track velocity for momentum
        const now = Date.now()
        const dt = now - lastTimeRef.current
        if (dt > 0) {
            velocityRef.current = ((e.clientX - lastXRef.current) * speedDrag) / (dt / 16)
        }
        lastXRef.current = e.clientX
        lastTimeRef.current = now
    }

    const handlePointerUp = () => {
        if (isDown) {
            setIsDown(false)
            startMomentum()
        }
    }

    // Add global mouse up in case they drag outside the container
    useEffect(() => {
        const handleGlobalUp = () => {
            setIsDown(false)
            startMomentum()
        }
        window.addEventListener("pointerup", handleGlobalUp)
        return () => window.removeEventListener("pointerup", handleGlobalUp)
    }, [startMomentum])

    // Cleanup raf on unmount
    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    const handleItemClick = (index: number) => {
        stopMomentum()
        const newProgress = (index / (items.length - 1)) * 100
        setProgress(Math.max(0, Math.min(newProgress, 100)))
    }

    const handleDotClick = (index: number) => {
        stopMomentum()
        const newProgress = (index / (items.length - 1)) * 100
        setProgress(Math.max(0, Math.min(newProgress, 100)))
    }

    return (
        <div className={cn("relative h-full w-full", className)}>
            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="relative z-10 h-full w-full overflow-hidden select-none touch-none"
                style={{
                    perspective: "1200px"
                }}
                onWheel={handleWheel}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                {items.map((item, index) => {
                    const zIndex = getZindex(index, activeIndex)
                    const activeVal = (index - activeIndex) / items.length
                    const isActive = index === activeIndex
                    const distance = Math.abs(index - activeIndex)
                    const itemOpacity = Math.max(0, (zIndex / items.length) * 3 - 2)

                    // Scale: active card = 1, others shrink based on distance
                    const scale = isActive ? 1 : Math.max(0.85, 1 - distance * 0.04)

                    // Shadow: deeper for active, lighter for far
                    const shadowBlur = isActive ? 60 : Math.max(10, 40 - distance * 8)
                    const shadowOpacity = isActive ? 0.5 : Math.max(0.1, 0.3 - distance * 0.05)

                    return (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(index)}
                            className="absolute top-1/2 left-1/2 cursor-pointer rounded-2xl overflow-hidden bg-black"
                            style={{
                                width: itemWidth,
                                height: itemHeight,
                                zIndex: zIndex,
                                opacity: itemOpacity,
                                transformOrigin: "0% 100%",
                                marginTop: \`calc(-1 * \${typeof itemHeight === 'number' ? itemHeight + 'px' : itemHeight} / 2)\`,
                                marginLeft: \`calc(-1 * \${typeof itemWidth === 'number' ? itemWidth + 'px' : itemWidth} / 2)\`,
                                transform: \`translate(\${activeVal * 800}%, \${activeVal * 200}%) rotate(\${activeVal * 120}deg) scale(\${scale})\`,
                                transition: "transform 0.8s cubic-bezier(0, 0.02, 0, 1), opacity 0.8s cubic-bezier(0, 0.02, 0, 1), box-shadow 0.8s cubic-bezier(0, 0.02, 0, 1)",
                                boxShadow: \`0 \${shadowBlur / 2}px \${shadowBlur}px rgba(0, 0, 0, \${shadowOpacity})\${isActive ? ', 0 0 80px rgba(99, 102, 241, 0.15)' : ''}\`,
                                willChange: "transform, opacity"
                            }}
                        >
                            {/* Gradient text overlay */}
                            <div
                                className="absolute inset-0 z-10 flex flex-col justify-end p-6"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent 30%, transparent 50%, rgba(0, 0, 0, 0.8))"
                                }}
                            >
                                <div className="absolute top-4 left-6 text-white text-[clamp(2rem,10vw,5rem)] leading-none font-bold mix-blend-overlay opacity-50 z-10 transition-opacity duration-700">
                                    {item.subtitle}
                                </div>
                                <h2 className="text-white text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight drop-shadow-md z-20">
                                    {item.title}
                                </h2>
                                {item.content}
                            </div>

                            {/* Image Layer */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                draggable={false}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Dot Navigation */}
            {showDots && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {items.map((_, index) => {
                        const isActive = index === activeIndex
                        return (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className="relative group p-1"
                                aria-label={\`Go to slide \${index + 1}\`}
                            >
                                <span
                                    className="block rounded-full transition-all duration-500"
                                    style={{
                                        width: isActive ? 24 : 8,
                                        height: 8,
                                        background: isActive
                                            ? "linear-gradient(135deg, #818cf8, #6366f1)"
                                            : "rgba(255, 255, 255, 0.3)",
                                        boxShadow: isActive
                                            ? "0 0 12px rgba(99, 102, 241, 0.5)"
                                            : "none",
                                    }}
                                />
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
`

export const stackedCarouselCodeJS = `"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
export function StackedCarousel({ items, className, speedDrag = -0.1, speedWheel = 0.02, itemWidth = "300px", itemHeight = "400px", showDots = true, autoPlay = false, autoPlayInterval = 3000, onActiveChange }) {
    const [progress, setProgress] = useState(50);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef(null);
    // Momentum / inertia state
    const velocityRef = useRef(0);
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(0);
    const rafRef = useRef(null);
    // Calculate the integer active index based on floating progress
    const activeIndex = Math.floor((progress / 100) * (items.length - 1));
    // Notify parent if active index changes
    useEffect(() => {
        onActiveChange?.(activeIndex);
    }, [activeIndex, onActiveChange]);
    // Auto-play
    useEffect(() => {
        if (!autoPlay || isDown)
            return;
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (100 / (items.length - 1));
                return next > 100 ? 0 : next;
            });
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length, isDown]);
    // z-index calculation
    const getZindex = useCallback((index, active) => {
        return index === active ? items.length : items.length - Math.abs(active - index);
    }, [items.length]);
    // --- Momentum decay animation ---
    const startMomentum = useCallback(() => {
        const decay = () => {
            velocityRef.current *= 0.92; // friction
            if (Math.abs(velocityRef.current) < 0.01) {
                velocityRef.current = 0;
                return;
            }
            setProgress((prev) => Math.max(0, Math.min(prev + velocityRef.current, 100)));
            rafRef.current = requestAnimationFrame(decay);
        };
        rafRef.current = requestAnimationFrame(decay);
    }, []);
    const stopMomentum = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    }, []);
    // --- Interaction Handlers ---
    const handleWheel = (e) => {
        stopMomentum();
        const wheelProgress = e.deltaY * speedWheel;
        setProgress((prev) => Math.max(0, Math.min(prev + wheelProgress, 100)));
    };
    const handlePointerDown = (e) => {
        stopMomentum();
        setIsDown(true);
        setStartX(e.clientX);
        lastXRef.current = e.clientX;
        lastTimeRef.current = Date.now();
        velocityRef.current = 0;
    };
    const handlePointerMove = (e) => {
        if (!isDown)
            return;
        const dx = e.clientX - startX;
        const mouseProgress = dx * speedDrag;
        setProgress((prev) => Math.max(0, Math.min(prev + mouseProgress, 100)));
        setStartX(e.clientX);
        // Track velocity for momentum
        const now = Date.now();
        const dt = now - lastTimeRef.current;
        if (dt > 0) {
            velocityRef.current = ((e.clientX - lastXRef.current) * speedDrag) / (dt / 16);
        }
        lastXRef.current = e.clientX;
        lastTimeRef.current = now;
    };
    const handlePointerUp = () => {
        if (isDown) {
            setIsDown(false);
            startMomentum();
        }
    };
    // Add global mouse up in case they drag outside the container
    useEffect(() => {
        const handleGlobalUp = () => {
            setIsDown(false);
            startMomentum();
        };
        window.addEventListener("pointerup", handleGlobalUp);
        return () => window.removeEventListener("pointerup", handleGlobalUp);
    }, [startMomentum]);
    // Cleanup raf on unmount
    useEffect(() => {
        return () => {
            if (rafRef.current)
                cancelAnimationFrame(rafRef.current);
        };
    }, []);
    const handleItemClick = (index) => {
        stopMomentum();
        const newProgress = (index / (items.length - 1)) * 100;
        setProgress(Math.max(0, Math.min(newProgress, 100)));
    };
    const handleDotClick = (index) => {
        stopMomentum();
        const newProgress = (index / (items.length - 1)) * 100;
        setProgress(Math.max(0, Math.min(newProgress, 100)));
    };
    return (<div className={cn("relative h-full w-full", className)}>
            {/* Carousel Container */}
            <div ref={containerRef} className="relative z-10 h-full w-full overflow-hidden select-none touch-none" style={{
            perspective: "1200px"
        }} onWheel={handleWheel} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}>
                {items.map((item, index) => {
            const zIndex = getZindex(index, activeIndex);
            const activeVal = (index - activeIndex) / items.length;
            const isActive = index === activeIndex;
            const distance = Math.abs(index - activeIndex);
            const itemOpacity = Math.max(0, (zIndex / items.length) * 3 - 2);
            // Scale: active card = 1, others shrink based on distance
            const scale = isActive ? 1 : Math.max(0.85, 1 - distance * 0.04);
            // Shadow: deeper for active, lighter for far
            const shadowBlur = isActive ? 60 : Math.max(10, 40 - distance * 8);
            const shadowOpacity = isActive ? 0.5 : Math.max(0.1, 0.3 - distance * 0.05);
            return (<div key={item.id} onClick={() => handleItemClick(index)} className="absolute top-1/2 left-1/2 cursor-pointer rounded-2xl overflow-hidden bg-black" style={{
                    width: itemWidth,
                    height: itemHeight,
                    zIndex: zIndex,
                    opacity: itemOpacity,
                    transformOrigin: "0% 100%",
                    marginTop: \`calc(-1 * \${typeof itemHeight === 'number' ? itemHeight + 'px' : itemHeight} / 2)\`,
                    marginLeft: \`calc(-1 * \${typeof itemWidth === 'number' ? itemWidth + 'px' : itemWidth} / 2)\`,
                    transform: \`translate(\${activeVal * 800}%, \${activeVal * 200}%) rotate(\${activeVal * 120}deg) scale(\${scale})\`,
                    transition: "transform 0.8s cubic-bezier(0, 0.02, 0, 1), opacity 0.8s cubic-bezier(0, 0.02, 0, 1), box-shadow 0.8s cubic-bezier(0, 0.02, 0, 1)",
                    boxShadow: \`0 \${shadowBlur / 2}px \${shadowBlur}px rgba(0, 0, 0, \${shadowOpacity})\${isActive ? ', 0 0 80px rgba(99, 102, 241, 0.15)' : ''}\`,
                    willChange: "transform, opacity"
                }}>
                            {/* Gradient text overlay */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6" style={{
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent 30%, transparent 50%, rgba(0, 0, 0, 0.8))"
                }}>
                                <div className="absolute top-4 left-6 text-white text-[clamp(2rem,10vw,5rem)] leading-none font-bold mix-blend-overlay opacity-50 z-10 transition-opacity duration-700">
                                    {item.subtitle}
                                </div>
                                <h2 className="text-white text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight drop-shadow-md z-20">
                                    {item.title}
                                </h2>
                                {item.content}
                            </div>

                            {/* Image Layer */}
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false}/>
                        </div>);
        })}
            </div>

            {/* Dot Navigation */}
            {showDots && (<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {items.map((_, index) => {
                const isActive = index === activeIndex;
                return (<button key={index} onClick={() => handleDotClick(index)} className="relative group p-1" aria-label={\`Go to slide \${index + 1}\`}>
                                <span className="block rounded-full transition-all duration-500" style={{
                        width: isActive ? 24 : 8,
                        height: 8,
                        background: isActive
                            ? "linear-gradient(135deg, #818cf8, #6366f1)"
                            : "rgba(255, 255, 255, 0.3)",
                        boxShadow: isActive
                            ? "0 0 12px rgba(99, 102, 241, 0.5)"
                            : "none",
                    }}/>
                            </button>);
            })}
                </div>)}
        </div>);
}
`

"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export interface Testimonial {
    tempId?: number | string;
    testimonial: string;
    by: string;
    imgSrc: string;
}

interface TestimonialCardProps {
    position: number;
    testimonial: Testimonial;
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-[1px] p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-indigo-600 text-white border-indigo-500"
                    : "z-0 bg-zinc-900 text-zinc-100 border-zinc-800 hover:border-indigo-500/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px rgba(99, 102, 241, 0.4)" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className={cn(
                    "absolute block origin-top-right rotate-45",
                    isCenter ? "bg-indigo-500" : "bg-zinc-800"
                )}
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 1
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 bg-zinc-800 object-cover object-top"
                style={{
                    boxShadow: isCenter ? "3px 3px 0px rgba(99, 102, 241, 1)" : "3px 3px 0px rgba(39, 39, 42, 1)"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-white" : "text-zinc-100"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-indigo-200" : "text-zinc-500"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export interface StaggeredTestimonialsProps {
    testimonials: Testimonial[];
    containerHeight?: number | string;
    className?: string;
}

export function StaggeredTestimonials({
    testimonials,
    containerHeight = 600,
    className
}: StaggeredTestimonialsProps) {
    const [cardSize, setCardSize] = useState(365);
    // Map incoming props to include stable tempIds if they weren't provided natively
    const [testimonialsList, setTestimonialsList] = useState(
        testimonials.map((t, i) => ({ ...t, tempId: t.tempId || i }))
    );

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className={cn("relative w-full overflow-hidden bg-transparent", className)}
            style={{ height: containerHeight }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-colors",
                        "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-colors",
                        "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

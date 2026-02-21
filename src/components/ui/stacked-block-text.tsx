import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StackedTextProps {
    text: string;
    className?: string;
    animationDelay?: number;
    duration?: number;
    stagger?: number;
}

export function StackedText({
    text = "Brutalism",
    className,
    animationDelay = 0,
    duration = 0.8,
    stagger = 0.15
}: StackedTextProps) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: animationDelay,
            }
        }
    };

    const itemVariants = {
        hidden: { height: 0, opacity: 0, y: -10 },
        visible: (custom: { height: string, opacity: number }) => ({
            height: custom.height,
            opacity: custom.opacity,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.16, 1, 0.3, 1] as any
            }
        })
    };

    const heights = [
        "0.9em",
        "calc(0.9em * 0.667)",
        "calc(0.9em * 0.444)",
        "calc(0.9em * 0.296)",
        "calc(0.9em * 0.198)"
    ];

    const opacities = [1, 0.8, 0.6, 0.4, 0.2];

    return (
        <motion.div
            key={`${text}-${duration}-${stagger}-${animationDelay}`}
            className={cn(
                "relative flex flex-col items-center gap-0 text-7xl md:text-[8rem] font-bold uppercase",
                className
            )}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    custom={{ height: heights[i], opacity: opacities[i] }}
                    variants={itemVariants}
                    className="overflow-hidden flex items-end leading-[0.8]"
                >
                    <em className="whitespace-nowrap not-italic block">
                        {text}
                    </em>
                </motion.div>
            ))}
        </motion.div>
    );
}

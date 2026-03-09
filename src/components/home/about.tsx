"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const GlowingBeam = () => {
    return (
        <div className="absolute inset-x-0 top-[60%] -translate-y-1/2 -z-10 flex items-center justify-center pointer-events-none">
            {/* Main Beam */}
            <div className="relative w-full max-w-4xl h-[400px]">
                {/* Central Glow */}
                <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#512FEB] rounded-full blur-[120px] opacity-5 md:opacity-30" />
            </div>
        </div>
    );
};

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const text = "We are Meetui, we help developers like you to build beautiful and interactive user interfaces with ease using our premium animated components.";
    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        },
    };

    return (
        <motion.section
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative py-16 md:py-24 px-4"
        >
            <GlowingBeam />
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    variants={itemVariants}
                    className="section-badge mb-12"
                >
                    Who We Are
                </motion.div>
                <motion.h2
                    variants={itemVariants}
                    className="relative leading-[1.1] max-w-4xl w-full mx-auto"
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start * 0.5 + 0.15, end * 0.5 + 0.15]}>
                                {word + " "}
                            </Word>
                        );
                    })}
                </motion.h2>
            </div>
        </motion.section>
    );
};

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <motion.span
            style={{ opacity }}
            className="text-[22px] md:text-[40px] font-heading font-medium tracking-tight text-white"
        >
            {children}
        </motion.span>
    );
};

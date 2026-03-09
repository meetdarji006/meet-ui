"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Layers, Box, Type, MousePointer2, Sparkles,
    Code2, LayoutTemplate, Palette, Zap, Terminal,
    Database, Frame, LucideIcon
} from 'lucide-react';

interface OrbitItem {
    icon: LucideIcon;
    label: string;
    color: string;
    bg: string;
    border: string;
}

export const defaultOrbitItems: OrbitItem[] = [
    { icon: Layers, label: 'Glassmorphism', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { icon: Box, label: '3D Elements', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { icon: Type, label: 'Typography', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    { icon: MousePointer2, label: 'Interactions', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { icon: LayoutTemplate, label: 'Layouts', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    { icon: Code2, label: 'Hooks', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: Palette, label: 'Themes', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    { icon: Zap, label: 'Performance', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    { icon: Terminal, label: 'CLI tools', color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/20' },
    { icon: Database, label: 'Data', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    { icon: Frame, label: 'Animations', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
    { icon: Sparkles, label: 'Effects', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20' },
];

export interface OrbitEcosystemProps {
    items?: OrbitItem[];
    radiusInner?: number;
    radiusMiddle?: number;
    radiusOuter?: number;
    durationInner?: number;
    durationMiddle?: number;
    durationOuter?: number;
    reverseMiddle?: boolean;
}

export function OrbitEcosystem({
    items = defaultOrbitItems,
    radiusInner = 120,
    radiusMiddle = 200,
    radiusOuter = 280,
    durationInner = 30,
    durationMiddle = 45,
    durationOuter = 60,
    reverseMiddle = true,
}: OrbitEcosystemProps) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            if (width < 640) setScale(0.45);
            else if (width < 768) setScale(0.65);
            else if (width < 1024) setScale(0.85);
            else setScale(1);
        };
        updateScale(); // Initial scale
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    // Calculate maximum bounding size based on the largest radius + padding for floating icons
    const maxDimensions = radiusOuter * 2 + 120;

    return (
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-10">
            {/* The scaled viewport bounding box that shrinks flow layout to prevent massive whitespace */}
            <div
                className="relative flex items-center justify-center pointer-events-auto transition-all duration-300"
                style={{ width: maxDimensions * scale, height: maxDimensions * scale }}
            >
                {/* The actual fixed-pixel ecosystem, scaled visually via CSS transform. 
                    Because the outer box shrinks, it flows perfectly with surrounding content! */}
                <div
                    className="absolute flex items-center justify-center"
                    style={{
                        width: maxDimensions,
                        height: maxDimensions,
                        transform: `scale(${scale})`,
                        transformOrigin: 'center center'
                    }}
                >
                    {/* Ring 1 (Inner) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 border-dashed"
                        style={{ width: radiusInner * 2, height: radiusInner * 2 }}
                    />

                    {/* Ring 2 (Middle) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed"
                        style={{ width: radiusMiddle * 2, height: radiusMiddle * 2 }}
                    />

                    {/* Ring 3 (Outer) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/20 border-dashed"
                        style={{ width: radiusOuter * 2, height: radiusOuter * 2 }}
                    />

                    {/* The Central Core */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-transparent border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.5)] flex items-center justify-center backdrop-blur-xl pointer-events-none">
                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-50 duration-3000 pointer-events-none" />
                        <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse pointer-events-none" />
                    </div>

                    {/* Orbiting Elements */}
                    {items.map((item, index) => {
                        // 3 rings -> 4 items per ring
                        const ringIndex = index % 3; // 0=inner, 1=middle, 2=outer
                        const positionInRing = Math.floor(index / 3); // 0 to 3

                        const ringRadius = ringIndex === 0 ? radiusInner : (ringIndex === 1 ? radiusMiddle : radiusOuter);
                        const duration = ringIndex === 0 ? durationInner : (ringIndex === 1 ? durationMiddle : durationOuter);
                        const isReversed = ringIndex === 1 ? reverseMiddle : false;
                        const baseAngle = (positionInRing / 4) * 360;

                        return (
                            <div
                                key={index}
                                className="absolute left-1/2 top-1/2 pointer-events-none"
                                style={{ transform: `rotate(${baseAngle}deg)` }}
                            >
                                <motion.div
                                    className="absolute left-0 top-0"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: isReversed ? -360 : 360 }}
                                    transition={{
                                        duration: duration,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-0 pointer-events-auto"
                                        style={{ transform: `translateX(${ringRadius}px)` }}
                                    >
                                        {/* Counter-rotate the icon itself so it stays upright while orbiting */}
                                        <motion.div
                                            initial={{ rotate: -baseAngle }}
                                            animate={{ rotate: isReversed ? (-baseAngle + 360) : (-baseAngle - 360) }}
                                            transition={{
                                                duration: duration,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className={`absolute -left-7 -top-7 group flex items-center justify-center w-14 h-14 rounded-2xl ${item.bg} ${item.border} border backdrop-blur-md cursor-pointer hover:scale-110 transition-transform duration-300 shadow-xl`}
                                        >
                                            <item.icon className={`w-6 h-6 ${item.color}`} />

                                            {/* Hover Tooltip */}
                                            <div className="absolute -bottom-8 px-2 py-1 rounded-md bg-black/80 border border-white/10 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                                                {item.label}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

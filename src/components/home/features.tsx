"use client"

import React from 'react'
import { Layers, Code2, Sliders, Zap, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const featureList = [
    {
        icon: Code2,
        title: "100% Open Source",
        desc: "Completely free to use, modify, and distribute. No hidden licensing.",
    },
    {
        icon: Sliders,
        title: "99% Customizable",
        desc: "Everything is built with Tailwind CSS. Tweak colors to perfectly match your brand.",
    },
    {
        icon: Zap,
        title: "Framer Motion",
        desc: "Beautiful, physics-based animations driven by industry-standard libraries.",
    },

]

export function Features() {
    return (
        <section className="py-24 relative w-full">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="section-badge mb-12"
                    >
                        Build for Scale
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[28px] md:text-[50px] font-medium tracking-tight text-white mb-5"
                    >
                        Maximize efficiency and impact
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-[18px] text-[#ffffff80] leading-relaxed font-heading"
                    >
                        Supercharge your development with precision-crafted components designed for impact.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featureList.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                            className="relative h-full group"
                        >
                            <div className="relative h-full overflow-hidden rounded-4xl border border-white/5 p-6 transition-all duration-500">
                                {/* Ambient Gradient Background */}
                                <div className={cn(
                                    "absolute w-40 h-40 rounded-full blur-3xl inset-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary opacity-40 transition-opacity duration-700"
                                )} />

                                <div
                                    className="absolute inset-0 pointer-events-none z-0"
                                    style={{
                                        backgroundImage: `url('/images/card-bg.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />

                                <div className="relative z-10 flex flex-col">
                                    <div className="mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                            <item.icon className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500 mb-2">
                                            {item.title}
                                        </h4>
                                    </div>

                                    <p className="text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

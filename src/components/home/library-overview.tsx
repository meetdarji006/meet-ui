"use client"

import React from 'react'
import { motion } from "framer-motion"
import {
    Box,
    Layers,
    MoveUpRight,
    Palette,
    Zap,
    MousePointer2,
    Type,
    Mic,
    Globe,
    Cpu,
    Database
} from "lucide-react"
import { cn } from "@/lib/utils"



const categories = [
    {
        title: "Dynamic Text Effects",
        desc: "Bring your content to life with 15+ stunning text animations.",
        type: "text",
    },
    {
        title: "Premium UI Components",
        desc: "Ready-to-use, highly customizable components for any layout.",
        type: "components",
    },
    {
        title: "Advanced Interactions",
        desc: "Interactive elements that respond to every user movement.",
        type: "interactions",
    }
]

export function LibraryOverview() {
    return (
        <section className="py-24 relative w-full">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center justify-center text-center max-w-3xl w-full mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="section-badge mb-10"
                    >
                        Extensive Library
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[28px] md:text-[50px] font-medium tracking-tight text-white mb-5"
                    >
                        50+ Premium Components
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-[18px] text-[#ffffff80] leading-relaxed font-heading max-w-2xl"
                    >
                        From complex 3D text effects to highly interactive menu systems,
                        everything you need to create a world-class interface.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-full flex flex-col"
                        >
                            <div className="relative flex-1 bg-white/2 border border-white/5 rounded-[32px] p-10 flex flex-col items-center text-center overflow-hidden hover:border-white/10 transition-colors duration-500 group/card">
                                <div
                                    style={{
                                        background: "linear-gradient(90deg, rgba(79, 26, 214, 0) 0%, rgb(79, 26, 214) 50%, rgba(79, 26, 214, 0) 100%)"
                                    }}
                                    className='absolute h-px w-[180px] bottom-0 left-1/2 -translate-x-1/2'
                                />
                                {/* Custom Background Image Texture */}
                                <div
                                    className="absolute inset-0 pointer-events-none z-0"
                                    style={{
                                        backgroundImage: `url('/images/card-bg.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />

                                {/* Centered Icon Container */}
                                <div className="w-12 h-12 rounded-[30px] border-2 border-white/15 bg-[#512FEB] flex items-center justify-center mb-6 shadow-2xl relative z-20 p-2.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        focusable="false"
                                        className="select-none w-full h-full inline-block fill-white text-white shrink-0"
                                    >
                                        <g>
                                            <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                                        </g>
                                    </svg>
                                </div>

                                <h3 className="text-[16px] md:text-[24px] font-semibold text-white tracking-tight">
                                    {cat.title}
                                </h3>

                                <p className="text-[#ffffff80] text-sm md:text-base leading-relaxed relative z-20">
                                    {cat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

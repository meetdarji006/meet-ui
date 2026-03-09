"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/button"
import { ArrowUpRight } from "lucide-react"
import { HoverButton } from "@/components/hover-button"

const HeroBackground = dynamic(() => import("./hero-background").then(mod => mod.HeroBackground), {
    ssr: false,
})

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative pt-40 pb-20 px-4 flex flex-col items-center text-center"
        >
            <HeroBackground />

            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
                <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/3 border border-white/10 text-[13px] font-medium text-white/80 shadow-2xl backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shadanim" />

                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.8)] animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/30" />
                    </div>
                    <span className="flex items-center gap-1.5">
                        MeetUI <span className="w-px h-3 bg-white/10" />
                        <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold text-xs sm:text-sm">
                            Modern Animation Library
                        </span>
                    </span>
                </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium max-w-4xl tracking-tight leading-[1.1] text-gradient mb-8"
            >
                Transforming interfaces with <br />
                animated components
            </motion.h1>

            {/* Subheadline */}
            <motion.p
                variants={itemVariants}
                className="text-base md:text-[18px] text-[#ffffff80] max-w-3xl font-light leading-relaxed mb-8 font-heading"
            >
                Experience the future of development with intelligent, scalable <br className="hidden md:block" />
                component solutions tailored for your modern web apps
            </motion.p>

            {/* CTAs */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4"
            >
                <Link href="/components/blur-reveal" className="w-full sm:w-auto">
                    <HoverButton
                        text="Get Started & Build"
                        className="w-full sm:w-auto h-12 px-8 rounded-xl text-base font-medium"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                    />
                </Link>
                <Link href="/docs" className="w-full sm:w-auto md:hidden">
                    <HoverButton
                        text="See Docs"
                        className="w-full sm:w-auto h-12 px-8 rounded-xl bg-neutral-500/50 text-base font-medium"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                    />
                </Link>
            </motion.div>
        </motion.section>
    );
}

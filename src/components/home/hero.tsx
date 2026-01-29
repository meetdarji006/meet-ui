"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { HeroBackground } from "./hero-background"

export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            <HeroBackground />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center -mt-20">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Introducing MeetUI Components</span>
                    </div>
                </motion.div>

                {/* Main Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[1.1]">
                        <span className="text-white">Elevate Your</span> <br />
                        <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent font-semibold">
                            Developer Experience
                        </span>
                    </h1>

                    <p className="max-w-xl text-neutral-400 text-lg font-light leading-relaxed text-center mt-4">
                        Unlock your creative potential in a fully accessible <br className="hidden md:block" />
                        environment, powered by MeetUI.
                    </p>
                </motion.div>

                {/* Center CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-10 flex gap-4"
                >
                    <Link href="/components">
                        <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all font-medium text-sm shadow-lg shadow-indigo-500/25">
                            Get Started & Build
                        </Button>
                    </Link>
                    <Link href="/docs">
                        <Button variant="outline" className="h-12 px-8 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all font-medium text-sm backdrop-blur-sm">
                            View Docs
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating Glass Cards Overlay - Matching Reference */}
                <div className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none flex justify-center items-center">

                    {/* Left Card */}
                    <motion.div
                        className="absolute left-[10%] bottom-[30%] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-48 shadow-2xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Components</span>
                            <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-sm font-medium text-white mb-2">Unparalleled <br /> Customizability</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-gradient-to-r from-indigo-500 to-purple-500" />
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="absolute right-[15%] bottom-[20%] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-40 shadow-2xl"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Performance</span>
                            <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-1">99%</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                            <div className="h-full w-[96%] bg-gradient-to-r from-purple-500 to-indigo-500" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

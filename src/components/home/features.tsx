"use client"

import { Zap, Shield, Layers, Box, Code2, Globe } from "lucide-react"

const featureList = [
    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Optimized for speed with zero runtime overhead options. Built on top of standard React patterns.",
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        icon: Shield,
        title: "Type Safe",
        desc: "Written in TypeScript with full type definitions. Catch errors before they happen.",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        icon: Layers,
        title: "Composable",
        desc: "Components are built to be composed together. Build complex UIs from simple building blocks.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Box,
        title: "3D Ready",
        desc: "Seamless integration with React Three Fiber for immersive web experiences.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Code2,
        title: "Open Source",
        desc: "Free to use and modify. Join the community and contribute to the future of UI.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        icon: Globe,
        title: "Universal",
        desc: "Works with Next.js, Remix, Vite and any other React framework out of the box.",
        gradient: "from-rose-500 to-orange-500"
    }
]

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

            {/* Additional gradient orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6">
                        Why MeetUI
                    </div>
                    <h3 className="text-3xl md:text-5xl font-medium mb-6 leading-[1.2]">
                        <span className="text-white">Designed for the Future</span> <br />
                        <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">of Web Development</span>
                    </h3>
                    <p className="text-neutral-400 text-lg font-light leading-relaxed">
                        Everything you need to build production-ready applications with modern aesthetics and robust performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureList.map((item, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                            {/* Gradient glow on hover */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="absolute inset-0 rounded-xl bg-black/50" />
                                <item.icon className="w-6 h-6 text-white relative z-10" />
                            </div>
                            <h4 className="text-xl font-medium text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">{item.title}</h4>
                            <p className="text-neutral-400 font-light leading-relaxed relative z-10">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

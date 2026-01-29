"use client"
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const categories = [
    {
        title: 'Glassmorphism',
        count: '12 Components',
        gradient: 'from-blue-500 to-cyan-500',
        border: 'hover:border-blue-500/30'
    },
    {
        title: '3D Elements',
        count: '8 Components',
        gradient: 'from-purple-500 to-pink-500',
        border: 'hover:border-purple-500/30'
    },
    {
        title: 'Text Effects',
        count: '15 Components',
        gradient: 'from-amber-500 to-orange-500',
        border: 'hover:border-amber-500/30'
    },
    {
        title: 'Navigation',
        count: '6 Components',
        gradient: 'from-emerald-500 to-teal-500',
        border: 'hover:border-emerald-500/30'
    },
];

export function Showcase() {
    return (
        <section className="py-32 border-t border-white/5 relative">
            {/* Background gradient accents */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-32 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-4">
                            <Sparkles className="w-3 h-3" />
                            Component Library
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium mb-4">
                            <span className="text-white">Explore the</span> <br />
                            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Collection</span>
                        </h2>
                        <p className="text-neutral-400 font-light text-lg">Browse our growing library of premium components.</p>
                    </div>
                    <Link href="/components" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-medium hover:from-indigo-500/30 hover:to-purple-500/30 transition-all">
                        View All Components
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((item, i) => (
                        <Link href="/components" key={i} className={`group relative h-80 rounded-3xl overflow-hidden bg-white/2 border border-white/5 ${item.border} transition-all duration-500`}>
                            {/* Gradient Blob background */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r ${item.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">{item.title}</h3>
                                    <p className="text-sm text-neutral-500 font-mono">{item.count}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-32 relative rounded-3xl overflow-hidden border border-white/10 p-12 md:p-24 text-center">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#1e1b4b] to-[#2d1f5c]" />

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Static Gradient Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-indigo-500/30 rounded-full blur-[100px]" />

                    {/* Additional gradient accents */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-purple-500/20 to-transparent blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl" />

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-500/40 text-xs font-medium text-indigo-200 mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Production Ready
                        </div>

                        <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-[1.1]">
                            <span className="text-white">Ready to build something</span> <br />
                            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">extraordinary?</span>
                        </h2>

                        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                            Join thousands of developers enhancing their workflow with MeetUI.
                            Open source, accessible, and forever free.
                        </p>

                        <Link href="/components">
                            <span className="h-14 px-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all font-medium text-lg shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group/btn cursor-pointer">
                                Start Building Now
                                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

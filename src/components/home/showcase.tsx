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
                <div className="mt-32 relative rounded-3xl overflow-hidden p-12 md:p-24 text-center group/cta">
                    {/* Animated glowing border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 blur-sm" />
                    <div className="absolute inset-[1px] rounded-3xl bg-[#0a0a12]" />

                    {/* Gradient background */}
                    <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-[#1e1b4b] via-[#12101f] to-[#2d1f5c]" />

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Animated Gradient Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-indigo-500/30 rounded-full blur-[100px] animate-pulse" />

                    {/* Additional gradient accents */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-purple-500/30 to-transparent blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/30 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                    {/* Floating sparkles */}
                    <div className="absolute top-12 left-16 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Sparkles className="w-4 h-4 text-indigo-400/60" />
                    </div>
                    <div className="absolute top-20 right-24 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                        <Sparkles className="w-5 h-5 text-purple-400/60" />
                    </div>
                    <div className="absolute bottom-20 left-32 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                        <Sparkles className="w-3 h-3 text-indigo-300/50" />
                    </div>
                    <div className="absolute bottom-16 right-16 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.7s' }}>
                        <Sparkles className="w-4 h-4 text-purple-300/50" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-xs font-medium text-indigo-200 mb-8 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Production Ready • Open Source
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight leading-[1.1]">
                            <span className="text-white">Ready to build something</span> <br />
                            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">extraordinary?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Join thousands of developers building stunning interfaces with MeetUI.
                            <span className="text-white font-normal"> Free forever.</span>
                        </p>

                        {/* Stats Section */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">50+</span>
                                <span className="text-sm text-neutral-500 mt-1">Components</span>
                            </div>
                            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">1K+</span>
                                <span className="text-sm text-neutral-500 mt-1">Developers</span>
                            </div>
                            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent">100%</span>
                                <span className="text-sm text-neutral-500 mt-1">Free & Open</span>
                            </div>
                        </div>

                        {/* Dual CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/components">
                                <span className="h-14 px-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 font-medium text-lg shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group/btn cursor-pointer">
                                    Start Building Now
                                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </Link>
                            <Link href="https://github.com" target="_blank">
                                <span className="h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 font-medium text-lg backdrop-blur-sm flex items-center justify-center gap-3 cursor-pointer">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Star on GitHub
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

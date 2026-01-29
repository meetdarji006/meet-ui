"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { componentFilters, componentsList } from "@/lib/components-data"

export default function ComponentsPage() {
    const [activeFilter, setActiveFilter] = useState('all')

    const filteredComponents = activeFilter === 'all'
        ? componentsList
        : componentsList.filter(c => c.category === activeFilter)

    return (
        <div className="pt-28 pb-24 min-h-screen relative">
            {/* Background gradient accents */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-96 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-purple-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6">
                        <Sparkles className="w-3 h-3" />
                        {componentsList.length} Premium Components
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 leading-[1.1]">
                        <span className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">Components</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
                        Hand-crafted, animated components ready to drop into your project. Built with React, Framer Motion, and Three.js.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-6 mb-10 border-b border-white/10">
                    {componentFilters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex items-center gap-2 pb-3 text-sm font-medium transition-all relative ${activeFilter === filter.id
                                ? 'text-white'
                                : 'text-neutral-500 hover:text-neutral-300'
                                }`}
                        >
                            <filter.icon className="w-4 h-4" />
                            {filter.label}
                            {activeFilter === filter.id && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Components Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredComponents.map((item) => (
                        <Link
                            href={`/components/${item.slug}`}
                            key={item.slug}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-indigo-500/40 transition-all duration-300"
                        >
                            {/* Top glow line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Preview Area */}
                            <div className="relative h-52 w-full flex items-center justify-center overflow-hidden">
                                {/* Gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#060010] to-[#080012]" />

                                {/* Subtle radial glow on hover */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Component preview */}
                                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                                    <item.preview />
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="relative p-5 border-t border-white/[0.04]">
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.02] to-transparent" />

                                <div className="relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-medium text-white text-base group-hover:text-indigo-200 transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-indigo-300 transition-colors" />
                                        </div>
                                    </div>

                                    <p className="text-neutral-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {filteredComponents.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-indigo-400" />
                        </div>
                        <p className="text-neutral-400">No components found for this filter.</p>
                    </div>
                )}

            </div>
        </div>
    )
}

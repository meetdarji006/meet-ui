"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const showcaseItems = [
    {
        title: "E-Commerce Platform",
        description: "A modern storefront built with MeetUI components featuring glassmorphism cards and smooth transitions.",
        tags: ["Next.js", "MeetUI", "Stripe"],
        image: "/showcase/ecommerce.png",
    },
    {
        title: "Portfolio Website",
        description: "A creative portfolio showcasing 3D elements and text effects from the MeetUI library.",
        tags: ["React", "Three.js", "MeetUI"],
        image: "/showcase/portfolio.png",
    },
    {
        title: "SaaS Dashboard",
        description: "Analytics dashboard with animated charts and navigation components.",
        tags: ["Next.js", "MeetUI", "Charts"],
        image: "/showcase/dashboard.png",
    },
    {
        title: "Agency Landing Page",
        description: "High-converting landing page with scroll animations and premium buttons.",
        tags: ["Framer Motion", "MeetUI"],
        image: "/showcase/agency.png",
    },
]

export default function ShowcasePage() {
    return (
        <div className="pt-28 pb-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
                        <ExternalLink className="w-3 h-3" />
                        Community Showcase
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                        Built with MeetUI
                    </h1>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Explore real-world projects built by our community using MeetUI components. Get inspired and see what's possible.
                    </p>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {showcaseItems.map((item, i) => (
                        <Link
                            href="#"
                            key={i}
                            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/3 hover:border-white/15 hover:bg-white/5 transition-all duration-500"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#1e1b4b] to-[#0d1021] flex items-center justify-center border-b border-white/5">
                                <span className="text-neutral-600 font-mono text-sm">Image: {item.title}</span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-medium text-white text-2xl group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all">
                                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-indigo-300 transition-colors" />
                                    </div>
                                </div>
                                <p className="text-neutral-400 font-light leading-relaxed mb-6">{item.description}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Built something with MeetUI?</h2>
                    <p className="text-neutral-400 mb-8">Share your project with the community and get featured.</p>
                    <Link href="#" className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-medium text-sm">
                        Submit Your Project
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
    )
}

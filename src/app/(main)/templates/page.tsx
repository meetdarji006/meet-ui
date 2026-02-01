"use client"

import Link from "next/link"
import { ArrowUpRight, Layout, Sparkles } from "lucide-react"

const templates = [
    {
        title: "Modern Agency",
        description: "Premium digital agency website featuring interactive 3D elements, smooth GSAP animations, and a dark aesthetic.",
        category: "Portfolio",
        price: "Free",
        features: ["3D Hero", "GSAP Scroll", "Dark Mode"],
        href: "/templates/agency"
    },
    {
        title: "SaaS Landing",
        description: "A high-converting landing page template with hero, features, pricing, and testimonials sections.",
        category: "Marketing",
        price: "Free",
        features: ["Responsive", "Dark Mode", "Animations"],
        href: "#"
    },
    {
        title: "Portfolio Pro",
        description: "A creative portfolio template with 3D elements, smooth transitions, and project showcases.",
        category: "Portfolio",
        price: "Free",
        features: ["3D Effects", "Project Grid", "Contact Form"],
    },
    {
        title: "Dashboard Kit",
        description: "Complete admin dashboard with charts, tables, and navigation components.",
        category: "Application",
        price: "Pro",
        features: ["Charts", "Data Tables", "Auth Pages"],
    },
    {
        title: "E-Commerce",
        description: "Modern storefront template with product grids, cart, and checkout flow.",
        category: "E-Commerce",
        price: "Pro",
        features: ["Product Cards", "Cart", "Filters"],
    },
    {
        title: "Startup MVP",
        description: "Minimal viable product template for quick launches with essential sections.",
        category: "Marketing",
        price: "Free",
        features: ["Hero", "CTA", "Footer"],
    },
    {
        title: "Blog Theme",
        description: "Clean blog template with article layouts, categories, and reading time.",
        category: "Content",
        price: "Free",
        features: ["MDX Support", "Tags", "Search"],
    },
]

export default function TemplatesPage() {
    return (
        <div className="pt-28 pb-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
                        <Layout className="w-3 h-3" />
                        Ready-to-Use
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                        Templates
                    </h1>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Production-ready templates to kickstart your next project. Built with MeetUI components and best practices.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex gap-3 overflow-x-auto pb-6 mb-12">
                    {["All", "Marketing", "Portfolio", "Application", "E-Commerce", "Content"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-5 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 ${i === 0
                                ? 'bg-white text-black border-white'
                                : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((item, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/3 hover:border-white/15 hover:bg-white/5 transition-all duration-500 flex flex-col"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#1e1b4b] to-[#0d1021] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                                <span className="text-neutral-600 font-mono text-sm">{item.title}</span>

                                {/* Price Badge */}
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${item.price === 'Free'
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    }`}>
                                    {item.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex-1">
                                    <p className="text-xs text-indigo-400 mb-2">{item.category}</p>
                                    <h3 className="font-medium text-white text-xl mb-2 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                    <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4">{item.description}</p>
                                </div>

                                {/* Features */}
                                <div className="flex gap-2 flex-wrap mb-6">
                                    {item.features.map(feat => (
                                        <span key={feat} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                                            {feat}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <Link
                                        href={item.href || "#"}
                                        className="flex-1 h-10 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center text-sm font-medium gap-2"
                                    >
                                        Preview
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex-1 h-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center justify-center text-sm font-medium gap-2"
                                    >
                                        Get Template
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center p-12 rounded-3xl bg-white/3 border border-white/5">
                    <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Need a custom template?</h2>
                    <p className="text-neutral-400 mb-8 max-w-lg mx-auto">We offer custom template development for teams and enterprises. Let's build something unique together.</p>
                    <Link href="#" className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-medium text-sm">
                        Contact Us
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
    )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Sparkles, FileText, Layout } from "lucide-react"
import { Logo } from "@/components/logo"
import { GitHubButton } from "@/components/github-button"
import { motion, AnimatePresence } from "framer-motion"
import { sidebarCategories, sidebarComponents } from "@/lib/components-data"

export function ViewerNavbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/6 backdrop-blur-xl">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Left: Logo + Contextual link */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="shrink-0 flex items-center gap-3 group">
                            <Logo size="md" />
                        </Link>
                        <span className="hidden sm:block w-px h-5 bg-white/10" />
                        {pathname === "/docs" ? (
                            <Link
                                href="/components/blur-reveal"
                                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-indigo-400 transition-colors font-heading uppercase tracking-wider"
                            >
                                Components
                            </Link>
                        ) : (
                            <Link
                                href="/docs"
                                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-indigo-400 transition-colors font-heading uppercase tracking-wider"
                            >
                                Docs
                            </Link>
                        )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2">
                        <GitHubButton className="h-9 px-2 sm:px-3 rounded-lg bg-white/4 border-white/8" />

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center hover:bg-indigo-500/20 transition-all"
                        >
                            <Menu className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-70 w-72 bg-[#0a0a0a] border-l border-white/10 shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="p-4 flex items-center justify-between border-b border-white/6">
                                <span className="text-sm font-semibold tracking-wider text-white font-heading">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-8">
                                {/* Main Site Links section */}
                                <div className="space-y-4 px-1 pb-4 border-b border-white/5">
                                    <p className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest font-heading">Navigation</p>
                                    <div className="grid grid-cols-1 gap-2">
                                        <Link
                                            href="/docs"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all text-sm font-heading ${pathname === '/docs'
                                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                                                : 'bg-white/3 border-white/8 text-neutral-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <FileText className="w-4 h-4 opacity-70" />
                                            Docs
                                        </Link>
                                        <Link
                                            href="/components/blur-reveal"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all text-sm font-heading ${pathname.startsWith('/components/')
                                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                                                : 'bg-white/3 border-white/8 text-neutral-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <Layout className="w-4 h-4 opacity-70" />
                                            Components
                                        </Link>
                                    </div>
                                </div>

                                {/* Components section */}
                                <div className="flex items-center justify-between px-1">
                                    <p className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest font-heading flex items-center gap-2">
                                        <span className="w-1 h-4 rounded-full bg-indigo-500" />
                                        Component Library
                                    </p>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono font-medium">
                                        {sidebarComponents.length}
                                    </span>
                                </div>

                                {/* Categories */}
                                {sidebarCategories.map((category) => (
                                    <div key={category.id} className="space-y-1.5">
                                        <p className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest px-1 font-heading">
                                            {category.label}
                                        </p>

                                        {category.components.length > 0 ? (
                                            <div className="space-y-0.5">
                                                {category.components.map((item) => {
                                                    const isActive = pathname === `/components/${item.slug}`
                                                    return (
                                                        <Link
                                                            key={item.slug}
                                                            href={`/components/${item.slug}`}
                                                            prefetch={false}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-colors duration-200 ${isActive
                                                                ? 'text-white font-medium bg-indigo-500/10 border border-indigo-500/20'
                                                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                                                }`}
                                                        >
                                                            <span className={`relative w-0.5 h-4 rounded-full transition-all ${isActive
                                                                ? 'bg-indigo-400'
                                                                : 'bg-transparent group-hover:bg-white/20'
                                                                }`} />
                                                            <span className="flex-1 font-heading">{item.name}</span>
                                                            <ChevronRight className={`w-3.5 h-3.5 transition-all ${isActive
                                                                ? 'opacity-40 text-indigo-400'
                                                                : 'opacity-0 group-hover:opacity-40'
                                                                }`} />
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        ) : (
                                            <div className="px-3 py-2 rounded-lg border border-dashed border-white/10 text-xs text-neutral-500 flex items-center gap-2">
                                                <Sparkles className="w-3 h-3" />
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Sparkles } from "lucide-react"
import { sidebarComponents, sidebarCategories } from "@/lib/components-data"
import { motion } from "framer-motion"

export function ComponentsSidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden lg:block w-60 shrink-0">
            <nav className="sticky top-32 space-y-6 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                {/* Header */}
                <div className="flex items-center justify-between px-1">
                    <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest font-heading flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        Components
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono font-medium">
                        {sidebarComponents.length}
                    </span>
                </div>

                {/* Categories */}
                {sidebarCategories.map((category) => (
                    <div key={category.id} className="space-y-1.5">
                        {/* Category Header */}
                        <p className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest px-1 font-heading">
                            {category.label}
                        </p>

                        {/* Category Components */}
                        {category.components.length > 0 ? (
                            <div className="space-y-0.5">
                                {category.components.map((item) => {
                                    const isActive = pathname === `/components/${item.slug}`
                                    return (
                                        <Link
                                            key={item.slug}
                                            href={`/components/${item.slug}`}
                                            className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-colors duration-200 ${isActive
                                                ? 'text-white font-medium'
                                                : 'text-neutral-400 hover:text-white'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="sidebar-active-item"
                                                    className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}

                                            {/* Active indicator bar */}
                                            <span className={`relative z-10 w-0.5 h-4 rounded-full transition-all ${isActive
                                                ? 'bg-indigo-400'
                                                : 'bg-transparent group-hover:bg-white/20'
                                                }`} />
                                            <span className="relative z-10 flex-1 font-heading">{item.name}</span>
                                            <ChevronRight className={`relative z-10 w-3.5 h-3.5 transition-all ${isActive
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
            </nav>
        </aside>
    )
}

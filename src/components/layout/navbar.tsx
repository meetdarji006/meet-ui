"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { Logo } from "@/components/logo"
import { GitHubButton } from "@/components/github-button"
import { motion } from "framer-motion"

const ViewerNavbar = dynamic(() => import("@/components/layout/viewer-navbar").then(mod => mod.ViewerNavbar))

export function Navbar() {
    const pathname = usePathname()

    if (pathname?.startsWith("/components") || pathname === "/docs") {
        return <ViewerNavbar />
    }

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-row items-center justify-between px-2 py-2 rounded-xl bg-white/3 backdrop-blur-2xl border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white"
            >

                {/* Logo + Nav Links */}
                <div className="flex items-center pl-1.5">
                    <Link href="/" className="shrink-0 flex items-center">
                        <Logo size="sm" variant="square" />
                    </Link>

                    <span className="w-px ml-3 h-3 hidden md:block bg-white/10" />
                    <nav className="hidden md:flex items-center text-[13px] font-medium text-neutral-400">
                        <Link href="/docs" className="px-3 py-1.5 rounded-full hover:text-white transition-colors duration-300">
                            Docs
                        </Link>
                        <Link href="/components/blur-reveal" className="px-3 py-1.5 rounded-full hover:text-white transition-colors duration-300">
                            Components
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2 shrink-0 pr-1">
                    <GitHubButton />
                </div>
            </motion.div>
        </header>
    )
}

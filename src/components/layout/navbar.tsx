"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { Logo } from "@/components/logo"

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-5 transition-all bg-transparent backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between text-white">

                {/* Logo Left */}
                <Link href="/">
                    <Logo size="md" />
                </Link>

                {/* Center Nav Links */}
                <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                    <Link href="/components" className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all">
                        Components
                    </Link>
                    <Link href="/docs" className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all">
                        Documentation
                    </Link>
                    <Link href="/showcase" className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all">
                        Showcase
                    </Link>
                    <Link href="/templates" className="px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all">
                        Templates
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Github className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/components"
                        className="hidden sm:flex h-9 px-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg shadow-indigo-500/20"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    )
}

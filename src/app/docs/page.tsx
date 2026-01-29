"use client"

import Link from "next/link"
import { Book, ChevronRight, Copy, Check, Zap, Palette, Box, Code2 } from "lucide-react"
import { useState } from "react"

const sidebarLinks = [
    { title: "Getting Started", href: "#getting-started", active: true },
    { title: "Installation", href: "#installation" },
    { title: "Project Structure", href: "#structure" },
    { title: "Theming", href: "#theming" },
    { title: "Components", href: "/components" },
]

const features = [
    { icon: Zap, title: "Fast", desc: "Optimized for performance" },
    { icon: Palette, title: "Themeable", desc: "Fully customizable styles" },
    { icon: Box, title: "Composable", desc: "Build complex UIs easily" },
    { icon: Code2, title: "TypeScript", desc: "Full type support" },
]

function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <pre className="bg-[#1e1b4b] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm font-mono text-neutral-300">
                <code>{code}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
            >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
            </button>
        </div>
    )
}

export default function DocsPage() {
    return (
        <div className="pt-28 pb-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex gap-12">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <nav className="sticky top-32 space-y-1">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">On This Page</p>
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${link.active
                                            ? 'bg-white/5 text-white border-l-2 border-indigo-500'
                                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 max-w-3xl">

                        {/* Header */}
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
                                <Book className="w-3 h-3" />
                                Documentation
                            </div>
                            <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-[1.1]">
                                Getting Started
                            </h1>
                            <p className="text-lg text-neutral-400 font-light leading-relaxed">
                                Learn how to install MeetUI and start building beautiful interfaces in minutes.
                            </p>
                        </div>

                        {/* Introduction */}
                        <section id="getting-started" className="mb-16">
                            <h2 className="text-2xl font-medium text-white mb-4 flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-indigo-400" />
                                Introduction
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                MeetUI is a collection of beautifully designed, copy-paste ready components built with React,
                                Tailwind CSS, and Framer Motion. It is <strong className="text-white">not</strong> a traditional
                                component library—instead, you own the code and can customize everything to fit your needs.
                            </p>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {features.map((feat) => (
                                    <div key={feat.title} className="p-4 rounded-xl bg-white/3 border border-white/5">
                                        <feat.icon className="w-5 h-5 text-indigo-400 mb-2" />
                                        <p className="text-sm font-medium text-white">{feat.title}</p>
                                        <p className="text-xs text-neutral-500">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation" className="mb-16">
                            <h2 className="text-2xl font-medium text-white mb-4 flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-indigo-400" />
                                Installation
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                Install the required dependencies for MeetUI components:
                            </p>
                            <CodeBlock code="npm install framer-motion clsx tailwind-merge lucide-react" />

                            <p className="text-neutral-400 leading-relaxed mt-6 mb-4">
                                For 3D components, you'll also need:
                            </p>
                            <CodeBlock code="npm install @react-three/fiber @react-three/drei three" />
                        </section>

                        {/* Project Structure */}
                        <section id="structure" className="mb-16">
                            <h2 className="text-2xl font-medium text-white mb-4 flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-indigo-400" />
                                Project Structure
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                We recommend placing MeetUI components in a dedicated folder:
                            </p>
                            <CodeBlock code={`src/
├── components/
│   └── ui/           # MeetUI components go here
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   └── utils.ts      # Utility functions (cn helper)
└── app/
    └── ...`} />
                        </section>

                        {/* Theming */}
                        <section id="theming" className="mb-16">
                            <h2 className="text-2xl font-medium text-white mb-4 flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-indigo-400" />
                                Theming
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                MeetUI uses CSS variables for theming. Customize colors in your <code className="text-indigo-300 bg-white/5 px-1.5 py-0.5 rounded">globals.css</code>:
                            </p>
                            <CodeBlock code={`:root {
    --background: 232 40% 12%;
    --foreground: 210 40% 98%;
    --primary: 236 100% 70%;
    /* ... more variables */
}`} />
                        </section>

                        {/* Next Steps */}
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                            <h3 className="text-xl font-medium text-white mb-2">Ready to explore?</h3>
                            <p className="text-neutral-400 mb-6">Browse our component library and start building.</p>
                            <Link
                                href="/components"
                                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-medium text-sm"
                            >
                                View Components
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    )
}

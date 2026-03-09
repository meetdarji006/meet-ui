"use client"

import Link from "next/link"
import { Book, ChevronRight, Zap, Palette, Box, Code2, Sparkles, ArrowRight, Package, FolderTree, PaintBucket, Puzzle } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { motion } from "framer-motion"

const sidebarLinks = [
    { id: "getting-started", title: "Getting Started" },
    { id: "installation", title: "Installation" },
    { id: "structure", title: "Project Structure" },
    { id: "usage", title: "Usage" },
    { id: "theming", title: "Theming" },
]

const features = [
    { icon: Zap, title: "Performant", desc: "Built with performance in mind, zero bloat" },
    { icon: Palette, title: "Themeable", desc: "Fully customizable to match your brand" },
    { icon: Box, title: "Composable", desc: "Mix and match to build complex UIs" },
    { icon: Code2, title: "TypeScript", desc: "Complete type safety out of the box" },
]

export default function DocsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen relative">
            {/* Background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-indigo-500/8 via-purple-500/4 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="flex gap-12">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-60 shrink-0">
                        <nav className="sticky top-32 space-y-1.5 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex items-center justify-between px-1.5 pt-2 mb-4"
                            >
                                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] font-heading flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                    Documentation
                                </p>
                            </motion.div>

                            {sidebarLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                                    className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[13px] text-neutral-400 hover:text-white transition-all duration-300 hover:bg-white/3"
                                >
                                    <span className="shrink-0 w-[1.5px] h-3 rounded-full bg-transparent group-hover:bg-indigo-400/50 transition-all duration-500" />
                                    <span className="relative z-10 flex-1 font-heading font-medium">{link.title}</span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-40 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </motion.a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0 max-w-3xl">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-14"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-300 uppercase tracking-wider mb-6 font-heading shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                                <Book className="w-3 h-3 text-indigo-400" />
                                Documentation
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight mb-4">
                                Getting Started
                            </h1>
                            <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
                                Learn how to install MeetUI and start building stunning interfaces in minutes. No package installs—just copy, paste, and customize.
                            </p>
                        </motion.div>

                        {/* Introduction */}
                        <motion.section
                            id="getting-started"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-16"
                        >
                            <SectionHeading icon={Sparkles} title="Introduction" />
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                MeetUI is a collection of beautifully designed, <strong className="text-white">copy-paste ready</strong> components built with React,
                                Tailwind CSS, and Framer Motion. It is <strong className="text-white">not</strong> a traditional
                                component library—you own the code and can customize everything to fit your needs.
                            </p>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                                {features.map((feat) => (
                                    <div key={feat.title} className="group p-4 rounded-xl bg-white/2 border border-white/6 hover:border-indigo-500/20 hover:bg-white/4 transition-all duration-300">
                                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(99,102,241,0.05)]">
                                            <feat.icon className="w-4 h-4 text-indigo-400" />
                                        </div>
                                        <p className="text-sm font-semibold text-white font-heading mb-1">{feat.title}</p>
                                        <p className="text-xs text-neutral-500 leading-relaxed">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Installation */}
                        <motion.section
                            id="installation"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-16"
                        >
                            <SectionHeading icon={Package} title="Installation" />
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                Install the core dependencies that most MeetUI components require:
                            </p>
                            <CodeBlock
                                code="npm install framer-motion clsx tailwind-merge lucide-react"
                                language="bash"
                                showLineNumbers={false}
                            />

                            <p className="text-neutral-400 leading-relaxed mt-8 mb-6">
                                For 3D components (like fluid toggles or particle effects), also install:
                            </p>
                            <CodeBlock
                                code="npm install @react-three/fiber @react-three/drei three"
                                language="bash"
                                showLineNumbers={false}
                            />

                            <div className="mt-6 px-4 py-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15 text-sm text-indigo-300/80 shadow-[inset_0_0_20px_rgba(99,102,241,0.02)]">
                                <strong className="text-indigo-300">Tip:</strong> You can also use <InlineCode>yarn</InlineCode>, <InlineCode>pnpm</InlineCode>, or <InlineCode>bun</InlineCode> as your package manager.
                            </div>
                        </motion.section>

                        {/* Project Structure */}
                        <motion.section
                            id="structure"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-16"
                        >
                            <SectionHeading icon={FolderTree} title="Project Structure" />
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                We recommend placing MeetUI components in a dedicated <InlineCode>ui</InlineCode> folder:
                            </p>
                            <CodeBlock
                                code={`src/\n├── components/\n│   └── ui/           # MeetUI components go here\n│       ├── glow-card.tsx\n│       ├── splash-button.tsx\n│       └── ...\n├── lib/\n│   └── utils.ts      # Utility functions (cn helper)\n└── app/\n    └── ...`}
                                language="bash"
                                showLineNumbers={false}
                            />
                        </motion.section>

                        {/* Usage */}
                        <motion.section
                            id="usage"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-16"
                        >
                            <SectionHeading icon={Puzzle} title="Usage" />
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                Using a MeetUI component is simple—browse the component you need, copy the code, and import it into your project:
                            </p>
                            <CodeBlock
                                code={`import { GlowCard } from "@/components/ui/glow-card"\n\nexport default function Example() {\n    return (\n        <GlowCard>\n            <h2>Hello World</h2>\n            <p>This card has a beautiful glow effect.</p>\n        </GlowCard>\n    )\n}`}
                                language="tsx"
                            />

                            <p className="text-neutral-400 leading-relaxed mt-8 mb-6">
                                Each component page includes a live preview, editable props playground, full source code, and usage examples.
                            </p>
                        </motion.section>

                        {/* Theming */}
                        <motion.section
                            id="theming"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-16"
                        >
                            <SectionHeading icon={PaintBucket} title="Theming" />
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                MeetUI uses Tailwind CSS for styling. Customize colors and design tokens in your <InlineCode>globals.css</InlineCode> or <InlineCode>tailwind.config</InlineCode>:
                            </p>
                            <CodeBlock
                                code={`@theme {\n    --color-primary: oklch(0.637 0.237 311);\n    --color-secondary: oklch(0.541 0.281 293);\n    --color-accent: oklch(0.685 0.169 237);\n\n    --font-heading: "Inter", sans-serif;\n    --font-mono: "JetBrains Mono", monospace;\n}`}
                                language="css"
                            />
                        </motion.section>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group mt-12"
                        >
                            <div className="absolute -inset-px bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                            <div className="relative p-8 rounded-2xl bg-[#060010] border border-white/8 shadow-[0_0_30px_rgba(99,102,241,0.05)]">
                                <div className="flex items-start justify-between gap-6 flex-col sm:flex-row sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-heading mb-2">Ready to explore?</h3>
                                        <p className="text-neutral-400 text-sm">Browse our component library and start building beautiful interfaces.</p>
                                    </div>
                                    <Link
                                        href="/components/blur-reveal"
                                        className="shrink-0 inline-flex items-center gap-2 h-10 px-6 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
                                    >
                                        View Components
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                    </main>
                </div>
            </div>
        </div>
    )
}

// --- Reusable sub-components ---

function SectionHeading({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>, title: string }) {
    return (
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
                <Icon className="w-4 h-4 text-indigo-400" />
            </div>
            {title}
        </h2>
    )
}

function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded text-[13px] font-mono border border-indigo-500/15">
            {children}
        </code>
    )
}

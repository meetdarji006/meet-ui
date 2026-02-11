"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

export function InstallBlock() {
    const [copied, setCopied] = useState(false)
    const command = "npx meetui@latest add"

    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-center mb-8">
                    <p className="text-neutral-500 text-sm font-medium">Get started in seconds</p>
                </div>

                <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a14]">
                        {/* Header bar */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5 text-neutral-600" />
                                <span className="text-[11px] text-neutral-600 font-mono">Terminal</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-500 hover:text-white hover:bg-white/10 transition-all"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3 h-3 text-emerald-400" />
                                        <span className="text-emerald-400">Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3 h-3" />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Command */}
                        <div className="px-5 py-4">
                            <div className="flex items-center gap-3 font-mono text-sm">
                                <span className="text-indigo-400 select-none">$</span>
                                <span className="text-neutral-300">{command}</span>
                                <span className="w-2 h-5 bg-indigo-400/80 animate-pulse rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

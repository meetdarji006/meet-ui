"use client"

import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"

interface CodeBlockProps {
    code: string
    language?: string
    showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "tsx", showLineNumbers = true }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const lines = code.split('\n')

    return (
        <div className="relative group rounded-xl overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0012] border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="text-xs text-neutral-500 font-medium uppercase">{language}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs"
                >
                    {copied ? (
                        <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3 h-3 text-neutral-400" />
                            <span className="text-neutral-400">Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code area */}
            <div className="relative bg-[#08000f]">
                {/* Subtle glow accents */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/[0.03] blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/[0.03] blur-3xl pointer-events-none" />

                <pre className="relative p-4 overflow-x-auto text-sm font-mono leading-6 max-h-[500px]">
                    <code className="block">
                        {lines.map((line, i) => (
                            <div key={i} className="flex">
                                {showLineNumbers && (
                                    <span className="inline-block w-8 pr-4 text-right text-neutral-600 select-none text-xs shrink-0">
                                        {i + 1}
                                    </span>
                                )}
                                <span className="text-neutral-300 flex-1">
                                    {line || ' '}
                                </span>
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    )
}

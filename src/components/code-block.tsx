"use client"

import { useState } from "react"
import { Copy, Check, Terminal, FileCode2 } from "lucide-react"

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

    // Language display name
    const langDisplay: Record<string, string> = {
        tsx: 'TSX',
        jsx: 'JSX',
        bash: 'Terminal',
        ts: 'TypeScript',
        js: 'JavaScript',
    }

    return (
        <div className="relative group rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5 mr-2">
                        <span className="w-3 h-3 rounded-full bg-white/[0.06] border border-white/[0.08]" />
                        <span className="w-3 h-3 rounded-full bg-white/[0.06] border border-white/[0.08]" />
                        <span className="w-3 h-3 rounded-full bg-white/[0.06] border border-white/[0.08]" />
                    </div>
                    <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider font-heading">
                        {langDisplay[language] || language}
                    </span>
                </div>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${copied
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] text-neutral-400 hover:text-white'
                        }`}
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code area */}
            <div className="relative bg-[#06000e]">
                {/* Subtle glow accents */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/[0.02] blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/[0.02] blur-3xl pointer-events-none" />

                <pre className="relative p-5 overflow-x-auto text-[13px] font-mono leading-7 max-h-[500px]">
                    <code className="block">
                        {lines.map((line, i) => (
                            <div key={i} className="flex hover:bg-white/[0.02] -mx-5 px-5 rounded">
                                {showLineNumbers && (
                                    <span className="inline-block w-10 pr-5 text-right text-neutral-700 select-none text-xs shrink-0 font-mono">
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

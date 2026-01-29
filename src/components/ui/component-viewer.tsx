"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Examples', 'Code', 'Installation'];

export function CodeBlock({ code, language = 'jsx' }: { code: string, language?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg bg-[#111] border border-white/10 overflow-hidden font-mono text-sm">
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
                <span className="text-xs text-neutral-400">{language}</span>
                <button onClick={handleCopy} className="text-xs text-neutral-400 hover:text-white transition-colors">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-neutral-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}

export function ComponentViewer({ title, children, code }: { title: string, children: React.ReactNode, code: string }) {
    const [activeTab, setActiveTab] = useState('Examples');

    return (
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto my-20">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
                <div className="flex gap-4 border-b border-white/10">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'Examples' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-neutral-900/30 border border-white/10 rounded-2xl p-12 flex items-center justify-center min-h-[400px]"
                        >
                            {children}
                        </motion.div>
                    )}
                    {activeTab === 'Code' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <CodeBlock code={code} />
                        </motion.div>
                    )}
                    {activeTab === 'Installation' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <CodeBlock code="npm install framer-motion" language="bash" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

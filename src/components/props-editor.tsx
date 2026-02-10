"use client"

import { useState } from "react"

interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select'
    default: any
    options?: string[]
    min?: number
    max?: number
    step?: number
}

interface PropsEditorProps {
    props: PropConfig[]
    values: Record<string, any>
    onChange: (name: string, value: any) => void
}

export function PropsEditor({ props, values, onChange }: PropsEditorProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {props.map((prop) => (
                <div key={prop.name} className="space-y-2">
                    <label className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                        {prop.name}
                    </label>

                    {prop.type === 'string' && (
                        <input
                            type="text"
                            value={values[prop.name] ?? prop.default}
                            onChange={(e) => onChange(prop.name, e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-mono focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-neutral-600"
                        />
                    )}

                    {prop.type === 'number' && (
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min={prop.min ?? 0}
                                max={prop.max ?? 100}
                                step={prop.step ?? 1}
                                value={values[prop.name] ?? prop.default}
                                onChange={(e) => onChange(prop.name, parseFloat(e.target.value))}
                                className="flex-1 custom-slider"
                            />
                            <span className="w-14 font-mono text-sm text-indigo-300 bg-white/[0.03] border border-white/[0.06] rounded-lg px-2 py-1 text-center">
                                {values[prop.name] ?? prop.default}
                            </span>
                        </div>
                    )}

                    {prop.type === 'boolean' && (
                        <div className="flex items-center h-[42px]">
                            <button
                                onClick={() => onChange(prop.name, !(values[prop.name] ?? prop.default))}
                                className={`relative w-12 h-7 rounded-full transition-all duration-200 ${(values[prop.name] ?? prop.default)
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25'
                                    : 'bg-white/10 border border-white/10'
                                    }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${(values[prop.name] ?? prop.default)
                                        ? 'translate-x-5'
                                        : 'translate-x-0'
                                        }`}
                                />
                            </button>
                        </div>

                    )}

                    {prop.type === 'select' && prop.options && (
                        <select
                            value={values[prop.name] ?? prop.default}
                            onChange={(e) => onChange(prop.name, e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-mono focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer"
                        >
                            {prop.options.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#0a0015] text-white">
                                    {opt}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ))}
        </div>
    )
}

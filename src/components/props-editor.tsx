"use client"

import { useState } from "react"

interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select'
    default: any
    options?: string[] // For select type
    min?: number // For number type
    max?: number // For number type
    step?: number // For number type
}

interface PropsEditorProps {
    props: PropConfig[]
    values: Record<string, any>
    onChange: (name: string, value: any) => void
}

export function PropsEditor({ props, values, onChange }: PropsEditorProps) {
    return (
        <div className="space-y-4">
            {props.map((prop) => (
                <div key={prop.name} className="flex items-center gap-4">
                    <label className="w-32 text-sm font-mono text-neutral-400 shrink-0">
                        {prop.name}
                    </label>

                    {prop.type === 'string' && (
                        <input
                            type="text"
                            value={values[prop.name] ?? prop.default}
                            onChange={(e) => onChange(prop.name, e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                        />
                    )}

                    {prop.type === 'number' && (
                        <div className="flex items-center gap-3 flex-1">
                            <input
                                type="range"
                                min={prop.min ?? 0}
                                max={prop.max ?? 100}
                                step={prop.step ?? 1}
                                value={values[prop.name] ?? prop.default}
                                onChange={(e) => onChange(prop.name, parseFloat(e.target.value))}
                                className="flex-1 accent-indigo-500"
                            />
                            <span className="w-16 text-right font-mono text-sm text-white">
                                {values[prop.name] ?? prop.default}
                            </span>
                        </div>
                    )}

                    {prop.type === 'boolean' && (
                        <button
                            onClick={() => onChange(prop.name, !(values[prop.name] ?? prop.default))}
                            className={`relative w-11 h-6 rounded-full transition-colors ${(values[prop.name] ?? prop.default)
                                ? 'bg-indigo-500'
                                : 'bg-white/20'
                                }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${(values[prop.name] ?? prop.default)
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                    }`}
                            />
                        </button>
                    )}

                    {prop.type === 'select' && prop.options && (
                        <select
                            value={values[prop.name] ?? prop.default}
                            onChange={(e) => onChange(prop.name, e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                        >
                            {prop.options.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#060010]">
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

"use client"

import { AuroraCursor } from "@/components/ui/aurora-cursor"

export const auroraCursorMeta = {
    name: 'Aurora Cursor',
    slug: 'aurora-cursor',
    category: 'ui' as const,
    description: 'A stunning aurora borealis effect that follows your cursor with multi-layered animated gradients.',
    tags: ['cursor', 'aurora', 'gradient', 'animated', 'northern-lights', 'stunning'],
}

export const auroraCursorTableProps = [
    { name: 'size', type: 'number', default: '100' },
    { name: 'smoothing', type: 'number', default: '0.12' },
    { name: 'enabled', type: 'boolean', default: 'true' },
]

export const auroraCursorEditableProps = [
    { name: 'size', type: 'number' as const, default: 200, min: 50, max: 500, step: 50, description: 'Aurora size' },
]

export const auroraCursorDependencies = ["framer-motion"]

export const auroraCursorUsageCode = `<AuroraCursor
  size={100}
  smoothing={0.12}
/>`

// Static thumbnail preview
export const auroraCursorPreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 rounded-xl overflow-hidden relative">
        {/* Simulated aurora layers */}
        <div
            className="absolute rounded-full"
            style={{
                width: 80,
                height: 80,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(0deg)',
                background: 'conic-gradient(from 0deg, #667eea, #764ba2, #6B8DD6, #667eea)',
                filter: 'blur(20px)',
                opacity: 0.6,
            }}
        />
        <div
            className="absolute rounded-full"
            style={{
                width: 60,
                height: 60,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(60deg)',
                background: 'conic-gradient(from 0deg, #f093fb, #f5576c, #4facfe, #f093fb)',
                filter: 'blur(15px)',
                opacity: 0.5,
            }}
        />
        <div
            className="absolute rounded-full"
            style={{
                width: 40,
                height: 40,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(120deg)',
                background: 'conic-gradient(from 0deg, #43e97b, #38f9d7, #667eea, #43e97b)',
                filter: 'blur(12px)',
                opacity: 0.4,
            }}
        />
        {/* Center glow */}
        <div
            className="absolute rounded-full"
            style={{
                width: 16,
                height: 16,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)',
            }}
        />
        {/* Decorative cursor icon */}
        <div className="absolute top-2 left-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/30">
                <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-white/40 text-[9px] absolute bottom-2 font-medium tracking-wider uppercase">Aurora Effect</p>
    </div>
)

// Large interactive preview
export const auroraCursorDynamicPreview = (props: any) => (
    <>
        <AuroraCursor size={props.size ?? 100} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Move your cursor</h2>
        </div>
    </>
)

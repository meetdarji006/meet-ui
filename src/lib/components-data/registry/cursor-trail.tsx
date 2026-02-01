"use client"

import { CursorTrail } from "@/components/ui/cursor-trail"

export const cursorTrailMeta = {
    name: 'Cursor Trail',
    slug: 'cursor-trail',
    category: 'ui' as const,
    description: 'A beautiful cursor trail effect with glowing particles that follow your mouse across the page.',
    tags: ['cursor', 'trail', 'particles', 'glow', 'mouse', 'interactive'],
}

export const cursorTrailTableProps = [
    { name: 'particleCount', type: 'number', default: '20' },
    { name: 'particleSize', type: '[number, number]', default: '[5, 15]' },
    { name: 'colors', type: 'string[]', default: '["#667eea", "#764ba2", ...]' },
    { name: 'particleLifetime', type: 'number', default: '800' },
    { name: 'minDistance', type: 'number', default: '10' },
    { name: 'enabled', type: 'boolean', default: 'true' },
]

export const cursorTrailEditableProps = [
    { name: 'particleCount', type: 'number' as const, default: 20, min: 5, max: 50, step: 5, description: 'Number of particles' },
    { name: 'particleLifetime', type: 'number' as const, default: 800, min: 200, max: 2000, step: 100, description: 'Particle lifetime (ms)' },
]

export const cursorTrailDependencies = ["framer-motion"]

export const cursorTrailUsageCode = `<CursorTrail
  particleCount={20}
  particleLifetime={800}
  particleSize={[5, 15]}
  colors={["#667eea", "#764ba2"]}
/>`

// Static thumbnail preview
export const cursorTrailPreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900 rounded-xl overflow-hidden relative">
        {/* Simulated particle trail - curved path */}
        {[
            { x: 15, y: 60, size: 14, color: '#667eea', opacity: 0.9 },
            { x: 28, y: 45, size: 12, color: '#764ba2', opacity: 0.8 },
            { x: 42, y: 55, size: 10, color: '#f093fb', opacity: 0.7 },
            { x: 55, y: 40, size: 8, color: '#f5576c', opacity: 0.6 },
            { x: 68, y: 50, size: 6, color: '#4facfe', opacity: 0.5 },
            { x: 78, y: 38, size: 5, color: '#667eea', opacity: 0.4 },
        ].map((particle, i) => (
            <div
                key={i}
                className="absolute rounded-full"
                style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: particle.color,
                    opacity: particle.opacity,
                    boxShadow: `0 0 ${particle.size}px ${particle.color}, 0 0 ${particle.size * 2}px ${particle.color}50`,
                }}
            />
        ))}
        {/* Decorative cursor icon */}
        <div className="absolute top-2 left-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/30">
                <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-white/40 text-[9px] absolute bottom-2 font-medium tracking-wider uppercase">Particle Trail</p>
    </div>
)

// Large interactive preview
export const cursorTrailDynamicPreview = (props: any) => (
    <>
        <CursorTrail
            particleCount={props.particleCount ?? 20}
            particleLifetime={props.particleLifetime ?? 800}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Move your cursor</h2>
        </div>
    </>
)

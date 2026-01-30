"use client"

import { MagneticCursor } from "@/components/ui/magnetic-cursor"

export const magneticCursorMeta = {
    name: 'Magnetic Cursor',
    slug: 'magnetic-cursor',
    category: 'ui' as const,
    description: 'Magnetic cursor trail with elastic-following concentric circles. Perfect for creating premium, interactive experiences.',
    tags: ['cursor', 'mouse', 'animation', 'interactive', 'trail'],
}

// Props for documentation table
export const magneticCursorTableProps = [
    { name: 'circleCount', type: 'number', default: '5' },
    { name: 'circleSize', type: 'number', default: '40' },
    { name: 'color', type: 'string', default: '"rgba(255, 255, 255, 0.6)"' },
    { name: 'smoothing', type: 'number', default: '0.15' },
    { name: 'borderWidth', type: 'number', default: '1' },
    { name: 'enabled', type: 'boolean', default: 'true' },
    { name: 'hoverScale', type: 'number', default: '1.5' },
    { name: 'interactiveSelector', type: 'string', default: '"a, button, ..."' },
]

// Editable props for playground
export const magneticCursorEditableProps = [
    {
        name: 'circleCount',
        type: 'number' as const,
        default: 5,
        min: 2,
        max: 10,
        step: 1,
        description: 'Number of trailing circles'
    },
    {
        name: 'circleSize',
        type: 'number' as const,
        default: 40,
        min: 20,
        max: 80,
        step: 5,
        description: 'Base size of circles in pixels'
    },
    {
        name: 'smoothing',
        type: 'number' as const,
        default: 0.5,
        min: 0.05,
        max: 1,
        step: 0.05,
        description: 'Smoothing factor (lower = more lag)'
    },
    {
        name: 'borderWidth',
        type: 'number' as const,
        default: 1,
        min: 1,
        max: 4,
        step: 1,
        description: 'Border width of circles'
    },
    {
        name: 'hoverScale',
        type: 'number' as const,
        default: 1.5,
        min: 1,
        max: 3,
        step: 0.1,
        description: 'Scale when hovering interactive elements'
    },
]

// Small preview for grid (static version - simulates trail effect)
export const magneticCursorPreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-xl overflow-hidden relative">
        {/* Simulated cursor trail - curved path */}
        {[0, 1, 2, 3, 4].map((i) => (
            <div
                key={i}
                className="absolute rounded-full border-2 border-purple-400"
                style={{
                    width: 24,
                    height: 24,
                    // Create a horizontal trail in the center
                    left: `calc(20% + ${i * 15}%)`,
                    top: `calc(50% + ${Math.sin(i * 0.7) * 15}px)`,
                    transform: 'translate(-50%, -50%)',
                    opacity: 1 - i * 0.17,
                    boxShadow: i === 0 ? '0 0 12px rgba(168, 85, 247, 0.6)' : 'none',
                }}
            />
        ))}
        {/* Decorative cursor icon */}
        <div className="absolute top-2 left-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/30">
                <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-white/40 text-[9px] absolute bottom-2 font-medium tracking-wider uppercase">Magnetic Trail</p>
    </div>
)

// Large interactive preview
export const magneticCursorDynamicPreview = (props: any) => (
    <>
        <MagneticCursor
            circleCount={props.circleCount ?? 5}
            circleSize={props.circleSize ?? 40}
            color={props.color || "rgba(255, 255, 255, 0.6)"}
            smoothing={props.smoothing ?? 0.15}
            borderWidth={props.borderWidth ?? 1}
            hoverScale={props.hoverScale ?? 1.5}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Move your cursor</h2>
        </div>
    </>
)

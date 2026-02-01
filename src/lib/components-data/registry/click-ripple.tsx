"use client"

import { ClickRipple } from "@/components/ui/click-ripple"

export const clickRippleMeta = {
    name: 'Click Ripple',
    slug: 'click-ripple',
    category: 'ui' as const,
    description: 'A beautiful ripple effect that expands from where you click on the page.',
    tags: ['click', 'ripple', 'mouse', 'interactive', 'animation'],
}

export const clickRippleTableProps = [
    { name: 'rippleSize', type: 'number', default: '400' },
    { name: 'duration', type: 'number', default: '800' },
    { name: 'color', type: 'string', default: '"#667eea"' },
    { name: 'enabled', type: 'boolean', default: 'true' },
]

export const clickRippleEditableProps = [
    { name: 'rippleSize', type: 'number' as const, default: 400, min: 100, max: 800, step: 50, description: 'Ripple size (px)' },
    { name: 'duration', type: 'number' as const, default: 800, min: 300, max: 2000, step: 100, description: 'Animation duration (ms)' },
]

export const clickRippleDependencies = ["framer-motion"]

export const clickRippleUsageCode = `<ClickRipple
  rippleSize={400}
  duration={800}
  color="#667eea"
/>`

// Static thumbnail preview
export const clickRipplePreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 rounded-xl overflow-hidden relative">
        {/* Simulated ripple circles */}
        {[0, 1, 2].map((i) => (
            <div
                key={i}
                className="absolute rounded-full border-2"
                style={{
                    width: 30 + i * 35,
                    height: 30 + i * 35,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderColor: '#667eea',
                    opacity: 0.7 - i * 0.2,
                    boxShadow: i === 0 ? '0 0 20px rgba(102, 126, 234, 0.5), inset 0 0 10px rgba(102, 126, 234, 0.3)' : `0 0 ${10 - i * 3}px rgba(102, 126, 234, 0.3)`,
                }}
            />
        ))}
        {/* Click indicator */}
        <div
            className="absolute rounded-full bg-white/80"
            style={{
                width: 8,
                height: 8,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
        />
        {/* Decorative click icon */}
        <div className="absolute top-2 left-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/30">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
        <p className="text-white/40 text-[9px] absolute bottom-2 font-medium tracking-wider uppercase">Click Ripple</p>
    </div>
)

// Large interactive preview
export const clickRippleDynamicPreview = (props: any) => (
    <>
        <ClickRipple
            rippleSize={props.rippleSize ?? 400}
            duration={props.duration ?? 800}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Click anywhere</h2>
        </div>
    </>
)

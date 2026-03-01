"use client"

import { PixelCursorTrail } from "@/components/ui/pixel-cursor-trail"

export const pixelCursorTrailMeta = {
    name: 'Pixel Cursor Trail',
    slug: 'pixel-cursor-trail',
    category: 'ui' as const,
    description: 'A retro 8-bit style pixelated cursor trail effect, fading beautifully over time.',
    tags: ['cursor', 'mouse', 'animation', 'interactive', 'trail', 'pixel', 'retro'],
}

// Props for documentation table
export const pixelCursorTrailTableProps = [
    { name: 'pixelSize', type: 'number', default: '12' },
    { name: 'trailLength', type: 'number', default: '40' },
    { name: 'fadeSpeed', type: 'number', default: '0.04' },
    { name: 'pixelColor', type: 'string', default: '""' },
    { name: 'isGlobal', type: 'boolean', default: 'false' },
]

// Editable props for playground
export const pixelCursorTrailEditableProps = [
    {
        name: 'pixelSize',
        type: 'number' as const,
        default: 12,
        min: 4,
        max: 32,
        step: 2,
        description: 'Size of the pixel blocks in the trail'
    },
    {
        name: 'trailLength',
        type: 'number' as const,
        default: 40,
        min: 10,
        max: 100,
        step: 5,
        description: 'Maximum number of pixels kept in the trail'
    },
    {
        name: 'fadeSpeed',
        type: 'number' as const,
        default: 0.04,
        min: 0.01,
        max: 0.2,
        step: 0.01,
        description: 'How fast pixels fade out (higher = faster)'
    },
    {
        name: 'pixelColor',
        type: 'string' as const,
        default: '#85a4ff',
        description: 'Specific hex color for pixels. Will default to theme foreground if empty.'
    },
    {
        name: 'isGlobal',
        type: 'boolean' as const,
        default: true,
        description: 'Whether the trail should follow the mouse across the entire viewport'
    }
]

export const pixelCursorTrailDependencies = ["clsx", "tailwind-merge"]

export const pixelCursorTrailUsageCode = `import { PixelCursorTrail } from "@/components/ui/pixel-cursor-trail"

export default function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Global mode (fixed to viewport) */}
      <PixelCursorTrail isGlobal />

      {/* Or contained mode */}
      <div className="relative w-full h-[400px] border border-dashed">
         <PixelCursorTrail isGlobal={false} />
      </div>
    </div>
  )
}`

// Small preview for grid (static version - simulates trail effect)
export const pixelCursorTrailPreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-linear-to-br from-slate-900 via-zinc-900/50 to-slate-900 rounded-xl overflow-hidden relative">
        {/* Simulated cursor trail */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
            const size = 12 * Math.max(0.3, 1 - (i * 15) / 100);
            return (
                <div
                    key={i}
                    className="absolute bg-white transition-all"
                    style={{
                        width: size,
                        height: size,
                        left: `calc(20% + ${i * 10}%)`,
                        top: `calc(50% + ${Math.sin(i * 0.8) * 15}px)`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 1 - i * 0.15,
                    }}
                />
            )
        })}
        {/* Decorative cursor icon */}
        <div className="absolute top-2 left-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/30">
                <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-white/40 text-[9px] absolute bottom-2 font-medium tracking-wider uppercase flex gap-1 items-center">
            Pixel Trail
        </p>
    </div>
)

// Large interactive preview
export const pixelCursorTrailDynamicPreview = (props: any) => (
    <div className="w-full h-full flex items-center justify-center">
        <PixelCursorTrail
            pixelSize={props.pixelSize ?? 12}
            trailLength={props.trailLength ?? 40}
            fadeSpeed={props.fadeSpeed ?? 0.04}
            pixelColor={props.pixelColor || undefined}
            isGlobal={props.isGlobal ?? true}
        />
        {props.isGlobal !== false && (
            <div className="flex flex-col items-center gap-4 z-10">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Global Pixel Trail</h2>
                <p className="text-muted-foreground">Move your cursor anywhere on the screen</p>
            </div>
        )}
    </div>
)

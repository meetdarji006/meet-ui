"use client"

import { PixelCursorTrail } from "@/components/ui/pixel-cursor-trail"
import { PropConfig, ComponentEntry } from "./index";

export const pixelCursorTrailMeta = {
    name: 'Pixel Cursor Trail',
    slug: 'pixel-cursor-trail',
    category: 'ui' as const,
    description: 'A retro 8-bit style pixelated cursor trail effect, fading beautifully over time.',
    tags: ['cursor', 'mouse', 'animation', 'interactive', 'trail', 'pixel', 'retro'],
}

// Props for documentation table
// Editable props for playground
export const pixelCursorTrailDependencies = ["clsx", "tailwind-merge"]

export const pixelCursorTrailUsageCode = `<div className="relative w-full h-screen">
  {/* Global mode (fixed to viewport) */}
  <PixelCursorTrail isGlobal />

  {/* Or contained mode */}
  <div className="relative w-full h-[400px] border border-dashed">
    <PixelCursorTrail isGlobal={false} />
  </div>
</div>`

// Small preview for grid (static version - simulates trail effect)
// Large interactive preview
export const pixelCursorTrailPreview = (props: any) => (
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
export const pixelCursorTrailProps: PropConfig[] = [
        { isEditable: true, 
            name: 'pixelSize',
            type: 'number' ,
            default: 12,
            min: 4,
            max: 32,
            step: 2,
            description: 'Size of the pixel blocks in the trail'
        },
        { isEditable: true, 
            name: 'trailLength',
            type: 'number' ,
            default: 40,
            min: 10,
            max: 100,
            step: 5,
            description: 'Maximum number of pixels kept in the trail'
        },
        { isEditable: true, 
            name: 'fadeSpeed',
            type: 'number' ,
            default: 0.04,
            min: 0.01,
            max: 0.2,
            step: 0.01,
            description: 'How fast pixels fade out (higher = faster)'
        },
        { isEditable: true, 
            name: 'pixelColor',
            type: 'string' ,
            default: '#85a4ff',
            description: 'Specific hex color for pixels. Will default to theme foreground if empty.'
        },
        { isEditable: true, 
            name: 'isGlobal',
            type: 'boolean' ,
            default: true,
            description: 'Whether the trail should follow the mouse across the entire viewport'
        }
    ];
export const pixelCursorTrailRegistry: ComponentEntry = {
        ...pixelCursorTrailMeta,
        preview: pixelCursorTrailPreview,
        props: pixelCursorTrailProps,
        dependencies: pixelCursorTrailDependencies,
        usageCode: pixelCursorTrailUsageCode,
    };

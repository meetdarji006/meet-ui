import { PropConfig } from './index'
import React from 'react'

export const liquidTextHoverMeta = {
    name: "Liquid Text Hover",
    slug: "liquid-text-hover",
    category: "Text Animations",
    description: "A gooey SVG masking effect where a liquid blob tracks the cursor, revealing a brushed metal texture inside the text.",
    tags: ["hover", "svg", "blob", "mask", "cursor"],
    component: React.lazy(() => import('@/components/ui/liquid-text-hover').then(mod => ({ default: mod.LiquidTextHover }))),
}

export const liquidTextHoverPreview = () => (
    <div className="w-full relative overflow-hidden bg-[#111] flex items-center justify-center rounded-xl border border-neutral-800 p-20 min-h-[400px]">
        <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/liquid-text-hover').then(mod => ({ default: mod.LiquidTextHover }))),
                {
                    text: 'EDSTAL',
                    blobColor: 'hsl(var(--primary))',
                    className: "text-6xl md:text-8xl tracking-tighter uppercase text-center max-w-full"
                }
            )}
        </React.Suspense>
    </div>
)

export const liquidTextHoverDynamicPreview = (props: Record<string, any>) => (
    <div className="w-full relative overflow-hidden bg-[#111] flex items-center justify-center rounded-xl border border-neutral-800 p-20 min-h-[400px]">
        <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/liquid-text-hover').then(mod => ({ default: mod.LiquidTextHover }))),
                {
                    text: props.text || 'EDSTAL',
                    blobColor: props.blobColor || 'hsl(var(--primary))',
                    className: "text-6xl md:text-8xl tracking-tighter uppercase text-center max-w-full"
                }
            )}
        </React.Suspense>
    </div>
)

export const liquidTextHoverTableProps = [
    {
        name: 'text',
        type: 'string',
        default: '"EDSTAL"',
        description: 'The primary text to be masked and displayed.'
    },
    {
        name: 'textureUrl',
        type: 'string',
        default: '"https://images.unsplash.com/photo-1550684848-fac1c5b4e853"',
        description: 'URL to an image pattern revealed within the liquid cursor drop.'
    },
    {
        name: 'blobColor',
        type: 'string',
        default: '"#6366f1"',
        description: 'Solid color hex for the liquid blob if no texture URL is provided.'
    },
    {
        name: 'className',
        type: 'string',
        default: '""',
        description: 'Tailwind classes mapping directly to the SVG container wrapper.'
    }
]

export const liquidTextHoverEditableProps: PropConfig[] = [
    {
        name: 'text',
        label: 'Text',
        type: 'text',
        default: 'EDSTAL'
    },
    {
        name: 'blobColor',
        label: 'Blob Color',
        type: 'color',
        default: '#6366f1'
    }
]

export const liquidTextHoverDependencies = ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge']

export const liquidTextHoverUsageCode = `import { LiquidTextHover } from "@/components/ui/liquid-text-hover";

export default function Example() {
  return (
    <div className="flex items-center justify-center p-20 bg-black">
      <LiquidTextHover
        text="EDSTAL"
        className="text-7xl md:text-9xl tracking-tighter"
      />
    </div>
  );
}`

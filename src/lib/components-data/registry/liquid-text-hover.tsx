import { PropConfig, ComponentEntry } from './index'
import React from 'react'

export const liquidTextHoverMeta = {
    name: "Liquid Text Hover",
    slug: "liquid-text-hover",
    category: "Text Animations",
    description: "A gooey SVG masking effect where a liquid blob tracks the cursor, revealing a brushed metal texture inside the text.",
    tags: ["hover", "svg", "blob", "mask", "cursor"],
    component: React.lazy(() => import('@/components/ui/liquid-text-hover').then(mod => ({ default: mod.LiquidTextHover }))),
}
export const liquidTextHoverPreview = (props: Record<string, any>) => (
    <div className="w-full relative overflow-hidden flex items-center justify-center p-20 min-h-[400px]">
        <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/liquid-text-hover').then(mod => ({ default: mod.LiquidTextHover }))),
                {
                    text: props.text || 'HOVER ME',
                    color: props.color || '#ffffff',
                    liquidColor: props.liquidColor || '#a855f7',
                    className: "text-2xl md:text-8xl tracking-tighter uppercase text-center max-w-full"
                }
            )}
        </React.Suspense>
    </div>
)
export const liquidTextHoverDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const liquidTextHoverUsageCode = `<div className="flex items-center justify-center p-20 bg-black">
  <LiquidTextHover
    text="HOVER ME"
    className="text-2xl md:text-9xl tracking-tighter"
  />
</div>`
export const liquidTextHoverProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'HOVER ME' },
    { isEditable: true, name: 'color', type: 'string', default: '#ffffff', description: 'Text color' },
    { isEditable: true, name: 'liquidColor', type: 'string', default: '#a855f7', description: 'Color of the interactive liquid blob' },
    { name: 'textureUrl', type: 'string', default: '"https://images.unsplash.com/photo-1550684848-fac1c5b4e853"', description: 'URL to an image pattern revealed within the liquid cursor drop.' },
    { name: 'className', type: 'string', default: '""', description: 'Tailwind classes mapping directly to the SVG container wrapper.' }
];
export const liquidTextHoverRegistry: ComponentEntry = {
    ...liquidTextHoverMeta,
    preview: liquidTextHoverPreview,
    props: liquidTextHoverProps,
    dependencies: liquidTextHoverDependencies,
    usageCode: liquidTextHoverUsageCode,
};

import { PropConfig, ComponentEntry } from './index'
import React from 'react'
import { TextImageReveal } from '@/components/ui/text-image-reveal'

export const textImageRevealMeta = {
    name: "Text Image Reveal",
    slug: "text-image-reveal",
    category: "Text Animations" as const,
    description: "A full-width stacked text menu. Hovering revealing an infinitely panning image inside the typography along with a scrolling marquee background.",
    tags: ["text", "hover", "menu", "panning", "marquee", "framer-motion", "svg mask"],
    component: React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
}

const DEFAULT_IMAGE_1 = "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop"
const DEFAULT_IMAGE_2 = "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1080&auto=format&fit=crop"
const DEFAULT_IMAGE_3 = "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=1080&auto=format&fit=crop"
export const textImageRevealPreview = (props: any) => {
    // If the playground provides an items array, use it; otherwise use the default demo items
    const items = props.items || [
        {
            id: '1',
            text: 'Fonts',
            imageUrl: DEFAULT_IMAGE_1,
            thumbnailUrl: DEFAULT_IMAGE_1,
            marqueeText: props.marqueeText,
            lineHeight: props.lineHeight,
            direction: "left",
            className: "text-2xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter font-black uppercase"
        },
        {
            id: '2',
            text: 'Alignment',
            imageUrl: DEFAULT_IMAGE_2,
            thumbnailUrl: DEFAULT_IMAGE_2,
            lineHeight: props.lineHeight,
            direction: "right",
            className: "text-2xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter font-black uppercase"
        },
        {
            id: '3',
            text: 'Contrast',
            imageUrl: DEFAULT_IMAGE_3,
            thumbnailUrl: DEFAULT_IMAGE_3,
            lineHeight: props.lineHeight,
            direction: "left",
            className: "text-2xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter font-black uppercase"
        }
    ];

    return (
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20">
            <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
                {React.createElement(
                    React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
                    { items }
                )}
            </React.Suspense>
        </div>
    )
}
export const textImageRevealDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const textImageRevealUsageCode = `<div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white">
  <TextImageReveal
    items={[
      {
        id: "1",
        text: "Design",
        imageUrl: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop",
        thumbnailUrl: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop",
        lineHeight: 1,
        direction: "left",
        className: "text-2xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tighter font-black uppercase"
      },
      {
        id: "2",
        text: "System",
        imageUrl: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1080&auto=format&fit=crop",
        thumbnailUrl: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1080&auto=format&fit=crop",
        lineHeight: 1.5,
        direction: "right",
        className: "text-2xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tighter font-black uppercase"
      }
    ]}
  />
</div>`
export const textImageRevealProps: PropConfig[] = [
    {
        name: 'items',
        type: 'TextImageRevealItem[]',
        default: '[]',
        description: 'An array of items, each containing a text string, imageUrl, and optional direction/styles.'
    },
    {
        isEditable: true,
        name: 'lineHeight',
        type: 'number',
        default: '1',
        min: 0,
        max: 2,
        description: 'The line height of the base text. At least 1.5 is recommended to avoid vertical cutting, but defaults to 1 for maximum compactness.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'undefined',
        description: 'Tailwind classes applied to the outer stacked container.'
    }
];
export const textImageRevealRegistry: ComponentEntry = {
    ...textImageRevealMeta,
    preview: textImageRevealPreview,
    props: textImageRevealProps,
    dependencies: textImageRevealDependencies,
    usageCode: textImageRevealUsageCode,
};

import { PropConfig } from './index'
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

export const textImageRevealPreview = () => (
    <div className="w-full relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 min-h-[400px]">
        <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
                {
                    text: 'HOVER',
                    imageUrl: DEFAULT_IMAGE_1,
                    marqueeText: "HOVER - ",
                    className: "text-6xl md:text-8xl tracking-tight font-black uppercase"
                }
            )}
        </React.Suspense>
    </div>
)

export const textImageRevealDynamicPreview = (props: any) => {
    return (
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20">
            <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
                {React.createElement(
                    React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
                    {
                        text: props.text || 'Fonts',
                        imageUrl: props.imageUrl || DEFAULT_IMAGE_1,
                        thumbnailUrl: props.thumbnailUrl || DEFAULT_IMAGE_1,
                        marqueeText: props.marqueeText,
                        direction: "left",
                        className: "text-[12vw] tracking-tighter font-black uppercase my-[-3vw]"
                    }
                )}
                {React.createElement(
                    React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
                    {
                        text: 'Alignment',
                        imageUrl: DEFAULT_IMAGE_2,
                        thumbnailUrl: DEFAULT_IMAGE_2,
                        direction: "right",
                        className: "text-[12vw] tracking-tighter font-black uppercase my-[-3vw]"
                    }
                )}
                {React.createElement(
                    React.lazy(() => import('@/components/ui/text-image-reveal').then(mod => ({ default: mod.TextImageReveal }))),
                    {
                        text: 'Contrast',
                        imageUrl: DEFAULT_IMAGE_3,
                        thumbnailUrl: DEFAULT_IMAGE_3,
                        direction: "left",
                        className: "text-[12vw] tracking-tighter font-black uppercase my-[-3vw]"
                    }
                )}
            </React.Suspense>
        </div>
    )
}

export const textImageRevealTableProps = [
    {
        name: 'text',
        type: 'string',
        default: '""',
        description: 'The main text to display that acts as the clipping mask'
    },
    {
        name: 'imageUrl',
        type: 'string',
        default: '""',
        description: 'URL of the high-res image that will pan infinitely inside the text'
    },
    {
        name: 'thumbnailUrl',
        type: 'string',
        default: 'undefined',
        description: 'Optional URL for the floating thumbnail image that tracks the cursor'
    },
    {
        name: 'marqueeText',
        type: 'string',
        default: 'undefined',
        description: 'Custom text to repeat in the background marquee. Defaults to main text if omitted.'
    },
    {
        name: 'direction',
        type: '"left" | "right"',
        default: '"left"',
        description: 'The horizontal panning direction of the image inside the text'
    },
    {
        name: 'className',
        type: 'string',
        default: '""',
        description: 'Tailwind classes applied to the container, primarily used for changing text size/font.'
    }
]

export const textImageRevealEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string',
        default: 'Fonts'
    },
    {
        name: 'imageUrl',
        type: 'string',
        default: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop'
    },
    {
        name: 'thumbnailUrl',
        type: 'string',
        default: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop'
    },
    {
        name: 'marqueeText',
        type: 'string',
        default: ''
    }
]

export const textImageRevealDependencies = ['framer-motion']

export const textImageRevealUsageCode = `import { TextImageReveal } from "@/components/ui/text-image-reveal";

export default function TextRevealMenu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <TextImageReveal
        text="Design"
        imageUrl="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop"
        thumbnailUrl="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1080&auto=format&fit=crop"
        direction="left"
        className="text-[12vw] tracking-tighter font-black uppercase my-[-3vw]"
      />

      <TextImageReveal
        text="System"
        imageUrl="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1080&auto=format&fit=crop"
        thumbnailUrl="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1080&auto=format&fit=crop"
        direction="right"
        className="text-[12vw] tracking-tighter font-black uppercase my-[-3vw]"
      />
    </div>
  );
}`

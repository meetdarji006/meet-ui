"use client"

import { MorphingText } from "@/components/ui/morphing-text"

export const morphingTextMeta = {
    name: 'Morphing Text',
    slug: 'morphing-text',
    category: 'ui' as const,
    description: '3D morphing text that transitions between words with staggered flip and blur effects.',
    tags: ['text', 'morph', '3d', 'animation'],
}

export const morphingTextTableProps = [
    { name: 'words', type: 'string[]', default: '["CREATIVE", "DYNAMIC", "POWERFUL"]' },
    { name: 'interval', type: 'number', default: '3000' },
    { name: 'morphDuration', type: 'number', default: '1.2' },
]

export const morphingTextEditableProps = [
    { name: 'interval', type: 'number' as const, default: 3000, min: 1500, max: 8000, step: 500, description: 'Time between morphs (ms)' },
    { name: 'morphDuration', type: 'number' as const, default: 1.2, min: 0.5, max: 2.5, step: 0.1, description: 'Morph duration (s)' },
]

export const morphingTextPreview = () => (
    <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
        <span>We are</span>
        <MorphingText
            words={["CREATIVE", "DYNAMIC", "BOLD"]}
            interval={2000}
            morphDuration={0.8}
            className="text-purple-400"
        />
    </div>
)

export const morphingTextDynamicPreview = (props: any) => (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        <span>We are</span>
        <MorphingText
            words={["CREATIVE", "DYNAMIC", "POWERFUL", "UNIQUE"]}
            interval={props.interval ?? 3000}
            morphDuration={props.morphDuration ?? 1.2}
            className="text-purple-400"
        />
    </div>
)

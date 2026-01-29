"use client"

import { StretchText } from "@/components/ui/stretch-text"

// Metadata for listing page
export const stretchTextMeta = {
    name: 'Stretch Text',
    slug: 'stretch-text',
    category: 'ui' as const,
    description: 'Text that stretches vertically as you hover over each character with smooth spring physics.',
    tags: ['React', 'Motion'],
}

// Small preview for components listing grid
export const stretchTextPreview = () => (
    <StretchText
        text="HOVER"
        stretchIntensity={1.4}
        stretchRange={100}
        className="text-2xl font-black text-white tracking-tight"
    />
)

// Large editable preview for component viewer
export const stretchTextDynamicPreview = (props: Record<string, any>) => (
    <StretchText
        text={props.text || "STRETCH ME"}
        stretchIntensity={props.stretchIntensity ?? 1.5}
        stretchRange={props.stretchRange ?? 200}
        className="text-6xl font-black text-white tracking-tight"
    />
)

"use client"

import { StretchText } from "@/components/ui/stretch-text"

export const stretchTextMeta = {
    name: 'Stretch Text',
    slug: 'stretch-text',
    category: 'ui' as const,
    description: 'Text that stretches vertically as you hover over each character with smooth spring physics.',
    tags: ['React', 'Motion'],
}

// Props for documentation table
export const stretchTextTableProps = [
    { name: 'text', type: 'string', default: '"Hello"' },
    { name: 'className', type: 'string', default: '""' },
    { name: 'stretchIntensity', type: 'number', default: '1.5' },
    { name: 'stretchRange', type: 'number', default: '200' },
]

// Editable props for playground
export const stretchTextEditableProps = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'STRETCH ME',
        description: 'Text to display'
    },
    {
        name: 'stretchIntensity',
        type: 'number' as const,
        default: 1.5,
        min: 1,
        max: 3,
        step: 0.1,
        description: 'How much the text stretches'
    },
    {
        name: 'stretchRange',
        type: 'number' as const,
        default: 200,
        min: 50,
        max: 400,
        step: 10,
        description: 'Range of the stretch effect in pixels'
    },
]

export const stretchTextDependencies = ["framer-motion"]

export const stretchTextUsageCode = `<StretchText
  text="STRETCH"
  stretchIntensity={1.5}
  stretchRange={200}
  className="text-4xl font-bold"
/>`

// Small preview for components listing grid
export const stretchTextPreview = () => (
    <StretchText
        text="HOVER"
        stretchIntensity={1.4}
        stretchRange={100}
        className="text-4xl font-black text-white tracking-tight"
    />
)

// Large editable preview for component viewer
export const stretchTextDynamicPreview = (props: Record<string, any>) => (
    <StretchText
        text={props.text || "STRETCH ME"}
        stretchIntensity={props.stretchIntensity ?? 1.5}
        stretchRange={props.stretchRange ?? 200}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
    />
)

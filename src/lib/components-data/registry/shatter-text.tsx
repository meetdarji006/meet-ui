"use client"

import { ShatterText } from "@/components/ui/shatter-text"

export const shatterTextMeta = {
    name: 'Shatter Text',
    slug: 'shatter-text',
    category: 'ui' as const,
    description: 'Dramatic explosion/assembly effect where characters scatter and reassemble. Creates stunning reveal moments.',
    tags: ['text', 'shatter', 'explosion', 'animation'],
}

export const shatterTextTableProps = [
    { name: 'text', type: 'string', default: '"SHATTER"' },
    { name: 'duration', type: 'number', default: '0.8' },
    { name: 'scatter', type: 'number', default: '100' },
    { name: 'delay', type: 'number', default: '0' },
    { name: 'once', type: 'boolean', default: 'false' },
]

export const shatterTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'SHATTER', description: 'Text to shatter' },
    { name: 'duration', type: 'number' as const, default: 0.8, min: 0.3, max: 2, step: 0.1, description: 'Animation duration (s)' },
    { name: 'scatter', type: 'number' as const, default: 100, min: 30, max: 300, step: 10, description: 'Scatter distance (px)' },
    { name: 'once', type: 'boolean' as const, default: false, description: 'Animate only once' },
]

export const shatterTextDependencies = ["framer-motion"]

export const shatterTextUsageCode = `<ShatterText
  text="EXPLODE"
  duration={0.8}
  scatter={100}
  className="text-5xl font-bold"
/>`

export const shatterTextPreview = () => (
    <ShatterText
        text="SHATTER"
        scatter={60}
        duration={0.6}
        className="text-3xl font-black text-white tracking-tight"
    />
)

export const shatterTextDynamicPreview = (props: any) => (
    <ShatterText
        key={`${props.text}-${props.scatter}-${props.once}`}
        text={props.text || "SHATTER"}
        duration={props.duration ?? 0.8}
        scatter={props.scatter ?? 100}
        once={props.once ?? false}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
    />
)

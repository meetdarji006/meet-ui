"use client"

import { SparklesText } from "@/components/ui/sparkles-text"

export const sparklesTextMeta = {
    name: 'Sparkles Text',
    slug: 'sparkles-text',
    category: 'ui' as const,
    description: 'Text with animated sparkles popping around it. Perfect for highlighting "AI" features or magic moments.',
    tags: ['text', 'sparkles', 'animation', 'magic'],
}

export const sparklesTextTableProps = [
    { name: 'text', type: 'string', default: '"Sparkles"' },
    { name: 'colors', type: 'object', default: '{ first: "#FFC233", second: "#FFA500" }' },
    { name: 'sparklesCount', type: 'number', default: '10' },
]

export const sparklesTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Sparkles', description: 'Text to display' },
    { name: 'sparklesCount', type: 'number' as const, default: 10, min: 5, max: 20, step: 1, description: 'Max sparkles count' },
]

export const sparklesTextPreview = () => (
    <SparklesText
        text="Magic Effect"
        className="text-4xl font-bold text-foreground"
    />
)

export const sparklesTextDynamicPreview = (props: any) => (
    <SparklesText
        key={`${props.text}-${props.sparklesCount}`}
        text={props.text || "Magic Effect"}
        sparklesCount={props.sparklesCount ?? 10}
        className="text-4xl sm:text-5xl font-bold text-foreground"
    />
)

"use client"

import { SparklesText } from "@/components/ui/sparkles-text"
import { PropConfig, ComponentEntry } from "./index";

export const sparklesTextMeta = {
    name: 'Sparkles Text',
    slug: 'sparkles-text',
    category: 'ui' as const,
    description: 'Text with animated sparkles popping around it. Perfect for highlighting "AI" features or magic moments.',
    tags: ['text', 'sparkles', 'animation', 'magic'],
}
export const sparklesTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const sparklesTextUsageCode = `<SparklesText
  text="Magic Effect"
  sparklesCount={10}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const sparklesTextPreview = (props: any) => (
    <SparklesText
        key={`${props.text}-${props.sparklesCount}`}
        text={props.text || "Magic Effect"}
        sparklesCount={props.sparklesCount ?? 10}
        className="text-2xl md:text-5xl font-heading font-black tracking-tight text-foreground"
    />
)
export const sparklesTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Sparkles', description: 'Text to display' },
    { name: 'colors', type: 'object', default: '{ first: "#FFC233", second: "#FFA500" }' },
    { isEditable: true, name: 'sparklesCount', type: 'number', default: 10, min: 5, max: 20, step: 1, description: 'Max sparkles count' }
];
export const sparklesTextRegistry: ComponentEntry = {
    ...sparklesTextMeta,
    preview: sparklesTextPreview,
    props: sparklesTextProps,
    dependencies: sparklesTextDependencies,
    usageCode: sparklesTextUsageCode,
};

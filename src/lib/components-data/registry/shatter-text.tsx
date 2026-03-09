"use client"

import { ShatterText } from "@/components/ui/shatter-text"
import { PropConfig, ComponentEntry } from "./index";

export const shatterTextMeta = {
    name: 'Shatter Text',
    slug: 'shatter-text',
    category: 'ui' as const,
    description: 'Dramatic explosion/assembly effect where characters scatter and reassemble. Creates stunning reveal moments.',
    tags: ['text', 'shatter', 'explosion', 'animation'],
}
export const shatterTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const shatterTextUsageCode = `<ShatterText
  text="EXPLODE"
  duration={0.8}
  scatter={100}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const shatterTextPreview = (props: any) => (
    <ShatterText
        key={`${props.text}-${props.scatter}-${props.once}`}
        text={props.text || "SHATTER"}
        duration={props.duration ?? 0.8}
        scatter={props.scatter ?? 100}
        once={props.once ?? false}
        className="text-2xl md:text-5xl font-heading font-black text-white tracking-tight"
    />
)
export const shatterTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'SHATTER', description: 'Text to shatter' },
    { isEditable: true, name: 'duration', type: 'number', default: 0.8, min: 0.3, max: 2, step: 0.1, description: 'Animation duration (s)' },
    { isEditable: true, name: 'scatter', type: 'number', default: 100, min: 30, max: 300, step: 10, description: 'Scatter distance (px)' },
    { name: 'delay', type: 'number', default: '0' },
    { isEditable: true, name: 'once', type: 'boolean', default: false, description: 'Animate only once' }
];
export const shatterTextRegistry: ComponentEntry = {
    ...shatterTextMeta,
    preview: shatterTextPreview,
    props: shatterTextProps,
    dependencies: shatterTextDependencies,
    usageCode: shatterTextUsageCode,
};

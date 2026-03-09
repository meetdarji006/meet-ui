"use client"

import { MorphingText } from "@/components/ui/morphing-text"
import { PropConfig, ComponentEntry } from "./index";

export const morphingTextMeta = {
    name: 'Morphing Text',
    slug: 'morphing-text',
    category: 'ui' as const,
    description: '3D morphing text that transitions between words with staggered flip and blur effects.',
    tags: ['text', 'morph', '3d', 'animation'],
}
export const morphingTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const morphingTextUsageCode = `<MorphingText
  words={["CREATIVE", "DYNAMIC", "POWERFUL"]}
  interval={3000}
  morphDuration={1.2}
  className="text-purple-400 text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const morphingTextPreview = (props: any) => (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-2xl md:text-5xl font-heading font-black text-white tracking-tight">
        <span>We are</span>
        <MorphingText
            words={["CREATIVE", "DYNAMIC", "POWERFUL", "UNIQUE"]}
            interval={props.interval ?? 3000}
            morphDuration={props.morphDuration ?? 1.2}
            className="text-purple-400"
        />
    </div>
)
export const morphingTextProps: PropConfig[] = [
    { name: 'words', type: 'string[]', default: '["CREATIVE", "DYNAMIC", "POWERFUL"]' },
    { isEditable: true, name: 'interval', type: 'number', default: 3000, min: 1500, max: 8000, step: 500, description: 'Time between morphs (ms)' },
    { isEditable: true, name: 'morphDuration', type: 'number', default: 1.2, min: 0.5, max: 2.5, step: 0.1, description: 'Morph duration (s)' }
];
export const morphingTextRegistry: ComponentEntry = {
    ...morphingTextMeta,
    preview: morphingTextPreview,
    props: morphingTextProps,
    dependencies: morphingTextDependencies,
    usageCode: morphingTextUsageCode,
};

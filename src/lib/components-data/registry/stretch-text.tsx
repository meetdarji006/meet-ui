"use client"

import { StretchText } from "@/components/ui/stretch-text"
import { PropConfig, ComponentEntry } from "./index";

export const stretchTextMeta = {
    name: 'Stretch Text',
    slug: 'stretch-text',
    category: 'ui' as const,
    description: 'Text that stretches vertically as you hover over each character with smooth spring physics.',
    tags: ['React', 'Motion'],
}

// Props for documentation table
// Editable props for playground
export const stretchTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const stretchTextUsageCode = `<StretchText
  text="STRETCH"
  stretchIntensity={1.5}
  stretchRange={200}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`

// Small preview for components listing grid
// Large editable preview for component viewer
export const stretchTextPreview = (props: Record<string, any>) => (
    <StretchText
        text={props.text || "STRETCH ME"}
        stretchIntensity={props.stretchIntensity ?? 1.5}
        stretchRange={props.stretchRange ?? 200}
        className="text-2xl md:text-5xl font-heading font-black text-white tracking-tight"
    />
)
export const stretchTextProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'text',
        type: 'string',
        default: 'HOVER TO STRETCH',
        description: 'Text to display'
    },
    { name: 'className', type: 'string', default: '""' },
    {
        isEditable: true,
        name: 'stretchIntensity',
        type: 'number',
        default: 1.5,
        min: 1,
        max: 3,
        step: 0.1,
        description: 'How much the text stretches'
    },
    {
        isEditable: true,
        name: 'stretchRange',
        type: 'number',
        default: 200,
        min: 50,
        max: 400,
        step: 10,
        description: 'Range of the stretch effect in pixels'
    }
];
export const stretchTextRegistry: ComponentEntry = {
    ...stretchTextMeta,
    preview: stretchTextPreview,
    props: stretchTextProps,
    dependencies: stretchTextDependencies,
    usageCode: stretchTextUsageCode,
};

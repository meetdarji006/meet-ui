"use client"

import { SplitTextReveal } from "@/components/ui/split-text-reveal"
import { PropConfig, ComponentEntry } from "./index";

export const splitTextRevealMeta = {
    name: 'Split Text Reveal',
    slug: 'split-text-reveal',
    category: 'ui' as const,
    description: 'Elegant text animation where characters slide in from alternating diagonal directions.',
    tags: ['motion', 'text', 'reveal'],
}

// Props for documentation table
// Editable props for playground
export const splitTextRevealDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const splitTextRevealUsageCode = `<SplitTextReveal
  text="ELEGANT"
  duration={1.5}
  stagger={0.05}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`

// Small preview for grid
// Large interactive preview
export const splitTextRevealPreview = (props: any) => (
    <SplitTextReveal
        key={props.once ? 'once-true' : 'once-false'}
        text={props.text || "ELEGANT"}
        className="text-2xl md:text-5xl font-heading font-black text-white tracking-tight uppercase"
        duration={props.duration || 1.5}
        delay={props.delay || 0.2}
        stagger={props.stagger || 0.05}
        once={props.once}
    />
)
export const splitTextRevealProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'ELEGANT' },
    {
        isEditable: true,
        name: 'duration',
        type: 'number',
        default: 1.5,
        min: 0.5,
        max: 5,
        step: 0.1,
        description: 'Animation duration per letter'
    },
    {
        isEditable: true,
        name: 'stagger',
        type: 'number',
        default: 0.05,
        min: 0.01,
        max: 0.5,
        step: 0.01,
        description: 'Delay between each letter'
    },
    {
        isEditable: true,
        name: 'delay',
        type: 'number',
        default: 0,
        min: 0,
        max: 3,
        step: 0.1,
        description: 'Initial delay before animation starts'
    },
    {
        isEditable: true,
        name: 'once',
        type: 'boolean',
        default: false,
        description: 'Run animation only once'
    }
];
export const splitTextRevealRegistry: ComponentEntry = {
    ...splitTextRevealMeta,
    preview: splitTextRevealPreview,
    props: splitTextRevealProps,
    dependencies: splitTextRevealDependencies,
    usageCode: splitTextRevealUsageCode,
};

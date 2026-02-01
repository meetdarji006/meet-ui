"use client"

import { SplitTextReveal } from "@/components/ui/split-text-reveal"

export const splitTextRevealMeta = {
    name: 'Split Text Reveal',
    slug: 'split-text-reveal',
    category: 'ui' as const,
    description: 'Elegant text animation where characters slide in from alternating diagonal directions.',
    tags: ['motion', 'text', 'reveal'],
}

// Props for documentation table
export const splitTextRevealTableProps = [
    { name: 'text', type: 'string', default: '"Hello"' },
    { name: 'duration', type: 'number', default: '1.5' },
    { name: 'stagger', type: 'number', default: '0.05' },
    { name: 'delay', type: 'number', default: '0' },
    { name: 'once', type: 'boolean', default: 'false' },
]

// Editable props for playground
export const splitTextRevealEditableProps = [
    { name: 'text', type: 'string' as const, default: 'ELEGANT' },
    {
        name: 'duration',
        type: 'number' as const,
        default: 1.5,
        min: 0.5,
        max: 5,
        step: 0.1,
        description: 'Animation duration per letter'
    },
    {
        name: 'stagger',
        type: 'number' as const,
        default: 0.05,
        min: 0.01,
        max: 0.5,
        step: 0.01,
        description: 'Delay between each letter'
    },
    {
        name: 'delay',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 3,
        step: 0.1,
        description: 'Initial delay before animation starts'
    },
    {
        name: 'once',
        type: 'boolean' as const,
        default: false,
        description: 'Run animation only once'
    }
]

export const splitTextRevealDependencies = ["framer-motion"]

export const splitTextRevealUsageCode = `<SplitTextReveal
  text="ELEGANT"
  duration={1.5}
  stagger={0.05}
  className="text-4xl font-bold"
/>`

// Small preview for grid
export const splitTextRevealPreview = () => (
    <SplitTextReveal
        text="ELEGANT"
        className="text-4xl font-black font-sans text-white tracking-tighter"
        delay={0.2}
    />
)

// Large interactive preview
export const splitTextRevealDynamicPreview = (props: any) => (
    <SplitTextReveal
        key={props.once ? 'once-true' : 'once-false'}
        text={props.text || "ELEGANT"}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black font-sans text-white tracking-tighter uppercase"
        duration={props.duration || 1.5}
        delay={props.delay || 0.2}
        stagger={props.stagger || 0.05}
        once={props.once}
    />
)

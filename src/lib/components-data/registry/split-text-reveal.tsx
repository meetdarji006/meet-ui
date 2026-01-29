"use client"

import { SplitTextReveal } from "@/components/ui/split-text-reveal"

export const splitTextRevealMeta = {
    name: 'Split Text Reveal',
    slug: 'split-text-reveal',
    category: 'ui' as const,
    description: 'Elegant text animation where characters slide in from alternating diagonal directions.',
    tags: ['motion', 'text', 'reveal'],
}

// Small preview for grid
export const splitTextRevealPreview = () => (
    <SplitTextReveal
        text="ELEGANT"
        className="text-4xl font-bold font-sans text-white tracking-tighter"
        delay={0.2}
    />
)

// Large interactive preview
export const splitTextRevealDynamicPreview = (props: any) => (
    <SplitTextReveal
        key={props.once ? 'once-true' : 'once-false'}
        text={props.text || "ELEGANT"}
        className="text-3xl md:text-6xl font-black font-sans text-white tracking-tighter uppercase"
        duration={props.duration || 1.5}
        delay={props.delay || 0.2}
        stagger={props.stagger || 0.05}
        once={props.once}
    />
)

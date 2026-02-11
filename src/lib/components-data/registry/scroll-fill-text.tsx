"use client"

import { ScrollFillText } from "@/components/ui/scroll-fill-text"

export const scrollFillTextMeta = {
    name: 'Scroll Fill Text',
    slug: 'scroll-fill-text',
    category: 'ui' as const,
    description: 'Text that fills with color as you scroll, revealing content progressively character by character.',
    tags: ['scroll', 'text', 'reveal', 'fill'],
}

// Props for documentation table
export const scrollFillTextTableProps = [
    { name: 'text', type: 'string', default: '"Your text here"' },
    { name: 'fillColor', type: 'string', default: '"#ffffff"' },
    { name: 'emptyColor', type: 'string', default: '"#2f2f2f"' },
    { name: 'start', type: 'number', default: '0.8' },
    { name: 'end', type: 'number', default: '0.2' },
    { name: 'easing', type: 'string', default: '"easeOut"' },
    { name: 'stagger', type: 'number', default: '0' },
]

// Editable props for playground
export const scrollFillTextEditableProps = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'MeetUI - A Open Source Treasure',
        description: 'Text to reveal on scroll'
    },
    {
        name: 'fillColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Color of filled/revealed text'
    },
    {
        name: 'emptyColor',
        type: 'string' as const,
        default: '#2f2f2f',
        description: 'Color of unfilled text'
    },
    {
        name: 'start',
        type: 'number' as const,
        default: 0.8,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Viewport position to start (0 = top, 1 = bottom)'
    },
    {
        name: 'end',
        type: 'number' as const,
        default: 0.2,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Viewport position to end (0 = top, 1 = bottom)'
    },
    {
        name: 'easing',
        type: 'select' as const,
        default: 'easeOut',
        options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'smooth'],
        description: 'Easing function for the fill animation'
    },
    {
        name: 'stagger',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 0.9,
        step: 0.1,
        description: 'Character overlap (0 = sequential, higher = more overlap)'
    },
]

export const scrollFillTextDependencies = ["framer-motion"]

export const scrollFillTextUsageCode = `<ScrollFillText
  text="MeetUI - A Open Source Treasure"
  fillColor="#ffffff"
  emptyColor="#2f2f2f"
  start={0.8}
  end={0.2}
  easing="easeOut"
  stagger={0}
  className="text-4xl md:text-5xl font-heading font-black tracking-tight"
/>`

// Small preview for grid (static version)
export const scrollFillTextPreview = () => (
    <div className="text-center">
        <span className="text-4xl font-heading font-black tracking-tight">
            <span style={{ color: '#ffffff' }}>SCROLL</span>
            <span style={{ color: '#2f2f2f' }}> FILL</span>
        </span>
    </div>
)

// Large interactive preview
export const scrollFillTextDynamicPreview = (props: any) => (
    <ScrollFillText
        text={props.text || "MeetUI - A Open Source Treasure"}
        fillColor={props.fillColor || "#ffffff"}
        emptyColor={props.emptyColor || "#2f2f2f"}
        start={props.start ?? 0.8}
        end={props.end ?? 0.2}
        easing={props.easing || "easeOut"}
        stagger={props.stagger ?? 0}
        className="text-4xl md:text-5xl font-heading font-black tracking-tight text-center max-w-4xl px-4 sm:px-6 md:px-8"
    />
)

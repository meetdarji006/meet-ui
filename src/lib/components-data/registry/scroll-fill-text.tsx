"use client"

import { ScrollFillText } from "@/components/ui/scroll-fill-text"
import { PropConfig, ComponentEntry } from "./index";

export const scrollFillTextMeta = {
    name: 'Scroll Fill Text',
    slug: 'scroll-fill-text',
    category: 'ui' as const,
    description: 'Text that fills with color as you scroll, revealing content progressively character by character.',
    tags: ['scroll', 'text', 'reveal', 'fill'],
}

// Props for documentation table
// Editable props for playground
export const scrollFillTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const scrollFillTextUsageCode = `<ScrollFillText
  text="MeetUI - A Open Source Treasure"
  fillColor="#ffffff"
  emptyColor="#2f2f2f"
  start={0.8}
  end={0.2}
  easing="easeOut"
  stagger={0}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`

// Small preview for grid (static version)
// Large interactive preview
export const scrollFillTextPreview = (props: any) => (
    <ScrollFillText
        text={props.text || "MeetUI - A Open Source Treasure"}
        fillColor={props.fillColor || "#ffffff"}
        emptyColor={props.emptyColor || "#2f2f2f"}
        start={props.start ?? 0.8}
        end={props.end ?? 0.2}
        easing={props.easing || "easeOut"}
        stagger={props.stagger ?? 0}
        className="text-2xl md:text-5xl font-heading font-black tracking-tight text-center max-w-4xl px-4 sm:px-6 md:px-8"
    />
)
export const scrollFillTextProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'text',
        type: 'string',
        default: 'MeetUI - Scroll To Fill Text',
        description: 'Text to reveal on scroll'
    },
    {
        isEditable: true,
        name: 'fillColor',
        type: 'string',
        default: '#ffffff',
        description: 'Color of filled/revealed text'
    },
    {
        isEditable: true,
        name: 'emptyColor',
        type: 'string',
        default: '#2f2f2f',
        description: 'Color of unfilled text'
    },
    {
        isEditable: true,
        name: 'start',
        type: 'number',
        default: 0.8,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Viewport position to start (0 = top, 1 = bottom)'
    },
    {
        isEditable: true,
        name: 'end',
        type: 'number',
        default: 0.2,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Viewport position to end (0 = top, 1 = bottom)'
    },
    {
        isEditable: true,
        name: 'easing',
        type: 'select',
        default: 'easeOut',
        options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'smooth'],
        description: 'Easing function for the fill animation'
    },
    {
        isEditable: true,
        name: 'stagger',
        type: 'number',
        default: 0,
        min: 0,
        max: 0.9,
        step: 0.1,
        description: 'Character overlap (0 = sequential, higher = more overlap)'
    }
];
export const scrollFillTextRegistry: ComponentEntry = {
    ...scrollFillTextMeta,
    preview: scrollFillTextPreview,
    props: scrollFillTextProps,
    dependencies: scrollFillTextDependencies,
    usageCode: scrollFillTextUsageCode,
};

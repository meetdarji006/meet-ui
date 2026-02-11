"use client"

import { RubberBandText } from "@/components/ui/rubber-band-text"

export const rubberBandTextMeta = {
    name: 'Rubber Band Text',
    slug: 'rubber-band-text',
    category: 'ui' as const,
    description: 'Interactive text where letters stretch and bounce like a rubber band on hover. Fun and playful.',
    tags: ['text', 'interaction', 'hover', 'bounce'],
}

export const rubberBandTextTableProps = [
    { name: 'text', type: 'string', default: '"Hover Me"' },
    { name: 'textColor', type: 'string', default: '"#ffffff"' },
    { name: 'hoverColor', type: 'string', default: '"#667eea"' },
    { name: 'duration', type: 'number', default: '0.8' },
]

export const rubberBandTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Hover Me', description: 'Text to display' },
    { name: 'textColor', type: 'string' as const, default: '#ffffff', description: 'Base text color (Hex or Tailwind)' },
    { name: 'hoverColor', type: 'string' as const, default: '#667eea', description: 'Hover color (Hex or Tailwind)' },
    { name: 'duration', type: 'number' as const, default: 0.8, min: 0.1, max: 2, step: 0.1, description: 'Animation duration (s)' },
]

export const rubberBandTextDependencies = ["framer-motion"]

export const rubberBandTextUsageCode = `<RubberBandText
  text="Hover Me"
  textColor="#ffffff"
  hoverColor="#667eea"
  duration={0.8}
  className="text-4xl md:text-5xl font-heading font-black tracking-tight"
/>`

export const rubberBandTextPreview = () => (
    <RubberBandText
        text="Hover Me"
        className="text-4xl font-heading font-black tracking-tight"
    />
)

export const rubberBandTextDynamicPreview = (props: any) => (
    <RubberBandText
        key={props.text + props.hoverColor + props.textColor + props.duration}
        text={props.text || "Rubber Band"}
        hoverColor={props.hoverColor}
        textColor={props.textColor}
        duration={props.duration}
        className="text-4xl md:text-5xl font-heading font-black tracking-tight"
    />
)

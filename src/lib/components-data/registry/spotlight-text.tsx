"use client"

import { SpotlightText } from "@/components/ui/spotlight-text"

export const spotlightTextMeta = {
    name: 'Spotlight Text',
    slug: 'spotlight-text',
    category: 'ui' as const,
    description: 'Interactive text that is revealed by a moving spotlight cone on hover. Creates a mystery/dark mode effect.',
    tags: ['text', 'spotlight', 'hover', 'interaction'],
}

export const spotlightTextTableProps = [
    { name: 'text', type: 'string', default: '"Hover Me"' },
    { name: 'spotlightSize', type: 'number', default: '100' },
    { name: 'litColor', type: 'string', default: '"#ffffff"' },
    { name: 'dimColor', type: 'string', default: '"rgba(255, 255, 255, 0.2)"' },
]

export const spotlightTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Hover Me', description: 'Text to display' },
    { name: 'spotlightSize', type: 'number' as const, default: 100, min: 50, max: 300, step: 10, description: 'Size of spotlight px' },
    { name: 'litColor', type: 'string' as const, default: '#ffffff', description: 'Tailwind class or Hex color' },
    { name: 'dimColor', type: 'string' as const, default: 'rgba(255, 255, 255, 0.2)', description: 'Tailwind class or Hex color' },
]

export const spotlightTextDependencies = ["framer-motion"]

export const spotlightTextUsageCode = `<SpotlightText
  text="Reveal Me"
  spotlightSize={100}
  litColor="#ffffff"
  dimColor="rgba(255, 255, 255, 0.2)"
  className="text-4xl md:text-5xl font-heading font-black tracking-tight"
/>`

export const spotlightTextPreview = () => (
    <SpotlightText
        text="Reveal Me"
        className="text-4xl font-heading font-black tracking-tight"
    />
)

export const spotlightTextDynamicPreview = (props: any) => (
    <SpotlightText
        key={props.text + props.litColor + props.dimColor}
        text={props.text || "Reveal Me"}
        spotlightSize={props.spotlightSize ?? 100}
        litColor={props.litColor}
        dimColor={props.dimColor}
        className="text-4xl md:text-5xl font-heading font-black tracking-tight"
    />
)

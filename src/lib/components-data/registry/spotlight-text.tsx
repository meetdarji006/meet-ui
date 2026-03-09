"use client"

import { SpotlightText } from "@/components/ui/spotlight-text"
import { PropConfig, ComponentEntry } from "./index";

export const spotlightTextMeta = {
    name: 'Spotlight Text',
    slug: 'spotlight-text',
    category: 'ui' as const,
    description: 'Interactive text that is revealed by a moving spotlight cone on hover. Creates a mystery/dark mode effect.',
    tags: ['text', 'spotlight', 'hover', 'interaction'],
}
export const spotlightTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const spotlightTextUsageCode = `<SpotlightText
  text="Reveal Me"
  spotlightSize={100}
  litColor="#ffffff"
  dimColor="rgba(255, 255, 255, 0.2)"
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const spotlightTextPreview = (props: any) => (
    <SpotlightText
        key={props.text + props.litColor + props.dimColor}
        text={props.text || "Reveal Me"}
        spotlightSize={props.spotlightSize ?? 100}
        litColor={props.litColor}
        dimColor={props.dimColor}
        className="text-2xl md:text-5xl font-heading font-black tracking-tight"
    />
)
export const spotlightTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Hover Me', description: 'Text to display' },
    { isEditable: true, name: 'spotlightSize', type: 'number', default: 100, min: 50, max: 300, step: 10, description: 'Size of spotlight px' },
    { isEditable: true, name: 'litColor', type: 'string', default: '#ffffff', description: 'Tailwind class or Hex color' },
    { isEditable: true, name: 'dimColor', type: 'string', default: 'rgba(255, 255, 255, 0.2)', description: 'Tailwind class or Hex color' }
];
export const spotlightTextRegistry: ComponentEntry = {
    ...spotlightTextMeta,
    preview: spotlightTextPreview,
    props: spotlightTextProps,
    dependencies: spotlightTextDependencies,
    usageCode: spotlightTextUsageCode,
};

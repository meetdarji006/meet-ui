"use client"

import { RubberBandText } from "@/components/ui/rubber-band-text"
import { PropConfig, ComponentEntry } from "./index";

export const rubberBandTextMeta = {
    name: 'Rubber Band Text',
    slug: 'rubber-band-text',
    category: 'ui' as const,
    description: 'Interactive text where letters stretch and bounce like a rubber band on hover. Fun and playful.',
    tags: ['text', 'interaction', 'hover', 'bounce'],
}
export const rubberBandTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const rubberBandTextUsageCode = `<RubberBandText
  text="Hover Me"
  textColor="#ffffff"
  hoverColor="#667eea"
  duration={0.8}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const rubberBandTextPreview = (props: any) => (
    <RubberBandText
        key={props.text + props.hoverColor + props.textColor + props.duration}
        text={props.text || "Rubber Band"}
        hoverColor={props.hoverColor}
        textColor={props.textColor}
        duration={props.duration}
        className="text-2xl md:text-5xl font-heading font-black tracking-tight"
    />
)
export const rubberBandTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Hover Me', description: 'Text to display' },
    { isEditable: true, name: 'textColor', type: 'string', default: '#ffffff', description: 'Base text color (Hex or Tailwind)' },
    { isEditable: true, name: 'hoverColor', type: 'string', default: '#667eea', description: 'Hover color (Hex or Tailwind)' },
    { isEditable: true, name: 'duration', type: 'number', default: 0.8, min: 0.1, max: 2, step: 0.1, description: 'Animation duration (s)' }
];
export const rubberBandTextRegistry: ComponentEntry = {
    ...rubberBandTextMeta,
    preview: rubberBandTextPreview,
    props: rubberBandTextProps,
    dependencies: rubberBandTextDependencies,
    usageCode: rubberBandTextUsageCode,
};

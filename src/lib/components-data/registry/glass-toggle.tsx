"use client"

import { GlassToggle } from "@/components/ui/glass-toggle"
import { Moon, Sun, User } from "lucide-react"
import { PropConfig, ComponentEntry } from "./index";

export const glassToggleMeta = {
    name: 'Glass Toggle',
    slug: 'glass-toggle',
    category: 'ui' as const,
    description: 'A premium photorealistic glassmorphism toggle switch with 3D effects and dynamic sizing.',
    tags: ['toggle', 'switch', 'glassmorphism', 'ui', 'animated'],
}
export const glassToggleDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const glassToggleUsageCode = `<GlassToggle
  width={300}
  height={100}
  orbSize={100}
  easing="anticipate"
  colors={{
  trackOn: "linear-gradient(90deg, #ffd700 0%, #ffcc00 100%)",
  trackOff: "linear-gradient(90deg, #4b0082 0%, #0000ff 100%)"
  }}
/>`
export const glassTogglePreview = (props: any) => {
    // Handle nested properties from flattened playground props
    const componentProps = { ...props };

    // Labels
    if (props['labels.on'] || props['labels.off']) {
        componentProps.labels = {
            on: props['labels.on'] || 'Work',
            off: props['labels.off'] || 'Sleep'
        };
        delete componentProps['labels.on'];
        delete componentProps['labels.off'];
    }

    // Colors
    const colorKeys = ['trackOn', 'trackOff', 'orbOn', 'orbOff', 'textOn', 'textOff']
    const hasColors = colorKeys.some(k => props[`colors.${k}`])

    if (hasColors) {
        componentProps.colors = { ...props.colors }; // Preserves existing struct if any
        colorKeys.forEach(k => {
            if (props[`colors.${k}`]) {
                componentProps.colors = componentProps.colors || {};
                componentProps.colors[k] = props[`colors.${k}`];
                delete componentProps[`colors.${k}`];
            }
        });
    }

    return (
        <GlassToggle {...componentProps} />
    )
}
export const glassToggleProps: PropConfig[] = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'The controlled checked state' },
    {
        isEditable: true,
        name: 'width',
        type: 'number',
        default: 300,
        min: 200,
        max: 600,
        step: 10,
        description: 'Total Width'
    },
    {
        isEditable: true,
        name: 'height',
        type: 'number',
        default: 100,
        min: 60,
        max: 200,
        step: 5,
        description: 'Total Height'
    },
    {
        isEditable: true,
        name: 'orbSize',
        type: 'number',
        default: 100, // Matched user request "little small" -> 100px
        min: 40,
        max: 180,
        step: 5,
        description: 'Orb Diameter'
    },
    { name: 'colors', type: 'object', default: '-', description: 'Custom gradients for track and orb' },
    {
        isEditable: true,
        name: 'easing',
        type: 'select',
        options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'circInOut', 'backIn', 'backOut', 'backInOut', 'anticipate', 'bouncy'],
        default: 'bouncy',
        description: 'Animation Easing'
    },
    {
        isEditable: true,
        name: 'showText',
        type: 'boolean',
        default: true,
        description: 'Show Text Labels'
    },
    {
        isEditable: true,
        name: 'disabled',
        type: 'boolean',
        default: false,
        description: 'Disable interaction'
    },
    {
        isEditable: true,
        name: 'labels.on',
        type: 'string',
        default: 'Work',
        description: 'Label ON'
    },
    {
        isEditable: true,
        name: 'labels.off',
        type: 'string',
        default: 'Sleep',
        description: 'Label OFF'
    },
    {
        isEditable: true,
        name: 'colors.trackOn',
        type: 'string',
        default: 'linear-gradient(90deg, rgba(255, 220, 100, 0.1), rgba(255, 200, 0, 0.3))',
        description: 'Track Gradient ON'
    },
    {
        isEditable: true,
        name: 'colors.trackOff',
        type: 'string',
        default: 'linear-gradient(90deg, rgba(20, 20, 60, 0.7), rgba(80, 40, 200, 0.5))',
        description: 'Track Gradient OFF'
    },
    {
        isEditable: true,
        name: 'colors.orbOn',
        type: 'string',
        default: 'radial-gradient(circle at 35% 35%, rgba(255,220,0,0.8) 0%, rgba(255,180,0,0.2) 50%, transparent 100%)',
        description: 'Orb Gradient ON'
    },
    {
        isEditable: true,
        name: 'colors.orbOff',
        type: 'string',
        default: 'radial-gradient(circle at 65% 35%, rgba(60,60,200,0.9) 0%, rgba(30,30,150,0.2) 50%, transparent 100%)',
        description: 'Orb Gradient OFF'
    },
    {
        isEditable: true,
        name: 'colors.textOn',
        type: 'string',
        default: '#ffffff',
        description: 'Text Color ON'
    },
    {
        isEditable: true,
        name: 'colors.textOff',
        type: 'string',
        default: '#ffffff',
        description: 'Text Color OFF'
    }
];
export const glassToggleRegistry: ComponentEntry = {
    ...glassToggleMeta,
    preview: glassTogglePreview,
    props: glassToggleProps,
    dependencies: glassToggleDependencies,
    usageCode: glassToggleUsageCode,
};

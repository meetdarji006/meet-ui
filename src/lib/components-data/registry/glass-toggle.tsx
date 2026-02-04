"use client"

import { GlassToggle } from "@/components/ui/glass-toggle"
import { glassToggleCodeTS, glassToggleCodeJS } from "@/lib/components-data/codes"
import { Moon, Sun, User } from "lucide-react"

export const glassToggleMeta = {
    name: 'Glass Toggle',
    slug: 'glass-toggle',
    category: 'ui' as const,
    description: 'A premium photorealistic glassmorphism toggle switch with 3D effects and dynamic sizing.',
    tags: ['toggle', 'switch', 'glassmorphism', 'ui', 'animated'],
}

export const glassToggleTableProps = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'The controlled checked state' },
    { name: 'width', type: 'number', default: '300', description: 'Component width in pixels' },
    { name: 'height', type: 'number', default: '100', description: 'Component height in pixels' },
    { name: 'orbSize', type: 'number', default: '100', description: 'Orb diameter in pixels' },
    { name: 'colors', type: 'object', default: '-', description: 'Custom gradients for track and orb' },
    { name: 'easing', type: 'string', default: 'anticipate', description: 'Transition easing name' },
    { name: 'showText', type: 'boolean', default: 'true', description: 'Show or hide text labels' },
]

export const glassToggleEditableProps = [
    {
        name: 'disabled',
        type: 'boolean' as const,
        default: false,
        description: 'Disable interaction'
    },
    {
        name: 'showText',
        type: 'boolean' as const,
        default: true,
        description: 'Show Text Labels'
    },
    {
        name: 'width',
        type: 'number' as const,
        default: 300,
        min: 200,
        max: 600,
        step: 10,
        description: 'Total Width'
    },
    {
        name: 'height',
        type: 'number' as const,
        default: 100,
        min: 60,
        max: 200,
        step: 5,
        description: 'Total Height'
    },
    {
        name: 'orbSize',
        type: 'number' as const,
        default: 100, // Matched user request "little small" -> 100px
        min: 40,
        max: 180,
        step: 5,
        description: 'Orb Diameter'
    },
    {
        name: 'easing',
        type: 'select' as const,
        options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'circInOut', 'backIn', 'backOut', 'backInOut', 'anticipate', 'bouncy'],
        default: 'bouncy',
        description: 'Animation Easing'
    },
    {
        name: 'labels.on',
        type: 'string' as const,
        default: 'Work',
        description: 'Label ON'
    },
    {
        name: 'labels.off',
        type: 'string' as const,
        default: 'Sleep',
        description: 'Label OFF'
    },
    {
        name: 'colors.trackOn',
        type: 'string' as const,
        default: 'linear-gradient(90deg, rgba(255, 220, 100, 0.1), rgba(255, 200, 0, 0.3))',
        description: 'Track Gradient ON'
    },
    {
        name: 'colors.trackOff',
        type: 'string' as const,
        default: 'linear-gradient(90deg, rgba(20, 20, 60, 0.7), rgba(80, 40, 200, 0.5))',
        description: 'Track Gradient OFF'
    },
    {
        name: 'colors.orbOn',
        type: 'string' as const,
        default: 'radial-gradient(circle at 35% 35%, rgba(255,220,0,0.8) 0%, rgba(255,180,0,0.2) 50%, transparent 100%)',
        description: 'Orb Gradient ON'
    },
    {
        name: 'colors.orbOff',
        type: 'string' as const,
        default: 'radial-gradient(circle at 65% 35%, rgba(60,60,200,0.9) 0%, rgba(30,30,150,0.2) 50%, transparent 100%)',
        description: 'Orb Gradient OFF'
    },
    {
        name: 'colors.textOn',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Text Color ON'
    },
    {
        name: 'colors.textOff',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Text Color OFF'
    },
]

export const glassToggleDependencies = ['framer-motion', 'lucide-react']

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

export const glassTogglePreview = () => (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-zinc-950 border border-muted/20 rounded-xl overflow-hidden p-10">
        <GlassToggle />
    </div>
)

export const glassToggleDynamicPreview = (props: any) => {
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

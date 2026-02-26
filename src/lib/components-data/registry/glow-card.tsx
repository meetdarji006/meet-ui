import { GlowCard } from "@/components/ui/glow-card"
import { PropConfig } from './index'

export const glowCardMeta = {
    name: 'Glow Card',
    slug: 'glow-card',
    category: 'ui' as const,
    description: 'A premium dark stats card with a spinning conic halo, orbiting dot, gradient border, light ray, and grid lines.',
    tags: ['card', 'glow', 'stats', 'animation', 'dark', 'gradient'],
}

export const glowCardPreview = () => (
    <div className="w-full flex items-center justify-center py-16">
        <GlowCard />
    </div>
)

export const glowCardDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <GlowCard
            value={props.value}
            label={props.label}
            accentColor={props.accentColor}
            bgColor={props.bgColor}
            showRay={props.showRay}
            showGrid={props.showGrid}
            showDot={props.showDot}
        />
    </div>
)

export const glowCardTableProps: PropConfig[] = [
    { name: 'value', type: 'string', default: '750k', description: 'Main stat value' },
    { name: 'label', type: 'string', default: 'Views', description: 'Label below the value' },
    { name: 'accentColor', type: 'string', default: '#a78bfa', description: 'Accent color for glow, border, and text' },
    { name: 'bgColor', type: 'string', default: '#09090b', description: 'Card background color' },
    { name: 'showRay', type: 'boolean', default: 'true', description: 'Show corner light ray' },
    { name: 'showGrid', type: 'boolean', default: 'true', description: 'Show grid crosshair lines' },
    { name: 'showDot', type: 'boolean', default: 'true', description: 'Show orbiting dot' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const glowCardEditableProps: PropConfig[] = [
    {
        name: 'value',
        type: 'string' as const,
        default: '750k',
        description: 'Value',
    },
    {
        name: 'label',
        type: 'string' as const,
        default: 'Views',
        description: 'Label',
    },
    {
        name: 'accentColor',
        type: 'string' as const,
        default: '#a78bfa',
        description: 'Accent Color',
    },
    {
        name: 'bgColor',
        type: 'string' as const,
        default: '#09090b',
        description: 'Background',
    },
    {
        name: 'showRay',
        type: 'boolean' as const,
        default: true,
        description: 'Show Ray',
    },
    {
        name: 'showGrid',
        type: 'boolean' as const,
        default: true,
        description: 'Show Grid',
    },
    {
        name: 'showDot',
        type: 'boolean' as const,
        default: true,
        description: 'Show Dot',
    },
]

export const glowCardDependencies: string[] = []

export const glowCardUsageCode = `import { GlowCard } from '@/components/ui/glow-card'

export default function MyComponent() {
  return (
    <GlowCard
      value="750k"
      label="Views"
      accentColor="#a78bfa"
      showRay={true}
      showGrid={true}
      showDot={true}
    />
  )
}`

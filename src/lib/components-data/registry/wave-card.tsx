import React from "react"
import { WaveCard } from "@/components/ui/wave-card"
import { PropConfig } from './index'

/* ── Sample icons for playground ── */
const CodeIcon = ({ size = 48 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
)
const MusicIcon = ({ size = 48 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
)
const RocketIcon = ({ size = 48 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
)
const HeartIcon = ({ size = 48 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
)

const iconMap: Record<string, (props: { size?: number }) => React.ReactElement> = {
    default: () => <></>,
    code: CodeIcon,
    music: MusicIcon,
    rocket: RocketIcon,
    heart: HeartIcon,
}

export const waveCardMeta = {
    name: 'Wave Card',
    slug: 'wave-card',
    category: 'ui' as const,
    description: 'A profile card with rotating gradient wave blobs creating a liquid animation effect.',
    tags: ['card', 'wave', 'gradient', 'animation', 'profile'],
}

export const waveCardPreview = () => (
    <div className="w-full flex items-center justify-center py-16">
        <WaveCard />
    </div>
)

export const waveCardDynamicPreview = (props: any) => {
    const IconComponent = props.iconPreset && props.iconPreset !== 'default'
        ? iconMap[props.iconPreset]
        : undefined

    return (
        <div className="w-full flex items-center justify-center py-16">
            <WaveCard
                title={props.title}
                subtitle={props.subtitle}
                gradient={props.gradient}
                iconSize={props.iconSize}
                speed={props.speed}
                icon={IconComponent ? <IconComponent size={props.iconSize} /> : undefined}
            />
        </div>
    )
}

export const waveCardTableProps: PropConfig[] = [
    { name: 'title', type: 'string', default: 'UI / UX Designer', description: 'Main title text' },
    { name: 'subtitle', type: 'string', default: 'MikeAndrewDesigner', description: 'Subtitle text' },
    { name: 'gradient', type: 'string', default: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)', description: 'Wave gradient CSS' },
    { name: 'icon', type: 'string', default: 'DefaultIcon', description: 'Custom icon element (React node)' },
    { name: 'iconSize', type: 'number', default: '48', description: 'Icon size in px' },
    { name: 'speed', type: 'number', default: '3', description: 'Wave rotation speed in seconds' },
    { name: 'titleClass', type: 'string', default: '""', description: 'Additional CSS classes for title' },
    { name: 'subtitleClass', type: 'string', default: '""', description: 'Additional CSS classes for subtitle' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const waveCardEditableProps: PropConfig[] = [
    {
        name: 'title',
        type: 'string' as const,
        default: 'UI / UX Designer',
        description: 'Title',
    },
    {
        name: 'subtitle',
        type: 'string' as const,
        default: 'MikeAndrewDesigner',
        description: 'Subtitle',
    },
    {
        name: 'gradient',
        type: 'string' as const,
        default: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)',
        description: 'Wave Gradient',
    },
    {
        name: 'iconPreset',
        type: 'select' as const,
        default: 'default',
        options: ['default', 'code', 'music', 'rocket', 'heart'],
        description: 'Icon Preset',
    },
    {
        name: 'iconSize',
        type: 'number' as const,
        default: 48,
        min: 24,
        max: 80,
        step: 4,
        description: 'Icon Size',
    },
    {
        name: 'speed',
        type: 'number' as const,
        default: 3,
        min: 1,
        max: 10,
        step: 1,
        description: 'Speed (seconds)',
    },
]

export const waveCardDependencies: string[] = []

export const waveCardUsageCode = `import { WaveCard } from '@/components/ui/wave-card'

export default function MyComponent() {
  return (
    <WaveCard
      title="UI / UX Designer"
      subtitle="MikeAndrewDesigner"
      gradient="linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)"
      icon={<MyCustomIcon />}
      iconSize={48}
    />
  )
}`

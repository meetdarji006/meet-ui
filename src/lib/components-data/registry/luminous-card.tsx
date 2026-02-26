import { LuminousCard } from "@/components/ui/luminous-card"
import { PropConfig } from './index'

export const luminousCardMeta = {
    name: 'Luminous Card',
    slug: 'luminous-card',
    category: 'ui' as const,
    description: 'A card with a luminous light slit, volumetric rays, depth shadows, and a corner frame hover effect.',
    tags: ['card', 'glow', 'light', 'luminous', '3d', 'animation'],
}

export const luminousCardPreview = () => (
    <div className="w-full flex items-center justify-center py-16">
        <LuminousCard />
    </div>
)

export const luminousCardDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <LuminousCard
            title={props.title}
            description={props.description}
            accentColor={props.accentColor}
            bgColor={props.bgColor}
            intensity={props.intensity}
            showFrame={props.showFrame}
            showIcon={props.showIcon}
        />
    </div>
)

export const luminousCardTableProps: PropConfig[] = [
    { name: 'title', type: 'string', default: 'Luminous Design', description: 'Card title' },
    { name: 'description', type: 'string', default: 'Light Folds Around Form...', description: 'Card description' },
    { name: 'icon', type: 'string', default: 'DefaultIcon', description: 'Custom icon (React node)' },
    { name: 'accentColor', type: 'string', default: '#a78bfa', description: 'Accent color for glow and light' },
    { name: 'bgColor', type: 'string', default: '#1a1028', description: 'Card background color' },
    { name: 'intensity', type: 'number', default: '0.7', description: 'Light intensity (0-1)' },
    { name: 'showFrame', type: 'boolean', default: 'true', description: 'Show corner bracket frame' },
    { name: 'showIcon', type: 'boolean', default: 'true', description: 'Show icon' },
    { name: 'titleClass', type: 'string', default: '""', description: 'Additional CSS classes for title' },
    { name: 'descriptionClass', type: 'string', default: '""', description: 'Additional CSS classes for description' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const luminousCardEditableProps: PropConfig[] = [
    {
        name: 'title',
        type: 'string' as const,
        default: 'Luminous Design',
        description: 'Title',
    },
    {
        name: 'description',
        type: 'string' as const,
        default: 'Light Folds Around Form\nRevealing Layers Of Depth',
        description: 'Description',
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
        default: '#1a1028',
        description: 'Background',
    },
    {
        name: 'intensity',
        type: 'number' as const,
        default: 0.7,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Intensity',
    },
    {
        name: 'showFrame',
        type: 'boolean' as const,
        default: true,
        description: 'Show Frame',
    },
    {
        name: 'showIcon',
        type: 'boolean' as const,
        default: true,
        description: 'Show Icon',
    },
]

export const luminousCardDependencies: string[] = []

export const luminousCardUsageCode = `import { LuminousCard } from '@/components/ui/luminous-card'

export default function MyComponent() {
  return (
    <LuminousCard
      title="Luminous Design"
      description={"Light Folds Around Form\\nRevealing Layers Of Depth"}
      accentColor="#a78bfa"
      intensity={0.7}
      showFrame={true}
      showIcon={true}
    />
  )
}`

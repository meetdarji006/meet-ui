import { BouncingLoader } from "@/components/ui/bouncing-loader"
import { PropConfig } from './index'

export const bouncingLoaderMeta = {
    name: 'Bouncing Loader',
    slug: 'bouncing-loader',
    category: 'ui' as const,
    description: 'A text loader with staggered bouncing characters that wave up in sequence.',
    tags: ['loader', 'text', 'animation', 'bounce', 'wave', 'ui'],
}

export const bouncingLoaderPreview = () => (
    <div className="w-full flex items-center justify-center py-16">
        <BouncingLoader />
    </div>
)

export const bouncingLoaderDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <BouncingLoader
            text={props.text}
            color={props.color}
            fontSize={props.fontSize}
            delay={props.delay}
        />
    </div>
)

export const bouncingLoaderTableProps: PropConfig[] = [
    { name: 'text', type: 'string', default: 'Loading', description: 'Text to animate' },
    { name: 'color', type: 'string', default: '#a78bfa', description: 'Text color' },
    { name: 'fontSize', type: 'number', default: '48', description: 'Font size in px' },
    { name: 'delay', type: 'number', default: '70', description: 'Stagger delay per char in ms' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const bouncingLoaderEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'Loading',
        description: 'Text',
    },
    {
        name: 'color',
        type: 'string' as const,
        default: '#a78bfa',
        description: 'Color',
    },
    {
        name: 'fontSize',
        type: 'number' as const,
        default: 48,
        min: 16,
        max: 96,
        step: 4,
        description: 'Font Size',
    },
    {
        name: 'delay',
        type: 'number' as const,
        default: 70,
        min: 20,
        max: 200,
        step: 10,
        description: 'Stagger Delay (ms)',
    },
]

export const bouncingLoaderDependencies: string[] = []

export const bouncingLoaderUsageCode = `import { BouncingLoader } from '@/components/ui/bouncing-loader'

export default function MyComponent() {
  return (
    <BouncingLoader
      text="Loading"
      color="#a78bfa"
      fontSize={48}
      delay={70}
    />
  )
}`

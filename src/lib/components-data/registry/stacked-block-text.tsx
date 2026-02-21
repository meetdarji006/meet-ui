import { StackedText } from '@/components/ui/stacked-block-text'
import { PropConfig } from './index'

export const stackedBlockTextMeta = {
    name: 'Stacked Block Text',
    slug: 'stacked-block-text',
    category: 'text animations',
    description: 'A brutalist text effect that renders cascaded, sliced copies of the text.',
    tags: ['text', 'stacked', 'brutalist', 'typography', 'reveal'],
}

export const stackedBlockTextPreview = () => (
    <div className="flex w-full min-h-[400px] items-center justify-center p-8 overflow-hidden bg-black text-white rounded-xl">
        <StackedText text="Brutalism" />
    </div>
)

export const stackedBlockTextDynamicPreview = (props: any) => (
    <div className="flex w-full min-h-[400px] items-center justify-center p-8 overflow-hidden bg-black text-white rounded-xl">
        <StackedText
            text={props.text ?? "Brutalism"}
            duration={props.duration}
            stagger={props.stagger}
            animationDelay={props.animationDelay}
            className={props.className}
        />
    </div>
)

export const stackedBlockTextTableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string',
        default: 'Brutalism',
        description: 'The text to display',
    },
    {
        name: 'className',
        type: 'string',
        default: '""',
        description: 'Additional CSS classes',
    },
    {
        name: 'animationDelay',
        type: 'number',
        default: '0',
        description: 'Delay before animation starts',
    },
    {
        name: 'duration',
        type: 'number',
        default: '0.8',
        description: 'Duration of the reveal animation (seconds)',
    },
    {
        name: 'stagger',
        type: 'number',
        default: '0.15',
        description: 'Delay between each stacked text layer revealing',
    }
]

export const stackedBlockTextEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string',
        default: 'Brutalism',
        description: 'Text to animate',
    },
    {
        name: 'duration',
        type: 'number',
        default: 0.8,
        description: 'Duration (s)',
        min: 0.1,
        max: 5,
        step: 0.1
    },
    {
        name: 'stagger',
        type: 'number',
        default: 0.15,
        description: 'Stagger (s)',
        min: 0,
        max: 1,
        step: 0.05
    },
    {
        name: 'animationDelay',
        type: 'number',
        default: 0,
        description: 'Delay (s)',
    }
]

export const stackedBlockTextDependencies: string[] = ['framer-motion']

export const stackedBlockTextUsageCode = `import { StackedText } from '@/components/ui/stacked-block-text'

export default function MyComponent() {
  return (
    <div className="bg-black text-white p-12">
      <StackedText text="Brutalism" />
    </div>
  )
}`

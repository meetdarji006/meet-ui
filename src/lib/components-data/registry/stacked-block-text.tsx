import { StackedText } from '@/components/ui/stacked-block-text'
import { PropConfig, ComponentEntry } from './index'

export const stackedBlockTextMeta = {
    name: 'Stacked Block Text',
    slug: 'stacked-block-text',
    category: 'text animations',
    description: 'A brutalist text effect that renders cascaded, sliced copies of the text.',
    tags: ['text', 'stacked', 'brutalist', 'typography', 'reveal'],
}
export const stackedBlockTextPreview = (props: Record<string, any>) => (
    <div className="flex w-full min-h-[400px] items-center justify-center p-8">
        <StackedText
            text={props.text ?? "Greatest"}
            duration={props.duration}
            stagger={props.stagger}
            animationDelay={props.animationDelay}
            className={props.className}
        />
    </div>
)
export const stackedBlockTextDependencies: string[] = ["framer-motion", "clsx", "tailwind-merge"];

export const stackedBlockTextUsageCode = `<div className="bg-black text-white p-12">
  <StackedText text="Brutalism" />
</div>`
export const stackedBlockTextProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'text',
        type: 'string',
        default: 'Greatest',
        description: 'Text to animate',
    },
    {
        name: 'className',
        type: 'string',
        default: '""',
        description: 'Additional CSS classes',
    },
    {
        isEditable: true,
        name: 'animationDelay',
        type: 'number',
        default: 0,
        description: 'Delay (s)',
    },
    {
        isEditable: true,
        name: 'duration',
        type: 'number',
        default: 0.8,
        description: 'Duration (s)',
        min: 0.1,
        max: 5,
        step: 0.1
    },
    {
        isEditable: true,
        name: 'stagger',
        type: 'number',
        default: 0.15,
        description: 'Stagger (s)',
        min: 0,
        max: 1,
        step: 0.05
    }
];
export const stackedBlockTextRegistry: ComponentEntry = {
    ...stackedBlockTextMeta,
    preview: stackedBlockTextPreview,
    props: stackedBlockTextProps,
    dependencies: stackedBlockTextDependencies,
    usageCode: stackedBlockTextUsageCode,
};

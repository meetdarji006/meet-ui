import { BouncingLoader } from "@/components/ui/bouncing-loader"
import { PropConfig, ComponentEntry } from './index'

export const bouncingLoaderMeta = {
    name: 'Bouncing Loader',
    slug: 'bouncing-loader',
    category: 'ui' as const,
    description: 'A text loader with staggered bouncing characters that wave up in sequence.',
    tags: ['loader', 'text', 'animation', 'bounce', 'wave', 'ui'],
}
export const bouncingLoaderPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <BouncingLoader
            text={props.text}
            color={props.color}
            fontSize={props.fontSize}
            delay={props.delay}
        />
    </div>
)
export const bouncingLoaderDependencies: string[] = ["clsx", "tailwind-merge"];

export const bouncingLoaderUsageCode = `<BouncingLoader
  text="Loading"
  color="#a78bfa"
  fontSize={48}
  delay={70}
/>`
export const bouncingLoaderProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'text',
        type: 'string',
        default: 'Loading',
        description: 'Text',
    },
    {
        isEditable: true,
        name: 'color',
        type: 'string',
        default: '#a78bfa',
        description: 'Color',
    },
    {
        isEditable: true,
        name: 'fontSize',
        type: 'number',
        default: 48,
        min: 16,
        max: 96,
        step: 4,
        description: 'Font Size',
    },
    {
        isEditable: true,
        name: 'delay',
        type: 'number',
        default: 70,
        min: 20,
        max: 200,
        step: 10,
        description: 'Stagger Delay (ms)',
    },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
];
export const bouncingLoaderRegistry: ComponentEntry = {
    ...bouncingLoaderMeta,
    preview: bouncingLoaderPreview,
    props: bouncingLoaderProps,
    dependencies: bouncingLoaderDependencies,
    usageCode: bouncingLoaderUsageCode,
};

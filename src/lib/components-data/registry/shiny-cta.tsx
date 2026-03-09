import { ShinyCTA } from '@/components/ui/shiny-cta'
import { PropConfig, ComponentEntry } from './index'

export const shinyCtaMeta = {
    name: 'Shiny Button',
    slug: 'shiny-cta',
    category: 'buttons',
    description: 'A glowing, animated call-to-action button with a shimmering gradient rim.',
    tags: ['button', 'glow', 'css-properties', 'animated', 'cta'],
}
export const shinyCtaPreview = (props: any) => (
    <div className="flex w-full items-center justify-center p-8 min-h-[400px]">
        <ShinyCTA>{props.text ?? "Get unlimited access"}</ShinyCTA>
    </div>
)
export const shinyCtaDependencies: string[] = ["clsx", "tailwind-merge"];

export const shinyCtaUsageCode = `<ShinyCTA>Get unlimited access</ShinyCTA>`
export const shinyCtaProps: PropConfig[] = [
        {
            name: 'children',
            type: 'string',
            default: 'undefined',
            description: 'The content of the button.',
        },
        {
            name: 'className',
            type: 'string',
            default: '""',
            description: 'Additional CSS classes for styling.',
        },
        { isEditable: true, 
            name: 'text',
            type: 'string',
            default: 'Get unlimited access',
            description: 'Text content of the button',
        }
    ];
export const shinyCtaRegistry: ComponentEntry = {
        ...shinyCtaMeta,
        preview: shinyCtaPreview,
        props: shinyCtaProps,
        dependencies: shinyCtaDependencies,
        usageCode: shinyCtaUsageCode,
    };

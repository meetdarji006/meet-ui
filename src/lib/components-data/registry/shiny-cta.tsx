import { ShinyCTA } from '@/components/ui/shiny-cta'
import { ComponentCode, PropConfig } from './index'

export const shinyCtaMeta = {
    name: 'Shiny Button',
    slug: 'shiny-cta',
    category: 'buttons',
    description: 'A glowing, animated call-to-action button with a shimmering gradient rim.',
    tags: ['button', 'glow', 'css-properties', 'animated', 'cta'],
}

export const shinyCtaPreview = () => (
    <div className="flex w-full items-center justify-center p-8 min-h-[400px]">
        <ShinyCTA>Get unlimited access</ShinyCTA>
    </div>
)

export const shinyCtaDynamicPreview = (props: any) => (
    <div className="flex w-full items-center justify-center p-8 min-h-[400px]">
        <ShinyCTA>{props.text ?? "Get unlimited access"}</ShinyCTA>
    </div>
)

export const shinyCtaTableProps: PropConfig[] = [
    {
        name: 'children',
        type: 'React.ReactNode',
        default: 'undefined',
        description: 'The content of the button.',
    },
    {
        name: 'className',
        type: 'string',
        default: '""',
        description: 'Additional CSS classes for styling.',
    }
]

export const shinyCtaEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string',
        default: 'Get unlimited access',
        description: 'Text content of the button',
    }
]

export const shinyCtaDependencies: string[] = []

export const shinyCtaUsageCode = `import { ShinyCTA } from '@/components/ui/shiny-cta'

export default function MyComponent() {
  return (
    <ShinyCTA>Get unlimited access</ShinyCTA>
  )
}`

import { SplashButton } from "@/components/ui/splash-button"
import { PropConfig } from './index'

export const splashButtonMeta = {
    name: 'Splash Button',
    slug: 'splash-button',
    category: 'ui' as const,
    description: 'A premium button with layered depth shadows, SVG splash burst, character-by-character text swap, and animated arrow icon.',
    tags: ['button', 'splash', 'animation', 'hover', 'premium', 'svg'],
}

export const splashButtonPreview = () => (
    <div className="w-full flex items-center justify-center py-20">
        <SplashButton />
    </div>
)

export const splashButtonDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-20">
        <SplashButton
            text={props.text}
            bgColor={props.bgColor}
            accentColor={props.accentColor}
            textColor={props.textColor}
        />
    </div>
)

export const splashButtonTableProps: PropConfig[] = [
    { name: 'text', type: 'string', default: 'Join Today', description: 'Button text' },
    { name: 'bgColor', type: 'string', default: '#7c3aed', description: 'Primary button color' },
    { name: 'accentColor', type: 'string', default: '#a78bfa', description: 'Accent / highlight color' },
    { name: 'textColor', type: 'string', default: '#fff', description: 'Text and icon color' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const splashButtonEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'Join Today',
        description: 'Button Text',
    },
    {
        name: 'bgColor',
        type: 'string' as const,
        default: '#7c3aed',
        description: 'Background',
    },
    {
        name: 'accentColor',
        type: 'string' as const,
        default: '#a78bfa',
        description: 'Accent Color',
    },
    {
        name: 'textColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Text Color',
    },
]

export const splashButtonDependencies: string[] = []

export const splashButtonUsageCode = `import { SplashButton } from '@/components/ui/splash-button'

export default function MyComponent() {
  return (
    <SplashButton
      text="Get Started"
      hoverText="Let's Go"
      bgColor="#7c3aed"
    />
  )
}`

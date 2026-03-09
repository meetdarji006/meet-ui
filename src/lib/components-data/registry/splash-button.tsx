import { SplashButton } from "@/components/ui/splash-button"
import { PropConfig, ComponentEntry } from './index'

export const splashButtonMeta = {
    name: 'Splash Button',
    slug: 'splash-button',
    category: 'ui' as const,
    description: 'A premium button with layered depth shadows, SVG splash burst, character-by-character text swap, and animated arrow icon.',
    tags: ['button', 'splash', 'animation', 'hover', 'premium', 'svg'],
}
export const splashButtonPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-20">
        <SplashButton
            text={props.text}
            bgColor={props.bgColor}
            accentColor={props.accentColor}
            textColor={props.textColor}
        />
    </div>
)
export const splashButtonDependencies: string[] = ["clsx", "tailwind-merge"];

export const splashButtonUsageCode = `<SplashButton
  text="Get Started"
  hoverText="Let's Go"
  bgColor="#7c3aed"
/>`
export const splashButtonProps: PropConfig[] = [
        { isEditable: true, 
            name: 'text',
            type: 'string' ,
            default: 'Join Today',
            description: 'Button Text',
        },
        { isEditable: true, 
            name: 'bgColor',
            type: 'string' ,
            default: '#7c3aed',
            description: 'Background',
        },
        { isEditable: true, 
            name: 'accentColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Accent Color',
        },
        { isEditable: true, 
            name: 'textColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Text Color',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const splashButtonRegistry: ComponentEntry = {
        ...splashButtonMeta,
        preview: splashButtonPreview,
        props: splashButtonProps,
        dependencies: splashButtonDependencies,
        usageCode: splashButtonUsageCode,
    };

import { DrawerButton } from "@/components/ui/drawer-button"
import { PropConfig } from './index'

export const drawerButtonMeta = {
    name: 'Drawer Button',
    slug: 'drawer-button',
    category: 'ui' as const,
    description: 'A button with expanding corner marks, sliding drawer labels, and satisfying press animations.',
    tags: ['button', 'hover', 'animation', 'drawer', 'corners', 'ui'],
}

export const drawerButtonPreview = () => (
    <div className="w-full flex items-center justify-center py-16">
        <DrawerButton />
    </div>
)

export const drawerButtonDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <DrawerButton
            text={props.text}
            drawerTopText={props.drawerTopText}
            drawerBottomText={props.drawerBottomText}
            btnColor={props.btnColor}
            drawerColor={props.drawerColor}
            textColor={props.textColor}
            cornerColor={props.cornerColor}
        />
    </div>
)

export const drawerButtonTableProps: PropConfig[] = [
    { name: 'text', type: 'string', default: 'Get Started', description: 'Button label text' },
    { name: 'drawerTopText', type: 'string', default: 'limited time...', description: 'Top drawer text' },
    { name: 'drawerBottomText', type: 'string', default: '...offer ends soon', description: 'Bottom drawer text' },
    { name: 'btnColor', type: 'string', default: '#7c3aed', description: 'Button background color' },
    { name: 'drawerColor', type: 'string', default: '#a78bfa', description: 'Drawer background color' },
    { name: 'textColor', type: 'string', default: '#ffffff', description: 'Button text color' },
    { name: 'cornerColor', type: 'string', default: 'rgba(255,255,255,0.3)', description: 'Corner mark color' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const drawerButtonEditableProps: PropConfig[] = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'Get Started',
        description: 'Button Text',
    },
    {
        name: 'drawerTopText',
        type: 'string' as const,
        default: 'limited time...',
        description: 'Top Drawer',
    },
    {
        name: 'drawerBottomText',
        type: 'string' as const,
        default: '...offer ends soon',
        description: 'Bottom Drawer',
    },
    {
        name: 'btnColor',
        type: 'string' as const,
        default: '#7c3aed',
        description: 'Button Color',
    },
    {
        name: 'drawerColor',
        type: 'string' as const,
        default: '#a78bfa',
        description: 'Drawer Color',
    },
    {
        name: 'textColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Text Color',
    },
    {
        name: 'cornerColor',
        type: 'string' as const,
        default: 'rgba(255,255,255,0.3)',
        description: 'Corner Color',
    },
]

export const drawerButtonDependencies: string[] = []

export const drawerButtonUsageCode = `import { DrawerButton } from '@/components/ui/drawer-button'

export default function MyComponent() {
  return (
    <DrawerButton
      text="Get Started"
      drawerTopText="limited time..."
      drawerBottomText="...offer ends soon"
      btnColor="#7c3aed"
    />
  )
}`

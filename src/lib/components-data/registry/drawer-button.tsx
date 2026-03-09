import { DrawerButton } from "@/components/ui/drawer-button"
import { PropConfig, ComponentEntry } from './index'

export const drawerButtonMeta = {
    name: 'Drawer Button',
    slug: 'drawer-button',
    category: 'ui' as const,
    description: 'A button with expanding corner marks, sliding drawer labels, and satisfying press animations.',
    tags: ['button', 'hover', 'animation', 'drawer', 'corners', 'ui'],
}
export const drawerButtonPreview = (props: any) => (
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
export const drawerButtonDependencies: string[] = ["clsx", "tailwind-merge"];

export const drawerButtonUsageCode = `<DrawerButton
  text="Get Started"
  drawerTopText="limited time..."
  drawerBottomText="...offer ends soon"
  btnColor="#7c3aed"
/>`
export const drawerButtonProps: PropConfig[] = [
        { isEditable: true, 
            name: 'text',
            type: 'string' ,
            default: 'Get Started',
            description: 'Button Text',
        },
        { isEditable: true, 
            name: 'drawerTopText',
            type: 'string' ,
            default: 'limited time...',
            description: 'Top Drawer',
        },
        { isEditable: true, 
            name: 'drawerBottomText',
            type: 'string' ,
            default: '...offer ends soon',
            description: 'Bottom Drawer',
        },
        { isEditable: true, 
            name: 'btnColor',
            type: 'string' ,
            default: '#7c3aed',
            description: 'Button Color',
        },
        { isEditable: true, 
            name: 'drawerColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Drawer Color',
        },
        { isEditable: true, 
            name: 'textColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Text Color',
        },
        { isEditable: true, 
            name: 'cornerColor',
            type: 'string' ,
            default: 'rgba(255,255,255,0.3)',
            description: 'Corner Color',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const drawerButtonRegistry: ComponentEntry = {
        ...drawerButtonMeta,
        preview: drawerButtonPreview,
        props: drawerButtonProps,
        dependencies: drawerButtonDependencies,
        usageCode: drawerButtonUsageCode,
    };

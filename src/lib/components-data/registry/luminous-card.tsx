import { LuminousCard } from "@/components/ui/luminous-card"
import { PropConfig, ComponentEntry } from './index'

export const luminousCardMeta = {
    name: 'Luminous Card',
    slug: 'luminous-card',
    category: 'ui' as const,
    description: 'A card with a luminous light slit, volumetric rays, depth shadows, and a corner frame hover effect.',
    tags: ['card', 'glow', 'light', 'luminous', '3d', 'animation'],
}
export const luminousCardPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <LuminousCard
            title={props.title}
            description={props.description}
            accentColor={props.accentColor}
            bgColor={props.bgColor}
            intensity={props.intensity}
            showFrame={props.showFrame}
            showIcon={props.showIcon}
        />
    </div>
)
export const luminousCardDependencies: string[] = ["clsx", "tailwind-merge"];

export const luminousCardUsageCode = `<LuminousCard
  title="Luminous Design"
  description={"Light Folds Around Form\\nRevealing Layers Of Depth"}
  accentColor="#a78bfa"
  intensity={0.7}
  showFrame={true}
  showIcon={true}
/>`
export const luminousCardProps: PropConfig[] = [
        { isEditable: true, 
            name: 'title',
            type: 'string' ,
            default: 'Luminous Design',
            description: 'Title',
        },
        { isEditable: true, 
            name: 'description',
            type: 'string' ,
            default: 'Light Folds Around Form\nRevealing Layers Of Depth',
            description: 'Description',
        },
        { name: 'icon', type: 'string', default: 'DefaultIcon', description: 'Custom icon (React node)' },
        { isEditable: true, 
            name: 'accentColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Accent Color',
        },
        { isEditable: true, 
            name: 'bgColor',
            type: 'string' ,
            default: '#1a1028',
            description: 'Background',
        },
        { isEditable: true, 
            name: 'intensity',
            type: 'number' ,
            default: 0.7,
            min: 0,
            max: 1,
            step: 0.1,
            description: 'Intensity',
        },
        { isEditable: true, 
            name: 'showFrame',
            type: 'boolean' ,
            default: true,
            description: 'Show Frame',
        },
        { isEditable: true, 
            name: 'showIcon',
            type: 'boolean' ,
            default: true,
            description: 'Show Icon',
        },
        { name: 'titleClass', type: 'string', default: '""', description: 'Additional CSS classes for title' },
        { name: 'descriptionClass', type: 'string', default: '""', description: 'Additional CSS classes for description' },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const luminousCardRegistry: ComponentEntry = {
        ...luminousCardMeta,
        preview: luminousCardPreview,
        props: luminousCardProps,
        dependencies: luminousCardDependencies,
        usageCode: luminousCardUsageCode,
    };

import { GlowCard } from "@/components/ui/glow-card"
import { PropConfig, ComponentEntry } from './index'

export const glowCardMeta = {
    name: 'Glow Card',
    slug: 'glow-card',
    category: 'ui' as const,
    description: 'A premium dark stats card with a spinning conic halo, orbiting dot, gradient border, light ray, and grid lines.',
    tags: ['card', 'glow', 'stats', 'animation', 'dark', 'gradient'],
}
export const glowCardPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-16">
        <GlowCard
            value={props.value}
            label={props.label}
            accentColor={props.accentColor}
            bgColor={props.bgColor}
            showRay={props.showRay}
            showGrid={props.showGrid}
            showDot={props.showDot}
        />
    </div>
)
export const glowCardDependencies: string[] = ["clsx", "tailwind-merge"];

export const glowCardUsageCode = `<GlowCard
  value="750k"
  label="Views"
  accentColor="#a78bfa"
  showRay={true}
  showGrid={true}
  showDot={true}
/>`
export const glowCardProps: PropConfig[] = [
        { isEditable: true, 
            name: 'value',
            type: 'string' ,
            default: '750k',
            description: 'Value',
        },
        { isEditable: true, 
            name: 'label',
            type: 'string' ,
            default: 'Views',
            description: 'Label',
        },
        { isEditable: true, 
            name: 'accentColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Accent Color',
        },
        { isEditable: true, 
            name: 'bgColor',
            type: 'string' ,
            default: '#09090b',
            description: 'Background',
        },
        { isEditable: true, 
            name: 'showRay',
            type: 'boolean' ,
            default: true,
            description: 'Show Ray',
        },
        { isEditable: true, 
            name: 'showGrid',
            type: 'boolean' ,
            default: true,
            description: 'Show Grid',
        },
        { isEditable: true, 
            name: 'showDot',
            type: 'boolean' ,
            default: true,
            description: 'Show Dot',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const glowCardRegistry: ComponentEntry = {
        ...glowCardMeta,
        preview: glowCardPreview,
        props: glowCardProps,
        dependencies: glowCardDependencies,
        usageCode: glowCardUsageCode,
    };

import { StackedInfoCards } from "@/components/ui/stacked-info-cards"
import { PropConfig, ComponentEntry } from './index'

const SAMPLE_ITEMS = [
    {
        label: "Why MeetUI?",
        title: "Stunning Animations",
        description: "Beautifully crafted motion components powered by Framer Motion. From text reveals to interactive cursors, every component is designed to create memorable user experiences.",
    },
    {
        label: "Why MeetUI?",
        title: "Drop-in Integration",
        description: "Copy, paste, and customize. Each component is self-contained with zero config needed. Works seamlessly with Next.js, React, and Tailwind CSS out of the box.",
    },
    {
        label: "Why MeetUI?",
        title: "Fully Customizable",
        description: "Every prop is exposed for fine-tuned control — colors, speeds, easing, and more. Build your unique design system without fighting the framework.",
    },
]

export const stackedInfoCardsMeta = {
    name: 'Stacked Info Cards',
    slug: 'stacked-info-cards',
    category: 'interaction' as const,
    description: 'A stacked card slider with depth effect, content cards, and navigation arrows.',
    tags: ['card', 'slider', 'stack', 'carousel', 'info', 'interaction'],
}
export const stackedInfoCardsPreview = (props: any) => (
    <div className="w-full max-w-xl mx-auto py-8">
        <StackedInfoCards
            items={SAMPLE_ITEMS}
            cardColor={props.cardColor}
            stackColor={props.stackColor}
            textColor={props.textColor}
            navColor={props.navColor}
            navActiveColor={props.navActiveColor}
            borderRadius={props.borderRadius}
            showDashedLine={props.showDashedLine}
        />
    </div>
)
export const stackedInfoCardsDependencies: string[] = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const stackedInfoCardsUsageCode = `const items = [
{ label: "Why Choose Us?", title: "Feature One", description: "Description..." },
{ label: "Why Choose Us?", title: "Feature Two", description: "Description..." },
]

export default function MyComponent() {
return (
<StackedInfoCards
  items={items}
  cardColor="#F9C74F"
  navActiveColor="#E76F51"
/>
)
}`
export const stackedInfoCardsProps: PropConfig[] = [
        { name: 'items', type: 'string', default: '[]', description: 'Array of { label, title, description }' },
        { isEditable: true, 
            name: 'cardColor',
            type: 'string' ,
            default: '#7c3aed',
            description: 'Card Color',
        },
        { isEditable: true, 
            name: 'stackColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Stack Color',
        },
        { isEditable: true, 
            name: 'textColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Text Color',
        },
        { isEditable: true, 
            name: 'navColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Nav Color',
        },
        { isEditable: true, 
            name: 'navActiveColor',
            type: 'string' ,
            default: '#7c3aed',
            description: 'Nav Active Color',
        },
        { isEditable: true, 
            name: 'borderRadius',
            type: 'number' ,
            default: 20,
            min: 0,
            max: 40,
            step: 2,
            description: 'Border Radius',
        },
        { isEditable: true, 
            name: 'showDashedLine',
            type: 'boolean' ,
            default: true,
            description: 'Dashed Line',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const stackedInfoCardsRegistry: ComponentEntry = {
        ...stackedInfoCardsMeta,
        preview: stackedInfoCardsPreview,
        props: stackedInfoCardsProps,
        dependencies: stackedInfoCardsDependencies,
        usageCode: stackedInfoCardsUsageCode,
    };

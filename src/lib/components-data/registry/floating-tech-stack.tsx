import { FloatingTechStack } from '@/components/ui/floating-tech-stack'
import { PropConfig, ComponentEntry } from './index'

export const floatingTechStackMeta = {
    name: 'Floating Tech Stack',
    slug: 'floating-tech-stack',
    category: 'interaction' as const,
    description: 'An isometric 3D floating animation of a modern tech stack with connected glowing plates, inspired by Turbopack/Vite ecosystem animations.',
    tags: ['hero', 'isometric', '3d', 'floating', 'tech stack', 'animation'],
}
export const floatingTechStackPreview = (props: any) => (
    <FloatingTechStack techStacks={props.techStacks} radius={props.radius} className={props.className} />
)
export const floatingTechStackDependencies: string[] = ["clsx", "tailwind-merge"];

export const floatingTechStackUsageCode = `const myStack: TechStackItem[] = [
{ id: "react", label: ".REACT" },
{ id: "tw", label: ".TW" },
{ id: "ts", label: ".TS" },
{ id: "next", label: ".NEXT" },
{ id: "node", label: ".NODE" },
]

export default function App() {
return (
<FloatingTechStack techStacks={myStack} radius={170} />
)
}`
export const floatingTechStackProps: PropConfig[] = [
        { name: 'techStacks', type: 'string', default: 'defaultTechStacks', description: 'Array of nodes with id and label' },
        { isEditable: true, 
            name: 'radius',
            type: 'number' ,
            default: 170,
            min: 100,
            max: 300,
            step: 10,
            description: 'Orbit Radius',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const floatingTechStackRegistry: ComponentEntry = {
        ...floatingTechStackMeta,
        preview: floatingTechStackPreview,
        props: floatingTechStackProps,
        dependencies: floatingTechStackDependencies,
        usageCode: floatingTechStackUsageCode,
    };

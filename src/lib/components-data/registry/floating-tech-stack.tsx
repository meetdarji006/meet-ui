import { FloatingTechStack } from '@/components/ui/floating-tech-stack'
import { PropConfig } from './index'

export const floatingTechStackMeta = {
    name: 'Floating Tech Stack',
    slug: 'floating-tech-stack',
    category: 'interaction' as const,
    description: 'An isometric 3D floating animation of a modern tech stack with connected glowing plates, inspired by Turbopack/Vite ecosystem animations.',
    tags: ['hero', 'isometric', '3d', 'floating', 'tech stack', 'animation'],
}

export const floatingTechStackPreview = () => (
    <div className="w-full flex items-center justify-center p-8 bg-[#09090b] rounded-lg">
        <FloatingTechStack />
    </div>
)

export const floatingTechStackDynamicPreview = (props: any) => (
    <FloatingTechStack techStacks={props.techStacks} radius={props.radius} className={props.className} />
)

export const floatingTechStackTableProps: PropConfig[] = [
    { name: 'techStacks', type: 'string', default: 'defaultTechStacks', description: 'Array of nodes with id and label' },
    { name: 'radius', type: 'number', default: '170', description: 'The orbit radius for tech stack nodes in px' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const floatingTechStackEditableProps: PropConfig[] = [
    {
        name: 'radius',
        type: 'number' as const,
        default: 170,
        min: 100,
        max: 300,
        step: 10,
        description: 'Orbit Radius',
    },
]

export const floatingTechStackDependencies: string[] = []

export const floatingTechStackUsageCode = `import { FloatingTechStack, TechStackItem } from '@/components/ui/floating-tech-stack'

const myStack: TechStackItem[] = [
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

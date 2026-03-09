import { OrbitEcosystem } from '@/components/ui/orbit-ecosystem'
import { PropConfig, ComponentEntry } from './index'

export const orbitEcosystemMeta = {
    name: 'Orbit Ecosystem',
    slug: 'orbit-ecosystem',
    category: 'components',
    description: 'A dynamic, animated component orbit layout featuring a glowing central core surrounded by concentric dashed circular rings with orbiting icons.',
    tags: ['orbit', 'glow', 'layout', 'framer-motion', 'animated', 'components'],
}
export const orbitEcosystemPreview = (props: any) => (
    <div className="flex w-full items-center justify-center p-8  bg-grid-white/[0.02] relative overflow-hidden">
        <OrbitEcosystem
            radiusInner={props.radiusInner}
            radiusMiddle={props.radiusMiddle}
            radiusOuter={props.radiusOuter}
            durationInner={props.durationInner}
            durationMiddle={props.durationMiddle}
            durationOuter={props.durationOuter}
            reverseMiddle={props.reverseMiddle}
        />
    </div>
)
export const orbitEcosystemDependencies: string[] = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const orbitEcosystemUsageCode = `import { Layers, Box, Sparkles } from 'lucide-react'

const customItems = [
  { icon: Layers, label: 'Layers', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { icon: Box, label: '3D', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { icon: Sparkles, label: 'Effects', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
]

export default function OrbitDemo() {
  return (
    <div className="flex w-full min-h-[600px] items-center justify-center p-8">
      <OrbitEcosystem items={customItems} />
    </div>
  )
}`
export const orbitEcosystemProps: PropConfig[] = [
    {
        name: 'items',
        type: 'string' as any,
        default: 'defaultOrbitItems',
        description: 'Array of configuration items governing the labels and icons pivoting around the core.',
    },
    {
        isEditable: true,
        name: 'radiusInner',
        type: 'number',
        default: 120,
        description: 'Radius of the inner ring in pixels.',
        min: 50,
        max: 300,
        step: 10,
    },
    {
        isEditable: true,
        name: 'radiusMiddle',
        type: 'number',
        default: 200,
        description: 'Radius of the middle ring in pixels.',
        min: 100,
        max: 400,
        step: 10,
    },
    {
        isEditable: true,
        name: 'radiusOuter',
        type: 'number',
        default: 280,
        description: 'Radius of the outer ring in pixels.',
        min: 150,
        max: 500,
        step: 10,
    },
    {
        isEditable: true,
        name: 'durationInner',
        type: 'number',
        default: 30,
        description: 'Animation duration (seconds) for inner ring.',
        min: 5,
        max: 120,
        step: 1,
    },
    {
        isEditable: true,
        name: 'durationMiddle',
        type: 'number',
        default: 45,
        description: 'Animation duration (seconds) for middle ring.',
        min: 5,
        max: 120,
        step: 1,
    },
    {
        isEditable: true,
        name: 'durationOuter',
        type: 'number',
        default: 60,
        description: 'Animation duration (seconds) for outer ring.',
        min: 5,
        max: 120,
        step: 1,
    },
    {
        isEditable: true,
        name: 'reverseMiddle',
        type: 'boolean',
        default: true,
        description: 'Reverse the rotation direction of the middle ring.',
    }
];
export const orbitEcosystemRegistry: ComponentEntry = {
    ...orbitEcosystemMeta,
    preview: orbitEcosystemPreview,
    props: orbitEcosystemProps,
    dependencies: orbitEcosystemDependencies,
    usageCode: orbitEcosystemUsageCode,
};

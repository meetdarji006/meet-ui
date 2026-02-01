"use client"

import { DistortedGlassSphere } from "@/components/ui/distorted-glass-sphere"

export const distortedGlassSphereMeta = {
    name: 'Distorted Glass Sphere',
    slug: 'distorted-glass-sphere',
    category: '3d' as const,
    description: 'An interactive R3F 3D sphere with distorted glass material and environmental reflections.',
    tags: ['3d', 'interactive', 'hero', 'background'],
}

export const distortedGlassSphereTableProps = [
    { name: 'color', type: 'string', default: '"#1a1a1a"' },
    { name: 'distort', type: 'number', default: '0.4' },
    { name: 'speed', type: 'number', default: '2' },
    { name: 'cursorFollow', type: 'boolean', default: 'false' },
    { name: 'roughness', type: 'number', default: '0' },
    { name: 'metalness', type: 'number', default: '1' },
    { name: 'transmission', type: 'number', default: '0' },
    { name: 'ior', type: 'number', default: '1.2' },
    { name: 'thickness', type: 'number', default: '0' },
    { name: 'chromaticAberration', type: 'number', default: '0' },
]

export const distortedGlassSphereEditableProps = [
    {
        name: 'color',
        type: 'string' as const,
        default: '#4f46e5',
        description: 'Color of the sphere material'
    },
    {
        name: 'distort',
        type: 'number' as const,
        default: 0.4,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Amount of vertex distortion'
    },
    {
        name: 'speed',
        type: 'number' as const,
        default: 2,
        min: 0,
        max: 10,
        step: 0.5,
        description: 'Animation speed'
    },
    {
        name: 'roughness',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Material roughness'
    },
    {
        name: 'metalness',
        type: 'number' as const,
        default: 1,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Material metalness'
    },
    {
        name: 'transmission',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 1,
        step: 0.1,
        description: 'Optical transmission (glass effect)'
    },
    {
        name: 'ior',
        type: 'number' as const,
        default: 1.2,
        min: 1,
        max: 2.33,
        step: 0.1,
        description: 'Index of refraction'
    },
    {
        name: 'thickness',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 10,
        step: 0.5,
        description: 'Material thickness'
    },
    {
        name: 'chromaticAberration',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 1,
        step: 0.05,
        description: 'Chromatic aberration strength'
    },
    {
        name: 'scale',
        type: 'number' as const,
        default: 2,
        min: 0,
        max: 5,
        step: 0.1,
        description: 'Sphere scale/size'
    },
    {
        name: 'cursorFollow',
        type: 'boolean' as const,
        default: true,
        description: 'Enable mouse tracking interaction'
    },
    {
        name: 'environmentPreset',
        type: 'select' as const,
        options: ["apartment", "city", "dawn", "forest", "lobby", "night", "park", "studio", "sunset", "warehouse", "none"],
        default: 'city',
        description: 'Environment lighting preset'
    }
]

export const distortedGlassSphereDependencies = ["three", "@react-three/fiber", "@react-three/drei"]

export const distortedGlassSphereUsageCode = `<DistortedGlassSphere
  color="#4f46e5"
  distort={0.4}
  speed={2}
  cursorFollow={true}
  roughness={0}
  metalness={1}
  transmission={0}
  ior={1.2}
  thickness={0}
  chromaticAberration={0}
  scale={2}
/>`

export const distortedGlassSpherePreview = () => (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-transparent border border-muted/20">
        <DistortedGlassSphere color="#4f46e5" />
    </div>
)

export const distortedGlassSphereDynamicPreview = (props: any) => (
    <DistortedGlassSphere {...props} />
)

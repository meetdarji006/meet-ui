"use client"

import { ParticleWave } from "@/components/ui/particle-wave"

export const particleWaveMeta = {
    name: 'Particle Wave',
    slug: 'particle-wave',
    category: '3d' as const,
    description: 'A mesmerizing 3D particle wave animation using React Three Fiber.',
    tags: ['3d', 'r3f', 'particles', 'wave', 'background'],
}

export const particleWaveTableProps = [
    { name: 'color', type: 'string', default: '"#4f46e5"' },
    { name: 'speed', type: 'number', default: '1' },
    { name: 'amplitude', type: 'number', default: '1' },
    { name: 'className', type: 'string', default: '-' },
]

export const particleWaveEditableProps = [
    {
        name: 'color',
        type: 'string' as const,
        default: '#4f46e5',
        description: 'Color of the particles'
    },
    {
        name: 'speed',
        type: 'number' as const,
        default: 1,
        min: 0.1,
        max: 5,
        step: 0.1,
        description: 'Animation speed'
    },
    {
        name: 'amplitude',
        type: 'number' as const,
        default: 1,
        min: 0.1,
        max: 3,
        step: 0.1,
        description: 'Wave height amplitude'
    }
]

export const particleWaveUsageCode = `<ParticleWave
  color="#4f46e5"
  speed={1}
  amplitude={1}
/>`

export const particleWavePreview = () => (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-transparent border border-muted/20">
        <ParticleWave />
    </div>
)

export const particleWaveDynamicPreview = (props: any) => (
    <ParticleWave {...props} />
)

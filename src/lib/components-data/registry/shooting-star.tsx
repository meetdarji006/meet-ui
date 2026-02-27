import React from 'react'
import { ShootingStar } from '@/components/ui/shooting-star'
import { PropConfig } from './index'

export const shootingStarMeta = {
    name: 'Shooting Star',
    slug: 'shooting-star',
    category: '3d' as const,
    description: 'An interactive WebGL shooting star particle system with a text reveal intro animation.',
    tags: ['3d', 'webgl', 'threejs', 'particles', 'background'],
}

export const shootingStarPreview = () => (
    <div className="w-full relative flex items-center justify-center p-8 bg-[#000000] rounded-lg h-[400px] overflow-hidden">
        <div className="text-white/50 text-sm font-medium font-mono uppercase tracking-widest pointer-events-none">Move your cursor</div>
        <ShootingStar
            starColor="#ffaa00"
        />
    </div>
)

export const shootingStarDynamicPreview = (props: any) => (
    <div className="w-full relative flex items-center justify-center h-full min-h-[400px] overflow-hidden">
        <div className="text-white/50 text-sm font-medium font-mono uppercase tracking-widest pointer-events-none">Move your cursor</div>
        <ShootingStar
            starColor={props.starColor}
            speed={props.speed}
            spread={props.spread}
        />
    </div>
)

export const shootingStarTableProps: PropConfig[] = [
    { name: 'starColor', type: 'string', default: "'#aa8558'", description: 'The base color of the shooting star dust and particles' },
    { name: 'speed', type: 'number', default: 0.002, description: 'The movement speed of the particles' },
    { name: 'spread', type: 'number', default: 7, description: 'The spread width of the star trail' },
]

export const shootingStarEditableProps: PropConfig[] = [
    {
        name: 'speed',
        type: 'number' as const,
        default: 0.002,
        min: 0.001,
        max: 0.005,
        step: 0.001,
        description: 'Particle Speed',
    },
    {
        name: 'spread',
        type: 'number' as const,
        default: 7,
        min: 1,
        max: 20,
        description: 'Trail Spread',
    },
]

export const shootingStarDependencies: string[] = ['three']

export const shootingStarUsageCode = `import { ShootingStar } from '@/components/ui/shooting-star'

export default function App() {
  return (
    <div className="h-screen w-full relative">
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl text-white pointer-events-none">
        Move your mouse
      </h1>
      <ShootingStar
        starColor="#ffaa00"
      />
    </div>
  )
}`

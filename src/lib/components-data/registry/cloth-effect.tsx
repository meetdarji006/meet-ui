"use client"

import ClothEffect from "@/components/ui/cloth-effect"
import { clothEffectCodeTS, clothEffectCodeJS } from "@/lib/components-data/codes"

export const clothEffectMeta = {
    name: 'Cloth Effect',
    slug: 'cloth-effect',
    category: '3d' as const,
    description: 'A realistic 3D cloth simulation with wind, fabric physics, and grunge effects. Supports both image and video textures.',
    tags: ['3d', 'cloth', 'simulation', 'threejs', 'react-three-fiber', 'shader'],
}

export const clothEffectTableProps = [
    { name: 'image', type: 'string', default: 'https://iili.io/fvTp5sS.md.jpg', description: 'URL for image texture' },
    { name: 'video', type: 'string', default: '-', description: 'URL for video texture (overrides image)' },
    { name: 'options', type: 'object', default: '-', description: 'Configuration object for shaders (wind, grunge, shape)' },
    { name: 'height', type: 'string | number', default: '"100%"', description: 'Height of the container' },
    { name: 'width', type: 'string | number', default: '"100%"', description: 'Width of the container' },
    { name: 'className', type: 'string', default: '-', description: 'Wrapper class name' },
]

export const clothEffectEditableProps = [
    {
        name: 'height',
        type: 'string' as const,
        default: '500px',
        description: 'Canvas Height'
    },
    {
        name: 'options.windForce',
        type: 'number' as const,
        default: 0.2,
        min: 0,
        max: 2,
        step: 0.1,
        description: 'Wind Force'
    },
    {
        name: 'options.shadowOpacity',
        type: 'number' as const,
        default: 0.4,
        min: 0,
        max: 1,
        step: 0.05,
        description: 'Shadow Opacity'
    },
    {
        name: 'options.edgeScale',
        type: 'number' as const,
        default: 8.8,
        min: 1,
        max: 20,
        step: 0.1,
        description: 'Edge Noise Scale'
    },
    {
        name: 'options.edgeAmp',
        type: 'number' as const,
        default: 0.03,
        min: 0,
        max: 0.2,
        step: 0.001,
        description: 'Edge Amplitude'
    },
    {
        name: 'options.grainAmp',
        type: 'number' as const,
        default: 0.03,
        min: 0,
        max: 0.2,
        step: 0.001,
        description: 'Grain Amount'
    },
    {
        name: 'options.vignette',
        type: 'number' as const,
        default: 0,
        min: 0,
        max: 1,
        step: 0.05,
        description: 'Vignette Intensity'
    },
    {
        name: 'options.paperColor',
        type: 'string' as const,
        default: '#f0ebe0',
        description: 'Paper Base Color'
    }
]

export const clothEffectDependencies = ['three', '@react-three/fiber', '@react-three/drei']

export const clothEffectUsageCode = `<ClothEffect
  image="https://iili.io/fvTp5sS.md.jpg"
  height="600px"
  options={{
    windForce: 0.2,
    paperColor: "#f0ebe0"
  }}
/>`

export const clothEffectPreview = () => (
    <ClothEffect image="https://iili.io/fvTp5sS.md.jpg" />

)

export const clothEffectDynamicPreview = (props: any) => {
    // Reconstruct options object from flattened props
    const options: any = {}

    Object.keys(props).forEach(key => {
        if (key.startsWith('options.')) {
            const optionName = key.split('.')[1]
            options[optionName] = props[key]
        }
    })

    return (
        <ClothEffect
            image={props.image || "https://iili.io/fvTp5sS.md.jpg"}
            video={props.video}
            height={props.height || "500px"}
            width={props.width}
            options={options}
        />
    )
}

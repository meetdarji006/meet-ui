"use client"

import SignalLines from "@/components/ui/signal-lines"

export const signalLinesMeta = {
    name: 'Signal Lines',
    slug: 'signal-lines',
    category: '3d' as const,
    description: 'Animated fiber-optic style lines with glowing signals traveling along curved paths. Features bloom post-processing, transparent background option, and extensive customization.',
    tags: ['3d', 'animation', 'signals', 'threejs', 'react-three-fiber', 'bloom', 'postprocessing'],
}

export const signalLinesTableProps = [
    { name: 'options.transparent', type: 'boolean', default: 'false', description: 'Enable transparent background' },
    { name: 'options.colorBg', type: 'string', default: '#060010', description: 'Background color' },
    { name: 'options.colorLine', type: 'string', default: '#373f48', description: 'Line color' },
    { name: 'options.colorSignal', type: 'string', default: '#8fc9ff', description: 'Primary signal color' },
    { name: 'options.lineCount', type: 'number', default: '80', description: 'Number of lines' },
    { name: 'options.signalCount', type: 'number', default: '94', description: 'Number of signals' },
    { name: 'options.bloomStrength', type: 'number', default: '3.0', description: 'Bloom intensity' },
    { name: 'height', type: 'string | number', default: '"100%"', description: 'Container height' },
    { name: 'width', type: 'string | number', default: '"100%"', description: 'Container width' },
    { name: 'className', type: 'string', default: '-', description: 'Wrapper class name' },
]

export const signalLinesEditableProps = [
    {
        name: 'options.transparent',
        type: 'boolean' as const,
        default: false,
        description: 'Transparent Background'
    },
    {
        name: 'options.colorBg',
        type: 'string' as const,
        default: '#060010',
        description: 'Background Color'
    },
    {
        name: 'options.colorLine',
        type: 'string' as const,
        default: '#4a5568',
        description: 'Line Color'
    },
    {
        name: 'options.colorSignal',
        type: 'string' as const,
        default: '#00d4ff',
        description: 'Signal Color'
    },
    {
        name: 'options.lineCount',
        type: 'number' as const,
        default: 60,
        min: 10,
        max: 200,
        step: 5,
        description: 'Line Count'
    },
    {
        name: 'options.signalCount',
        type: 'number' as const,
        default: 120,
        min: 0,
        max: 200,
        step: 5,
        description: 'Signal Count'
    },
    {
        name: 'options.spreadHeight',
        type: 'number' as const,
        default: 35,
        min: 10,
        max: 100,
        step: 1,
        description: 'Spread Height'
    },
    {
        name: 'options.waveSpeed',
        type: 'number' as const,
        default: 1.8,
        min: 0,
        max: 5,
        step: 0.1,
        description: 'Wave Speed'
    },
    {
        name: 'options.waveHeight',
        type: 'number' as const,
        default: 0.3,
        min: 0,
        max: 2,
        step: 0.01,
        description: 'Wave Height'
    },
    {
        name: 'options.speedGlobal',
        type: 'number' as const,
        default: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
        description: 'Signal Speed'
    },
    {
        name: 'options.trailLength',
        type: 'number' as const,
        default: 15,
        min: 1,
        max: 50,
        step: 1,
        description: 'Trail Length'
    },
    {
        name: 'options.bloomStrength',
        type: 'number' as const,
        default: 3.0,
        min: 0,
        max: 5,
        step: 0.1,
        description: 'Bloom Strength'
    },
    {
        name: 'options.lineOpacity',
        type: 'number' as const,
        default: 0.8,
        min: 0,
        max: 1,
        step: 0.05,
        description: 'Line Opacity'
    },
    {
        name: 'height',
        type: 'string' as const,
        default: '500px',
        description: 'Height'
    },
]

export const signalLinesDependencies = ['three', '@react-three/fiber', '@react-three/postprocessing']

export const signalLinesUsageCode = `<SignalLines
  height="600px"
  options={{
    transparent: true,  // Enable transparent background
    colorLine: "#373f48",
    colorSignal: "#8fc9ff",
    lineCount: 80,
    signalCount: 94,
    bloomStrength: 3.0
  }}
/>`

export const signalLinesPreview = () => (
    <SignalLines height="500px" />
)

export const signalLinesDynamicPreview = (props: any) => {
    const options: any = {}

    Object.keys(props).forEach(key => {
        if (key.startsWith('options.')) {
            const optionName = key.split('.')[1]
            options[optionName] = props[key]
        }
    })

    return (
        <SignalLines
            height={props.height || "500px"}
            width={props.width}
            options={options}
        />
    )
}

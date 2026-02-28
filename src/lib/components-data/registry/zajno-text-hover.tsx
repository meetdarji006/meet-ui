import React from 'react'
import { ZajnoTextHover } from '@/components/ui/zajno-text-hover'

// ============================================
// COMPONENT METADATA
// ============================================
export const zajnoTextHoverMeta = {
    name: 'Zajno Text Hover',
    slug: 'zajno-text-hover',
    category: 'Text Animations',
    description: 'A DOM-based vertical pixelation text displacement effect inspired by Zajno.',
    tags: ['text', 'hover', 'glitch', 'zajno', 'displacement', 'interaction'],
}

// ============================================
// COMPONENT DEPENDENCIES
// ============================================
export const zajnoTextHoverDependencies = [
    'framer-motion',
    'clsx',
    'tailwind-merge'
]

// ============================================
// COMPONENT USAGE CODE
// ============================================
export const zajnoTextHoverUsageCode = ''

// ============================================
// DOCUMENTATION TABLE PROPS
// ============================================
export const zajnoTextHoverTableProps = [
    { name: 'text', type: 'string', default: '""', description: 'The text to apply the glitch hover effect to.' },
    { name: 'slices', type: 'number', default: '20', description: 'Number of vertical slices to cut the text into. More slices = smoother/finer glitch.' },
    { name: 'displacement', type: 'number', default: '40', description: 'Maximum vertical pixel distance a slice will move.' },
    { name: 'displacementX', type: 'number', default: '10', description: 'Maximum horizontal pixel distance a slice will move.' },
    { name: 'activationDistance', type: 'number', default: '150', description: 'Radius in pixels around the mouse where the displacement occurs.' },
    { name: 'className', type: 'string', default: '""', description: 'Container styling.' },
    { name: 'textClassName', type: 'string', default: '""', description: 'Styling for the text itself (e.g., font size, color, weight).' },
]

// ============================================
// PLAYGROUND EDITABLE PROPS
// ============================================
export const zajnoTextHoverEditableProps = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'zajno',
        description: 'The hero text',
    },
    {
        name: 'slices',
        type: 'number' as const,
        default: 20,
        description: 'Number of vertical text strips',
    },
    {
        name: 'displacement',
        type: 'number' as const,
        default: 40,
        description: 'Vertical glitch displacement distance',
    },
    {
        name: 'displacementX',
        type: 'number' as const,
        default: 10,
        description: 'Horizontal glitch displacement distance',
    },
    {
        name: 'activationDistance',
        type: 'number' as const,
        default: 150,
        description: 'Mouse proximity radius',
    }
]

// ============================================
// PREVIEW COMPONENT
// ============================================
// Static Mini Preview for the Components Grid
export const zajnoTextHoverPreview = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black">
            <ZajnoTextHover
                text="Zajno"
                slices={20}
                displacement={20}
                displacementX={10}
                activationDistance={100}
                textClassName="text-6xl font-black text-white uppercase tracking-tighter"
            />
        </div>
    )
}

// ============================================
// DYNAMIC COMPONENT
// ============================================
// Dynamic Preview for Playground
export const zajnoTextHoverDynamicPreview = (props: Record<string, any>) => {
    return (
        <div className="w-full h-full flex items-center justify-center min-h-[500px] bg-zinc-100 dark:bg-black">
            <div className="flex flex-col items-center justify-center -space-y-4">
                <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-8">(Hover over me)</span>
                <ZajnoTextHover
                    text={props.text || 'zajno'}
                    slices={props.slices ?? 20}
                    displacement={props.displacement ?? 40}
                    displacementX={props.displacementX ?? 10}
                    activationDistance={props.activationDistance ?? 150}
                    textClassName="text-[8rem] sm:text-[12rem] md:text-[16rem] font-black uppercase tracking-tighter text-black dark:text-white leading-none"
                />
            </div>
        </div>
    )
}

import React from 'react'
import { ZajnoTextHover } from '@/components/ui/zajno-text-hover'
import { PropConfig, ComponentEntry } from "./index";

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
export const zajnoTextHoverDependencies = ["framer-motion", "clsx", "tailwind-merge"];

// ============================================
// COMPONENT USAGE CODE
// ============================================
export const zajnoTextHoverUsageCode = ''

// ============================================
// DOCUMENTATION TABLE PROPS
// ============================================
// ============================================
// PLAYGROUND EDITABLE PROPS
// ============================================
// ============================================
// PREVIEW COMPONENT
// ============================================
// Static Mini Preview for the Components Grid
// ============================================
// DYNAMIC COMPONENT
// ============================================
// Dynamic Preview for Playground
export const zajnoTextHoverPreview = (props: Record<string, any>) => {
    return (
        <div className="w-full h-full flex items-center justify-center min-h-[500px]">
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
export const zajnoTextHoverProps: PropConfig[] = [
        { isEditable: true, 
            name: 'text',
            type: 'string' ,
            default: 'zajno',
            description: 'The hero text',
        },
        { isEditable: true, 
            name: 'slices',
            type: 'number' ,
            default: 50,
            description: 'Number of vertical text strips',
        },
        { isEditable: true, 
            name: 'displacement',
            type: 'number' ,
            default: 40,
            description: 'Vertical glitch displacement distance',
        },
        { isEditable: true, 
            name: 'displacementX',
            type: 'number' ,
            default: 50,
            description: 'Horizontal glitch displacement distance',
        },
        { isEditable: true, 
            name: 'activationDistance',
            type: 'number' ,
            default: 150,
            description: 'Mouse proximity radius',
        },
        { name: 'className', type: 'string', default: '""', description: 'Container styling.' },
        { name: 'textClassName', type: 'string', default: '""', description: 'Styling for the text itself (e.g., font size, color, weight).' }
    ];
export const zajnoTextHoverRegistry: ComponentEntry = {
        ...zajnoTextHoverMeta,
        preview: zajnoTextHoverPreview,
        props: zajnoTextHoverProps,
        dependencies: zajnoTextHoverDependencies,
        usageCode: zajnoTextHoverUsageCode,
    };

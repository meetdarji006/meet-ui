import React from 'react'
import { IsometricTechGrid } from '@/components/ui/isometric-tech-grid'
import { PropConfig, ComponentEntry } from "./index";

export const isometricTechGridMetadata = {
    name: 'Isometric Tech Grid',
    description: 'A glowing 3D isometric grid featuring tech stacks with depth extrusions and dashed guide lines.',
    component: IsometricTechGrid,
    colSpan: 2,
}

export const isometricTechGridDependencies: string[] = ["lucide-react", "clsx", "tailwind-merge"];
export const isometricTechGridPreview = (props: any) => {
    return (
        <IsometricTechGrid
            spacing={props.spacing ?? 160}
            gridSize={props.gridSize ?? 7}
        />
    )
}

export const isometricTechGridUsageCode = `<div className="w-full h-screen">
  <IsometricTechGrid
    items={[
    { icon: <div className="text-white">React</div> },
    { text: "TS" },
    { text: "JS", isCenter: true },
    { text: "Tailwind" },
    ]}
  />
</div>`
export const isometricTechGridProps: PropConfig[] = [
        { name: 'items', type: 'TechItem[]', default: 'defaultItems', description: 'Array of items supplying IDs, SVGs/icons, or plain text strings. Grid auto-calculates (x,y) if omitted.' },
        { isEditable: true, 
            name: 'spacing',
            type: 'number' ,
            default: 160,
            description: 'Distance between nodes',
        },
        { isEditable: true, 
            name: 'gridSize',
            type: 'number' ,
            default: 7,
            description: 'Floor grid expanse',
        },
        { name: 'className', type: 'string', default: '""', description: 'Outer container styles.' }
    ];
export const isometricTechGridRegistry: ComponentEntry = {
                ...isometricTechGridMetadata,
            slug: 'isometric-tech-grid',
            category: 'Components',
            tags: [],
                preview: isometricTechGridPreview,
                props: isometricTechGridProps,
                dependencies: isometricTechGridDependencies,
                usageCode: isometricTechGridUsageCode,
            };

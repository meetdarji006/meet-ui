import React from 'react'
import { IsometricTechGrid } from '@/components/ui/isometric-tech-grid'

export const isometricTechGridMetadata = {
    name: 'Isometric Tech Grid',
    description: 'A glowing 3D isometric grid featuring tech stacks with depth extrusions and dashed guide lines.',
    component: IsometricTechGrid,
    colSpan: 2,
}

export const isometricTechGridDependencies: string[] = ["lucide-react"]

export const isometricTechGridTableProps = [
    { name: 'items', type: 'TechItem[]', default: 'defaultItems', description: 'Array of items supplying IDs, SVGs/icons, or plain text strings. Grid auto-calculates (x,y) if omitted.' },
    { name: 'spacing', type: 'number', default: '160', description: 'Pixel distance between grid nodes.' },
    { name: 'gridSize', type: 'number', default: '7', description: 'Size of the rendered floor grid lines.' },
    { name: 'className', type: 'string', default: '""', description: 'Outer container styles.' },
]

export const isometricTechGridEditableProps = [
    {
        name: 'spacing',
        type: 'number' as const,
        default: 160,
        description: 'Distance between nodes',
    },
    {
        name: 'gridSize',
        type: 'number' as const,
        default: 7,
        description: 'Floor grid expanse',
    }
]

export const isometricTechGridPreview = () => {
    return (
        <IsometricTechGrid />
    )
}

export const isometricTechGridDynamicPreview = (props: any) => {
    return (
        <IsometricTechGrid
            spacing={props.spacing ?? 160}
            gridSize={props.gridSize ?? 7}
        />
    )
}

export const isometricTechGridUsageCode = `import { IsometricTechGrid } from '@/components/ui/isometric-tech-grid'

export default function App() {
  return (
    <div className="w-full h-screen">
      <IsometricTechGrid
        items={[
            { icon: <div className="text-white">React</div> },
            { text: "TS" },
            { text: "JS", isCenter: true },
            { text: "Tailwind" },
        ]}
      />
    </div>
  )
}`

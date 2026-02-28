import React from 'react'
import { HoverNameGallery } from '@/components/ui/hover-name-gallery'

export const hoverNameGalleryMetadata = {
    name: 'Hover Name Gallery',
    description: 'An interactive gallery row where hovered images expand and trigger a massive, animated title reveal below.',
    component: HoverNameGallery,
    colSpan: 2,
}

export const hoverNameGalleryDependencies: string[] = ["framer-motion"]

export const hoverNameGalleryTableProps = [
    { name: 'items', type: 'GalleryItem[]', default: 'defaultItems', description: 'Array of objects providing id, name, and image mapping.' },
    { name: 'defaultTitle', type: 'string', default: '"DIRECTORS"', description: 'The text to show when no image is being hovered.' },
    { name: 'className', type: 'string', default: '""', description: 'Outer container styles.' },
]

export const hoverNameGalleryEditableProps = [
    {
        name: 'defaultTitle',
        type: 'string' as const,
        default: 'DIRECTORS',
        description: 'Default placeholder title',
    }
]

export const hoverNameGalleryPreview = () => {
    return (
        <HoverNameGallery />
    )
}

export const hoverNameGalleryDynamicPreview = (props: any) => {
    return (
        <HoverNameGallery
            defaultTitle={props.defaultTitle ?? "DIRECTORS"}
        />
    )
}

export const hoverNameGalleryUsageCode = `import { HoverNameGallery } from '@/components/ui/hover-name-gallery'

export default function App() {
  return (
    <div className="w-full h-screen">
        <HoverNameGallery />
    </div>
  )
}`

import React from 'react'
import { HoverNameGallery } from '@/components/ui/hover-name-gallery'
import { PropConfig, ComponentEntry } from "./index";

export const hoverNameGalleryMetadata = {
    name: 'Hover Name Gallery',
    description: 'An interactive gallery row where hovered images expand and trigger a massive, animated title reveal below.',
    component: HoverNameGallery,
    colSpan: 2,
}

export const hoverNameGalleryDependencies: string[] = ["framer-motion", "clsx", "tailwind-merge"];
export const hoverNameGalleryPreview = (props: any) => {
    return (
        <HoverNameGallery
            defaultTitle={props.defaultTitle ?? "DIRECTORS"}
        />
    )
}

export const hoverNameGalleryUsageCode = `<div className="w-full h-screen">
  <HoverNameGallery />
</div>`
export const hoverNameGalleryProps: PropConfig[] = [
        { name: 'items', type: 'GalleryItem[]', default: 'defaultItems', description: 'Array of objects providing id, name, and image mapping.' },
        { isEditable: true, 
            name: 'defaultTitle',
            type: 'string' ,
            default: 'DIRECTORS',
            description: 'Default placeholder title',
        },
        { name: 'className', type: 'string', default: '""', description: 'Outer container styles.' }
    ];
export const hoverNameGalleryRegistry: ComponentEntry = {
                ...hoverNameGalleryMetadata,
            slug: 'hover-name-gallery',
            category: 'Components',
            tags: [],
                preview: hoverNameGalleryPreview,
                props: hoverNameGalleryProps,
                dependencies: hoverNameGalleryDependencies,
                usageCode: hoverNameGalleryUsageCode,
            };

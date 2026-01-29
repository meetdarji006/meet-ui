import { Layers, MousePointer, Box } from "lucide-react"

// Filter categories for components page
export const componentFilters = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'ui', label: 'UI Components', icon: MousePointer },
    { id: '3d', label: '3D Elements', icon: Box },
]

// Sidebar categories with their components
export const sidebarCategories = [
    {
        id: 'text-animations',
        label: 'Text Animations',
        components: [
            { name: 'Split Text Reveal', slug: 'split-text-reveal' },
            { name: 'Stretch Text', slug: 'stretch-text' },
            { name: 'Scroll Fill Text', slug: 'scroll-fill-text' },
        ]
    },
    {
        id: 'components',
        label: 'Components',
        components: [
            // Add UI components here
        ]
    },
    {
        id: 'backgrounds',
        label: 'Backgrounds',
        components: [
            // Add background components here
        ]
    },
]

// Flat list for backward compatibility
export const sidebarComponents = sidebarCategories.flatMap(cat => cat.components)

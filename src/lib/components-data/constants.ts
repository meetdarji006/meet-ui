import { Layers, MousePointer, Box } from "lucide-react"

// Filter categories for components page
export const componentFilters = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'ui', label: 'UI Components', icon: MousePointer },
    { id: '3d', label: '3D Elements', icon: Box },
]

// Sidebar navigation items
export const sidebarComponents = [
    { name: 'Split Text Reveal', slug: 'split-text-reveal' },
    { name: 'Stretch Text', slug: 'stretch-text' },
    // Add more components here
]

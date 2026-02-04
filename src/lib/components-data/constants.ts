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


            { name: 'Typewriter Text', slug: 'typewriter-text' },
            { name: 'Blur Reveal', slug: 'blur-reveal' },

            { name: 'Stretch Text', slug: 'stretch-text' },
            { name: 'Scroll Fill Text', slug: 'scroll-fill-text' },
            { name: 'Shatter Text', slug: 'shatter-text' },
            { name: 'Morphing Text', slug: 'morphing-text' },
            { name: 'Sparkles Text', slug: 'sparkles-text' },
            { name: 'Rubber Band Text', slug: 'rubber-band-text' },
            { name: 'Spotlight Text', slug: 'spotlight-text' },

            { name: 'Hyper Text', slug: 'hyper-text' },

        ]
    },
    {
        id: 'components',
        label: 'Components',
        components: [
            { name: 'Magnetic Cursor', slug: 'magnetic-cursor' },
            { name: 'Cursor Trail', slug: 'cursor-trail' },
            { name: 'Click Ripple', slug: 'click-ripple' },
            { name: 'Aurora Cursor', slug: 'aurora-cursor' },
            { name: 'Content Reveal Card', slug: 'content-reveal-card' },
            { name: 'Circular Gallery', slug: 'circular-gallery' },
            { name: 'Distorted Glass Sphere', slug: 'distorted-glass-sphere' },
            { name: 'Magnetic Button', slug: 'magnetic-button' },
            { name: 'Particle Wave', slug: 'particle-wave' },
            { name: 'Glass Toggle', slug: 'glass-toggle' },

        ]
    },
]

// Flat list for backward compatibility
export const sidebarComponents = sidebarCategories.flatMap(cat => cat.components)

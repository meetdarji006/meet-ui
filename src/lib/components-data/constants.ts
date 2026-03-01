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
            { name: 'Text Underline', slug: 'text-underline' },
            { name: 'Gooey Text', slug: 'gooey-text' },
            { name: 'Looping Words', slug: 'looping-words' },
            { name: 'Sparkles Text', slug: 'sparkles-text' },
            { name: 'Rubber Band Text', slug: 'rubber-band-text' },
            { name: 'Spotlight Text', slug: 'spotlight-text' },
            { name: 'Hyper Text', slug: 'hyper-text' },
            { name: 'Stacked Block Text', slug: 'stacked-block-text' },
            { name: 'Liquid Text Hover', slug: 'liquid-text-hover' },
            { name: 'Hero Text Hover', slug: 'hero-text-hover' },
            { name: 'Zajno Text Hover', slug: 'zajno-text-hover' },
            { name: 'Pattern Text', slug: 'pattern-text' },
        ]
    },
    {
        id: 'components',
        label: 'Components',
        components: [
            { name: 'Magnetic Cursor', slug: 'magnetic-cursor' },
            { name: 'Click Ripple', slug: 'click-ripple' },
            { name: 'Aurora Cursor', slug: 'aurora-cursor' },
            { name: 'Content Reveal Card', slug: 'content-reveal-card' },
            { name: 'Staggered Testimonials', slug: 'staggered-testimonials' },
            { name: 'Glass Toggle', slug: 'glass-toggle' },
            { name: 'Signal Lines', slug: 'signal-lines' },
            { name: 'Elastic Curve', slug: 'elastic-curve' },
            { name: 'Animated Counter', slug: 'animated-counter' },
            { name: 'Marquee', slug: 'marquee' },
            { name: 'Stacked Carousel', slug: 'stacked-carousel' },
            { name: 'Highlight Gallery', slug: 'highlight-gallery' },
            { name: 'Stacked Info Cards', slug: 'stacked-info-cards' },
            { name: 'Bouncing Loader', slug: 'bouncing-loader' },
            { name: 'Glow Card', slug: 'glow-card' },
            { name: 'Wave Card', slug: 'wave-card' },
            { name: 'Luminous Card', slug: 'luminous-card' },
            { name: 'Social Clock', slug: 'social-clock' },
            { name: 'Follow Eyes', slug: 'follow-eyes' },
            { name: 'Floating Tech Stack', slug: 'floating-tech-stack' },
            { name: 'Isometric Tech Grid', slug: 'isometric-tech-grid' },
            { name: 'Hover Name Gallery', slug: 'hover-name-gallery' },
            { name: 'Social Icon Hover', slug: 'social-icon-hover' },
            { name: 'Shooting Star', slug: 'shooting-star' },
            { name: 'Ring Cursor', slug: 'ring-cursor' },
            { name: 'Text Image Reveal', slug: 'text-image-reveal' },
            { name: 'Full Screen Menu', slug: 'full-screen-menu' },
            { name: 'Interactive Hover Menu', slug: 'interactive-hover-menu' },
            { name: 'Floating Tilt Tags', slug: 'floating-tilt-tags' },
            { name: 'Morphing Card Stack', slug: 'morphing-card-stack' },
            { name: 'Pixel Cursor Trail', slug: 'pixel-cursor-trail' },
            { name: 'Testimonials Split', slug: 'testimonials-split' },
        ]
    },

    {
        id: 'buttons',
        label: 'Buttons',
        components: [
            { name: 'Shiny Button', slug: 'shiny-cta' },
            { name: 'Drawer Button', slug: 'drawer-button' },
            { name: 'Splash Button', slug: 'splash-button' },
        ]
    }
]

// Flat list for backward compatibility
export const sidebarComponents = sidebarCategories.flatMap(cat => cat.components)

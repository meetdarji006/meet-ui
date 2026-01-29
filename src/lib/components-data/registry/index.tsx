"use client"
// Import all component registries
import {
    splitTextRevealMeta,
    splitTextRevealPreview,
    splitTextRevealDynamicPreview
} from './split-text-reveal'
import {
    stretchTextMeta,
    stretchTextPreview,
    stretchTextDynamicPreview
} from './stretch-text'

// ============================================
// COMPONENT TYPES
// ============================================

export interface ComponentMeta {
    name: string
    slug: string
    category: 'ui' | '3d'
    description: string
    tags: string[]
}

export interface ComponentEntry extends ComponentMeta {
    preview: () => React.ReactNode
}

// ============================================
// COMPONENTS LIST (for grid view)
// ============================================

export const componentsList: ComponentEntry[] = [
    {
        ...splitTextRevealMeta,
        preview: splitTextRevealPreview,
    },
    {
        ...stretchTextMeta,
        preview: stretchTextPreview,
    },
    // Add more components here:
    // {
    //     ...myComponentMeta,
    //     preview: myComponentPreview,
    // },
]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'split-text-reveal': splitTextRevealDynamicPreview,
    'stretch-text': stretchTextDynamicPreview,
    // Add more:
    // 'my-component': myComponentDynamicPreview,
}

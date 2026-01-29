"use client"
// Import all component registries
import {
    splitTextRevealMeta,
    splitTextRevealPreview,
    splitTextRevealDynamicPreview,
    splitTextRevealTableProps,
    splitTextRevealEditableProps
} from './split-text-reveal'
import {
    stretchTextMeta,
    stretchTextPreview,
    stretchTextDynamicPreview,
    stretchTextTableProps,
    stretchTextEditableProps
} from './stretch-text'
import {
    scrollFillTextMeta,
    scrollFillTextPreview,
    scrollFillTextDynamicPreview,
    scrollFillTextTableProps,
    scrollFillTextEditableProps
} from './scroll-fill-text'

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

export interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select'
    default: any
    description?: string
    options?: string[]
    min?: number
    max?: number
    step?: number
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
    {
        ...scrollFillTextMeta,
        preview: scrollFillTextPreview,
    },
]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'split-text-reveal': splitTextRevealDynamicPreview,
    'stretch-text': stretchTextDynamicPreview,
    'scroll-fill-text': scrollFillTextDynamicPreview,
}

// ============================================
// PROPS (aggregated from registry files)
// ============================================

export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'split-text-reveal': splitTextRevealTableProps,
    'stretch-text': stretchTextTableProps,
    'scroll-fill-text': scrollFillTextTableProps,
}

export const editableProps: Record<string, PropConfig[]> = {
    'split-text-reveal': splitTextRevealEditableProps,
    'stretch-text': stretchTextEditableProps,
    'scroll-fill-text': scrollFillTextEditableProps,
}

"use client"
// Import all component registries
import {
    circularGalleryMeta,
    circularGalleryPreview,
    circularGalleryDynamicPreview,
    circularGalleryTableProps,
    circularGalleryEditableProps,
    circularGalleryDependencies,
    circularGalleryUsageCode
} from './circular-gallery'
import {
    splitTextRevealMeta,
    splitTextRevealPreview,
    splitTextRevealDynamicPreview,
    splitTextRevealTableProps,
    splitTextRevealEditableProps,
    splitTextRevealDependencies,
    splitTextRevealUsageCode
} from './split-text-reveal'
import {
    stretchTextMeta,
    stretchTextPreview,
    stretchTextDynamicPreview,
    stretchTextTableProps,
    stretchTextEditableProps,
    stretchTextDependencies,
    stretchTextUsageCode
} from './stretch-text'
import {
    hyperTextMeta,
    hyperTextPreview,
    hyperTextDynamicPreview,
    hyperTextTableProps,
    hyperTextEditableProps,
    hyperTextDependencies,
    hyperTextUsageCode
} from './hyper-text'
import {
    typewriterTextMeta,
    typewriterTextPreview,
    typewriterTextDynamicPreview,
    typewriterTextTableProps,
    typewriterTextEditableProps,
    typewriterTextDependencies,
    typewriterTextUsageCode
} from './typewriter-text'
import {
    blurRevealMeta,
    blurRevealPreview,
    blurRevealDynamicPreview,
    blurRevealTableProps,
    blurRevealEditableProps,
    blurRevealDependencies,
    blurRevealUsageCode
} from './blur-reveal'
import {
    cursorTrailMeta,
    cursorTrailPreview,
    cursorTrailDynamicPreview,
    cursorTrailTableProps,
    cursorTrailEditableProps,
    cursorTrailDependencies,
    cursorTrailUsageCode
} from './cursor-trail'
import {
    clickRippleMeta,
    clickRipplePreview,
    clickRippleDynamicPreview,
    clickRippleTableProps,
    clickRippleEditableProps,
    clickRippleDependencies,
    clickRippleUsageCode
} from './click-ripple'
import {
    auroraCursorMeta,
    auroraCursorPreview,
    auroraCursorDynamicPreview,
    auroraCursorTableProps,
    auroraCursorEditableProps,
    auroraCursorDependencies,
    auroraCursorUsageCode
} from './aurora-cursor'

import {
    scrollFillTextMeta,
    scrollFillTextPreview,
    scrollFillTextDynamicPreview,
    scrollFillTextTableProps,
    scrollFillTextEditableProps,
    scrollFillTextDependencies,
    scrollFillTextUsageCode
} from './scroll-fill-text'
import {
    magneticCursorMeta,
    magneticCursorPreview,
    magneticCursorDynamicPreview,
    magneticCursorTableProps,
    magneticCursorEditableProps,
    magneticCursorDependencies,
    magneticCursorUsageCode
} from './magnetic-cursor'
import {
    shatterTextMeta,
    shatterTextPreview,
    shatterTextDynamicPreview,
    shatterTextTableProps,
    shatterTextEditableProps,
    shatterTextDependencies,
    shatterTextUsageCode
} from './shatter-text'
import {
    morphingTextMeta,
    morphingTextPreview,
    morphingTextDynamicPreview,
    morphingTextTableProps,
    morphingTextEditableProps,
    morphingTextDependencies,
    morphingTextUsageCode
} from './morphing-text'
import {
    sparklesTextMeta,
    sparklesTextPreview,
    sparklesTextDynamicPreview,
    sparklesTextTableProps,
    sparklesTextEditableProps,
    sparklesTextDependencies,
    sparklesTextUsageCode
} from './sparkles-text'
import {
    rubberBandTextMeta,
    rubberBandTextPreview,
    rubberBandTextDynamicPreview,
    rubberBandTextTableProps,
    rubberBandTextEditableProps,
    rubberBandTextDependencies,
    rubberBandTextUsageCode
} from './rubber-band-text'

import {
    spotlightTextMeta,
    spotlightTextPreview,
    spotlightTextDynamicPreview,
    spotlightTextTableProps,
    spotlightTextEditableProps,
    spotlightTextDependencies,
    spotlightTextUsageCode
} from './spotlight-text'

import {
    contentRevealCardMeta,
    contentRevealCardPreview,
    contentRevealCardDynamicPreview,
    contentRevealCardTableProps,
    contentRevealCardEditableProps,
    contentRevealCardDependencies,
    contentRevealCardUsageCode
} from './content-reveal-card'



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
        ...hyperTextMeta,
        preview: hyperTextPreview,
    },
    {
        ...scrollFillTextMeta,
        preview: scrollFillTextPreview,
    },
    {
        ...magneticCursorMeta,
        preview: magneticCursorPreview,
    },
    {
        ...shatterTextMeta,
        preview: shatterTextPreview,
    },
    {
        ...morphingTextMeta,
        preview: morphingTextPreview,
    },
    {
        ...sparklesTextMeta,
        preview: sparklesTextPreview,
    },
    {
        ...rubberBandTextMeta,
        preview: rubberBandTextPreview,
    },

    {
        ...spotlightTextMeta,
        preview: spotlightTextPreview,
    },

    {
        ...typewriterTextMeta,
        preview: typewriterTextPreview,
    },
    {
        ...blurRevealMeta,
        preview: blurRevealPreview,
    },
    {
        ...cursorTrailMeta,
        preview: cursorTrailPreview,
    },
    {
        ...clickRippleMeta,
        preview: clickRipplePreview,
    },
    {
        ...auroraCursorMeta,
        preview: auroraCursorPreview,
    },
    {
        ...contentRevealCardMeta,
        preview: contentRevealCardPreview,
    },
    {
        ...circularGalleryMeta,
        preview: circularGalleryPreview,
    },
]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'split-text-reveal': splitTextRevealDynamicPreview,
    'stretch-text': stretchTextDynamicPreview,
    'scroll-fill-text': scrollFillTextDynamicPreview,
    'magnetic-cursor': magneticCursorDynamicPreview,
    'shatter-text': shatterTextDynamicPreview,
    'morphing-text': morphingTextDynamicPreview,
    'sparkles-text': sparklesTextDynamicPreview,
    'rubber-band-text': rubberBandTextDynamicPreview,

    'spotlight-text': spotlightTextDynamicPreview,
    'hyper-text': hyperTextDynamicPreview,
    'typewriter-text': typewriterTextDynamicPreview,
    'blur-reveal': blurRevealDynamicPreview,
    'cursor-trail': cursorTrailDynamicPreview,
    'click-ripple': clickRippleDynamicPreview,
    'aurora-cursor': auroraCursorDynamicPreview,
    'content-reveal-card': contentRevealCardDynamicPreview,
    'circular-gallery': circularGalleryDynamicPreview,
}

// ============================================
// PROPS (aggregated from registry files)
// ============================================

export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'split-text-reveal': splitTextRevealTableProps,
    'stretch-text': stretchTextTableProps,
    'scroll-fill-text': scrollFillTextTableProps,
    'magnetic-cursor': magneticCursorTableProps,
    'shatter-text': shatterTextTableProps,
    'morphing-text': morphingTextTableProps,
    'sparkles-text': sparklesTextTableProps,
    'rubber-band-text': rubberBandTextTableProps,

    'spotlight-text': spotlightTextTableProps,
    'hyper-text': hyperTextTableProps,
    'typewriter-text': typewriterTextTableProps,
    'blur-reveal': blurRevealTableProps,
    'cursor-trail': cursorTrailTableProps,
    'click-ripple': clickRippleTableProps,
    'aurora-cursor': auroraCursorTableProps,
    'content-reveal-card': contentRevealCardTableProps,
    'circular-gallery': circularGalleryTableProps,
}

export const editableProps: Record<string, PropConfig[]> = {
    'split-text-reveal': splitTextRevealEditableProps,
    'stretch-text': stretchTextEditableProps,
    'scroll-fill-text': scrollFillTextEditableProps,
    'magnetic-cursor': magneticCursorEditableProps,
    'shatter-text': shatterTextEditableProps,
    'morphing-text': morphingTextEditableProps,
    'sparkles-text': sparklesTextEditableProps,
    'rubber-band-text': rubberBandTextEditableProps,

    'spotlight-text': spotlightTextEditableProps,
    'hyper-text': hyperTextEditableProps,
    'typewriter-text': typewriterTextEditableProps,
    'blur-reveal': blurRevealEditableProps,
    'cursor-trail': cursorTrailEditableProps,
    'click-ripple': clickRippleEditableProps,
    'aurora-cursor': auroraCursorEditableProps,
    'content-reveal-card': contentRevealCardEditableProps,
    'circular-gallery': circularGalleryEditableProps,
}

export const componentDependencies: Record<string, string[]> = {
    'circular-gallery': circularGalleryDependencies,
    'shatter-text': shatterTextDependencies,
    'content-reveal-card': contentRevealCardDependencies,
    'split-text-reveal': splitTextRevealDependencies,
    'stretch-text': stretchTextDependencies,
    'hyper-text': hyperTextDependencies,
    'typewriter-text': typewriterTextDependencies,
    'blur-reveal': blurRevealDependencies,
    'scroll-fill-text': scrollFillTextDependencies,
    'magnetic-cursor': magneticCursorDependencies,
    'morphing-text': morphingTextDependencies,
    'sparkles-text': sparklesTextDependencies,
    'rubber-band-text': rubberBandTextDependencies,
    'spotlight-text': spotlightTextDependencies,
    'cursor-trail': cursorTrailDependencies,
    'click-ripple': clickRippleDependencies,
    'aurora-cursor': auroraCursorDependencies,
}

export const componentUsageCodes: Record<string, string> = {
    'circular-gallery': circularGalleryUsageCode,
    'shatter-text': shatterTextUsageCode,
    'content-reveal-card': contentRevealCardUsageCode,
    'split-text-reveal': splitTextRevealUsageCode,
    'stretch-text': stretchTextUsageCode,
    'hyper-text': hyperTextUsageCode,
    'typewriter-text': typewriterTextUsageCode,
    'blur-reveal': blurRevealUsageCode,
    'scroll-fill-text': scrollFillTextUsageCode,
    'magnetic-cursor': magneticCursorUsageCode,
    'morphing-text': morphingTextUsageCode,
    'sparkles-text': sparklesTextUsageCode,
    'rubber-band-text': rubberBandTextUsageCode,
    'spotlight-text': spotlightTextUsageCode,
    'cursor-trail': cursorTrailUsageCode,
    'click-ripple': clickRippleUsageCode,
    'aurora-cursor': auroraCursorUsageCode,
}

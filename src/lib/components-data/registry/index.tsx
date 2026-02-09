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
    glassToggleMeta,
    glassTogglePreview,
    glassToggleDynamicPreview,
    glassToggleTableProps,
    glassToggleEditableProps,
    glassToggleDependencies,
    glassToggleUsageCode
} from './glass-toggle'

import {
    clothEffectMeta,
    clothEffectPreview,
    clothEffectDynamicPreview,
    clothEffectTableProps,
    clothEffectEditableProps,
    clothEffectDependencies,
    clothEffectUsageCode
} from './cloth-effect'

import {
    signalLinesMeta,
    signalLinesPreview,
    signalLinesDynamicPreview,
    signalLinesTableProps,
    signalLinesEditableProps,
    signalLinesDependencies,
    signalLinesUsageCode
} from './signal-lines'

import {
    elasticCurveMeta,
    elasticCurvePreview,
    elasticCurveDynamicPreview,
    elasticCurveTableProps,
    elasticCurveEditableProps,
    elasticCurveDependencies,
    elasticCurveUsageCode
} from './elastic-curve'


import {
    distortedGlassSphereMeta,
    distortedGlassSpherePreview,
    distortedGlassSphereDynamicPreview,
    distortedGlassSphereTableProps,
    distortedGlassSphereEditableProps,
    distortedGlassSphereDependencies,
    distortedGlassSphereUsageCode
} from './distorted-glass-sphere'

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

import {
    magneticButtonMeta,
    magneticButtonPreview,
    magneticButtonDynamicPreview,
    magneticButtonTableProps,
    magneticButtonEditableProps,
    magneticButtonUsageCode
} from './magnetic-button'

import {
    particleWaveMeta,
    particleWavePreview,
    particleWaveDynamicPreview,
    particleWaveTableProps,
    particleWaveEditableProps,
    particleWaveUsageCode
} from './particle-wave'




// ============================================
// COMPONENT TYPES
// ============================================

export interface ComponentMeta {
    name: string
    slug: string
    category: 'ui' | '3d' | 'gsap'
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
        ...glassToggleMeta,
        preview: glassTogglePreview,
    },
    {
        ...clothEffectMeta,
        preview: clothEffectPreview,
    },
    {
        ...signalLinesMeta,
        preview: signalLinesPreview,
    },
    {
        ...elasticCurveMeta,
        preview: elasticCurvePreview,
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

    {
        ...distortedGlassSphereMeta,
        preview: distortedGlassSpherePreview,
    },

    {
        ...magneticButtonMeta,
        preview: magneticButtonPreview,
    },
    {
        ...particleWaveMeta,
        preview: particleWavePreview,
    },

]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'split-text-reveal': splitTextRevealDynamicPreview,
    'glass-toggle': glassToggleDynamicPreview,
    'cloth-effect': clothEffectDynamicPreview,
    'signal-lines': signalLinesDynamicPreview,


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
    'distorted-glass-sphere': distortedGlassSphereDynamicPreview,

    'magnetic-button': magneticButtonDynamicPreview,
    'particle-wave': particleWaveDynamicPreview,
    'elastic-curve': elasticCurveDynamicPreview,
}

// ============================================
// PROPS (aggregated from registry files)
// ============================================

export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'split-text-reveal': splitTextRevealTableProps,
    'glass-toggle': glassToggleTableProps,
    'cloth-effect': clothEffectTableProps,
    'signal-lines': signalLinesTableProps,


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
    'distorted-glass-sphere': distortedGlassSphereTableProps,

    'magnetic-button': magneticButtonTableProps,
    'particle-wave': particleWaveTableProps,
    'elastic-curve': elasticCurveTableProps,
}

export const editableProps: Record<string, PropConfig[]> = {
    'split-text-reveal': splitTextRevealEditableProps,
    'glass-toggle': glassToggleEditableProps,
    'cloth-effect': clothEffectEditableProps,
    'signal-lines': signalLinesEditableProps,


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
    'distorted-glass-sphere': distortedGlassSphereEditableProps,

    'magnetic-button': magneticButtonEditableProps,
    'particle-wave': particleWaveEditableProps,
    'elastic-curve': elasticCurveEditableProps,
}

export const componentDependencies: Record<string, string[]> = {
    'circular-gallery': circularGalleryDependencies,
    'shatter-text': shatterTextDependencies,
    'content-reveal-card': contentRevealCardDependencies,
    'split-text-reveal': splitTextRevealDependencies,
    'glass-toggle': glassToggleDependencies,
    'cloth-effect': clothEffectDependencies,
    'signal-lines': signalLinesDependencies,


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
    'distorted-glass-sphere': distortedGlassSphereDependencies,

    'magnetic-button': [],
    'particle-wave': [],
    'elastic-curve': elasticCurveDependencies,
}

export const componentUsageCodes: Record<string, string> = {
    'circular-gallery': circularGalleryUsageCode,
    'shatter-text': shatterTextUsageCode,
    'content-reveal-card': contentRevealCardUsageCode,
    'split-text-reveal': splitTextRevealUsageCode,
    'glass-toggle': glassToggleUsageCode,
    'cloth-effect': clothEffectUsageCode,
    'signal-lines': signalLinesUsageCode,


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
    'distorted-glass-sphere': distortedGlassSphereUsageCode,

    'magnetic-button': magneticButtonUsageCode,
    'particle-wave': particleWaveUsageCode,
    'elastic-curve': elasticCurveUsageCode,
}

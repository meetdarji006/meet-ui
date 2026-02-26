"use client"
// Import all component registries
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
    stackedCarouselMeta,
    stackedCarouselPreview,
    stackedCarouselDynamicPreview,
    stackedCarouselTableProps,
    stackedCarouselEditableProps,
    stackedCarouselDependencies,
    stackedCarouselUsageCode
} from './stacked-carousel'

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
    shinyCtaMeta,
    shinyCtaPreview,
    shinyCtaDynamicPreview,
    shinyCtaTableProps,
    shinyCtaEditableProps,
    shinyCtaDependencies,
    shinyCtaUsageCode
} from './shiny-cta'

import {
    stackedBlockTextMeta,
    stackedBlockTextPreview,
    stackedBlockTextDynamicPreview,
    stackedBlockTextTableProps,
    stackedBlockTextEditableProps,
    stackedBlockTextDependencies,
    stackedBlockTextUsageCode
} from './stacked-block-text'

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



// DrawUnderline removed

import {
    textUnderlineMeta,
    textUnderlinePreview,
    textUnderlineDynamicPreview,
    textUnderlineTableProps,
    textUnderlineEditableProps,
    textUnderlineDependencies,
    textUnderlineUsageCode
} from './text-underline'

import {
    loopingWordsMeta,
    loopingWordsPreview,
    loopingWordsDynamicPreview,
    loopingWordsTableProps,
    loopingWordsEditableProps,
    loopingWordsDependencies,
    loopingWordsUsageCode
} from './looping-words'

import {
    animatedCounterMeta,
    animatedCounterPreview,
    animatedCounterDynamicPreview,
    animatedCounterTableProps,
    animatedCounterEditableProps,
    animatedCounterDependencies,
    animatedCounterUsageCode
} from './animated-counter'

import {
    marqueeMeta,
    marqueePreview,
    marqueeDynamicPreview,
    marqueeTableProps,
    marqueeEditableProps,
    marqueeDependencies,
    marqueeUsageCode
}
    from './marquee'
import {
    highlightGalleryMeta,
    highlightGalleryPreview,
    highlightGalleryDynamicPreview,
    highlightGalleryTableProps,
    highlightGalleryEditableProps,
    highlightGalleryDependencies,
    highlightGalleryUsageCode
} from './highlight-gallery'
import {
    stackedInfoCardsMeta,
    stackedInfoCardsPreview,
    stackedInfoCardsDynamicPreview,
    stackedInfoCardsTableProps,
    stackedInfoCardsEditableProps,
    stackedInfoCardsDependencies,
    stackedInfoCardsUsageCode
} from './stacked-info-cards'
import {
    drawerButtonMeta,
    drawerButtonPreview,
    drawerButtonDynamicPreview,
    drawerButtonTableProps,
    drawerButtonEditableProps,
    drawerButtonDependencies,
    drawerButtonUsageCode
} from './drawer-button'
import {
    splashButtonMeta,
    splashButtonPreview,
    splashButtonDynamicPreview,
    splashButtonTableProps,
    splashButtonEditableProps,
    splashButtonDependencies,
    splashButtonUsageCode
} from './splash-button'
import {
    bouncingLoaderMeta,
    bouncingLoaderPreview,
    bouncingLoaderDynamicPreview,
    bouncingLoaderTableProps,
    bouncingLoaderEditableProps,
    bouncingLoaderDependencies,
    bouncingLoaderUsageCode
} from './bouncing-loader'
import {
    glowCardMeta,
    glowCardPreview,
    glowCardDynamicPreview,
    glowCardTableProps,
    glowCardEditableProps,
    glowCardDependencies,
    glowCardUsageCode
} from './glow-card'
import {
    waveCardMeta,
    waveCardPreview,
    waveCardDynamicPreview,
    waveCardTableProps,
    waveCardEditableProps,
    waveCardDependencies,
    waveCardUsageCode
} from './wave-card'
import {
    luminousCardMeta,
    luminousCardPreview,
    luminousCardDynamicPreview,
    luminousCardTableProps,
    luminousCardEditableProps,
    luminousCardDependencies,
    luminousCardUsageCode
} from './luminous-card'
import {
    socialClockMeta,
    socialClockPreview,
    socialClockDynamicPreview,
    socialClockTableProps,
    socialClockEditableProps,
    socialClockDependencies,
    socialClockUsageCode
} from './social-clock'
import {
    followEyesMeta,
    followEyesPreview,
    followEyesDynamicPreview,
    followEyesTableProps,
    followEyesEditableProps,
    followEyesDependencies,
    followEyesUsageCode
} from './follow-eyes'
import {
    floatingTechStackMeta,
    floatingTechStackPreview,
    floatingTechStackDynamicPreview,
    floatingTechStackTableProps,
    floatingTechStackEditableProps,
    floatingTechStackDependencies,
    floatingTechStackUsageCode
} from './floating-tech-stack'





// ============================================
// COMPONENT TYPES
// ============================================

export interface ComponentMeta {
    name: string
    slug: string
    category: 'ui' | '3d' | 'gsap' | 'interaction'
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



    // DrawUnderline removed
    {
        ...textUnderlineMeta,
        preview: textUnderlinePreview,
    },
    {
        ...loopingWordsMeta,
        preview: loopingWordsPreview,
    },
    {
        ...animatedCounterMeta,
        preview: animatedCounterPreview,
    },
    {
        ...marqueeMeta,
        preview: marqueePreview,
    },
    {
        ...shinyCtaMeta,
        preview: shinyCtaPreview,
    },
    {
        ...stackedBlockTextMeta,
        preview: stackedBlockTextPreview,
    },
    {
        ...stackedCarouselMeta,
        preview: stackedCarouselPreview,
    },
    {
        ...highlightGalleryMeta,
        preview: highlightGalleryPreview,
    },
    {
        ...stackedInfoCardsMeta,
        preview: stackedInfoCardsPreview,
    },
    {
        ...drawerButtonMeta,
        preview: drawerButtonPreview,
    },
    {
        ...splashButtonMeta,
        preview: splashButtonPreview,
    },
    {
        ...bouncingLoaderMeta,
        preview: bouncingLoaderPreview,
    },
    {
        ...glowCardMeta,
        preview: glowCardPreview,
    },
    {
        ...waveCardMeta,
        preview: waveCardPreview,
    },
    {
        ...luminousCardMeta,
        preview: luminousCardPreview,
    },
    {
        ...socialClockMeta,
        preview: socialClockPreview,
    },
    {
        ...followEyesMeta,
        preview: followEyesPreview,
    },
    {
        ...floatingTechStackMeta,
        preview: floatingTechStackPreview,
    },

]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'split-text-reveal': splitTextRevealDynamicPreview,
    'glass-toggle': glassToggleDynamicPreview,
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
    'click-ripple': clickRippleDynamicPreview,
    'aurora-cursor': auroraCursorDynamicPreview,
    'content-reveal-card': contentRevealCardDynamicPreview,
    // 'draw-underline': drawUnderlineDynamicPreview,
    'text-underline': textUnderlineDynamicPreview,
    'looping-words': loopingWordsDynamicPreview,
    'animated-counter': animatedCounterDynamicPreview,
    'marquee': marqueeDynamicPreview,
    'shiny-cta': shinyCtaDynamicPreview,
    'stacked-block-text': stackedBlockTextDynamicPreview,
    'stacked-carousel': stackedCarouselDynamicPreview,
    'highlight-gallery': highlightGalleryDynamicPreview,
    'stacked-info-cards': stackedInfoCardsDynamicPreview,
    'drawer-button': drawerButtonDynamicPreview,
    'splash-button': splashButtonDynamicPreview,
    'bouncing-loader': bouncingLoaderDynamicPreview,
    'glow-card': glowCardDynamicPreview,
    'wave-card': waveCardDynamicPreview,
    'luminous-card': luminousCardDynamicPreview,
    'social-clock': socialClockDynamicPreview,
    'follow-eyes': followEyesDynamicPreview,
    'floating-tech-stack': floatingTechStackDynamicPreview,

}

// ============================================
// PROPS (aggregated from registry files)
// ============================================

export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'split-text-reveal': splitTextRevealTableProps,
    'glass-toggle': glassToggleTableProps,
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
    'click-ripple': clickRippleTableProps,
    'aurora-cursor': auroraCursorTableProps,
    'content-reveal-card': contentRevealCardTableProps,
    // 'draw-underline': drawUnderlineTableProps,
    'text-underline': textUnderlineTableProps,
    'looping-words': loopingWordsTableProps,
    'animated-counter': animatedCounterTableProps,
    'marquee': marqueeTableProps,
    'shiny-cta': shinyCtaTableProps,
    'stacked-block-text': stackedBlockTextTableProps,
    'stacked-carousel': stackedCarouselTableProps,
    'highlight-gallery': highlightGalleryTableProps,
    'stacked-info-cards': stackedInfoCardsTableProps,
    'drawer-button': drawerButtonTableProps,
    'splash-button': splashButtonTableProps,
    'bouncing-loader': bouncingLoaderTableProps,
    'glow-card': glowCardTableProps,
    'wave-card': waveCardTableProps,
    'luminous-card': luminousCardTableProps,
    'social-clock': socialClockTableProps,
    'follow-eyes': followEyesTableProps,
    'floating-tech-stack': floatingTechStackTableProps,

}

export const editableProps: Record<string, PropConfig[]> = {
    'split-text-reveal': splitTextRevealEditableProps,
    'glass-toggle': glassToggleEditableProps,
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
    'click-ripple': clickRippleEditableProps,
    'aurora-cursor': auroraCursorEditableProps,
    'content-reveal-card': contentRevealCardEditableProps,
    // 'draw-underline': drawUnderlineEditableProps,
    'text-underline': textUnderlineEditableProps,
    'looping-words': loopingWordsEditableProps,
    'animated-counter': animatedCounterEditableProps,
    'marquee': marqueeEditableProps,
    'shiny-cta': shinyCtaEditableProps,
    'stacked-block-text': stackedBlockTextEditableProps,
    'stacked-carousel': stackedCarouselEditableProps,
    'highlight-gallery': highlightGalleryEditableProps,
    'stacked-info-cards': stackedInfoCardsEditableProps,
    'drawer-button': drawerButtonEditableProps,
    'splash-button': splashButtonEditableProps,
    'bouncing-loader': bouncingLoaderEditableProps,
    'glow-card': glowCardEditableProps,
    'wave-card': waveCardEditableProps,
    'luminous-card': luminousCardEditableProps,
    'social-clock': socialClockEditableProps,
    'follow-eyes': followEyesEditableProps,
    'floating-tech-stack': floatingTechStackEditableProps,

}

export const componentDependencies: Record<string, string[]> = {
    'shatter-text': shatterTextDependencies,
    'content-reveal-card': contentRevealCardDependencies,
    'split-text-reveal': splitTextRevealDependencies,
    'glass-toggle': glassToggleDependencies,
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
    'click-ripple': clickRippleDependencies,
    'aurora-cursor': auroraCursorDependencies,
    // 'draw-underline': drawUnderlineDependencies,
    'text-underline': textUnderlineDependencies,
    'looping-words': loopingWordsDependencies,
    'animated-counter': animatedCounterDependencies,
    'marquee': marqueeDependencies,
    'shiny-cta': shinyCtaDependencies,
    'stacked-block-text': stackedBlockTextDependencies,
    'stacked-carousel': stackedCarouselDependencies,
    'highlight-gallery': highlightGalleryDependencies,
    'stacked-info-cards': stackedInfoCardsDependencies,
    'drawer-button': drawerButtonDependencies,
    'splash-button': splashButtonDependencies,
    'bouncing-loader': bouncingLoaderDependencies,
    'glow-card': glowCardDependencies,
    'wave-card': waveCardDependencies,
    'luminous-card': luminousCardDependencies,
    'social-clock': socialClockDependencies,
    'follow-eyes': followEyesDependencies,
    'floating-tech-stack': floatingTechStackDependencies,

}

export const componentUsageCodes: Record<string, string> = {
    'shatter-text': shatterTextUsageCode,
    'content-reveal-card': contentRevealCardUsageCode,
    'split-text-reveal': splitTextRevealUsageCode,
    'glass-toggle': glassToggleUsageCode,
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
    'click-ripple': clickRippleUsageCode,
    'aurora-cursor': auroraCursorUsageCode,
    // 'draw-underline': drawUnderlineUsageCode,
    'text-underline': textUnderlineUsageCode,
    'looping-words': loopingWordsUsageCode,
    'animated-counter': animatedCounterUsageCode,
    'marquee': marqueeUsageCode,
    'shiny-cta': shinyCtaUsageCode,
    'stacked-block-text': stackedBlockTextUsageCode,
    'stacked-carousel': stackedCarouselUsageCode,
    'highlight-gallery': highlightGalleryUsageCode,
    'stacked-info-cards': stackedInfoCardsUsageCode,
    'drawer-button': drawerButtonUsageCode,
    'splash-button': splashButtonUsageCode,
    'bouncing-loader': bouncingLoaderUsageCode,
    'glow-card': glowCardUsageCode,
    'wave-card': waveCardUsageCode,
    'luminous-card': luminousCardUsageCode,
    'social-clock': socialClockUsageCode,
    'follow-eyes': followEyesUsageCode,
    'floating-tech-stack': floatingTechStackUsageCode,

}

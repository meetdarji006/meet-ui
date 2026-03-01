"use client"
// Import all component registries
import {
    patternTextMeta,
    patternTextPreview,
    patternTextDynamicPreview,
    patternTextTableProps,
    patternTextEditableProps
} from './pattern-text'

import {
    morphingCardStackMeta,
    morphingCardStackPreview,
    morphingCardStackDynamicPreview,
    morphingCardStackTableProps,
    morphingCardStackEditableProps,
    morphingCardStackDependencies,
    morphingCardStackUsageCode,
} from './morphing-card-stack'

// Use a fallback empty array since we missed defining it in pattern-text.tsx
const patternTextDependencies: string[] = []
const patternTextUsageCode = `import { PatternText } from "@/components/ui/pattern-text"

export default function App() {
  return <PatternText text="Hello" />
}`

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
    textImageRevealMeta,
    textImageRevealPreview,
    textImageRevealDynamicPreview,
    textImageRevealTableProps,
    textImageRevealEditableProps,
    textImageRevealDependencies,
    textImageRevealUsageCode
} from './text-image-reveal'

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
    pixelCursorTrailMeta,
    pixelCursorTrailPreview,
    pixelCursorTrailDynamicPreview,
    pixelCursorTrailTableProps,
    pixelCursorTrailEditableProps,
    pixelCursorTrailDependencies,
    pixelCursorTrailUsageCode
} from './pixel-cursor-trail'
import {
    testimonialsSplitMeta,
    testimonialsSplitPreview,
    testimonialsSplitDynamicPreview,
    testimonialsSplitTableProps,
    testimonialsSplitEditableProps,
    testimonialsSplitDependencies,
    testimonialsSplitUsageCode
} from './testimonials-split'

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

import {
    isometricTechGridMetadata,
    isometricTechGridPreview,
    isometricTechGridDynamicPreview,
    isometricTechGridTableProps,
    isometricTechGridEditableProps,
    isometricTechGridDependencies,
    isometricTechGridUsageCode
} from './isometric-tech-grid'

import {
    hoverNameGalleryMetadata,
    hoverNameGalleryPreview,
    hoverNameGalleryDynamicPreview,
    hoverNameGalleryTableProps,
    hoverNameGalleryEditableProps,
    hoverNameGalleryDependencies,
    hoverNameGalleryUsageCode
} from './hover-name-gallery'

import {
    socialIconHoverMetadata,
    socialIconHoverPreview,
    socialIconHoverDynamicPreview,
    socialIconHoverTableProps,
    socialIconHoverEditableProps,
    socialIconHoverDependencies,
    socialIconHoverUsageCode
} from './social-icon-hover'

import {
    floatingTiltTagsMetadata,
    floatingTiltTagsPreview,
    floatingTiltTagsDynamicPreview,
    floatingTiltTagsTableProps,
    floatingTiltTagsEditableProps,
    floatingTiltTagsDependencies,
    floatingTiltTagsUsageCode
} from './floating-tilt-tags'

import {
    shootingStarMeta,
    shootingStarPreview,
    shootingStarDynamicPreview,
    shootingStarTableProps,
    shootingStarEditableProps,
    shootingStarDependencies,
    shootingStarUsageCode
} from './shooting-star'

import {
    ringCursorMeta,
    ringCursorPreview,
    ringCursorDynamicPreview,
    ringCursorTableProps,
    ringCursorEditableProps,
    ringCursorDependencies,
    ringCursorUsageCode
} from './ring-cursor'

import {
    fullScreenMenuMeta,
    fullScreenMenuPreview,
    fullScreenMenuDynamicPreview,
    fullScreenMenuTableProps,
    fullScreenMenuEditableProps,
    fullScreenMenuDependencies,
    fullScreenMenuUsageCode
} from './full-screen-menu'

import {
    liquidTextHoverMeta,
    liquidTextHoverPreview,
    liquidTextHoverDynamicPreview,
    liquidTextHoverTableProps,
    liquidTextHoverEditableProps,
    liquidTextHoverDependencies,
    liquidTextHoverUsageCode
} from './liquid-text-hover'

import {
    heroTextHoverMeta,
    heroTextHoverPreview,
    heroTextHoverDynamicPreview,
    heroTextHoverTableProps,
    heroTextHoverEditableProps,
    heroTextHoverDependencies,
    heroTextHoverUsageCode
} from './hero-text-hover'

import {
    interactiveHoverMenuMeta,
    interactiveHoverMenuPreview,
    interactiveHoverMenuDynamicPreview,
    interactiveHoverMenuTableProps,
    interactiveHoverMenuEditableProps,
    interactiveHoverMenuDependencies,
    interactiveHoverMenuUsageCode
} from './interactive-hover-menu'

import {
    zajnoTextHoverMeta,
    zajnoTextHoverPreview,
    zajnoTextHoverDynamicPreview,
    zajnoTextHoverTableProps,
    zajnoTextHoverEditableProps,
    zajnoTextHoverDependencies,
    zajnoTextHoverUsageCode
} from './zajno-text-hover'

import {
    gooeyTextMeta,
    gooeyTextPreview,
    gooeyTextDynamicPreview,
    gooeyTextEditableProps,
    gooeyTextUsageCode
} from './gooey-text'

import {
    staggeredTestimonialsMeta,
    staggeredTestimonialsPreview,
    staggeredTestimonialsDynamicPreview,
    staggeredTestimonialsEditableProps,
    staggeredTestimonialsUsageCode
} from './staggered-testimonials'

// ============================================
// COMPONENT TYPES
// ============================================

export interface ComponentMeta {
    name: string
    slug: string
    category: string
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
        ...textImageRevealMeta,
        preview: textImageRevealPreview,
    },
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
        ...hoverNameGalleryMetadata,
        slug: 'hover-name-gallery',
        category: 'Components',
        tags: ['Gallery', 'Hover', 'Naming', 'Interactive', 'Images'],
        preview: hoverNameGalleryPreview
    },
    {
        ...hyperTextMeta,
        preview: hyperTextPreview,
    },
    {
        ...isometricTechGridMetadata,
        slug: 'isometric-tech-grid',
        category: 'Components',
        tags: ['Isometric', '3D', 'Grid', 'Tech Stack', 'Hover'],
        preview: isometricTechGridPreview
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
        ...pixelCursorTrailMeta,
        preview: pixelCursorTrailPreview,
    },
    {
        ...contentRevealCardMeta,
        preview: contentRevealCardPreview,
    },
    {
        ...testimonialsSplitMeta,
        preview: testimonialsSplitPreview,
    },



    // DrawUnderline removed
    {
        ...textUnderlineMeta,
        preview: textUnderlinePreview,
    },
    {
        ...gooeyTextMeta,
        preview: gooeyTextPreview,
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
        ...staggeredTestimonialsMeta,
        preview: staggeredTestimonialsPreview,
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
    {
        ...shootingStarMeta,
        preview: shootingStarPreview,
    },
    {
        ...ringCursorMeta,
        preview: ringCursorPreview,
    },
    {
        ...fullScreenMenuMeta,
        preview: fullScreenMenuPreview,
    },
    {
        ...liquidTextHoverMeta,
        preview: liquidTextHoverPreview,
    },
    {
        ...heroTextHoverMeta,
        preview: heroTextHoverPreview,
    },
    {
        ...interactiveHoverMenuMeta,
        preview: interactiveHoverMenuPreview,
    },
    {
        ...zajnoTextHoverMeta,
        preview: zajnoTextHoverPreview,
    },
    {
        ...socialIconHoverMetadata,
        preview: socialIconHoverPreview,
    },
    {
        ...floatingTiltTagsMetadata,
        preview: floatingTiltTagsPreview,
    },
    {
        ...patternTextMeta,
        preview: patternTextPreview,
    },
    {
        ...morphingCardStackMeta,
        preview: morphingCardStackPreview,
    }
]

// ============================================
// DYNAMIC PREVIEWS (for playground)
// ============================================

export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {
    'text-image-reveal': textImageRevealDynamicPreview,
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
    'gooey-text': gooeyTextDynamicPreview,
    'looping-words': loopingWordsDynamicPreview,
    'animated-counter': animatedCounterDynamicPreview,
    'marquee': marqueeDynamicPreview,
    'shiny-cta': shinyCtaDynamicPreview,
    'stacked-block-text': stackedBlockTextDynamicPreview,
    'stacked-carousel': stackedCarouselDynamicPreview,
    'staggered-testimonials': staggeredTestimonialsDynamicPreview,
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
    'shooting-star': shootingStarDynamicPreview,
    'ring-cursor': ringCursorDynamicPreview,
    'full-screen-menu': fullScreenMenuDynamicPreview,
    'liquid-text-hover': liquidTextHoverDynamicPreview,
    'hero-text-hover': heroTextHoverDynamicPreview,
    'interactive-hover-menu': interactiveHoverMenuDynamicPreview,
    'zajno-text-hover': zajnoTextHoverDynamicPreview,
    'social-icon-hover': socialIconHoverDynamicPreview,
    'floating-tilt-tags': floatingTiltTagsDynamicPreview,
    'pattern-text': patternTextDynamicPreview,
    'morphing-card-stack': morphingCardStackDynamicPreview,
    'pixel-cursor-trail': pixelCursorTrailDynamicPreview,
    'testimonials-split': testimonialsSplitDynamicPreview,
}

// ============================================
// PROPS (aggregated from registry files)
// ============================================

export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'text-image-reveal': textImageRevealTableProps,
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
    'isometric-tech-grid': isometricTechGridTableProps,
    'hover-name-gallery': hoverNameGalleryTableProps,
    'social-icon-hover': socialIconHoverTableProps,
    'floating-tilt-tags': floatingTiltTagsTableProps,
    'shooting-star': shootingStarTableProps,
    'ring-cursor': ringCursorTableProps,
    'full-screen-menu': fullScreenMenuTableProps,
    'liquid-text-hover': liquidTextHoverTableProps,
    'hero-text-hover': heroTextHoverTableProps,
    'interactive-hover-menu': interactiveHoverMenuTableProps,
    'zajno-text-hover': zajnoTextHoverTableProps,
    'pattern-text': patternTextTableProps,
    'morphing-card-stack': morphingCardStackTableProps,
    'pixel-cursor-trail': pixelCursorTrailTableProps,
    'testimonials-split': testimonialsSplitTableProps,
}

export const editableProps: Record<string, PropConfig[]> = {
    'text-image-reveal': textImageRevealEditableProps,
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
    "stacked-carousel": stackedCarouselEditableProps,
    "staggered-testimonials": staggeredTestimonialsEditableProps,
    "highlight-gallery": highlightGalleryEditableProps,
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
    'isometric-tech-grid': isometricTechGridEditableProps,
    'hover-name-gallery': hoverNameGalleryEditableProps,
    'social-icon-hover': socialIconHoverEditableProps,
    'floating-tilt-tags': floatingTiltTagsEditableProps,
    'shooting-star': shootingStarEditableProps,
    'ring-cursor': ringCursorEditableProps,
    'full-screen-menu': fullScreenMenuEditableProps,
    'liquid-text-hover': liquidTextHoverEditableProps,
    'hero-text-hover': heroTextHoverEditableProps,
    'interactive-hover-menu': interactiveHoverMenuEditableProps,
    'zajno-text-hover': zajnoTextHoverEditableProps,
    'pattern-text': patternTextEditableProps,
    'morphing-card-stack': morphingCardStackEditableProps,
    'pixel-cursor-trail': pixelCursorTrailEditableProps,
    'testimonials-split': testimonialsSplitEditableProps,
}

export const componentDependencies: Record<string, string[]> = {
    'text-image-reveal': textImageRevealDependencies,
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
    'isometric-tech-grid': isometricTechGridDependencies,
    'hover-name-gallery': hoverNameGalleryDependencies,
    'social-icon-hover': socialIconHoverDependencies,
    'floating-tilt-tags': floatingTiltTagsDependencies,
    'shooting-star': shootingStarDependencies,
    'ring-cursor': ringCursorDependencies,
    'full-screen-menu': fullScreenMenuDependencies,
    'liquid-text-hover': liquidTextHoverDependencies,
    'hero-text-hover': heroTextHoverDependencies,
    'interactive-hover-menu': interactiveHoverMenuDependencies,
    'zajno-text-hover': zajnoTextHoverDependencies,
    'pattern-text': patternTextDependencies,
    'morphing-card-stack': morphingCardStackDependencies,
    'pixel-cursor-trail': pixelCursorTrailDependencies,
    'testimonials-split': testimonialsSplitDependencies,
}

export const componentUsageCodes: Record<string, string> = {
    'text-image-reveal': textImageRevealUsageCode,
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
    "stacked-carousel": stackedCarouselUsageCode,
    "staggered-testimonials": staggeredTestimonialsUsageCode,
    "highlight-gallery": highlightGalleryUsageCode,
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
    'isometric-tech-grid': isometricTechGridUsageCode,
    'hover-name-gallery': hoverNameGalleryUsageCode,
    'social-icon-hover': socialIconHoverUsageCode,
    'floating-tilt-tags': floatingTiltTagsUsageCode,
    'shooting-star': shootingStarUsageCode,
    'ring-cursor': ringCursorUsageCode,
    'full-screen-menu': fullScreenMenuUsageCode,
    'liquid-text-hover': liquidTextHoverUsageCode,
    'hero-text-hover': heroTextHoverUsageCode,
    'interactive-hover-menu': interactiveHoverMenuUsageCode,
    'morphing-card-stack': morphingCardStackUsageCode,
    'pixel-cursor-trail': pixelCursorTrailUsageCode,
    'testimonials-split': testimonialsSplitUsageCode,
}

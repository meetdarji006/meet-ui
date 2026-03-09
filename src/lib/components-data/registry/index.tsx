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
    preview?: (props: any) => React.ReactNode
    dynamicPreview?: (props: any) => React.ReactNode
    props?: PropConfig[]
    dependencies?: string[]
    usageCode?: string
}

export interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select' | string
    default: any
    description?: string
    options?: string[]
    min?: number
    max?: number
    step?: number
    isEditable?: boolean
    label?: string
}

// ============================================
// LIGHTWEIGHT METADATA (no component imports)
// ============================================
const componentMetadata: ComponentMeta[] = [
    { name: "Animated Counter", slug: "animated-counter", category: "ui", description: "Slot-machine style rolling digit animation for stats and dashboards.", tags: ["counter", "animation", "numbers"] },
    { name: "Aurora Cursor", slug: "aurora-cursor", category: "ui", description: "A stunning aurora borealis effect that follows your cursor with smooth trailing particles.", tags: ["cursor", "aurora", "particles", "animation"] },
    { name: "Blur Reveal", slug: "blur-reveal", category: "ui", description: "Elegant text reveal animation from a blurred state.", tags: ["text", "animation", "blur", "reveal"] },
    { name: "Bouncing Loader", slug: "bouncing-loader", category: "ui", description: "A text loader with staggered bouncing characters that wave up and down.", tags: ["loader", "animation", "bouncing"] },
    { name: "Click Ripple", slug: "click-ripple", category: "ui", description: "A beautiful ripple effect that expands from where you click on the page.", tags: ["click", "ripple", "animation", "cursor"] },
    { name: "Content Reveal Card", slug: "content-reveal-card", category: "ui", description: "An interactive card that reveals detailed content on hover with smooth animations.", tags: ["card", "hover", "reveal", "animation"] },
    { name: "Drawer Button", slug: "drawer-button", category: "ui", description: "A button with expanding corner marks, sliding drawer labels, and smooth scale effects.", tags: ["button", "drawer", "animation"] },
    { name: "Elastic Curve", slug: "elastic-curve", category: "ui", description: "An interactive SVG bezier curve that responds to mouse hover with elastic movement.", tags: ["svg", "curve", "elastic", "interaction"] },
    { name: "Floating Tech Stack", slug: "floating-tech-stack", category: "interaction", description: "An isometric 3D floating animation of a modern tech stack with dynamic icons.", tags: ["tech-stack", "floating", "3d", "animation"] },
    { name: "Floating Tilt Tags", slug: "floating-tilt-tags", category: "Hover Buttons", description: "A 3D perspective sticker pile component where text tags dynamically tilt on hover.", tags: ["tags", "tilt", "3d", "hover"] },
    { name: "Follow Eyes", slug: "follow-eyes", category: "interaction", description: "Two eyes that follow your mouse cursor with smooth pupil tracking.", tags: ["eyes", "cursor", "tracking", "animation"] },
    { name: "Full Screen Menu", slug: "full-screen-menu", category: "components", description: "A dynamic full-height fixed sliding menu with staggered link animations.", tags: ["menu", "fullscreen", "navigation", "animation"] },
    { name: "Glass Toggle", slug: "glass-toggle", category: "ui", description: "A premium photorealistic glassmorphism toggle switch with 3D depth effects.", tags: ["toggle", "glass", "switch", "3d"] },
    { name: "Glow Card", slug: "glow-card", category: "ui", description: "A premium dark stats card with a spinning conic halo and orbiting dot accents.", tags: ["card", "glow", "stats", "animation"] },
    { name: "Gooey Text", slug: "gooey-text", category: "ui", description: "A text animation with gooey morphing effect between characters.", tags: ["text", "gooey", "morphing", "animation"] },
    { name: "Mask Text Hover", slug: "mask-text-hover", category: "ui", description: "A text animation that reveals secondary text on hover using a clip mask effect.", tags: ["text", "hover", "mask", "animation"] },
    { name: "Highlight Gallery", slug: "highlight-gallery", category: "ui", description: "A gallery component with glowing highlight effect on hover.", tags: ["gallery", "highlight", "hover", "animation"] },
    { name: "Hover Name Gallery", slug: "hover-name-gallery", category: "ui", description: "A name gallery that reveals images on hover with smooth transitions.", tags: ["gallery", "hover", "names", "images"] },
    { name: "Hyper Text", slug: "hyper-text", category: "ui", description: "Text that scrambles through random characters before revealing the final text.", tags: ["text", "scramble", "animation", "reveal"] },
    { name: "Interactive Hover Menu", slug: "interactive-hover-menu", category: "ui", description: "A menu component with interactive hover effects and smooth transitions.", tags: ["menu", "hover", "interactive", "animation"] },
    { name: "Isometric Tech Grid", slug: "isometric-tech-grid", category: "ui", description: "An isometric grid layout showcasing tech stack icons with hover effects.", tags: ["grid", "isometric", "tech", "icons"] },
    { name: "Liquid Text Hover", slug: "liquid-text-hover", category: "ui", description: "Text that morphs with a liquid effect on hover.", tags: ["text", "liquid", "hover", "animation"] },
    { name: "Looping Words", slug: "looping-words", category: "ui", description: "A text component that loops through words with smooth transitions.", tags: ["text", "loop", "words", "animation"] },
    { name: "Luminous Card", slug: "luminous-card", category: "ui", description: "A card component with luminous glow effect that follows the cursor.", tags: ["card", "glow", "luminous", "cursor"] },
    { name: "Magnetic Cursor", slug: "magnetic-cursor", category: "ui", description: "Elements that magnetically attract toward the cursor on hover.", tags: ["cursor", "magnetic", "hover", "animation"] },
    { name: "Marquee", slug: "marquee", category: "ui", description: "A smooth infinite scrolling marquee component.", tags: ["marquee", "scroll", "infinite", "animation"] },
    { name: "Morphing Card Stack", slug: "morphing-card-stack", category: "ui", description: "A stack of cards that morph and transition between each other.", tags: ["cards", "stack", "morphing", "animation"] },
    { name: "Morphing Text", slug: "morphing-text", category: "ui", description: "Text that smoothly morphs between different words or phrases.", tags: ["text", "morphing", "animation", "transition"] },
    { name: "Orbit Ecosystem", slug: "orbit-ecosystem", category: "ui", description: "An orbital animation showcasing ecosystem elements in circular paths.", tags: ["orbit", "ecosystem", "animation", "circular"] },
    { name: "Pattern Text", slug: "pattern-text", category: "ui", description: "Text filled with dynamic patterns and textures.", tags: ["text", "pattern", "texture", "design"] },
    { name: "Pixel Cursor Trail", slug: "pixel-cursor-trail", category: "ui", description: "A pixelated trail effect that follows the cursor.", tags: ["cursor", "pixel", "trail", "animation"] },
    { name: "Ring Cursor", slug: "ring-cursor", category: "ui", description: "A ring-shaped custom cursor that follows mouse movement.", tags: ["cursor", "ring", "custom", "animation"] },
    { name: "Rubber Band Text", slug: "rubber-band-text", category: "ui", description: "Text characters that stretch and bounce like rubber bands on hover.", tags: ["text", "rubber", "bounce", "animation"] },
    { name: "Scroll Fill Text", slug: "scroll-fill-text", category: "ui", description: "Text that fills with color as the user scrolls down the page.", tags: ["text", "scroll", "fill", "animation"] },
    { name: "Shatter Text", slug: "shatter-text", category: "ui", description: "Text that shatters into pieces with a dramatic animation effect.", tags: ["text", "shatter", "animation", "dramatic"] },
    { name: "Shiny CTA", slug: "shiny-cta", category: "ui", description: "A call-to-action button with a shiny sweep animation effect.", tags: ["button", "shiny", "cta", "animation"] },
    { name: "Shooting Star", slug: "shooting-star", category: "ui", description: "A shooting star animation that streaks across the viewport.", tags: ["star", "shooting", "animation", "background"] },
    { name: "Signal Lines", slug: "signal-lines", category: "ui", description: "Animated signal lines radiating outward in a pulsing pattern.", tags: ["signal", "lines", "pulse", "animation"] },
    { name: "Social Clock", slug: "social-clock", category: "ui", description: "A social media-inspired clock component with smooth animations.", tags: ["clock", "social", "time", "animation"] },
    { name: "Social Icon Hover", slug: "social-icon-hover", category: "ui", description: "Social media icons with interactive hover effects and animations.", tags: ["social", "icons", "hover", "animation"] },
    { name: "Sparkles Text", slug: "sparkles-text", category: "ui", description: "Text adorned with sparkling particle effects.", tags: ["text", "sparkles", "particles", "animation"] },
    { name: "Splash Button", slug: "splash-button", category: "ui", description: "A button with a liquid splash animation on click.", tags: ["button", "splash", "liquid", "animation"] },
    { name: "Split Text Reveal", slug: "split-text-reveal", category: "ui", description: "Text that reveals by splitting characters apart with staggered animation.", tags: ["text", "split", "reveal", "animation"] },
    { name: "Spotlight Text", slug: "spotlight-text", category: "ui", description: "Text illuminated by a spotlight effect that follows the cursor.", tags: ["text", "spotlight", "cursor", "animation"] },
    { name: "Stacked Block Text", slug: "stacked-block-text", category: "ui", description: "Text blocks that stack and reveal with smooth slide animations.", tags: ["text", "stacked", "blocks", "animation"] },
    { name: "Stacked Carousel", slug: "stacked-carousel", category: "ui", description: "A carousel with stacked card transitions and depth effects.", tags: ["carousel", "stacked", "cards", "animation"] },
    { name: "Stacked Info Cards", slug: "stacked-info-cards", category: "ui", description: "Info cards that stack on top of each other with hover interactions.", tags: ["cards", "stacked", "info", "hover"] },
    { name: "Staggered Testimonials", slug: "staggered-testimonials", category: "ui", description: "Testimonial cards with staggered reveal animations.", tags: ["testimonials", "staggered", "cards", "animation"] },
    { name: "Stretch Text", slug: "stretch-text", category: "ui", description: "Text that stretches and expands on hover interaction.", tags: ["text", "stretch", "hover", "animation"] },
    { name: "Testimonials Split", slug: "testimonials-split", category: "ui", description: "A split-view testimonials component with image and text sections.", tags: ["testimonials", "split", "layout", "animation"] },
    { name: "Text Image Reveal", slug: "text-image-reveal", category: "ui", description: "Text that reveals underlying images on hover.", tags: ["text", "image", "reveal", "hover"] },
    { name: "Text Underline", slug: "text-underline", category: "ui", description: "Animated SVG underline effects for text elements.", tags: ["text", "underline", "svg", "animation"] },
    { name: "Typewriter Text", slug: "typewriter-text", category: "ui", description: "Classic typewriter effect with blinking cursor.", tags: ["text", "typewriter", "cursor", "animation"] },
    { name: "Wave Card", slug: "wave-card", category: "ui", description: "A card component with flowing wave animation effects.", tags: ["card", "wave", "animation", "flow"] },
    { name: "Zajno Text Hover", slug: "zajno-text-hover", category: "ui", description: "A premium text hover effect inspired by Zajno agency.", tags: ["text", "hover", "zajno", "animation"] },
];

// ============================================
// ALL COMPONENTS LIST (lightweight, for sidebar/search)
// ============================================
export const allComponents: ComponentMeta[] = componentMetadata;
export const componentsList: ComponentMeta[] = componentMetadata;

// ============================================
// DYNAMIC COMPONENT LOADER
// Loads the full ComponentEntry (preview, props, dependencies, etc.)
// only when a specific component page is visited
// ============================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registryImports: Record<string, () => Promise<any>> = {
    'animated-counter': () => import('./animated-counter'),
    'aurora-cursor': () => import('./aurora-cursor'),
    'blur-reveal': () => import('./blur-reveal'),
    'bouncing-loader': () => import('./bouncing-loader'),
    'click-ripple': () => import('./click-ripple'),
    'content-reveal-card': () => import('./content-reveal-card'),
    'drawer-button': () => import('./drawer-button'),
    'elastic-curve': () => import('./elastic-curve'),
    'floating-tech-stack': () => import('./floating-tech-stack'),
    'floating-tilt-tags': () => import('./floating-tilt-tags'),
    'follow-eyes': () => import('./follow-eyes'),
    'full-screen-menu': () => import('./full-screen-menu'),
    'glass-toggle': () => import('./glass-toggle'),
    'glow-card': () => import('./glow-card'),
    'gooey-text': () => import('./gooey-text'),
    'mask-text-hover': () => import('./mask-text-hover'),
    'highlight-gallery': () => import('./highlight-gallery'),
    'hover-name-gallery': () => import('./hover-name-gallery'),
    'hyper-text': () => import('./hyper-text'),
    'interactive-hover-menu': () => import('./interactive-hover-menu'),
    'isometric-tech-grid': () => import('./isometric-tech-grid'),
    'liquid-text-hover': () => import('./liquid-text-hover'),
    'looping-words': () => import('./looping-words'),
    'luminous-card': () => import('./luminous-card'),
    'magnetic-cursor': () => import('./magnetic-cursor'),
    'marquee': () => import('./marquee'),
    'morphing-card-stack': () => import('./morphing-card-stack'),
    'morphing-text': () => import('./morphing-text'),
    'orbit-ecosystem': () => import('./orbit-ecosystem'),
    'pattern-text': () => import('./pattern-text'),
    'pixel-cursor-trail': () => import('./pixel-cursor-trail'),
    'ring-cursor': () => import('./ring-cursor'),
    'rubber-band-text': () => import('./rubber-band-text'),
    'scroll-fill-text': () => import('./scroll-fill-text'),
    'shatter-text': () => import('./shatter-text'),
    'shiny-cta': () => import('./shiny-cta'),
    'shooting-star': () => import('./shooting-star'),
    'signal-lines': () => import('./signal-lines'),
    'social-clock': () => import('./social-clock'),
    'social-icon-hover': () => import('./social-icon-hover'),
    'sparkles-text': () => import('./sparkles-text'),
    'splash-button': () => import('./splash-button'),
    'split-text-reveal': () => import('./split-text-reveal'),
    'spotlight-text': () => import('./spotlight-text'),
    'stacked-block-text': () => import('./stacked-block-text'),
    'stacked-carousel': () => import('./stacked-carousel'),
    'stacked-info-cards': () => import('./stacked-info-cards'),
    'staggered-testimonials': () => import('./staggered-testimonials'),
    'stretch-text': () => import('./stretch-text'),
    'testimonials-split': () => import('./testimonials-split'),
    'text-image-reveal': () => import('./text-image-reveal'),
    'text-underline': () => import('./text-underline'),
    'typewriter-text': () => import('./typewriter-text'),
    'wave-card': () => import('./wave-card'),
    'zajno-text-hover': () => import('./zajno-text-hover'),
};

// Cache loaded entries to avoid re-importing
const entryCache = new Map<string, ComponentEntry>();

export async function loadComponentEntry(slug: string): Promise<ComponentEntry | null> {
    // Return from cache if already loaded
    if (entryCache.has(slug)) {
        return entryCache.get(slug)!;
    }

    const loader = registryImports[slug];
    if (!loader) return null;

    try {
        const mod = await loader();
        // Find the registry export (it ends with "Registry")
        const registryKey = Object.keys(mod).find(k => k.endsWith('Registry'));
        if (registryKey) {
            const entry = (mod as any)[registryKey] as ComponentEntry;
            entryCache.set(slug, entry);
            return entry;
        }
        return null;
    } catch (e) {
        console.error(`Failed to load component: ${slug}`, e);
        return null;
    }
}

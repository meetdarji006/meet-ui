"use client"

import { InteractiveHoverMenu } from "@/components/ui/interactive-hover-menu"
import { PropConfig, ComponentEntry } from "./index";

// ============================================
// METADATA
// ============================================
export const interactiveHoverMenuMeta = {
    name: 'Interactive Hover Menu',
    slug: 'interactive-hover-menu',
    category: 'menus' as const,
    description: 'A full-screen vertical accordion menu that highlights the entire row on hover and reveals a description.',
    tags: ['React', 'Framer Motion', 'Hover', 'Accordion', 'Menu'],
}

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
// ============================================
// PREVIEWS
// ============================================

const DUMMY_ITEMS = [
    { id: '1', title: '3D' },
    { id: '2', title: 'VISUAL' },
    { id: '3', title: 'MOTION', description: 'I use fancy motion that makes my design more interesting that it actually is' },
    { id: '4', title: 'PRODUCT', description: 'I utilize common design best practices, test, and re-iterate until it works (hopefully).' },
    { id: '5', title: 'TUTORIAL' },
]

// Standard Preview for Registry Grid
// Dynamic Preview for Playground
export const interactiveHoverMenuPreview = (props: Record<string, any>) => {
    return (
        <div className="w-full relative">
            <InteractiveHoverMenu
                items={DUMMY_ITEMS}
                activeColor={props.activeColor || '#8b5cf6'}
                className="w-full h-full justify-center py-10"
                titleClassName="text-2xl sm:text-5xl md:text-6xl lg:text-7xl"
            />
        </div>
    )
}

// ============================================
// DEPENDENCIES
// ============================================
export const interactiveHoverMenuDependencies = [
    "framer-motion",
    "clsx",
    "tailwind-merge"
]

// ============================================
// USAGE CODE
// ============================================
export const interactiveHoverMenuUsageCode = `<div className="w-full bg-black min-h-screen">
  <InteractiveHoverMenu items={MENU_ITEMS} />
</div>`
export const interactiveHoverMenuProps: PropConfig[] = [
    { name: 'items', type: 'HoverMenuItem[]', default: '[]', description: 'Array of { id, title, description } objects.' },
    {
        isEditable: true,
        name: 'activeColor',
        type: 'string',
        default: '#8b5cf6',
        description: 'Toggles the vibrant background on hover',
    },
    { name: 'activeTextColor', type: 'string', default: '"#ffffff"', description: 'Text color of the hovered row.' },
    { name: 'baseTextColor', type: 'string', default: '"#a1a1aa"', description: 'Text color of un-hovered rows.' },
    { name: 'className', type: 'string', default: '""', description: 'Container wrapper styles.' },
    { name: 'titleClassName', type: 'string', default: '""', description: 'Styles for the main large text.' },
    { name: 'descriptionClassName', type: 'string', default: '""', description: 'Styles for the revealed description text.' }
];
export const interactiveHoverMenuRegistry: ComponentEntry = {
    ...interactiveHoverMenuMeta,
    preview: interactiveHoverMenuPreview,
    props: interactiveHoverMenuProps,
    dependencies: interactiveHoverMenuDependencies,
    usageCode: interactiveHoverMenuUsageCode,
};

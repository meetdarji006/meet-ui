"use client"

import { InteractiveHoverMenu } from "@/components/ui/interactive-hover-menu"

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
export const interactiveHoverMenuTableProps = [
    { name: 'items', type: 'HoverMenuItem[]', default: '[]', description: 'Array of { id, title, description } objects.' },
    { name: 'activeColor', type: 'string', default: '"#8b5cf6"', description: 'Background color of the hovered row.' },
    { name: 'activeTextColor', type: 'string', default: '"#ffffff"', description: 'Text color of the hovered row.' },
    { name: 'baseTextColor', type: 'string', default: '"#a1a1aa"', description: 'Text color of un-hovered rows.' },
    { name: 'className', type: 'string', default: '""', description: 'Container wrapper styles.' },
    { name: 'titleClassName', type: 'string', default: '""', description: 'Styles for the main large text.' },
    { name: 'descriptionClassName', type: 'string', default: '""', description: 'Styles for the revealed description text.' },
]

// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
export const interactiveHoverMenuEditableProps = [
    {
        name: 'activeColor',
        type: 'string' as const,
        default: '#8b5cf6',
        description: 'Toggles the vibrant background on hover',
    },
]

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
export const interactiveHoverMenuPreview = () => (
    <div className="w-full h-[300px] rounded-lg overflow-hidden relative border border-white/5">
        <InteractiveHoverMenu
            items={DUMMY_ITEMS}
            className="scale-50 origin-top-left flex-none min-w-[200%] p-0 py-0"
            titleClassName="text-6xl"
        />
    </div>
)

// Dynamic Preview for Playground
export const interactiveHoverMenuDynamicPreview = (props: Record<string, any>) => {
    return (
        <div className="w-full relative">
            <InteractiveHoverMenu
                items={DUMMY_ITEMS}
                activeColor={props.activeColor || '#8b5cf6'}
                className="w-full h-full  justify-center py-10"
                titleClassName="md:text-[3rem] lg:text-[5rem] 2xl:text-[7rem]"
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
export const interactiveHoverMenuUsageCode = `import { InteractiveHoverMenu } from "@/components/ui/interactive-hover-menu"

export default function App() {
  const MENU_ITEMS = [
    { id: '1', title: '3D' },
    { id: '2', title: 'VISUAL' },
    {
       id: '3',
       title: 'MOTION',
       description: 'I use fancy motion that makes my design more interesting that it actually is'
    },
    {
        id: '4',
        title: 'PRODUCT',
        description: 'I utilize common design best practices, test, and re-iterate until it works (hopefully).'
    },
    { id: '5', title: 'TUTORIAL' },
  ]

  return (
    <div className="w-full bg-black min-h-screen">
      <InteractiveHoverMenu items={MENU_ITEMS} />
    </div>
  )
}`

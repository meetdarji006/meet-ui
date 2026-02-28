"use client"

import { HeroTextHover } from "@/components/ui/hero-text-hover"

// ============================================
// METADATA
// ============================================
export const heroTextHoverMeta = {
    name: 'Hero Text Hover',
    slug: 'hero-text-hover',
    category: 'text-animations' as const,
    description: 'A dual-layered text effect that reveals secondary content via a cursor-following circular mask.',
    tags: ['React', 'Framer Motion', 'Hover', 'Masking'],
}

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
export const heroTextHoverTableProps = [
    { name: 'baseText', type: 'string', default: '"Hover Me"' },
    { name: 'revealText', type: 'string', default: '"Hidden Layer"' },
    { name: 'baseLayerClassName', type: 'string', default: '""', description: 'Styles for the bottom text layer' },
    { name: 'revealLayerClassName', type: 'string', default: '""', description: 'Styles for the top revealing text layer' },
    { name: 'className', type: 'string', default: '""', description: 'Styles for the container' },
]

// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
export const heroTextHoverEditableProps = [
    {
        name: 'baseText',
        type: 'string' as const,
        default: 'Minh Pham Design',
        description: 'The visible text layer',
    },
    {
        name: 'revealText',
        type: 'string' as const,
        default: 'Interactive',
        description: 'The text revealed inside the circle',
    },
]

// ============================================
// PREVIEWS
// ============================================

const minhPhamText = [
    { text: "MAKING", color: "#D0C7B5" },
    { text: "GOOD", color: "#ea580c" },
    { text: "SHIT", color: "#ea580c" },
    { text: "SINCE", color: "#D0C7B5" },
    { text: "2009", color: "#D0C7B5" }
];
const minhPhamRevealText = [
    { text: "HIDING", color: "#0a0a0a" },
    { text: "BAD", color: "#0a0a0a" },
    { text: "SHIT", color: "#0a0a0a" },
    { text: "SINCE", color: "#0a0a0a" },
    { text: "2009", color: "#0a0a0a" }
];

// Standard Preview for Registry Grid
export const heroTextHoverPreview = () => (
    <div className="w-full h-[300px] rounded-lg overflow-hidden relative">
        <HeroTextHover
            baseText={minhPhamText}
            revealText={minhPhamRevealText}
            className="w-full h-full py-0 px-0 bg-[#0a0a0a] "
            baseLayerClassName="text-4xl"
            revealLayerClassName="text-4xl bg-[#ea580c]"
        />
    </div>
)

// Dynamic Preview for Playground
export const heroTextHoverDynamicPreview = (props: Record<string, any>) => {
    const isDefault = !props.baseText || props.baseText === 'Minh Pham Design';

    return (
        <HeroTextHover
            baseText={isDefault ? minhPhamText : props.baseText}
            revealText={isDefault ? minhPhamRevealText : props.revealText}
            className="w-full min-h-[600px] rounded-2xl bg-[#0a0a0a]"
            baseLayerClassName="text-6xl md:text-8xl lg:text-9xl"
            revealLayerClassName="text-6xl md:text-8xl lg:text-9xl bg-[#ea580c]"
        />
    )
}

// ============================================
// DEPENDENCIES
// ============================================
export const heroTextHoverDependencies = [
    "framer-motion",
    "clsx",
    "tailwind-merge"
]

// ============================================
// USAGE CODE
// ============================================
export const heroTextHoverUsageCode = `import { HeroTextHover } from "@/components/ui/hero-text-hover"

export default function App() {
  const baseContent = [
    { text: "MAKING", color: "#D0C7B5" },
    { text: "GOOD", color: "#ea580c" },
    { text: "SHIT", color: "#ea580c" },
    { text: "SINCE", color: "#D0C7B5" },
    { text: "2009", color: "#D0C7B5" }
  ];

  const revealContent = [
    { text: "HIDING", color: "#0a0a0a" },
    { text: "BAD", color: "#0a0a0a" },
    { text: "SHIT", color: "#0a0a0a" },
    { text: "SINCE", color: "#0a0a0a" },
    { text: "2009", color: "#0a0a0a" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <HeroTextHover
        baseText={baseContent}
        revealText={revealContent}
        className="w-full min-h-screen"
        baseLayerClassName="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
        revealLayerClassName="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter bg-[#ea580c]"
      />
    </div>
  )
}`

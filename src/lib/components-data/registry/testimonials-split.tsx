"use client"

import { TestimonialsSplit } from "@/components/ui/testimonials-split"

export const testimonialsSplitMeta = {
    name: 'Testimonials Split',
    slug: 'testimonials-split',
    category: 'ui' as const,
    description: 'A modern split-layout testimonial carousel with smooth quote and image transitions.',
    tags: ['testimonial', 'carousel', 'split', 'animation', 'interactive'],
}

const defaultTestimonials = [
    {
        id: 1,
        quote: "A rare talent who bridges the gap between aesthetics and functionality with remarkable precision.",
        name: "Sarah Chen",
        role: "Design Director",
        company: "Figma",
        image: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        quote: "Every pixel tells a story. Working together elevated our entire brand experience.",
        name: "Marcus Webb",
        role: "Creative Lead",
        company: "Stripe",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        quote: "Transforms complex problems into elegant, intuitive solutions that users love.",
        name: "Elena Voss",
        role: "Head of Product",
        company: "Linear",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
]

// Props for documentation table
export const testimonialsSplitTableProps = [
    { name: 'testimonials', type: 'Testimonial[]', default: '[]' },
    { name: 'className', type: 'string', default: '""' },
]

// Editable props for playground
export const testimonialsSplitEditableProps = []

export const testimonialsSplitDependencies = ["framer-motion", "lucide-react"]

export const testimonialsSplitUsageCode = `import { TestimonialsSplit } from "@/components/ui/testimonials-split"

const testimonials = [
  {
    id: 1,
    quote: "A rare talent who bridges the gap between aesthetics and functionality.",
    name: "Sarah Chen",
    role: "Design Director",
    company: "Figma",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
  // ... more testimonials
]

export default function App() {
  return (
    <div className="py-20">
      <TestimonialsSplit testimonials={testimonials} />
    </div>
  )
}`

// Small preview for grid
export const testimonialsSplitPreview = () => (
    <div className="w-64 h-40 flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden relative p-4 gap-4">
        <div className="flex-1 space-y-2">
            <div className="w-12 h-1 bg-white/20 rounded" />
            <div className="w-full h-2 bg-white/10 rounded" />
            <div className="w-4/5 h-2 bg-white/10 rounded" />
            <div className="w-16 h-2 bg-white/20 rounded mt-4" />
        </div>
        <div className="w-16 h-20 bg-white/10 rounded-lg shrink-0" />
        <div className="absolute bottom-2 left-4 flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
    </div>
)

// Large interactive preview
export const testimonialsSplitDynamicPreview = (props: any) => (
    <div className="py-12 bg-background flex items-center justify-center min-h-[500px] w-full">
        <TestimonialsSplit
            testimonials={defaultTestimonials}
            {...props}
        />
    </div>
)

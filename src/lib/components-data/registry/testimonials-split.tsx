"use client"

import { TestimonialsSplit } from "@/components/ui/testimonials-split"
import { PropConfig, ComponentEntry } from "./index";

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
// Editable props for playground
export const testimonialsSplitDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const testimonialsSplitUsageCode = `const testimonials = [
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
// Large interactive preview
export const testimonialsSplitPreview = (props: any) => (
    <div className="py-12 bg-background flex items-center justify-center min-h-[500px] w-full">
        <TestimonialsSplit
            testimonials={defaultTestimonials}
            {...props}
        />
    </div>
)
export const testimonialsSplitProps: PropConfig[] = [
        { name: 'testimonials', type: 'Testimonial[]', default: '[]' },
        { name: 'className', type: 'string', default: '""' }
    ];
export const testimonialsSplitRegistry: ComponentEntry = {
        ...testimonialsSplitMeta,
        preview: testimonialsSplitPreview,
        props: testimonialsSplitProps,
        dependencies: testimonialsSplitDependencies,
        usageCode: testimonialsSplitUsageCode,
    };

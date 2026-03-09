import type { Metadata } from "next"
import { Hero } from "@/components/home/hero";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { About } from "@/components/home/about";
import { Features } from "@/components/home/features";
import { LibraryOverview } from "@/components/home/library-overview";
import { FAQ } from "@/components/home/faq";
import { allComponents } from "@/lib/components-data/registry";

export const metadata: Metadata = {
    title: "MeetUI - Modern Animated UI Components for React & Next.js",
    description: "An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces. 55+ free components.",
    alternates: {
        canonical: "/",
    },
}

// ItemList schema — signals Google about important content items (helps generate sitelinks)
const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MeetUI Components",
    description: "Browse all animated React UI components",
    numberOfItems: allComponents.length,
    itemListElement: allComponents.map((component, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: component.name,
        url: `https://meetui.dev/components/${component.slug}`,
        description: component.description,
    })),
}

// FAQPage schema — can trigger FAQ rich results in Google Search
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is this component library free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, MeetUI is completely free and open source. You can use it in both personal and commercial projects without any restrictions.",
            },
        },
        {
            "@type": "Question",
            name: "Does it work with React Server Components?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Our components are designed with Next.js App Router in mind. Interactive components include the 'use client' directive.",
            },
        },
        {
            "@type": "Question",
            name: "Can I customize the colors and styling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! MeetUI is built on top of Tailwind CSS. We use CSS variables for our core color palette, making it extremely easy to theme.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to install Framer Motion?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most of our advanced animated components and interactions use Framer Motion. While not strictly required for the static layouts, we highly recommend it for the best experience.",
            },
        },
    ],
}

export default function Home() {
    return (
        <div className="relative z-10 max-w-7xl mx-auto">
            {/* ItemList JSON-LD — lists all components for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            {/* FAQPage JSON-LD — triggers FAQ rich results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Hero />
            <LogoMarquee />
            <About />
            <LibraryOverview />
            <Features />
            <FAQ />
        </div>
    );
}

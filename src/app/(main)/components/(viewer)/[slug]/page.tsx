import { Metadata } from "next"
import { componentsList } from "@/lib/components-data"
import ComponentViewerPageClient from "./page-client"

export async function generateStaticParams() {
    return componentsList.map((component) => ({
        slug: component.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const component = componentsList.find(c => c.slug === slug)

    if (!component) {
        return { title: "Component Not Found" }
    }

    const title = `${component.name} - Animated React Component`
    const description = `${component.description} Free, open-source, copy-paste ready. Built with React, Tailwind CSS & Framer Motion.`

    return {
        title,
        description,
        keywords: [
            component.name,
            ...component.tags,
            "React component",
            "animated component",
            "MeetUI",
            "Tailwind CSS",
            "Framer Motion",
        ],
        alternates: {
            canonical: `/components/${slug}`,
        },
        openGraph: {
            title: `${component.name} | MeetUI`,
            description: component.description,
            url: `https://meetui.dev/components/${slug}`,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${component.name} | MeetUI`,
            description: component.description,
        },
    }
}

export default async function ComponentViewerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const component = componentsList.find(c => c.slug === slug)

    // JSON-LD structured data for this component
    const jsonLd = component ? {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareSourceCode",
                name: component.name,
                description: component.description,
                programmingLanguage: "TypeScript",
                runtimePlatform: "React",
                license: "https://opensource.org/licenses/MIT",
                codeRepository: "https://github.com/meetdarji006/meet-ui",
                keywords: component.tags.join(", "),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://meetui.dev",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Components",
                        item: "https://meetui.dev/components/blur-reveal",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: component.name,
                        item: `https://meetui.dev/components/${slug}`,
                    },
                ],
            },
        ],
    } : null

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <ComponentViewerPageClient params={params} />
        </>
    )
}

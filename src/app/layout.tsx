import type { Metadata } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { allComponents } from "@/lib/components-data/registry";


const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "MeetUI - Modern Animated UI Components for React & Next.js",
        template: "%s | MeetUI"
    },
    description: "An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces. Built with Next.js 15, Tailwind CSS v4, Framer Motion & Three.js.",
    keywords: [
        "React components", "animated components", "UI library", "Next.js components",
        "Tailwind CSS components", "Framer Motion", "Three.js", "copy paste components",
        "open source UI", "animation library", "interactive components", "React animation",
        "modern UI components", "web animation", "glassmorphism", "hover effects",
        "cursor effects", "text animations", "card components", "button animations",
        "MeetUI", "Meet Darji",
    ],
    authors: [{ name: "Meet Darji", url: "https://github.com/meetdarji006" }],
    creator: "Meet Darji",
    publisher: "Meet Darji",
    metadataBase: new URL("https://meetui.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://meetui.dev",
        siteName: "MeetUI",
        title: "MeetUI - Modern Animated UI Components for React & Next.js",
        description: "An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces.",
        images: [
            {
                url: "https://meetui.dev/og-image.png",
                width: 1200,
                height: 630,
                alt: "MeetUI - Modern Animated UI Components",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MeetUI - Modern Animated UI Components",
        description: "An open source collection of high quality, animated, interactive & fully customizable React components.",
        creator: "@meetdarji006",
        images: ["https://meetui.dev/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// JSON-LD structured data for Google rich results & sitelinks
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        // WebSite — triggers sitelinks searchbox
        {
            "@type": "WebSite",
            "@id": "https://meetui.dev/#website",
            name: "MeetUI",
            url: "https://meetui.dev",
            description: "An open source collection of high quality, animated, interactive & fully customizable React components.",
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://meetui.dev/components/{search_term_string}",
                },
                "query-input": "required name=search_term_string",
            },
        },
        // Organization — brand identity
        {
            "@type": "Organization",
            "@id": "https://meetui.dev/#organization",
            name: "MeetUI",
            url: "https://meetui.dev",
            logo: {
                "@type": "ImageObject",
                url: "https://meetui.dev/icon.svg",
            },
            founder: {
                "@type": "Person",
                name: "Meet Darji",
                url: "https://github.com/meetdarji006",
            },
            sameAs: [
                "https://github.com/meetdarji006/meet-ui",
            ],
        },
        // SiteNavigationElement — signals main nav pages for sitelinks
        {
            "@type": "SiteNavigationElement",
            "@id": "https://meetui.dev/#navigation",
            name: "Main Navigation",
            hasPart: [
                { "@type": "WebPage", name: "Home", url: "https://meetui.dev" },
                { "@type": "WebPage", name: "Documentation", url: "https://meetui.dev/docs" },
                ...allComponents.slice(0, 3).map(c => ({
                    "@type": "WebPage",
                    name: c.name,
                    url: `https://meetui.dev/components/${c.slug}`,
                })),
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${dmSans.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20`}
            >
                {/* Global JSON-LD structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

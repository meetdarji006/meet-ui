import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Getting Started - Documentation",
    description: "Learn how to install MeetUI and start building stunning animated interfaces in minutes. Copy-paste ready React components with Tailwind CSS and Framer Motion.",
    keywords: ["MeetUI documentation", "install MeetUI", "getting started", "React component library setup", "Tailwind CSS setup", "Framer Motion setup"],
    alternates: {
        canonical: "/docs",
    },
    openGraph: {
        title: "Getting Started - MeetUI Documentation",
        description: "Learn how to install MeetUI and start building stunning animated interfaces in minutes.",
        url: "https://meetui.dev/docs",
    },
}

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

import React from 'react'
import { SocialIconHover } from '@/components/ui/social-icon-hover'
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'

export const socialIconHoverMetadata = {
    name: 'Social Icon Hover',
    description: 'A circular social button that fills with color from bottom-up on hover, while shrinking its icon via smooth cubic-bezier transitions.',
    component: SocialIconHover,
    colSpan: 1,
    slug: 'social-icon-hover',
    category: 'Hover Buttons',
    tags: ['hover', 'social', 'icon', 'button', 'animation'],
}

export const socialIconHoverDependencies: string[] = ["lucide-react"]

export const socialIconHoverTableProps = [
    { name: 'icon', type: 'React.ReactNode', default: 'undefined', description: 'The icon to display inside the button (e.g., SVG, Lucide Icon). Required.' },
    { name: 'color', type: 'string', default: '"#a855f7"', description: 'The hex, rgb, or color string for the background fill on hover.' },
    { name: 'href', type: 'string', default: 'undefined', description: 'The URL link for the anchor tag to make it completely navigable.' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes to style the outer container (useful for passing w-* and h-*).' },
]

export const socialIconHoverEditableProps = [
    {
        name: 'color',
        type: 'string' as const,
        default: '#a855f7',
        description: 'Hover Fill Color',
    }
]

export const socialIconHoverPreview = () => {
    return (
        <div className="flex items-center justify-center gap-6 h-[400px] w-full bg-[#111]">
            <SocialIconHover
                icon={<Twitter className="w-5 h-5 text-white" />}
                color="#1DA1F2"
                href="#"
            />
            <SocialIconHover
                icon={<Instagram className="w-5 h-5 text-white" />}
                color="#E1306C"
                className="w-16 h-16"
                href="#"
            />
            <SocialIconHover
                icon={<Linkedin className="w-5 h-5 text-white" />}
                color="#0077b5"
                href="#"
            />
            <SocialIconHover
                icon={<Github className="w-5 h-5 text-white" />}
                color="#333"
                href="#"
            />
        </div>
    )
}

export const socialIconHoverDynamicPreview = ({ color }: any) => {
    return (
        <div className="flex items-center justify-center gap-5">
            <SocialIconHover
                icon={<Instagram className="w-6 h-6 text-white" />}
                color={color ?? "#a855f7"}
                className="w-20 h-20"
            />
            <SocialIconHover
                icon={<Github className="w-6 h-6 text-white" />}
                color={color ?? "#a855f7"}
                className="w-20 h-20"
            />
            <SocialIconHover
                icon={<Twitter className="w-6 h-6 text-white" />}
                color={color ?? "#a855f7"}
                className="w-20 h-20"
            />
        </div>
    )
}

export const socialIconHoverUsageCode = `import { SocialIconHover } from "@/components/ui/social-icon-hover"
import { Instagram } from "lucide-react"

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#111]">
        <SocialIconHover
        icon={<Instagram className="w-6 h-6 text-white" />}
        color="#a855f7"
        className="w-16 h-16"
        href="#"
        />
    </div>
  )
}`

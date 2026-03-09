import React from 'react'
import { SocialIconHover } from '@/components/ui/social-icon-hover'
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'
import { PropConfig, ComponentEntry } from "./index";

export const socialIconHoverMetadata = {
    name: 'Social Icon Hover',
    description: 'A circular social button that fills with color from bottom-up on hover, while shrinking its icon via smooth cubic-bezier transitions.',
    component: SocialIconHover,
    colSpan: 1,
    slug: 'social-icon-hover',
    category: 'Hover Buttons',
    tags: ['hover', 'social', 'icon', 'button', 'animation'],
}

export const socialIconHoverDependencies: string[] = ["lucide-react", "clsx", "tailwind-merge"];
export const socialIconHoverPreview = ({ color, iconColor, bgColor, easing, duration }: any) => {
    return (
        <div className="flex items-center justify-center gap-5">
            <SocialIconHover
                icon={<Instagram className="w-6 h-6" />}
                color={color ?? "#a855f7"}
                iconColor={iconColor ?? "#ffffff"}
                bgColor={bgColor ?? "#2A2929"}
                easing={easing ?? "cubic-bezier(0.23,1,0.32,1)"}
                duration={duration ?? 600}
                className="w-20 h-20"
            />
            <SocialIconHover
                icon={<Github className="w-6 h-6" />}
                color={color ?? "#a855f7"}
                iconColor={iconColor ?? "#ffffff"}
                bgColor={bgColor ?? "#2A2929"}
                easing={easing ?? "cubic-bezier(0.23,1,0.32,1)"}
                duration={duration ?? 600}
                className="w-20 h-20"
            />
            <SocialIconHover
                icon={<Twitter className="w-6 h-6" />}
                color={color ?? "#a855f7"}
                iconColor={iconColor ?? "#ffffff"}
                bgColor={bgColor ?? "#2A2929"}
                easing={easing ?? "cubic-bezier(0.23,1,0.32,1)"}
                duration={duration ?? 600}
                className="w-20 h-20"
            />
        </div>
    )
}

export const socialIconHoverUsageCode = `<div className="flex items-center justify-center gap-4">
  <SocialIconHover
    icon={<Instagram className="w-6 h-6" />}
    color="#a855f7"
    iconColor="#ffffff"
    bgColor="#2A2929"
    easing="cubic-bezier(0.23,1,0.32,1)"
    duration={600}
    className="w-16 h-16"
    href="#"
  />
</div>`
export const socialIconHoverProps: PropConfig[] = [
    { name: 'icon', type: 'React.ReactNode', default: 'undefined', description: 'The icon element to display inside the button (e.g., a Lucide icon or SVG). Required.' },
    {
        isEditable: true,
        name: 'color',
        type: 'string',
        default: '#a855f7',
        description: 'The background color that fills from bottom-up on hover. On mobile it is always visible.',
    },
    {
        isEditable: true,
        name: 'iconColor',
        type: 'string',
        default: '#ffffff',
        description: 'Color applied to the icon element (CSS color value).',
    },
    {
        isEditable: true,
        name: 'bgColor',
        type: 'string',
        default: '#2A2929',
        description: 'Background color of the button in its inactive (non-hovered) state.',
    },
    {
        isEditable: true,
        name: 'easing',
        type: 'string',
        default: 'cubic-bezier(0.23,1,0.32,1)',
        description: 'CSS easing function used for the fill and icon scale animations.',
    },
    {
        isEditable: true,
        name: 'duration',
        type: 'number',
        default: '600',
        description: 'Animation duration in milliseconds for the hover fill and icon transitions.',
    },
    { name: 'href', type: 'string', default: 'undefined', description: 'URL for the anchor tag. When provided the button renders as an <a> element.' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes for the outer container (e.g., w-* and h-* to control size).' }
];
export const socialIconHoverRegistry: ComponentEntry = {
    ...socialIconHoverMetadata,
    preview: socialIconHoverPreview,
    props: socialIconHoverProps,
    dependencies: socialIconHoverDependencies,
    usageCode: socialIconHoverUsageCode,
};


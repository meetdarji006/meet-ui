
import { ContentRevealCard } from "@/components/ui/content-reveal-card";
import { ComponentMeta } from "./index";

export const contentRevealCardMeta: ComponentMeta = {
    name: "Content Reveal Card",
    slug: "content-reveal-card",
    category: "ui",
    description: "An interactive card that reveals detailed content on hover with a smooth layout transition.",
    tags: ["card", "hover", "animation", "reveal", "glassmorphism"],
}

export const contentRevealCardTableProps = [
    { name: 'title', type: 'string', default: '-' },
    { name: 'description', type: 'string', default: '-' },
    { name: 'actionText', type: 'string', default: 'Tell me more' },
    { name: 'className', type: 'string', default: '-' },
]

export const contentRevealCardEditableProps = [
    { name: 'title', type: 'string' as const, default: 'Meet UI', description: 'Card title' },
    { name: 'description', type: 'string' as const, default: 'Experience silky smooth layout transitions and reveal effects powered by Framer Motion.', description: 'Card description' },
    { name: 'actionText', type: 'string' as const, default: 'Explore', description: 'Action button text' },
    { name: 'duration', type: 'number' as const, default: 0.5, min: 0.2, max: 2.0, step: 0.1, description: 'Animation duration (s)' },
    { name: 'size', type: 'number' as const, default: 300, min: 200, max: 600, step: 10, description: 'Card width (px)' },
    { name: 'hoverBackgroundColor', type: 'string' as const, default: '', description: 'Hover BG Color (hex/rgba)' },
    { name: 'icon', type: 'select' as const, options: ['none', 'sparkles', 'bolt', 'star', 'palette'], default: 'none', description: 'Icon' },
]

export const contentRevealCardDependencies = ["framer-motion", "lucide-react"]

export const contentRevealCardUsageCode = `<ContentRevealCard
  title="Interactive Card"
  description="Hover to reveal detailed content with a smooth animation."
  actionText="Learn More"
  size={300}
  icon={<Sparkles className="w-6 h-6" />}
/>`

export const contentRevealCardPreview = () => (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="flex gap-8 p-8 items-center justify-center flex-wrap">
            <ContentRevealCard
                title="Interactive UI"
                description="Create engaging user interfaces with components that respond naturally to user interaction."
                actionText="View Code"
            />
            <ContentRevealCard
                title="Design System"
                description="A comprehensive set of accessible, reusable, and composable components for modern web apps."
                actionText="Learn More"
                className="bg-white/5"
            />
        </div>
    </div>
)


import { Sparkles, Zap, Star, Palette } from "lucide-react";

export const contentRevealCardDynamicPreview = (props: any) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'sparkles': return <Sparkles className="h-6 w-6" />;
            case 'bolt': return <Zap className="h-6 w-6" />;
            case 'star': return <Star className="h-6 w-6" />;
            case 'palette': return <Palette className="h-6 w-6" />;
            default: return undefined;
        }
    }

    return (
        <ContentRevealCard
            title={props.title}
            description={props.description}
            actionText={props.actionText}
            size={props.size}
            duration={props.duration}
            icon={getIcon(props.icon)}
            hoverBackgroundColor={props.hoverBackgroundColor}
        />
    )
}

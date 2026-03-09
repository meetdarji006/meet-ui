
import { ContentRevealCard } from "@/components/ui/content-reveal-card";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const contentRevealCardMeta: ComponentMeta = {
    name: "Content Reveal Card",
    slug: "content-reveal-card",
    category: "ui",
    description: "An interactive card that reveals detailed content on hover with a smooth layout transition.",
    tags: ["card", "hover", "animation", "reveal", "glassmorphism"],
}
export const contentRevealCardDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

export const contentRevealCardUsageCode = `<ContentRevealCard
  title="Interactive Card"
  description="Hover to reveal detailed content with a smooth animation."
  actionText="Learn More"
  size={300}
  icon={<Sparkles className="w-6 h-6" />}
/>`
import { Sparkles, Zap, Star, Palette } from "lucide-react";

export const contentRevealCardPreview = (props: any) => {
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
export const contentRevealCardProps: PropConfig[] = [
    { isEditable: true, name: 'title', type: 'string', default: 'Meet UI', description: 'Card title' },
    { isEditable: true, name: 'description', type: 'string', default: 'Experience silky smooth layout transitions and reveal effects powered by Framer Motion.', description: 'Card description' },
    { isEditable: true, name: 'actionText', type: 'string', default: 'Explore', description: 'Action button text' },
    { name: 'className', type: 'string', default: '-' },
    { isEditable: true, name: 'duration', type: 'number', default: 0.5, min: 0.2, max: 2.0, step: 0.1, description: 'Animation duration (s)' },
    { isEditable: true, name: 'size', type: 'number', default: 300, min: 200, max: 600, step: 10, description: 'Card width (px)' },
    { isEditable: true, name: 'hoverBackgroundColor', type: 'string', default: '', description: 'Hover BG Color (hex/rgba)' },
    { isEditable: true, name: 'icon', type: 'select', options: ['none', 'sparkles', 'bolt', 'star', 'palette'], default: 'none', description: 'Icon' },
    { name: 'onAction', type: '() => void', default: '-', description: 'Callback fired when the action button is clicked' },
    { name: 'titleClassName', type: 'string', default: '-', description: 'Additional classes for the title text' },
    { name: 'descriptionClassName', type: 'string', default: '-', description: 'Additional classes for the description text' },
    { name: 'actionClassName', type: 'string', default: '-', description: 'Additional classes for the action button' },
];
export const contentRevealCardRegistry: ComponentEntry = {
    ...contentRevealCardMeta,
    preview: contentRevealCardPreview,
    props: contentRevealCardProps,
    dependencies: contentRevealCardDependencies,
    usageCode: contentRevealCardUsageCode,
};

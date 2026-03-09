
import { TypewriterText } from "@/components/ui/typewriter-text";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const typewriterTextMeta: ComponentMeta = {
    name: "Typewriter Text",
    slug: "typewriter-text",
    category: "ui",
    description: "Animated typewriter effect with blinking cursor.",
    tags: ["text", "animation", "typewriter", "typing"],
}
export const typewriterTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const typewriterTextUsageCode = `<TypewriterText
  text={["Build faster", "Ship sooner"]}
  speed={100}
  waitTime={2000}
  loop={true}
  cursor={true}
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const typewriterTextPreview = (props: any) => (
    <TypewriterText
        text={props.text ? props.text.split(',') : ["Typewriter", "Effect"]}
        speed={props.speed}
        waitTime={props.waitTime}
        loop={props.loop}
    />
)
export const typewriterTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Typewriter Text', description: 'Text to display' },
    { isEditable: true, name: 'speed', type: 'number', default: 100, min: 10, max: 500, step: 10, description: 'Typing speed (ms)' },
    { name: 'deleteSpeed', type: 'number', default: '50' },
    { isEditable: true, name: 'waitTime', type: 'number', default: 2000, min: 500, max: 5000, step: 100, description: 'Wait before deleting (ms)' },
    { isEditable: true, name: 'loop', type: 'boolean', default: true, description: 'Loop animation' },
    { name: 'cursor', type: 'boolean', default: 'true' },
    { name: 'cursorChar', type: 'string', default: '|' },
    { name: 'className', type: 'string', default: 'text-2xl md:text-5xl font-heading font-black tracking-tight', description: 'Tailwind classes' }
];
export const typewriterTextRegistry: ComponentEntry = {
    ...typewriterTextMeta,
    preview: typewriterTextPreview,
    props: typewriterTextProps,
    dependencies: typewriterTextDependencies,
    usageCode: typewriterTextUsageCode,
};

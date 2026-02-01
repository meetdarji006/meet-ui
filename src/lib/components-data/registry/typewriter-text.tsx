
import { TypewriterText } from "@/components/ui/typewriter-text";
import { ComponentMeta } from "./index";

export const typewriterTextMeta: ComponentMeta = {
    name: "Typewriter Text",
    slug: "typewriter-text",
    category: "ui",
    description: "Animated typewriter effect with blinking cursor.",
    tags: ["text", "animation", "typewriter", "typing"],
}

export const typewriterTextTableProps = [
    { name: 'text', type: 'string | string[]', default: 'Typewriter Text' },
    { name: 'speed', type: 'number', default: '100' },
    { name: 'deleteSpeed', type: 'number', default: '50' },
    { name: 'waitTime', type: 'number', default: '2000' },
    { name: 'loop', type: 'boolean', default: 'true' },
    { name: 'cursor', type: 'boolean', default: 'true' },
    { name: 'cursorChar', type: 'string', default: '|' },
]

export const typewriterTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Typewriter Text', description: 'Text to display' },
    { name: 'speed', type: 'number' as const, default: 100, min: 10, max: 500, step: 10, description: 'Typing speed (ms)' },
    { name: 'waitTime', type: 'number' as const, default: 2000, min: 500, max: 5000, step: 100, description: 'Wait before deleting (ms)' },
    { name: 'loop', type: 'boolean' as const, default: true, description: 'Loop animation' },
    { name: 'className', type: 'string' as const, default: 'text-4xl font-bold', description: 'Tailwind classes' },
]

export const typewriterTextDependencies = ["framer-motion"]

export const typewriterTextUsageCode = `<TypewriterText
  text={["Build faster", "Ship sooner"]}
  speed={100}
  waitTime={2000}
  loop={true}
  cursor={true}
/>`

export const typewriterTextPreview = () => (
    <TypewriterText text={["Typewriter Text", "Animated Typing", "React Component"]} className="text-4xl font-bold" />
)

export const typewriterTextDynamicPreview = (props: any) => (
    <TypewriterText
        text={props.text ? props.text.split(',') : ["Typewriter", "Effect"]}
        speed={props.speed}
        waitTime={props.waitTime}
        loop={props.loop}
        className={props.className}
    />
)


import { HyperText } from "@/components/ui/hyper-text";
import { ComponentMeta } from "./index";

export const hyperTextMeta: ComponentMeta = {
    name: "Hyper Text",
    slug: "hyper-text",
    category: "ui",
    description: "Text that scrambles and decodes on hover.",
    tags: ["text", "animation", "scramble", "decode", "cyberpunk"],
}

export const hyperTextTableProps = [
    { name: 'text', type: 'string', default: 'Hyper Text' },
    { name: 'duration', type: 'number', default: '800' },
    { name: 'animateOnLoad', type: 'boolean', default: 'true' },
]

export const hyperTextEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Hyper Text', description: 'Text to display' },
    { name: 'duration', type: 'number' as const, default: 800, min: 100, max: 5000, step: 100, description: 'Animation duration (ms)' },
    { name: 'className', type: 'string' as const, default: 'text-4xl font-bold', description: 'Tailwind classes' },
]

export const hyperTextDependencies = ["framer-motion"]

export const hyperTextUsageCode = `<HyperText
  text="Hyper Text"
  className="text-4xl font-bold"
  duration={800}
/>`

export const hyperTextPreview = () => (
    <HyperText text="Hyper Text" className="text-4xl font-bold" />
)

export const hyperTextDynamicPreview = (props: any) => (
    <HyperText
        text={props.text || "Hyper Text"}
        duration={props.duration}
        className={props.className}
    />
)

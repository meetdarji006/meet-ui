
import { HyperText } from "@/components/ui/hyper-text";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const hyperTextMeta: ComponentMeta = {
    name: "Hyper Text",
    slug: "hyper-text",
    category: "ui",
    description: "Text that scrambles and decodes on hover.",
    tags: ["text", "animation", "scramble", "decode", "cyberpunk"],
}
export const hyperTextDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const hyperTextUsageCode = `<HyperText
  text="Hyper Text"
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
  duration={800}
/>`
export const hyperTextPreview = (props: any) => (
    <HyperText
        text={props.text || "Hyper Text"}
        duration={props.duration}
        className={`${props.className} justify-center`}
    />
)
export const hyperTextProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Hyper Text', description: 'Text to display' },
    { isEditable: true, name: 'duration', type: 'number', default: 800, min: 100, max: 5000, step: 100, description: 'Animation duration (ms)' },
    { name: 'animateOnLoad', type: 'boolean', default: 'true' },
    { isEditable: true, name: 'className', type: 'string', default: 'text-2xl md:text-5xl font-heading font-black tracking-tight', description: 'Tailwind classes' }
];
export const hyperTextRegistry: ComponentEntry = {
    ...hyperTextMeta,
    preview: hyperTextPreview,
    props: hyperTextProps,
    dependencies: hyperTextDependencies,
    usageCode: hyperTextUsageCode,
};

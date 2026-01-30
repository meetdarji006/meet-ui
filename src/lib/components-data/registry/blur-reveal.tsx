
import { BlurReveal } from "@/components/ui/blur-reveal";
import { ComponentMeta } from "./index";

export const blurRevealMeta: ComponentMeta = {
    name: "Blur Reveal",
    slug: "blur-reveal",
    category: "ui",
    description: "Elegant text reveal animation from a blurred state.",
    tags: ["text", "animation", "blur", "reveal"],
}

export const blurRevealTableProps = [
    { name: 'text', type: 'string', default: 'Blur Reveal' },
    { name: 'duration', type: 'number', default: '0.8' },
    { name: 'delay', type: 'number', default: '0' },
    { name: 'blur', type: 'string', default: '10px' },
]

export const blurRevealEditableProps = [
    { name: 'text', type: 'string' as const, default: 'Blur Reveal Animation', description: 'Text to display' },
    { name: 'duration', type: 'number' as const, default: 0.8, min: 0.2, max: 3, step: 0.1, description: 'Animation duration (s)' },
    { name: 'blur', type: 'string' as const, default: '10px', description: 'Initial blur amount' },
    { name: 'className', type: 'string' as const, default: 'text-4xl font-bold', description: 'Container classes' },
]

export const blurRevealPreview = () => (
    <BlurReveal text="Blur Reveal Animation" className="text-4xl font-bold justify-center" />
)

export const blurRevealDynamicPreview = (props: any) => (
    <BlurReveal
        text={props.text || "Blur Reveal"}
        duration={props.duration}
        blur={props.blur}
        className={`${props.className} justify-center`}
    />
)

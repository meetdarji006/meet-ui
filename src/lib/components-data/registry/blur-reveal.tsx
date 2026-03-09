
import { BlurReveal } from "@/components/ui/blur-reveal";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const blurRevealMeta: ComponentMeta = {
    name: "Blur Reveal",
    slug: "blur-reveal",
    category: "ui",
    description: "Elegant text reveal animation from a blurred state.",
    tags: ["text", "animation", "blur", "reveal"],
}
export const blurRevealDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const blurRevealUsageCode = `<BlurReveal
  text="Blur Reveal"
  duration={0.8}
  blur="10px"
  className="text-2xl md:text-5xl font-heading font-black tracking-tight"
/>`
export const blurRevealPreview = (props: any) => (
    <BlurReveal
        text={props.text || "Blur Reveal"}
        duration={props.duration}
        blur={props.blur}
    // className={`${props.className} justify-center`}
    />
)
export const blurRevealProps: PropConfig[] = [
    { isEditable: true, name: 'text', type: 'string', default: 'Blur Reveal Animation', description: 'Text to display' },
    { isEditable: true, name: 'duration', type: 'number', default: 0.8, min: 0.2, max: 3, step: 0.1, description: 'Animation duration (s)' },
    { name: 'delay', type: 'number', default: '0' },
    { isEditable: true, name: 'blur', type: 'string', default: '10px', description: 'Initial blur amount' },
    { name: 'className', type: 'string', default: 'text-2xl md:text-5xl font-heading font-black tracking-tight', description: 'Container classes' }
];
export const blurRevealRegistry: ComponentEntry = {
    ...blurRevealMeta,
    preview: blurRevealPreview,
    props: blurRevealProps,
    dependencies: blurRevealDependencies,
    usageCode: blurRevealUsageCode,
};

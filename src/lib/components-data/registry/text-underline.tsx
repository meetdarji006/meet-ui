import TextUnderline from "@/components/ui/text-underline";
import { PropConfig, ComponentEntry } from "./index";

export const textUnderlineMeta = {
    name: "Text Underline",
    slug: "text-underline",
    category: "ui" as const,
    description: "Animated hand-drawn underlines for text emphasis.",
    tags: ["text", "animation", "svg", "underline", "gsap"],
};
export const textUnderlinePreview = (props: any) => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <TextUnderline {...props} className={`font-heading font-bold text-foreground ${props.className || ""}`} fontSize={props.fontSize}>
            {props.text || "Hover me"}
        </TextUnderline>
        <p className="text-sm text-muted-foreground/50 font-mono text-center absolute bottom-4">
            Try changing variants in controls
        </p>
    </div>
);
export const textUnderlineDependencies = ["gsap", "clsx", "tailwind-merge"];

export const textUnderlineUsageCode = `<TextUnderline variant="wave1" color="#667eea" className="text-2xl md:text-5xl font-heading font-black tracking-tight">
  Hover me
</TextUnderline>`;
export const textUnderlineProps: PropConfig[] = [
    {
        isEditable: true,
        name: "variant",
        type: "select",
        options: ["wave1", "wave2", "scribble1", "scribble2", "curve", "straight"],
        default: "wave1",
    },
    { isEditable: true, name: "color", type: "string", default: "#667eea" },
    { isEditable: true, name: "strokeWidth", type: "number", default: 8, min: 1, max: 20 },
    { isEditable: true, name: "duration", type: "number", default: 0.6, step: 0.1, min: 0.1, max: 3 },
    { name: "fontSize", type: "string | number", default: "-" },
    { name: "height", type: "string", default: "0.7em" },
    { isEditable: true, name: "bottomOffset", type: "string", default: "0.25em" },
    { name: "direction", type: "string", default: "right" },
    { isEditable: true, name: "lineHeight", type: "number", default: 0.8, min: 0.5, max: 1.5, step: 0.1 },
    { isEditable: true, name: "text", type: "string", default: "Hover me" },
    { isEditable: true, name: "className", type: "string", default: "text-2xl md:text-5xl font-heading font-black tracking-tight", description: "Tailwind classes" }
];
export const textUnderlineRegistry: ComponentEntry = {
    ...textUnderlineMeta,
    preview: textUnderlinePreview,
    props: textUnderlineProps,
    dependencies: textUnderlineDependencies,
    usageCode: textUnderlineUsageCode,
};

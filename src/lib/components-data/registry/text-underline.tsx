import TextUnderline from "@/components/ui/text-underline";

export const textUnderlineMeta = {
    name: "Text Underline",
    slug: "text-underline",
    category: "ui" as const,
    description: "Animated hand-drawn underlines for text emphasis.",
    tags: ["text", "animation", "svg", "underline", "gsap"],
};

export const textUnderlinePreview = () => (
    <TextUnderline variant="scribble1" color="#667eea" strokeWidth={12} className="text-4xl md:text-5xl font-heading font-black tracking-tight text-center">
        Scribble
    </TextUnderline>
);

export const textUnderlineDynamicPreview = (props: any) => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <TextUnderline {...props} className={`font-heading font-bold text-foreground ${props.className || ""}`} fontSize={props.fontSize}>
            {props.text || "Hover me"}
        </TextUnderline>
        <p className="text-sm text-muted-foreground/50 font-mono text-center absolute bottom-4">
            Try changing variants in controls
        </p>
    </div>
);

export const textUnderlineTableProps = [
    { name: "variant", type: "string", default: "wave1" },
    { name: "color", type: "string", default: "#667eea" },
    { name: "strokeWidth", type: "number", default: "8" },
    { name: "duration", type: "number", default: "0.6" },
    { name: "fontSize", type: "string | number", default: "-" },
    { name: "height", type: "string", default: "0.7em" },
    { name: "bottomOffset", type: "string", default: "0.25em" },
    { name: "direction", type: "string", default: "right" },
    { name: "lineHeight", type: "number", default: "0.8" },
];

export const textUnderlineEditableProps = [
    {
        name: "variant",
        type: "select" as const,
        options: ["wave1", "wave2", "scribble1", "scribble2", "curve", "straight"],
        default: "wave1",
    },
    { name: "text", type: "string" as const, default: "Hover me" },
    { name: "color", type: "string" as const, default: "#667eea" },
    { name: "strokeWidth", type: "number" as const, default: 8, min: 1, max: 20 },
    { name: "duration", type: "number" as const, default: 0.6, step: 0.1, min: 0.1, max: 3 },
    { name: "className", type: "string" as const, default: "text-4xl md:text-5xl font-heading font-black tracking-tight", description: "Tailwind classes" },
    { name: "bottomOffset", type: "string" as const, default: "0.25em" },
    { name: "lineHeight", type: "number" as const, default: 0.8, min: 0.5, max: 1.5, step: 0.1 },
];

export const textUnderlineDependencies = ["gsap", "react"];

export const textUnderlineUsageCode = `import TextUnderline from "@/components/ui/text-underline";

<TextUnderline variant="wave1" color="#667eea" className="text-4xl md:text-5xl font-heading font-black tracking-tight">
  Hover me
</TextUnderline>`;

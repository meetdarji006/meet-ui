import TextUnderline from "@/components/ui/text-underline";

export const textUnderlineMeta = {
    name: "Text Underline",
    slug: "text-underline",
    category: "ui" as const,
    description: "Animated hand-drawn underlines for text emphasis.",
    tags: ["text", "animation", "svg", "underline", "gsap"],
};

export const textUnderlinePreview = () => (
    <TextUnderline variant="scribble1" color="#667eea" fontSize="2.25rem" strokeWidth={12} className="font-heading font-black tracking-tight">
        Scribble
    </TextUnderline>
);

export const textUnderlineDynamicPreview = (props: any) => (
    <div className="flex items-center justify-center bg-white dark:bg-black w-full h-full">
        <TextUnderline {...props} className="font-heading font-bold text-foreground" fontSize={props.fontSize || "3rem"}>
            {props.text || "Hover me"}
        </TextUnderline>
    </div>
);

export const textUnderlineTableProps = [
    { name: "variant", type: "string", default: "wave1" },
    { name: "color", type: "string", default: "#667eea" },
    { name: "strokeWidth", type: "number", default: "8" },
    { name: "duration", type: "number", default: "0.6" },
    { name: "fontSize", type: "string | number", default: "1em" },
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
    { name: "text", type: "string" as const, default: "Hover me" }, // Not real prop, just for demo text if we wanted
    { name: "color", type: "string" as const, default: "#667eea" },
    { name: "strokeWidth", type: "number" as const, default: 8, min: 1, max: 20 },
    { name: "duration", type: "number" as const, default: 0.6, step: 0.1, min: 0.1, max: 3 },
    { name: "fontSize", type: "string" as const, default: "3rem" },
    { name: "bottomOffset", type: "string" as const, default: "0.25em" },
    { name: "lineHeight", type: "number" as const, default: 0.8, min: 0.5, max: 1.5, step: 0.1 },
];

export const textUnderlineDependencies = ["gsap", "react"];

export const textUnderlineUsageCode = `import TextUnderline from "@/components/ui/text-underline";

<TextUnderline variant="wave1" color="#667eea" fontSize="3rem" className="font-heading font-black tracking-tight">
  Hover me
</TextUnderline>`;

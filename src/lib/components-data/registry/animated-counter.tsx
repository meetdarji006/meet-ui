import AnimatedCounter from "@/components/ui/animated-counter";
import { ComponentMeta } from "./index";

export const animatedCounterMeta: ComponentMeta = {
    name: "Animated Counter",
    slug: "animated-counter",
    category: "ui",
    description: "Slot-machine style rolling digit animation for stats and dashboards.",
    tags: ["number", "counter", "animation", "framer-motion", "stats"],
};

export const animatedCounterPreview = () => (
    <AnimatedCounter
        value={8492}
        prefix="$"
        suffix="+"
        className="text-4xl md:text-5xl text-foreground font-heading"
    />
);

export const animatedCounterDynamicPreview = (props: any) => (
    <AnimatedCounter
        value={props.value ?? 8492}
        duration={props.duration ?? 2}
        delay={props.delay ?? 0}
        prefix={props.prefix ?? "$"}
        suffix={props.suffix ?? "+"}
        separator={props.separator ?? true}
        className="text-4xl md:text-6xl text-foreground font-heading"
    />
);

export const animatedCounterTableProps = [
    { name: "value", type: "number", default: "1234" },
    { name: "duration", type: "number", default: "2" },
    { name: "delay", type: "number", default: "0" },
    { name: "prefix", type: "string", default: '""' },
    { name: "suffix", type: "string", default: '""' },
    { name: "separator", type: "boolean", default: "true" },
    { name: "className", type: "string", default: '""' },
];

export const animatedCounterEditableProps = [
    { name: "value", type: "number" as const, default: 8492, min: 0, max: 99999, step: 1 },
    { name: "duration", type: "number" as const, default: 2, min: 0.5, max: 5, step: 0.1 },
    { name: "delay", type: "number" as const, default: 0, min: 0, max: 2, step: 0.1 },
    { name: "prefix", type: "string" as const, default: "$" },
    { name: "suffix", type: "string" as const, default: "+" },
    { name: "separator", type: "boolean" as const, default: true },
];

export const animatedCounterDependencies = ["framer-motion", "react"];

export const animatedCounterUsageCode = `import AnimatedCounter from "@/components/ui/animated-counter";

<AnimatedCounter
  value={8492}
  prefix="$"
  suffix="+"
  duration={2}
/>`;

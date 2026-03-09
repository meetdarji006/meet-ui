import AnimatedCounter from "@/components/ui/animated-counter";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const animatedCounterMeta: ComponentMeta = {
    name: "Animated Counter",
    slug: "animated-counter",
    category: "ui",
    description: "Slot-machine style rolling digit animation for stats and dashboards.",
    tags: ["number", "counter", "animation", "framer-motion", "stats"],
};
export const animatedCounterPreview = (props: any) => (
    <AnimatedCounter
        value={props.value ?? 8492}
        duration={props.duration ?? 2}
        delay={props.delay ?? 0}
        prefix={props.prefix ?? "$"}
        suffix={props.suffix ?? "+"}
        separator={props.separator ?? true}
        className="text-2xl md:text-6xl text-foreground font-heading"
    />
);
export const animatedCounterDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const animatedCounterUsageCode = `<AnimatedCounter
  value={8492}
  prefix="$"
  suffix="+"
  duration={2}
/>`;
export const animatedCounterProps: PropConfig[] = [
    { isEditable: true, name: "value", type: "number", default: 8492, min: 0, max: 99999, step: 1 },
    { isEditable: true, name: "duration", type: "number", default: 2, min: 0.5, max: 5, step: 0.1 },
    { isEditable: true, name: "delay", type: "number", default: 0, min: 0, max: 2, step: 0.1 },
    { isEditable: true, name: "prefix", type: "string", default: "$" },
    { isEditable: true, name: "suffix", type: "string", default: "+" },
    { isEditable: true, name: "separator", type: "boolean", default: true },
    { name: "className", type: "string", default: '""' }
];
export const animatedCounterRegistry: ComponentEntry = {
    ...animatedCounterMeta,
    preview: animatedCounterPreview,
    props: animatedCounterProps,
    dependencies: animatedCounterDependencies,
    usageCode: animatedCounterUsageCode,
};

import LoopingWords from "@/components/ui/looping-words";
import { ComponentMeta } from "./index";

export const loopingWordsMeta: ComponentMeta = {
    name: "Looping Words",
    slug: "looping-words",
    category: "ui",
    description: "Vertical looping text with a dynamic selector effect.",
    tags: ["text", "animation", "framer-motion", "loop", "vertical"],
};

export const loopingWordsPreview = () => (
    <LoopingWords
        words={["Design", "Develop", "Deploy", "Scale", "Repeat"]}
        className="text-foreground"
    />
);

export const loopingWordsDynamicPreview = (props: any) => {
    const { words, fontClassName, ...rest } = props;
    return (
        <LoopingWords
            words={words ? words.split(",").map((w: string) => w.trim()) : ["Design", "Develop", "Deploy", "Scale", "Repeat"]}
            className={`text-foreground ${fontClassName || ""}`}
            {...rest}
        />
    );
};

export const loopingWordsTableProps = [
    { name: "words", type: "string[]", default: '["Design", "Develop", ...]' },
    { name: "className", type: "string", default: "" },
    { name: "selectorColor", type: "string", default: "white" },
    { name: "activeColor", type: "string", default: "white" },
    { name: "inactiveColor", type: "string", default: "rgba(255,255,255,0.4)" },
    { name: "duration", type: "number", default: "1.2" },
    { name: "interval", type: "number", default: "1.5" },
];

export const loopingWordsEditableProps = [
    { name: "words", type: "string" as const, default: "Design, Develop, Deploy, Scale, Repeat", description: "Comma separated values" },
    { name: "selectorColor", type: "string" as const, default: "#ffffff" },
    { name: "activeColor", type: "string" as const, default: "#ffffff" },
    { name: "inactiveColor", type: "string" as const, default: "rgba(255,255,255,0.4)" },
    { name: "duration", type: "number" as const, default: 1.2, min: 0.3, max: 3, step: 0.1 },
    { name: "interval", type: "number" as const, default: 1.5, min: 0.5, max: 5, step: 0.1 },
];

export const loopingWordsDependencies = ["framer-motion", "react"];

export const loopingWordsUsageCode = `import LoopingWords from "@/components/ui/looping-words";

<LoopingWords
  words={["Design", "Develop", "Deploy", "Scale", "Repeat"]}
  selectorColor="#6366f1"
  activeColor="white"
  inactiveColor="rgba(255,255,255,0.4)"
  duration={1.2}
  interval={1.5}
/>`;

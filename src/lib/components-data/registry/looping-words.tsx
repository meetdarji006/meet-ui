import LoopingWords from "@/components/ui/looping-words";
import { ComponentMeta, ComponentEntry, PropConfig } from "./index";

export const loopingWordsMeta: ComponentMeta = {
    name: "Looping Words",
    slug: "looping-words",
    category: "ui",
    description: "Vertical looping text with a dynamic selector effect.",
    tags: ["text", "animation", "framer-motion", "loop", "vertical"],
};
export const loopingWordsPreview = (props: any) => {
    const { words, fontClassName, ...rest } = props;
    return (
        <LoopingWords
            words={words ? words.split(",").map((w: string) => w.trim()) : ["Design", "Develop", "Deploy", "Scale", "Repeat"]}
            className={`text-foreground ${fontClassName || ""}`}
            {...rest}
        />
    );
};
export const loopingWordsDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const loopingWordsUsageCode = `<LoopingWords
  words={["Design", "Develop", "Deploy", "Scale", "Repeat"]}
  selectorColor="#6366f1"
  activeColor="white"
  inactiveColor="rgba(255,255,255,0.4)"
  duration={1.2}
  interval={1.5}
/>`;
export const loopingWordsProps: PropConfig[] = [
        { name: "words", type: "string[]" , default: `["Design", "Develop", "Deploy", "Scale", "Repeat"]`, description: "Words Array" },
        { name: "className", type: "string", default: "" },
        { isEditable: true,  name: "selectorColor", type: "string" , default: "#ffffff" },
        { isEditable: true,  name: "activeColor", type: "string" , default: "#ffffff" },
        { isEditable: true,  name: "inactiveColor", type: "string" , default: "rgba(255,255,255,0.4)" },
        { isEditable: true,  name: "duration", type: "number" , default: 1.2, min: 0.3, max: 3, step: 0.1 },
        { isEditable: true,  name: "interval", type: "number" , default: 1.5, min: 0.5, max: 5, step: 0.1 }
    ];
export const loopingWordsRegistry: ComponentEntry = {
        ...loopingWordsMeta,
        preview: loopingWordsPreview,
        props: loopingWordsProps,
        dependencies: loopingWordsDependencies,
        usageCode: loopingWordsUsageCode,
    };

import { GooeyText } from "@/components/ui/gooey-text"
import { PropConfig, ComponentEntry } from "./index";

export const gooeyTextUsageCode = `<div className="flex h-[300px] w-full items-center justify-center">
  <GooeyText
    texts={["Design", "Engineer", "Innovate", "Create"]}
    morphTime={1.2}
    cooldownTime={0.4}
    className="w-full"
    textClassName="text-white font-bold"
  />
</div>`
export const gooeyTextPreview = ({ morphTime, cooldownTime }: Record<string, any>) => {
    return (
        <div className="flex h-[500px] w-full items-center justify-center">
            <GooeyText
                texts={["Next.js", "React", "Tailwind", "Motion"]}
                morphTime={morphTime}
                cooldownTime={cooldownTime}
                className="w-full"
                textClassName="text-white text-2xl md:text-[80px]"
            />
        </div>
    )
}
export const gooeyTextMeta = {
    name: "Gooey Text",
    description: "A liquid morphing text animation utilizing an SVG threshold matrix filter.",
    category: "Text Animations",
    slug: "gooey-text",
    tags: ["text", "animation", "gooey", "liquid", "svg"],
}
export const gooeyTextProps: PropConfig[] = [
    { isEditable: true, name: 'morphTime', type: 'number', default: 1.0, min: 0.1, max: 5.0, step: 0.1 },
    { isEditable: true, name: 'cooldownTime', type: 'number', default: 0.5, min: 0, max: 3.0, step: 0.1 }
];
export const gooeyTextRegistry: ComponentEntry = {
    ...gooeyTextMeta,
    preview: gooeyTextPreview,
    props: gooeyTextProps,
    dependencies: ["clsx", "tailwind-merge"],
    usageCode: gooeyTextUsageCode,
};

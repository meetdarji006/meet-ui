import { GooeyText } from "@/components/ui/gooey-text"

export const gooeyTextUsageCode = `import { GooeyText } from "@/components/ui/gooey-text"

export default function App() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center bg-black overflow-hidden rounded-lg">
      <GooeyText
        texts={["Design", "Engineer", "Innovate", "Create"]}
        morphTime={1.2}
        cooldownTime={0.4}
        className="w-full"
        textClassName="text-white font-bold"
      />
    </div>
  )
}
`

export const gooeyTextPreview = () => {
    return (
        <div className="flex h-[400px] w-full items-center justify-center bg-[#000000] overflow-hidden rounded-lg">
            <GooeyText
                texts={["Create", "Design", "Code", "Ship"]}
                morphTime={1}
                cooldownTime={0.5}
                className="w-full font-serif"
                textClassName="text-white text-7xl md:text-8xl"
            />
        </div>
    )
}

export const gooeyTextDynamicPreview = ({ morphTime, cooldownTime }: any) => {
    return (
        <div className="flex h-[500px] w-full items-center justify-center bg-[#111111] overflow-hidden rounded-lg">
            <GooeyText
                texts={["Next.js", "React", "Tailwind", "Motion"]}
                morphTime={morphTime}
                cooldownTime={cooldownTime}
                className="w-full"
                textClassName="text-white text-6xl md:text-[80px]"
            />
        </div>
    )
}

export const gooeyTextEditableProps: any[] = [
    { name: 'morphTime', type: 'number', label: 'Morph Time (s)', default: 1.0, min: 0.1, max: 5.0, step: 0.1 },
    { name: 'cooldownTime', type: 'number', label: 'Cooldown Time (s)', default: 0.5, min: 0, max: 3.0, step: 0.1 },
]

export const gooeyTextMeta = {
    name: "Gooey Text",
    description: "A liquid morphing text animation utilizing an SVG threshold matrix filter.",
    category: "Text Animations",
    slug: "gooey-text",
    tags: ["text", "animation", "gooey", "liquid", "svg"],
}

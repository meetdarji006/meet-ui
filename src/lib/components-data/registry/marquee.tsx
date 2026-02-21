import Marquee from "@/components/ui/marquee"
import { ComponentMeta } from "./index"

export const marqueeMeta: ComponentMeta = {
    name: "Marquee",
    slug: "marquee",
    category: "ui",
    description: "Infinite scrolling marquee for logo walls, testimonials, and feature highlights. Pause on hover.",
    tags: ["marquee", "scroll", "animation", "infinite", "logos"],
}

export const marqueePreview = () => (
    <div className="w-full max-w-[600px]">
        <Marquee speed={40} gap={16} />
    </div>
)

export const marqueeDynamicPreview = (props: any) => (
    <div className="w-full max-w-[600px]">
        <Marquee
            speed={props.speed ?? 40}
            gap={props.gap ?? 16}
            direction={props.direction ?? "left"}
            pauseOnHover={props.pauseOnHover ?? true}
        />
    </div>
)

export const marqueeTableProps = [
    { name: "children", type: "ReactNode", default: "Default items" },
    { name: "speed", type: "number", default: "40" },
    { name: "gap", type: "number", default: "40" },
    { name: "direction", type: '"left" | "right"', default: '"left"' },
    { name: "pauseOnHover", type: "boolean", default: "true" },
    { name: "className", type: "string", default: '""' },
]

export const marqueeEditableProps = [
    { name: "speed", type: "number" as const, default: 40, min: 10, max: 200, step: 10 },
    { name: "gap", type: "number" as const, default: 16, min: 8, max: 80, step: 4 },
    { name: "direction", type: "select" as const, default: "left", options: ["left", "right"] },
    { name: "pauseOnHover", type: "boolean" as const, default: true },
]

export const marqueeDependencies = ["react"]

export const marqueeUsageCode = `import Marquee from "@/components/ui/marquee"

{/* With default items */}
<Marquee speed={40} gap={16} pauseOnHover />

{/* With custom content */}
<Marquee speed={60} direction="right">
  <img src="/logo1.svg" className="h-8" />
  <img src="/logo2.svg" className="h-8" />
  <img src="/logo3.svg" className="h-8" />
</Marquee>`

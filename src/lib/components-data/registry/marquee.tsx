import Marquee from "@/components/ui/marquee"
import { ComponentMeta, ComponentEntry, PropConfig } from "./index"

export const marqueeMeta: ComponentMeta = {
    name: "Marquee",
    slug: "marquee",
    category: "ui",
    description: "Infinite scrolling marquee for logo walls, testimonials, and feature highlights. Pause on hover.",
    tags: ["marquee", "scroll", "animation", "infinite", "logos"],
}
export const marqueePreview = (props: any) => (
    <div className="w-full max-w-[600px]">
        <Marquee
            speed={props.speed ?? 40}
            gap={props.gap ?? 16}
            direction={props.direction ?? "left"}
            pauseOnHover={props.pauseOnHover ?? true}
        />
    </div>
)
export const marqueeDependencies = ["clsx", "tailwind-merge"];

export const marqueeUsageCode = `{/* With default items */}
<Marquee speed={40} gap={16} pauseOnHover />

{/* With custom content */}
<Marquee speed={60} direction="right">
  <img src="/logo1.svg" className="h-8" />
  <img src="/logo2.svg" className="h-8" />
  <img src="/logo3.svg" className="h-8" />
</Marquee>`
export const marqueeProps: PropConfig[] = [
        { name: "children", type: "ReactNode", default: "Default items" },
        { isEditable: true,  name: "speed", type: "number" , default: 40, min: 10, max: 200, step: 10 },
        { isEditable: true,  name: "gap", type: "number" , default: 16, min: 8, max: 80, step: 4 },
        { isEditable: true,  name: "direction", type: "select" , default: "left", options: ["left", "right"] },
        { isEditable: true,  name: "pauseOnHover", type: "boolean" , default: true },
        { name: "className", type: "string", default: '""' }
    ];
export const marqueeRegistry: ComponentEntry = {
        ...marqueeMeta,
        preview: marqueePreview,
        props: marqueeProps,
        dependencies: marqueeDependencies,
        usageCode: marqueeUsageCode,
    };

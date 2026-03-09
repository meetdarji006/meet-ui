import * as React from "react"
import { FloatingTiltTags } from "@/components/ui/floating-tilt-tags"
import { PropConfig, ComponentEntry } from "./index";

export const floatingTiltTagsMetadata = {
    name: 'Floating Tilt Tags',
    description: 'A 3D perspective sticker pile component where text tags dynamically tilt in response to mouse movement.',
    component: FloatingTiltTags,
    colSpan: 2,
    slug: 'floating-tilt-tags',
    category: 'Hover Buttons',
    tags: ['3D', 'tilt', 'mouse', 'tags', 'stickers', 'framer-motion'],
}

export const floatingTiltTagsDependencies: string[] = ["framer-motion", "clsx", "tailwind-merge"];
const sampleTags = [
    { id: "1", text: "innovation", theme: "light" as const, x: "50%", y: "25%", rotate: -4, z: 0 },
    { id: "2", text: "finance", theme: "light" as const, x: "62%", y: "36%", rotate: 12, z: 10, bgColor: "#10B981", color: "#FFFFFF" },
    { id: "3", text: "passion", theme: "dark" as const, x: "40%", y: "42%", rotate: -6, z: 20 },
    { id: "4", text: "recruiting", theme: "dark" as const, x: "66%", y: "52%", rotate: 8, z: 30, bgColor: "#3B82F6", color: "#FFFFFF" },
    { id: "5", text: "marketing", theme: "light" as const, x: "32%", y: "54%", rotate: -8, z: 40 },
    { id: "6", text: "sales", theme: "light" as const, x: "55%", y: "62%", rotate: 4, z: 50 },
    { id: "7", text: "project management", theme: "dark" as const, x: "44%", y: "72%", rotate: -3, z: 60, bgColor: "#F59E0B", color: "#FFFFFF" },
    { id: "8", text: "product launch", theme: "light" as const, x: "56%", y: "82%", rotate: -5, z: 70 },
];
export const floatingTiltTagsPreview = ({ tiltMagnitude }: any) => {
    return (
        <div className="w-full flex items-center justify-center">
            <FloatingTiltTags
                tags={sampleTags}
                className="w-full h-[500px]"
                tiltMagnitude={tiltMagnitude ?? 25}
            />
        </div>
    )
}

export const floatingTiltTagsUsageCode = `<div className="w-full h-screen flex items-center justify-center bg-[#8EB4C1]">
  <FloatingTiltTags
    tags={data}
    className="w-full max-w-4xl h-[600px]"
    tiltMagnitude={25}
  />
</div>`
export const floatingTiltTagsProps: PropConfig[] = [
                { name: 'tags', type: 'TiltTag[]', default: '[]', description: 'Array of tag objects dictating text, style, positioned offsets (x, y), and degrees of base rotation.' },
                { isEditable: true,  name: 'tiltMagnitude', type: 'number',  default: 25 },
                { name: 'className', type: 'string', default: 'undefined', description: 'Additional container wrapper classes.' }
            ];
export const floatingTiltTagsRegistry: ComponentEntry = {
        ...floatingTiltTagsMetadata,
        preview: floatingTiltTagsPreview,
        props: floatingTiltTagsProps,
        dependencies: floatingTiltTagsDependencies,
        usageCode: floatingTiltTagsUsageCode,
    };

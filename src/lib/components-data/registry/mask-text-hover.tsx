"use client"

import { MaskTextHover } from "@/components/ui/mask-text-hover"
import { PropConfig, ComponentEntry } from "./index";

// ============================================
// METADATA
// ============================================
export const maskTextHoverMeta = {
    name: 'Mask Text Hover',
    slug: 'mask-text-hover',
    category: 'text-animations' as const,
    description: 'A dual-layered text effect that reveals secondary content via a cursor-following circular mask.',
    tags: ['React', 'Framer Motion', 'Hover', 'Masking'],
}

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
// ============================================
// PREVIEWS
// ============================================

const minhPhamText = [
    { text: "MAKING", color: "#D0C7B5" },
    { text: "GOOD", color: "#667eea" },
    { text: "SHIT", color: "#667eea" },
    { text: "SINCE", color: "#D0C7B5" },
    { text: "2009", color: "#D0C7B5" }
];
const minhPhamRevealText = [
    { text: "HIDING", color: "#0a0a0a" },
    { text: "BAD", color: "#0a0a0a" },
    { text: "SHIT", color: "#0a0a0a" },
    { text: "SINCE", color: "#0a0a0a" },
    { text: "2009", color: "#0a0a0a" }
];

// Standard Preview for Registry Grid
// Dynamic Preview for Playground
export const maskTextHoverPreview = (props: Record<string, any>) => {
    const useDefault = !props.baseText || props.baseText === 'Minh Pham Design';

    return (
        <MaskTextHover
            baseText={useDefault ? minhPhamText : props.baseText}
            revealText={useDefault ? minhPhamRevealText : (props.revealText || 'REVEAL')}
            className={props.className || "w-full min-h-[600px] rounded-2xl bg-[#0a0a0a]"}
            baseLayerClassName={props.baseLayerClassName || "text-2xl md:text-8xl lg:text-9xl"}
            revealLayerClassName={props.revealLayerClassName || "text-2xl md:text-8xl lg:text-9xl bg-[#ea580c]"}
            maskSize={props.maskSize}
            damping={props.damping}
            stiffness={props.stiffness}
            mass={props.mass}
            maskColor={props.maskColor}
            backgroundColor={props.backgroundColor}
        />
    )
}

// ============================================
// DEPENDENCIES
// ============================================
export const maskTextHoverDependencies = [
    "framer-motion",
    "clsx",
    "tailwind-merge"
]

// ============================================
// USAGE CODE
// ============================================
export const maskTextHoverUsageCode = `<MaskTextHover
  baseText={[
    { text: "MAKING", color: "#D0C7B5" },
    { text: "GOOD", color: "#ea580c" },
    { text: "SHIT", color: "#ea580c" },
    { text: "SINCE", color: "#D0C7B5" },
    { text: "2009", color: "#D0C7B5" }
]}
  revealText={[
    { text: "HIDING", color: "#0a0a0a" },
    { text: "BAD", color: "#0a0a0a" },
    { text: "SHIT", color: "#0a0a0a" },
    { text: "SINCE", color: "#0a0a0a" },
    { text: "2009", color: "#0a0a0a" }
]}
  maskSize={400}
  damping={40}
  stiffness={400}
  mass={0.1}
  className="w-full min-h-screen"
  baseLayerClassName="text-2xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
  revealLayerClassName="text-2xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter bg-[#ea580c]"
/>`
export const maskTextHoverProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'baseText',
        type: 'string',
        default: 'Minh Pham Design',
        description: 'The visible base text layer shown before hover interaction',
    },
    {
        isEditable: true,
        name: 'revealText',
        type: 'string',
        default: 'Hidden Layer',
        description: 'The text revealed inside the cursor-following circular mask',
    },
    {
        isEditable: true,
        name: 'maskSize',
        type: 'number',
        default: 400,
        min: 100,
        max: 800,
        step: 50,
        description: 'Diameter of the reveal circle on hover (px)',
    },
    {
        isEditable: true,
        name: 'damping',
        type: 'number',
        default: 40,
        min: 5,
        max: 80,
        step: 5,
        description: 'Spring damping — lower = more oscillation',
    },
    {
        isEditable: true,
        name: 'stiffness',
        type: 'number',
        default: 400,
        min: 50,
        max: 1000,
        step: 50,
        description: 'Spring stiffness — higher = snappier response',
    },
    {
        isEditable: true,
        name: 'mass',
        type: 'number',
        default: 0.1,
        min: 0.05,
        max: 2.0,
        step: 0.05,
        description: 'Spring mass — higher = more inertia',
    },
    {
        isEditable: true,
        name: 'maskColor',
        type: 'string',
        default: '#667eea',
        description: 'Background color of the revealed mask layer',
    },
    {
        isEditable: true,
        name: 'backgroundColor',
        type: 'string',
        default: '#060010',
        description: 'Background color of the outer container',
    },
    {
        name: 'baseLayerClassName',
        type: 'string',
        default: 'text-2xl md:text-8xl lg:text-9xl',
        description: 'Tailwind classes for the bottom (base) text layer typography and color',
    },
    {
        name: 'revealLayerClassName',
        type: 'string',
        default: 'text-2xl md:text-8xl lg:text-9xl bg-[#ea580c]',
        description: 'Tailwind classes for the top (reveal) layer, including background color',
    },
    {
        name: 'className',
        type: 'string',
        default: 'w-full min-h-[600px] bg-[#0a0a0a]',
        description: 'Tailwind classes for the outer container wrapper',
    },
];
export const maskTextHoverRegistry: ComponentEntry = {
    ...maskTextHoverMeta,
    preview: maskTextHoverPreview,
    props: maskTextHoverProps,
    dependencies: maskTextHoverDependencies,
    usageCode: maskTextHoverUsageCode,
};

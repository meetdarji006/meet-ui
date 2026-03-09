"use client";

import React from "react";
import { MorphingCardStack, CardData } from "@/components/ui/morphing-card-stack";
import { Laptop, Smartphone, Tablet, Watch } from "lucide-react";
import { PropConfig, ComponentEntry } from "./index";

// ============================================
// METADATA
// ============================================
export const morphingCardStackMeta = {
    name: "Morphing Card Stack",
    slug: "morphing-card-stack",
    category: "components" as const,
    description: "A versatile card component that smoothly morphs between stack, grid, and list layouts. Supports swipe gestures for the stack view.",
    tags: ["React", "Layout", "Cards", "Framer Motion", "Gestures"],
};

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
const mockCards: CardData[] = [
    {
        id: "1",
        title: "Desktop",
        description: "High performance computing for professionals and gamers alike.",
        icon: <Laptop size={20} />,
    },
    {
        id: "2",
        title: "Mobile",
        description: "Stay connected wherever you go with our next-gen mobile devices.",
        icon: <Smartphone size={20} />,
    },
    {
        id: "3",
        title: "Tablet",
        description: "The perfect balance between portability and screen real estate.",
        icon: <Tablet size={20} />,
    },
    {
        id: "4",
        title: "Wearables",
        description: "Track your health and stay informed right from your wrist.",
        icon: <Watch size={20} />,
    },
];

// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
// ============================================
// PREVIEWS
// ============================================
export const morphingCardStackPreview = (props: any) => (
    <div className="flex w-full items-center justify-center p-8 min-h-[400px]">
        <MorphingCardStack
            cards={mockCards}
            defaultLayout={props.defaultLayout}
        />
    </div>
);

export const morphingCardStackUsageCode = `const cards = [
{
id: "1",
title: "Desktop",
description: "High performance computing.",
icon: <Laptop size={20} />,
},
{
id: "2",
title: "Mobile",
description: "Stay connected wherever you go.",
icon: <Smartphone size={20} />,
},
{
id: "3",
title: "Tablet",
description: "The perfect balance.",
icon: <Tablet size={20} />,
}
];

export default function MyComponent() {
return (
<div className="p-8">
  <MorphingCardStack
    cards={cards}
    defaultLayout="stack"
  />
</div>
);
}`

export const morphingCardStackDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];
export const morphingCardStackProps: PropConfig[] = [
        { name: "cards", type: "CardData[]", default: "[]" },
        { isEditable: true, 
            name: "defaultLayout",
            type: "select" ,
            options: ["stack", "grid", "list"],
            default: "stack",
            description: "Initial layout mode",
        },
        { name: "onCardClick", type: "(card: CardData) => void", default: "undefined" },
        { name: "className", type: "string", default: '""' }
    ];
export const morphingCardStackRegistry: ComponentEntry = {
        ...morphingCardStackMeta,
        preview: morphingCardStackPreview,
        props: morphingCardStackProps,
        dependencies: morphingCardStackDependencies,
        usageCode: morphingCardStackUsageCode,
    };

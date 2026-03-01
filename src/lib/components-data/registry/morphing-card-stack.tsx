"use client";

import React from "react";
import { MorphingCardStack, CardData } from "@/components/ui/morphing-card-stack";
import { Laptop, Smartphone, Tablet, Watch } from "lucide-react";

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
export const morphingCardStackTableProps = [
    { name: "cards", type: "CardData[]", default: "[]" },
    { name: "defaultLayout", type: '"stack" | "grid" | "list"', default: '"stack"' },
    { name: "onCardClick", type: "(card: CardData) => void", default: "undefined" },
    { name: "className", type: "string", default: '""' },
];

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
export const morphingCardStackEditableProps = [
    {
        name: "defaultLayout",
        type: "select" as const,
        options: ["stack", "grid", "list"],
        default: "stack",
        description: "Initial layout mode",
    },
];

// ============================================
// PREVIEWS
// ============================================

export const morphingCardStackPreview = () => (
    <div className="flex w-full items-center justify-center p-4">
        <MorphingCardStack cards={mockCards} />
    </div>
);

export const morphingCardStackDynamicPreview = (props: any) => (
    <div className="flex w-full items-center justify-center p-8 min-h-[400px]">
        <MorphingCardStack
            cards={mockCards}
            defaultLayout={props.defaultLayout}
        />
    </div>
);

export const morphingCardStackUsageCode = `import { MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Laptop, Smartphone, Tablet } from "lucide-react";

const cards = [
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

export const morphingCardStackDependencies = ["framer-motion", "lucide-react"]

"use client";

import React from "react";
import { PatternText } from "@/components/ui/pattern-text";

// ============================================
// METADATA
// ============================================
export const patternTextMeta = {
    name: "Pattern Text",
    slug: "pattern-text",
    category: "ui" as const,
    description: "A text component with a patterned shadow effect.",
    tags: ["React", "Text", "Effect", "Tailwind CSS"],
};

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
export const patternTextTableProps = [
    { name: "text", type: "string", default: '"Text"' },
    { name: "className", type: "string", default: '""' },
];

// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
export const patternTextEditableProps = [
    {
        name: "text",
        type: "string" as const,
        default: "Pattern",
        description: "Text to display",
    },
];

// ============================================
// PREVIEWS
// ============================================

export const patternTextPreview = () => (
    <div className="flex items-center justify-center p-8 overflow-hidden">
        <PatternText text="Text" className="text-5xl" />
    </div>
);

export const patternTextDynamicPreview = (props: any) => (
    <div className="flex items-center justify-center p-8 overflow-hidden w-full h-full">
        <PatternText
            text={props.text || "Pattern"}
            className="text-6xl sm:text-8xl md:text-9xl"
        />
    </div>
);

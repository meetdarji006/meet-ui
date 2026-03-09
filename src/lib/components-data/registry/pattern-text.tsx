"use client";

import React from "react";
import { PatternText } from "@/components/ui/pattern-text";
import { PropConfig, ComponentEntry } from "./index";

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
// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
// ============================================
// PREVIEWS
// ============================================
export const patternTextPreview = (props: any) => (
    <div className="flex items-center justify-center p-8 overflow-hidden w-full h-full">
        <PatternText
            text={props.text || "Pattern"}
            className="text-5xl sm:text-8xl md:text-9xl"
        />
    </div>
);
export const patternTextProps: PropConfig[] = [
    {
        isEditable: true,
        name: "text",
        type: "string",
        default: "Pattern",
        description: "Text to display",
    },
    { name: "className", type: "string", default: '""' }
];
export const patternTextRegistry: ComponentEntry = {
    ...patternTextMeta,
    preview: patternTextPreview,
    props: patternTextProps,
    dependencies: ["clsx", "tailwind-merge"],
    usageCode: "",
};

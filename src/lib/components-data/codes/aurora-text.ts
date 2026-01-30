// Auto-generated from aurora-text.tsx
// Run: npm run generate-codes

export const auroraTextCodeTS = `"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AuroraTextProps extends Omit<MotionProps, "children"> {
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}

export const AuroraText = ({
    className,
    children,
    as: Component = "span",
    ...props
}: AuroraTextProps) => {
    const MotionComponent = motion.create(Component);

    return (
        <MotionComponent
            className={cn(
                "relative inline-block text-transparent bg-clip-text bg-[length:200%_auto] selection:bg-primary/20",
                className
            )}
            style={{
                backgroundImage:
                    "linear-gradient(to right, #ffaa40, #9c40ff, #ffaa40)",
            }}
            animate={{
                backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
                duration: 8, // Slower, more aurora-like
                ease: "linear",
                repeat: Infinity,
            }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};
`

export const auroraTextCodeJS = `"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
export const AuroraText = ({ className, children, as: Component = "span", ...props }) => {
    const MotionComponent = motion.create(Component);
    return (<MotionComponent className={cn("relative inline-block text-transparent bg-clip-text bg-[length:200%_auto] selection:bg-primary/20", className)} style={{
            backgroundImage: "linear-gradient(to right, #ffaa40, #9c40ff, #ffaa40)",
        }} animate={{
            backgroundPosition: ["0% center", "200% center"],
        }} transition={{
            duration: 8, // Slower, more aurora-like
            ease: "linear",
            repeat: Infinity,
        }} {...props}>
            {children}
        </MotionComponent>);
};
`

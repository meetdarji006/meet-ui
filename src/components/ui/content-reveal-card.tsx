"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface ContentRevealCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    actionText?: string;
    onAction?: () => void;
    icon?: React.ReactNode;
    duration?: number;
    size?: number;
    hoverBackgroundColor?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    actionClassName?: string;
}

export const ContentRevealCard = ({
    className,
    title,
    description,
    actionText = "Tell me more",
    onAction,
    icon,
    duration = 0.5,
    size = 300,
    hoverBackgroundColor,
    titleClassName,
    descriptionClassName,
    actionClassName,
    children,
    ...props
}: ContentRevealCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 639px)");
        const update = () => {
            setIsMobile(mq.matches);
            if (mq.matches) setIsHovered(true);
        };
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const active = isMobile || isHovered;

    return (
        <div
            className={cn(
                "group relative flex aspect-square w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-white hover:border-transparent",
                className
            )}
            style={{
                transitionDuration: `${duration * 1.4}s`,
                width: size ? `${size}px` : undefined,
                backgroundColor: active ? (hoverBackgroundColor || "#ffffff") : undefined,
                borderColor: active ? "transparent" : undefined
            }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            {...props}
        >
            <div className="relative z-10 flex h-full flex-col">
                {/* Title Section - Using Layout Animation */}
                <motion.div
                    layout
                    className={cn(
                        "flex flex-1 flex-col",
                        active ? "justify-start items-start" : "justify-center items-center"
                    )}
                    transition={{ duration: duration, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {icon && (
                        <motion.div
                            layout
                            className={cn(
                                "mb-4 text-white transition-colors ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                active ? "text-primary" : "text-white"
                            )}
                            style={{ transitionDuration: `${duration}s` }}
                        >
                            {icon}
                        </motion.div>
                    )}

                    <motion.h3
                        layout
                        className={cn(
                            "text-3xl font-bold uppercase tracking-wider transition-colors ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                            active ? "text-black" : "text-white",
                            titleClassName
                        )}
                        style={{ transitionDuration: `${duration}s` }}
                    >
                        {title}
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{
                            opacity: active ? 1 : 0,
                            height: active ? "auto" : 0,
                            y: active ? 0 : 20
                        }}
                        transition={{ duration: duration, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">
                            <div className="mb-4 h-px w-12 bg-gray-300" />
                            <p className={cn("text-gray-600 leading-relaxed text-sm text-left", descriptionClassName)}>
                                {description}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Action Link */}
                <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{
                        opacity: active ? 1 : 0,
                        height: active ? "auto" : 0,
                        y: active ? 0 : 10
                    }}
                    transition={{ duration: duration, ease: [0.25, 0.1, 0.25, 1], delay: active ? 0.1 : 0 }}
                    className="mt-auto overflow-hidden"
                >
                    <div className="pt-4">
                        <button
                            onClick={onAction}
                            className={cn("group/btn flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black transition-opacity hover:text-gray-700", actionClassName)}
                        >
                            {actionText}
                            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContentRevealCard;

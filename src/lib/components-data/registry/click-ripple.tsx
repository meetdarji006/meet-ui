"use client"

import { ClickRipple } from "@/components/ui/click-ripple"
import { PropConfig, ComponentEntry } from "./index";

export const clickRippleMeta = {
    name: 'Click Ripple',
    slug: 'click-ripple',
    category: 'ui' as const,
    description: 'A beautiful ripple effect that expands from where you click on the page.',
    tags: ['click', 'ripple', 'mouse', 'interactive', 'animation'],
}
export const clickRippleDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const clickRippleUsageCode = `<ClickRipple
  rippleSize={400}
  duration={800}
  color="#667eea"
/>`

// Static thumbnail preview
// Large interactive preview
export const clickRipplePreview = (props: any) => (
    <>
        <ClickRipple
            rippleSize={props.rippleSize ?? 400}
            duration={props.duration ?? 800}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Click anywhere</h2>
        </div>
    </>
)
export const clickRippleProps: PropConfig[] = [
        { isEditable: true,  name: 'rippleSize', type: 'number' , default: 400, min: 100, max: 800, step: 50, description: 'Ripple size (px)' },
        { isEditable: true,  name: 'duration', type: 'number' , default: 800, min: 300, max: 2000, step: 100, description: 'Animation duration (ms)' },
        { name: 'color', type: 'string', default: '"#667eea"' },
        { name: 'enabled', type: 'boolean', default: 'true' }
    ];
export const clickRippleRegistry: ComponentEntry = {
        ...clickRippleMeta,
        preview: clickRipplePreview,
        props: clickRippleProps,
        dependencies: clickRippleDependencies,
        usageCode: clickRippleUsageCode,
    };

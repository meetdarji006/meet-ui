"use client"

import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import { PropConfig, ComponentEntry } from "./index";

export const magneticCursorMeta = {
    name: 'Magnetic Cursor',
    slug: 'magnetic-cursor',
    category: 'ui' as const,
    description: 'Magnetic cursor trail with elastic-following concentric circles. Perfect for creating premium, interactive experiences.',
    tags: ['cursor', 'mouse', 'animation', 'interactive', 'trail'],
}

// Props for documentation table
// Editable props for playground
export const magneticCursorDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const magneticCursorUsageCode = `<MagneticCursor
  circleCount={5}
  circleSize={40}
  color="rgba(255, 255, 255, 0.6)"
  smoothing={0.15}
  borderWidth={1}
  hoverScale={1.5}
/>`

// Small preview for grid (static version - simulates trail effect)
// Large interactive preview
export const magneticCursorPreview = (props: any) => (
    <>
        <MagneticCursor
            circleCount={props.circleCount ?? 5}
            circleSize={props.circleSize ?? 40}
            color={props.color || "rgba(255, 255, 255, 0.6)"}
            smoothing={props.smoothing ?? 0.15}
            borderWidth={props.borderWidth ?? 1}
            hoverScale={props.hoverScale ?? 1.5}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Move your cursor</h2>
        </div>
    </>
)
export const magneticCursorProps: PropConfig[] = [
        { isEditable: true, 
            name: 'circleCount',
            type: 'number' ,
            default: 5,
            min: 2,
            max: 10,
            step: 1,
            description: 'Number of trailing circles'
        },
        { isEditable: true, 
            name: 'circleSize',
            type: 'number' ,
            default: 40,
            min: 20,
            max: 80,
            step: 5,
            description: 'Base size of circles in pixels'
        },
        { name: 'color', type: 'string', default: '"rgba(255, 255, 255, 0.6)"' },
        { isEditable: true, 
            name: 'smoothing',
            type: 'number' ,
            default: 0.5,
            min: 0.05,
            max: 1,
            step: 0.05,
            description: 'Smoothing factor (lower = more lag)'
        },
        { isEditable: true, 
            name: 'borderWidth',
            type: 'number' ,
            default: 1,
            min: 1,
            max: 4,
            step: 1,
            description: 'Border width of circles'
        },
        { name: 'enabled', type: 'boolean', default: 'true' },
        { isEditable: true, 
            name: 'hoverScale',
            type: 'number' ,
            default: 1.5,
            min: 1,
            max: 3,
            step: 0.1,
            description: 'Scale when hovering interactive elements'
        },
        { name: 'interactiveSelector', type: 'string', default: '"a, button, ..."' }
    ];
export const magneticCursorRegistry: ComponentEntry = {
        ...magneticCursorMeta,
        preview: magneticCursorPreview,
        props: magneticCursorProps,
        dependencies: magneticCursorDependencies,
        usageCode: magneticCursorUsageCode,
    };

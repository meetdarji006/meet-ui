import { PropConfig, ComponentEntry } from './index'
import React from 'react'

export const ringCursorMeta = {
    name: "Ring Cursor",
    slug: "ring-cursor",
    category: "mice" as const,
    description: "A dual-layer mouse interaction featuring an instant center point and a fluid, spring-delayed lagging ring based on framer-motion physics.",
    tags: ["cursor", "mouse", "pointer", "lagging", "framer-motion"],
}

// 1. Static Preview (used in the component showcase library)
// 2. Dynamic Preview (used in the interactive playground)
export const ringCursorPreview = (props: any) => (

    <div className="z-10 text-center space-y-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Fluid Ring Cursor</h3>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
            Move your mouse to interact. The outer ring trails with natural physics.
        </p>


        {/* Cursor Overlay */}
        <React.Suspense fallback={null}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/ring-cursor').then(mod => ({ default: mod.RingCursor }))),
                {
                    color: props.color || "#3b82f6",
                    dotSize: props.dotSize,
                    ringSize: props.ringSize,
                    ringThickness: props.ringThickness,
                    ringStiffness: props.ringStiffness,
                    ringDamping: props.ringDamping,
                    ringMass: props.ringMass,
                    dotStiffness: props.dotStiffness,
                    dotDamping: props.dotDamping,
                    dotMass: props.dotMass
                }
            )}
        </React.Suspense>
    </div>
)

// 3. Table Props
// 4. Editable Props (for MeetUI Controls)
// 5. Component Dependencies
export const ringCursorDependencies = ["framer-motion", "clsx", "tailwind-merge"];

// 6. Usage Code Example
export const ringCursorUsageCode = `<div className="relative w-full h-screen bg-neutral-900">
  <RingCursor
    color="#ffffff"
    dotSize={6}
    ringSize={32}
    ringThickness={1.5}
    ringStiffness={200}
    ringDamping={20}
    ringMass={0.5}
    dotStiffness={800}
    dotDamping={35}
    dotMass={0.5}
  />
  <div className="flex w-full h-full items-center justify-center">
    <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
      Hover Me
    </button>
  </div>
</div>`
export const ringCursorProps: PropConfig[] = [
    {
        isEditable: true,
        name: 'color',
        type: 'string',
        default: '#ffffff',
        description: 'Color'
    },
    {
        isEditable: true,
        name: 'dotSize',
        type: 'number',
        default: 6,
        min: 2,
        max: 20,
        description: 'Dot Size'
    },
    {
        isEditable: true,
        name: 'ringSize',
        type: 'number',
        default: 32,
        min: 10,
        max: 80,
        description: 'Ring Size'
    },
    {
        isEditable: true,
        name: 'ringThickness',
        type: 'number',
        default: 1.5,
        min: 0.5,
        max: 5,
        step: 0.5,
        description: 'Ring Thickness'
    },
    {
        isEditable: true,
        name: 'ringStiffness',
        type: 'number',
        default: 200,
        min: 10,
        max: 1000,
        description: 'Ring Stiffness'
    },
    {
        isEditable: true,
        name: 'ringDamping',
        type: 'number',
        default: 20,
        min: 1,
        max: 100,
        description: 'Ring Damping'
    },
    {
        isEditable: true,
        name: 'ringMass',
        type: 'number',
        default: 0.5,
        min: 0.1,
        max: 5,
        step: 0.1,
        description: 'Ring Mass'
    },
    {
        isEditable: true,
        name: 'dotStiffness',
        type: 'number',
        default: 800,
        min: 10,
        max: 2000,
        description: 'Dot Stiffness'
    },
    {
        isEditable: true,
        name: 'dotDamping',
        type: 'number',
        default: 35,
        min: 1,
        max: 100,
        description: 'Dot Damping'
    },
    {
        isEditable: true,
        name: 'dotMass',
        type: 'number',
        default: 0.5,
        min: 0.1,
        max: 5,
        step: 0.1,
        description: 'Dot Mass'
    }
];
export const ringCursorRegistry: ComponentEntry = {
    ...ringCursorMeta,
    preview: ringCursorPreview,
    props: ringCursorProps,
    dependencies: ringCursorDependencies,
    usageCode: ringCursorUsageCode,
};

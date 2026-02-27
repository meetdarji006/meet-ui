import { PropConfig } from './index'
import React from 'react'

export const ringCursorMeta = {
    name: "Ring Cursor",
    slug: "ring-cursor",
    category: "mice" as const,
    description: "A dual-layer mouse interaction featuring an instant center point and a fluid, spring-delayed lagging ring based on framer-motion physics.",
    tags: ["cursor", "mouse", "pointer", "lagging", "framer-motion"],
}

// 1. Static Preview (used in the component showcase library)
export const ringCursorPreview = () => (
    <div className="h-[400px] w-full rounded-lg flex flex-col items-center justify-center relative overflow-hidden dark:bg-neutral-950 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern-preview" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-preview)" className="text-neutral-500" />
            </svg>
        </div>

        <div className="z-10 text-center space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Fluid Ring Cursor</h3>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
                Move your mouse to interact. The outer ring trails with natural physics.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity">
                Hover Over Me
            </button>
        </div>

        {/* Cursor Overlay */}
        <React.Suspense fallback={null}>
            {React.createElement(
                React.lazy(() => import('@/components/ui/ring-cursor').then(mod => ({ default: mod.RingCursor }))),
                {
                    color: "#3b82f6"
                }
            )}
        </React.Suspense>
    </div>
)

// 2. Dynamic Preview (used in the interactive playground)
export const ringCursorDynamicPreview = (props: any) => (
    <div className="h-[400px] w-full rounded-lg flex flex-col items-center justify-center relative overflow-hidden dark:bg-neutral-950 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern-dynamic" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-dynamic)" className="text-neutral-500" />
            </svg>
        </div>

        <div className="z-10 text-center space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Fluid Ring Cursor</h3>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
                Move your mouse to interact. The outer ring trails with natural physics.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity">
                Hover Over Me
            </button>
        </div>

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
export const ringCursorTableProps = [
    {
        name: 'color',
        type: 'string',
        default: '"#ffffff"',
        description: 'Color of the cursor elements'
    },
    {
        name: 'dotSize',
        type: 'number',
        default: '6',
        description: 'Diameter of the central tracking dot in pixels'
    },
    {
        name: 'ringSize',
        type: 'number',
        default: '32',
        description: 'Base diameter of the outer lagging ring in pixels'
    },
    {
        name: 'ringThickness',
        type: 'number',
        default: '1.5',
        description: 'Stroke thickness of the outer ring in pixels'
    },
    {
        name: 'ringStiffness',
        type: 'number',
        default: '200',
        description: 'Spring stiffness for the outer ring'
    },
    {
        name: 'ringDamping',
        type: 'number',
        default: '20',
        description: 'Spring damping for the outer ring'
    },
    {
        name: 'ringMass',
        type: 'number',
        default: '0.5',
        description: 'Spring mass for the outer ring'
    },
    {
        name: 'dotStiffness',
        type: 'number',
        default: '800',
        description: 'Spring stiffness for the central tracking dot'
    },
    {
        name: 'dotDamping',
        type: 'number',
        default: '35',
        description: 'Spring damping for the central tracking dot'
    },
    {
        name: 'dotMass',
        type: 'number',
        default: '0.5',
        description: 'Spring mass for the central tracking dot'
    }
]

// 4. Editable Props (for MeetUI Controls)
export const ringCursorEditableProps: PropConfig[] = [
    {
        name: 'color',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Color'
    },
    {
        name: 'dotSize',
        type: 'number' as const,
        default: 6,
        min: 2,
        max: 20,
        description: 'Dot Size'
    },
    {
        name: 'ringSize',
        type: 'number' as const,
        default: 32,
        min: 10,
        max: 80,
        description: 'Ring Size'
    },
    {
        name: 'ringThickness',
        type: 'number' as const,
        default: 1.5,
        min: 0.5,
        max: 5,
        step: 0.5,
        description: 'Ring Thickness'
    },
    {
        name: 'ringStiffness',
        type: 'number' as const,
        default: 200,
        min: 10,
        max: 1000,
        description: 'Ring Stiffness'
    },
    {
        name: 'ringDamping',
        type: 'number' as const,
        default: 20,
        min: 1,
        max: 100,
        description: 'Ring Damping'
    },
    {
        name: 'ringMass',
        type: 'number' as const,
        default: 0.5,
        min: 0.1,
        max: 5,
        step: 0.1,
        description: 'Ring Mass'
    },
    {
        name: 'dotStiffness',
        type: 'number' as const,
        default: 800,
        min: 10,
        max: 2000,
        description: 'Dot Stiffness'
    },
    {
        name: 'dotDamping',
        type: 'number' as const,
        default: 35,
        min: 1,
        max: 100,
        description: 'Dot Damping'
    },
    {
        name: 'dotMass',
        type: 'number' as const,
        default: 0.5,
        min: 0.1,
        max: 5,
        step: 0.1,
        description: 'Dot Mass'
    }
]

// 5. Component Dependencies
export const ringCursorDependencies = [
    'framer-motion',
]

// 6. Usage Code Example
export const ringCursorUsageCode = `import { RingCursor } from "@/components/ui/ring-cursor";

export default function CursorExample() {
  return (
    <div className="relative w-full h-screen bg-neutral-900">
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
    </div>
  );
}`

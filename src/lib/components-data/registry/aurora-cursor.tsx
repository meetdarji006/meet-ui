"use client"

import { AuroraCursor } from "@/components/ui/aurora-cursor"
import { PropConfig, ComponentEntry } from "./index";

export const auroraCursorMeta = {
    name: 'Aurora Cursor',
    slug: 'aurora-cursor',
    category: 'ui' as const,
    description: 'A stunning aurora borealis effect that follows your cursor with multi-layered animated gradients.',
    tags: ['cursor', 'aurora', 'gradient', 'animated', 'northern-lights', 'stunning'],
}
export const auroraCursorDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const auroraCursorUsageCode = `<AuroraCursor
  size={100}
  smoothing={0.12}
/>`

// Static thumbnail preview
// Large interactive preview
export const auroraCursorPreview = (props: any) => (
    <>
        <AuroraCursor size={props.size ?? 100} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-5xl font-bold uppercase">Move your cursor</h2>
        </div>
    </>
)
export const auroraCursorProps: PropConfig[] = [
        { isEditable: true,  name: 'size', type: 'number' , default: 200, min: 50, max: 500, step: 50, description: 'Aurora size' },
        { name: 'smoothing', type: 'number', default: '0.12' },
        { name: 'enabled', type: 'boolean', default: 'true' }
    ];
export const auroraCursorRegistry: ComponentEntry = {
        ...auroraCursorMeta,
        preview: auroraCursorPreview,
        props: auroraCursorProps,
        dependencies: auroraCursorDependencies,
        usageCode: auroraCursorUsageCode,
    };

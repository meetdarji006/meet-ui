"use client"

import { MagneticButton } from "@/components/ui/magnetic-button"

export const magneticButtonMeta = {
    name: 'Magnetic Button',
    slug: 'magnetic-button',
    category: 'gsap' as const,
    description: 'A button that magnetically pulls towards the cursor on hover.',
    tags: ['gsap', 'button', 'interactive', 'magnetic'],
}

export const magneticButtonTableProps = [
    { name: 'children', type: 'ReactNode', default: '-' },
    { name: 'strength', type: 'number', default: '0.5' },
    { name: 'className', type: 'string', default: '-' },
]

export const magneticButtonEditableProps = [
    {
        name: 'strength',
        type: 'number' as const,
        default: 0.5,
        min: 0.1,
        max: 2,
        step: 0.1,
        description: 'Magnetic pull strength'
    }
]

export const magneticButtonUsageCode = `<MagneticButton strength={0.5}>
  Hover Me
</MagneticButton>`

export const magneticButtonPreview = () => (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-transparent border border-muted/20 rounded-xl overflow-hidden">
        <MagneticButton>Hover Me</MagneticButton>
    </div>
)

export const magneticButtonDynamicPreview = (props: any) => (
    <MagneticButton {...props}>Hover Me</MagneticButton>
)

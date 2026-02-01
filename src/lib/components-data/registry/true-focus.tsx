import { ComponentMeta } from './index'

export const trueFocusMeta: ComponentMeta = {
    name: 'True Focus',
    slug: 'true-focus',
    category: 'ui',
    description: 'A cinema-mode focus effect that blurs surrounding text and highlights the active word.',
    tags: ['focus', 'blur', 'input', 'highlight', 'framer-motion'],
}

export const trueFocusUsageCode = `import { TrueFocus } from "@/components/ui/true-focus";

export function TrueFocusDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center w-full">
      <TrueFocus
        sentence="Focus on what matters"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={0.3}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}
`

export const trueFocusTableProps = [
    { name: 'sentence', type: 'string' as const, default: 'True Focus', description: 'The text to display.' },
    { name: 'manualMode', type: 'boolean' as const, default: 'false', description: 'Enable manual hover interaction.' },
    { name: 'blurAmount', type: 'number' as const, default: '5', description: 'Blur intensity for inactive words.' },
    { name: 'borderColor', type: 'string' as const, default: 'green', description: 'Color of the focus brackets.' },
    { name: 'glowColor', type: 'string' as const, default: 'rgba(0, 255, 0, 0.6)', description: 'Glow color of the brackets.' },
    { name: 'animationDuration', type: 'number' as const, default: '0.5', description: 'Duration of the focus transition.' },
    { name: 'pauseBetweenAnimations', type: 'number' as const, default: '1', description: 'Pause time between auto-focus switches.' },
]

export const trueFocusEditableProps = [
    { name: 'sentence', type: 'string' as const, default: 'True Focus is essential for success' },
    { name: 'manualMode', type: 'boolean' as const, default: false },
    { name: 'blurAmount', type: 'number' as const, default: 5, min: 0, max: 20 },
    { name: 'animationDuration', type: 'number' as const, default: 0.5, min: 0.1, max: 2, step: 0.1 },
    { name: 'pauseBetweenAnimations', type: 'number' as const, default: 0.5, min: 0, max: 5, step: 0.1 },
]

export const trueFocusDependencies = ['framer-motion']

import { TrueFocus } from '@/components/ui/true-focus'

export const trueFocusPreview = () => (
    <div className="flex items-center justify-center p-10 w-full h-[300px] bg-black text-white">
        <TrueFocus
            sentence="Focus on the present moment"
        />
    </div>
)

export const trueFocusDynamicPreview = (props: any) => (
    <div className="flex items-center justify-center p-10 w-full h-[300px] bg-black text-white">
        <TrueFocus {...props} />
    </div>
)

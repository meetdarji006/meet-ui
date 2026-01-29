// Props documentation and editor config for each component

export interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select'
    default: any
    description?: string
    options?: string[]
    min?: number
    max?: number
    step?: number
}

// Props for table display
export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {
    'split-text-reveal': [
        { name: 'text', type: 'string', default: '"Hello"' },
        { name: 'duration', type: 'number', default: '1.5' },
        { name: 'stagger', type: 'number', default: '0.05' },
        { name: 'delay', type: 'number', default: '0' },
        { name: 'once', type: 'boolean', default: 'false' },
    ],
    'stretch-text': [
        { name: 'text', type: 'string', default: '"Hello"' },
        { name: 'className', type: 'string', default: '""' },
        { name: 'stretchIntensity', type: 'number', default: '1.5' },
        { name: 'stretchRange', type: 'number', default: '200' },
    ],
}

// Editable props config for playground
export const editableProps: Record<string, PropConfig[]> = {
    'split-text-reveal': [
        { name: 'text', type: 'string', default: 'ELEGANT' },
        {
            name: 'duration',
            type: 'number',
            default: 1.5,
            min: 0.5,
            max: 5,
            step: 0.1,
            description: 'Animation duration per letter'
        },
        {
            name: 'stagger',
            type: 'number',
            default: 0.05,
            min: 0.01,
            max: 0.5,
            step: 0.01,
            description: 'Delay between each letter'
        },
        {
            name: 'delay',
            type: 'number',
            default: 0,
            min: 0,
            max: 3,
            step: 0.1,
            description: 'Initial delay before animation starts'
        },
        {
            name: 'once',
            type: 'boolean',
            default: false,
            description: 'Run animation only once'
        }
    ],
    'stretch-text': [
        {
            name: 'text',
            type: 'string',
            default: 'STRETCH ME',
            description: 'Text to display'
        },
        {
            name: 'stretchIntensity',
            type: 'number',
            default: 1.5,
            min: 1,
            max: 3,
            step: 0.1,
            description: 'How much the text stretches'
        },
        {
            name: 'stretchRange',
            type: 'number',
            default: 200,
            min: 50,
            max: 400,
            step: 10,
            description: 'Range of the stretch effect in pixels'
        },
    ],
}

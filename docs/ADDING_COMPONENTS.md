# Adding New Components to MeetUI

This guide explains how to add a new component to the MeetUI component library.

---

## File Structure

```
src/lib/components-data/
├── index.ts                    # Main barrel export
├── constants.ts                # Filters, sidebar items
├── props.ts                    # Props documentation & editable config
├── codes/                      # Auto-generated code strings
│   ├── index.ts
│   └── [component-slug].ts
└── registry/                   # Component previews & metadata
    ├── index.tsx               # Combines all registries
    └── [component-slug].tsx    # Individual component registry
```

---

## Quick Steps

1. Create component file
2. Create registry file
3. Add to registry index
4. Add to generate-codes script
5. Run code generation
6. Add props documentation
7. Add to sidebar

---

## Step 1: Create Component File

```tsx
// src/components/ui/my-component.tsx
"use client"

import { cn } from "@/lib/utils"

interface MyComponentProps {
    text: string
    className?: string
    intensity?: number
}

export function MyComponent({ text, className, intensity = 1 }: MyComponentProps) {
    return (
        <div className={cn("your-styles", className)}>
            {text}
        </div>
    )
}
```

---

## Step 2: Create Registry File

```tsx
// src/lib/components-data/registry/my-component.tsx
"use client"

import { MyComponent } from "@/components/ui/my-component"

// Metadata for listing page
export const myComponentMeta = {
    name: 'My Component',
    slug: 'my-component',
    category: 'ui' as const,
    description: 'Brief description of the component.',
    tags: ['React', 'Motion'],
}

// Small preview for components listing grid
export const myComponentPreview = () => (
    <MyComponent
        text="Preview"
        className="text-xl"
    />
)

// Large editable preview for component viewer playground
export const myComponentDynamicPreview = (props: Record<string, any>) => (
    <MyComponent
        text={props.text || "Hello"}
        intensity={props.intensity ?? 1}
        className="text-4xl"
    />
)
```

---

## Step 3: Add to Registry Index

```tsx
// src/lib/components-data/registry/index.tsx

// Add import
import {
    myComponentMeta,
    myComponentPreview,
    myComponentDynamicPreview
} from './my-component'

// Add to componentsList
export const componentsList: ComponentEntry[] = [
    // ... existing
    {
        ...myComponentMeta,
        preview: myComponentPreview,
    },
]

// Add to dynamicPreviews
export const dynamicPreviews = {
    // ... existing
    'my-component': myComponentDynamicPreview,
}
```

---

## Step 4: Add to Generate Script

```js
// scripts/generate-codes.js
const componentSlugs = [
    'stretch-text',
    'my-component',  // ← Add here
]
```

---

## Step 5: Run Code Generation

```bash
npm run generate-codes
```

---

## Step 6: Add Props Documentation

```ts
// src/lib/components-data/props.ts

// For props table
export const componentProps = {
    // ... existing
    'my-component': [
        { name: 'text', type: 'string', default: '"Hello"' },
        { name: 'intensity', type: 'number', default: '1' },
    ],
}

// For playground editor
export const editableProps = {
    // ... existing
    'my-component': [
        { name: 'text', type: 'string', default: 'Hello' },
        { name: 'intensity', type: 'number', default: 1, min: 0.5, max: 3, step: 0.1 },
    ],
}
```

---

## Step 7: Add to Sidebar

```ts
// src/lib/components-data/constants.ts
export const sidebarComponents = [
    { name: 'Stretch Text', slug: 'stretch-text' },
    { name: 'My Component', slug: 'my-component' },  // ← Add here
]
```

---

## Categories

| Category | Use For |
|----------|---------|
| `ui` | Buttons, cards, inputs, text effects |
| `3d` | Three.js, WebGL, canvas elements |

---

## Common Tags

- `React` - Pure React component
- `Motion` - Uses Framer Motion
- `Three.js` - Uses React Three Fiber
- `GLSL` - Custom shaders
- `CSS` - CSS-based effects

---

## Tips

- **File naming:** Use kebab-case (`my-component.tsx`)
- **Export naming:** Use camelCase (`myComponentMeta`)
- **Small preview:** Keep it compact for the grid view
- **Dynamic preview:** Make it larger, accept all editable props
- **Props editor:** Define min/max/step for number sliders

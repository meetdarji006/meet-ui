# Adding New Components to MeetUI

This guide explains how to add a new component to the MeetUI component library.

---

## File Structure

```
src/lib/components-data/
├── index.ts                    # Main barrel export
├── constants.ts                # Sidebar categories
├── codes/                      # Code strings for copy/paste
│   ├── index.ts
│   └── [component-slug].ts
├── registry/                   # Component entries (meta + props + grid preview)
│   ├── index.tsx
│   └── [component-slug].tsx
└── previews/                   # Full preview pages for component viewer
    ├── index.tsx
    └── [component-slug].tsx
```

---

## Quick Steps

1. Create component file in `src/components/ui/`
2. Create registry file with meta + props + previews (grid & dynamic)
3. Create codes file for TS/JS code strings
4. Add to registry index
5. Add to codes index
6. Add to sidebar

---

## Step 1: Create Component File

```tsx
// src/components/ui/my-component.tsx
"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface MyComponentProps {
    text?: string
    className?: string
    intensity?: number
}

export const MyComponent = ({
    text = "Hello World",
    className = "",
    intensity = 1,
}: MyComponentProps) => {
    return (
        <p className={className}>
            {text}
        </p>
    )
}
```

---

## Step 2: Create Registry File (All-in-One)

```tsx
// src/lib/components-data/registry/my-component.tsx
"use client"

import { MyComponent } from "@/components/ui/my-component"

// ============================================
// METADATA
// ============================================
export const myComponentMeta = {
    name: 'My Component',
    slug: 'my-component',
    category: 'ui' as const,
    description: 'Brief description of what it does.',
    tags: ['React', 'Motion'],
}

// ============================================
// PROPS FOR DOCUMENTATION TABLE
// ============================================
export const myComponentTableProps = [
    { name: 'text', type: 'string', default: '"Hello World"' },
    { name: 'intensity', type: 'number', default: '1' },
]

// ============================================
// EDITABLE PROPS FOR PLAYGROUND
// ============================================
export const myComponentEditableProps = [
    {
        name: 'text',
        type: 'string' as const,
        default: 'Hello World',
        description: 'Text to display'
    },
    {
        name: 'intensity',
        type: 'number' as const,
        default: 1,
        min: 0.5,
        max: 3,
        step: 0.1,
        description: 'Effect intensity'
    },
]

// ============================================
// PREVIEWS
// ============================================

// Small preview for grid
export const myComponentPreview = () => (
    <MyComponent text="Preview" className="text-xl" />
)

// Large interactive preview for playground
export const myComponentDynamicPreview = (props: any) => (
    <MyComponent
        text={props.text || "Hello World"}
        intensity={props.intensity ?? 1}
        className="text-4xl"
    />
)
```

---

## Step 3: Create Codes File

```ts
// src/lib/components-data/codes/my-component.ts

export const myComponentCodeTS = `"use client"

// ... full TypeScript component code
`

export const myComponentCodeJS = `"use client"

// ... full JavaScript component code
`
```

---

## Step 4: Add to Registry Index

```tsx
// src/lib/components-data/registry/index.tsx

// Add import
import {
    myComponentMeta,
    myComponentPreview,
    myComponentDynamicPreview,
    myComponentTableProps,
    myComponentEditableProps
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

// Add to componentProps
export const componentProps = {
    // ... existing
    'my-component': myComponentTableProps,
}

// Add to editableProps
export const editableProps = {
    // ... existing
    'my-component': myComponentEditableProps,
}
```

---

## Step 5: Add to Codes Index

```ts
// src/lib/components-data/codes/index.ts

import { myComponentCodeTS, myComponentCodeJS } from './my-component'

export const componentCodes = {
    // ... existing
    'my-component': { ts: myComponentCodeTS, js: myComponentCodeJS },
}
```

---

## Step 6: Add to Sidebar

```ts
// src/lib/components-data/constants.ts
export const sidebarCategories = [
    {
        id: 'text-animations',
        label: 'Text Animations',
        components: [
            // ... existing
            { name: 'My Component', slug: 'my-component' },
        ]
    },
    // ... other categories
]
```

---

## Prop Types Reference

```ts
interface PropConfig {
    name: string
    type: 'string' | 'number' | 'boolean' | 'select'
    default: any
    description?: string
    options?: string[]  // for 'select' type
    min?: number        // for 'number' type
    max?: number
    step?: number
}
```

---

## Categories

| Category | Use For |
|----------|---------|
| `ui` | Buttons, cards, text effects |
| `3d` | Three.js, WebGL elements |

---

## Sidebar Categories

- **Text Animations** - Text reveal, scroll effects
- **Components** - UI elements, buttons, cards
- **Backgrounds** - Gradient, particle effects

---

## Tips

- **Keep it independent** - No `cn` helper, no custom imports
- **File naming** - Use kebab-case (`my-component.tsx`)
- **Export naming** - Use camelCase (`myComponentMeta`)
- **Props in registry** - Keep all props with the component
- **Code strings** - Full standalone component code

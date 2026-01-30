---
description: How to add a new component to MeetUI
---

# Add New Component Workflow

// turbo-all

## 1. Create Component File
Create `src/components/ui/[component-slug].tsx` with the component code.

## 2. Create Registry File
Create `src/lib/components-data/registry/[component-slug].tsx` with:
- `[name]Meta` - metadata
- `[name]TableProps` - props for docs table
- `[name]EditableProps` - props for playground
- `[name]Preview` - grid thumbnail
- `[name]DynamicPreview` - inline preview (optional)

## 3. Create Preview Page
Create `src/lib/components-data/previews/[component-slug].tsx` with:
- `[name]PreviewPage` - full preview with proper scroll/layout for the component

## 4. Create Codes File
Create `src/lib/components-data/codes/[component-slug].ts` with:
- `[name]CodeTS` - TypeScript code string
- `[name]CodeJS` - JavaScript code string

## 5. Update Registry Index
In `src/lib/components-data/registry/index.tsx`:
- Import all exports from the new registry file
- Add to `componentsList`
- Add to `dynamicPreviews`
- Add to `componentProps`
- Add to `editableProps`

## 6. Update Previews Index
In `src/lib/components-data/previews/index.tsx`:
- Import the preview page component
- Add to `previewPages` mapping

## 7. Update Codes Index
In `src/lib/components-data/codes/index.ts`:
- Import code strings
- Add to `componentCodes`

## 8. Add to Sidebar
In `src/lib/components-data/constants.ts`:
- Add to appropriate category in `sidebarCategories`

## Reference
See `docs/ADDING_COMPONENTS.md` for full details and examples.

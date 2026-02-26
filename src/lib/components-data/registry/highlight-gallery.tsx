import { HighlightGallery } from "@/components/ui/highlight-gallery"
import { PropConfig } from './index'

const GALLERY_ITEMS = [
    {
        label: "Models",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=faces"
    },
    {
        label: "Influencers",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop&crop=faces"
    },
    {
        label: "Athletes",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=500&fit=crop&crop=faces"
    },
    {
        label: "Entertainers",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=faces"
    },
    {
        label: "Gamers",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop&crop=faces"
    },
]

export const highlightGalleryMeta = {
    name: 'Highlight Gallery',
    slug: 'highlight-gallery',
    category: 'interaction' as const,
    description: 'An editorial-style hover gallery with bold stacked text, a sliding highlight bar, and instant image reveals.',
    tags: ['hover', 'gallery', 'text', 'interaction', 'editorial', 'brutalist'],
}

export const highlightGalleryPreview = () => (
    <div className="w-full rounded-2xl overflow-hidden">
        <HighlightGallery items={GALLERY_ITEMS} />
    </div>
)

export const highlightGalleryDynamicPreview = (props: any) => (
    <div className="w-full rounded-2xl overflow-hidden">
        <HighlightGallery
            items={GALLERY_ITEMS}
            barColor={props.barColor}
            textColor={props.textColor}
            activeTextColor={props.activeTextColor}
            bgColor={props.bgColor}
            imageWidth={props.imageWidth}
            imageHeight={props.imageHeight}
            barStiffness={props.barStiffness}
            barDamping={props.barDamping}
            border={props.border}
        />
    </div>
)

export const highlightGalleryTableProps: PropConfig[] = [
    { name: 'items', type: 'string', default: '[]', description: 'Array of { label, badge?, image }' },
    { name: 'barColor', type: 'string', default: '#ffffff', description: 'Highlight bar color' },
    { name: 'textColor', type: 'string', default: '#ffffff', description: 'Inactive text color' },
    { name: 'activeTextColor', type: 'string', default: '#060010', description: 'Active text color' },
    { name: 'bgColor', type: 'string', default: '#f0f0f0', description: 'Background color' },
    { name: 'imageWidth', type: 'number', default: '180', description: 'Image card width (px)' },
    { name: 'imageHeight', type: 'number', default: '240', description: 'Image card height (px)' },
    { name: 'fontSize', type: 'string', default: 'clamp(2.5rem, 8vw, 7rem)', description: 'Text font size' },
    { name: 'barStiffness', type: 'number', default: '500', description: 'Bar spring stiffness' },
    { name: 'barDamping', type: 'number', default: '35', description: 'Bar spring damping' },
    { name: 'border', type: 'boolean', default: 'false', description: 'Show border around component' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const highlightGalleryEditableProps: PropConfig[] = [
    {
        name: 'barColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Bar Color',
    },
    {
        name: 'textColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Text Color',
    },
    {
        name: 'activeTextColor',
        type: 'string' as const,
        default: '#060010',
        description: 'Active Text Color',
    },
    {
        name: 'bgColor',
        type: 'string' as const,
        default: 'transparent',
        description: 'Background Color',
    },
    {
        name: 'imageWidth',
        type: 'number' as const,
        default: 180,
        min: 80,
        max: 400,
        step: 10,
        description: 'Image Width (px)',
    },
    {
        name: 'imageHeight',
        type: 'number' as const,
        default: 240,
        min: 100,
        max: 500,
        step: 10,
        description: 'Image Height (px)',
    },
    {
        name: 'barStiffness',
        type: 'number' as const,
        default: 500,
        min: 100,
        max: 1000,
        step: 50,
        description: 'Bar Stiffness',
    },
    {
        name: 'barDamping',
        type: 'number' as const,
        default: 35,
        min: 10,
        max: 60,
        step: 5,
        description: 'Bar Damping',
    },
    {
        name: 'border',
        type: 'boolean' as const,
        default: false,
        description: 'Border',
    },
]

export const highlightGalleryDependencies: string[] = ['framer-motion']

export const highlightGalleryUsageCode = `import { HighlightGallery } from '@/components/ui/highlight-gallery'

const items = [
  { label: "Models", image: "/images/model.jpg" },
  { label: "Influencers", image: "/images/influencer.jpg" },
  { label: "Athletes", image: "/images/athlete.jpg" },
]

export default function MyComponent() {
  return (
    <HighlightGallery
      items={items}
      barColor="#000000"
      bgColor="#f0f0f0"
    />
  )
}`

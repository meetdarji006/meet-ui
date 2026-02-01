
import { CircularGallery } from "@/components/ui/circular-gallery";
import { ComponentMeta } from "./index";

export const circularGalleryMeta: ComponentMeta = {
    name: "Circular Gallery",
    slug: "circular-gallery",
    category: "ui",
    description: "A 3D interactive circular photo gallery with drag and scroll momentum.",
    tags: ["3d", "gallery", "carousel", "framer-motion", "drag", "scroll"],
}

export const circularGalleryTableProps = [
    { name: 'items', type: 'array', default: '[]' },
    { name: 'bend', type: 'number', default: '3' },
    { name: 'textColor', type: 'string', default: '#ffffff' },
    { name: 'borderRadius', type: 'number', default: '0.05' },
]

export const circularGalleryEditableProps = [
    { name: 'bend', type: 'number' as const, default: 0, min: 0, max: 10, step: 1, description: 'Bend intensity (curvature)' },
    { name: 'textColor', type: 'string' as const, default: '#ffffff', description: 'Text color (hex)' },
    { name: 'borderRadius', type: 'number' as const, default: 0.05, min: 0, max: 0.5, step: 0.01, description: 'Border radius' },
    { name: 'autoRotate', type: 'boolean' as const, default: true, description: 'Auto-rotate when idle' },
    { name: 'autoRotateSpeed', type: 'number' as const, default: 0.5, min: 0.1, max: 2, step: 0.1, description: 'Auto-rotate speed' },
]

export const circularGalleryDependencies = ["framer-motion"]

export const circularGalleryUsageCode = `<CircularGallery
  items={[
    { image: "/path/to/image1.jpg" },
    { image: "/path/to/image2.jpg" },
    { image: "/path/to/image3.jpg" },
    { image: "/path/to/image4.jpg" },
  ]}
  bend={3}
  textColor="#ffffff"
  borderRadius={0.05}
  autoRotate={true}
  autoRotateSpeed={0.5}
/>`
export const circularGalleryPreview = () => (
    <CircularGallery
        items={[
            { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2074&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=2070&auto=format&fit=crop" },
        ]}
    />
)

export const circularGalleryDynamicPreview = (props: any) => (
    <CircularGallery
        items={[
            { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2074&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop" },
            { image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=2070&auto=format&fit=crop" },
        ]}
        bend={props.bend}
        textColor={props.textColor}
        borderRadius={props.borderRadius}
        autoRotate={props.autoRotate}
        autoRotateSpeed={props.autoRotateSpeed}
    />
)

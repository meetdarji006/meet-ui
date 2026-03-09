import { StackedCarousel } from "@/components/ui/stacked-carousel"
import { PropConfig, ComponentEntry } from './index'

const CAROUSEL_ITEMS = [
    {
        id: "1",
        title: "Paris",
        subtitle: "01",
        image: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g="
    },
    {
        id: "2",
        title: "Warsaw",
        subtitle: "02",
        image: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY="
    },
    {
        id: "3",
        title: "Madrid",
        subtitle: "03",
        image: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I="
    },
    {
        id: "4",
        title: "Sydney",
        subtitle: "04",
        image: "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs="
    },
    {
        id: "5",
        title: "Istanbul",
        subtitle: "05",
        image: "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0="
    },
    {
        id: "6",
        title: "Prague",
        subtitle: "06",
        image: "https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8="
    },
]

export const stackedCarouselMeta = {
    name: 'Stacked Carousel',
    slug: 'stacked-carousel',
    category: 'interaction' as const,
    description: 'A 3D stacked image carousel driven by scroll and drag interactions with momentum physics.',
    tags: ['carousel', '3d', 'interaction', 'images', 'drag', 'scroll'],
}
export const stackedCarouselPreview = (props: any) => (
    <div className="relative w-full h-[600px] bg-black/5 rounded-2xl overflow-hidden">
        <StackedCarousel
            items={CAROUSEL_ITEMS}
            speedDrag={props.speedDrag}
            speedWheel={props.speedWheel}
            showDots={props.showDots}
            autoPlay={props.autoPlay}
            autoPlayInterval={props.autoPlayInterval}
        />
    </div>
)
export const stackedCarouselDependencies: string[] = ["lucide-react", "clsx", "tailwind-merge"];

export const stackedCarouselUsageCode = `const items = [
{ id: '1', title: 'Paris', subtitle: '01', image: '/images/paris.jpg' },
{ id: '2', title: 'Warsaw', subtitle: '02', image: '/images/warsaw.jpg' },
{ id: '3', title: 'Madrid', subtitle: '03', image: '/images/madrid.jpg' },
]

export default function MyComponent() {
return (
<div className="w-full h-[600px]">
  <StackedCarousel
    items={items}
    showDots={true}
    speedDrag={-0.1}
    speedWheel={0.02}
  />
</div>
)
}`
export const stackedCarouselProps: PropConfig[] = [
        { name: 'items', type: 'string', default: '[]', description: 'Array of CarouselItemData objects' },
        { isEditable: true, 
            name: 'speedDrag',
            type: 'number' ,
            default: -0.1,
            min: -0.5,
            max: -0.01,
            step: 0.01,
            description: 'Drag Speed'
        },
        { isEditable: true, 
            name: 'speedWheel',
            type: 'number' ,
            default: 0.02,
            min: 0.005,
            max: 0.1,
            step: 0.005,
            description: 'Scroll Speed'
        },
        { name: 'itemWidth', type: 'string', default: '300px', description: 'Width of each carousel card' },
        { name: 'itemHeight', type: 'string', default: '400px', description: 'Height of each carousel card' },
        { isEditable: true, 
            name: 'showDots',
            type: 'boolean' ,
            default: true,
            description: 'Show Dots'
        },
        { isEditable: true, 
            name: 'autoPlay',
            type: 'boolean' ,
            default: true,
            description: 'Auto Play'
        },
        { isEditable: true, 
            name: 'autoPlayInterval',
            type: 'number' ,
            default: 2000,
            min: 1000,
            max: 10000,
            step: 500,
            description: 'Auto Play Interval (ms)'
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
        { name: 'onActiveChange', type: 'string', default: '-', description: 'Callback when active slide changes' }
    ];
export const stackedCarouselRegistry: ComponentEntry = {
        ...stackedCarouselMeta,
        preview: stackedCarouselPreview,
        props: stackedCarouselProps,
        dependencies: stackedCarouselDependencies,
        usageCode: stackedCarouselUsageCode,
    };

import { FollowEyes } from "@/components/ui/follow-eyes"
import { PropConfig } from './index'

export const followEyesMeta = {
    name: 'Follow Eyes',
    slug: 'follow-eyes',
    category: 'interaction' as const,
    description: 'Two eyes that follow your mouse cursor with smooth pupil tracking.',
    tags: ['eyes', 'cursor', 'follow', 'interaction', 'animation', 'fun'],
}

export const followEyesPreview = () => (
    <div className="w-full flex items-center justify-center py-20">
        <FollowEyes />
    </div>
)

export const followEyesDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-20">
        <FollowEyes
            eyeSize={props.eyeSize}
            pupilSize={props.pupilSize}
            gap={props.gap}
            eyeColor={props.eyeColor}
            pupilColor={props.pupilColor}
            maxTravel={props.maxTravel}
        />
    </div>
)

export const followEyesTableProps: PropConfig[] = [
    { name: 'eyeSize', type: 'number', default: '60', description: 'Eye diameter in px' },
    { name: 'pupilSize', type: 'number', default: '20', description: 'Pupil diameter in px' },
    { name: 'gap', type: 'number', default: '16', description: 'Gap between eyes in px' },
    { name: 'eyeColor', type: 'string', default: '#ffffff', description: 'Eyeball color' },
    { name: 'pupilColor', type: 'string', default: '#1a1028', description: 'Pupil color' },
    { name: 'glintColor', type: 'string', default: '#ffffff', description: 'Glint highlight color' },
    { name: 'maxTravel', type: 'number', default: '0.35', description: 'Pupil travel range (0-1)' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const followEyesEditableProps: PropConfig[] = [
    {
        name: 'eyeSize',
        type: 'number' as const,
        default: 60,
        min: 30,
        max: 120,
        step: 5,
        description: 'Eye Size',
    },
    {
        name: 'pupilSize',
        type: 'number' as const,
        default: 20,
        min: 8,
        max: 50,
        step: 2,
        description: 'Pupil Size',
    },
    {
        name: 'gap',
        type: 'number' as const,
        default: 16,
        min: 4,
        max: 40,
        step: 2,
        description: 'Gap',
    },
    {
        name: 'eyeColor',
        type: 'string' as const,
        default: '#ffffff',
        description: 'Eye Color',
    },
    {
        name: 'pupilColor',
        type: 'string' as const,
        default: '#1a1028',
        description: 'Pupil Color',
    },
    {
        name: 'maxTravel',
        type: 'number' as const,
        default: 0.35,
        min: 0.1,
        max: 0.9,
        step: 0.05,
        description: 'Travel Range',
    },
]

export const followEyesDependencies: string[] = []

export const followEyesUsageCode = `import { FollowEyes } from '@/components/ui/follow-eyes'

export default function MyComponent() {
  return (
    <FollowEyes
      eyeSize={60}
      pupilSize={20}
      gap={16}
      eyeColor="#ffffff"
      pupilColor="#1a1028"
      maxTravel={0.35}
    />
  )
}`

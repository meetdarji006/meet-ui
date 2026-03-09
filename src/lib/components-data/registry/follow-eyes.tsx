import { FollowEyes } from "@/components/ui/follow-eyes"
import { PropConfig, ComponentEntry } from './index'

export const followEyesMeta = {
    name: 'Follow Eyes',
    slug: 'follow-eyes',
    category: 'interaction' as const,
    description: 'Two eyes that follow your mouse cursor with smooth pupil tracking.',
    tags: ['eyes', 'cursor', 'follow', 'interaction', 'animation', 'fun'],
}
export const followEyesPreview = (props: any) => (
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
export const followEyesDependencies: string[] = ["clsx", "tailwind-merge"];

export const followEyesUsageCode = `<FollowEyes
  eyeSize={60}
  pupilSize={20}
  gap={16}
  eyeColor="#ffffff"
  pupilColor="#1a1028"
  maxTravel={0.35}
/>`
export const followEyesProps: PropConfig[] = [
        { isEditable: true, 
            name: 'eyeSize',
            type: 'number' ,
            default: 60,
            min: 30,
            max: 120,
            step: 5,
            description: 'Eye Size',
        },
        { isEditable: true, 
            name: 'pupilSize',
            type: 'number' ,
            default: 20,
            min: 8,
            max: 50,
            step: 2,
            description: 'Pupil Size',
        },
        { isEditable: true, 
            name: 'gap',
            type: 'number' ,
            default: 16,
            min: 4,
            max: 40,
            step: 2,
            description: 'Gap',
        },
        { isEditable: true, 
            name: 'eyeColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Eye Color',
        },
        { isEditable: true, 
            name: 'pupilColor',
            type: 'string' ,
            default: '#1a1028',
            description: 'Pupil Color',
        },
        { name: 'glintColor', type: 'string', default: '#ffffff', description: 'Glint highlight color' },
        { isEditable: true, 
            name: 'maxTravel',
            type: 'number' ,
            default: 0.35,
            min: 0.1,
            max: 0.9,
            step: 0.05,
            description: 'Travel Range',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const followEyesRegistry: ComponentEntry = {
        ...followEyesMeta,
        preview: followEyesPreview,
        props: followEyesProps,
        dependencies: followEyesDependencies,
        usageCode: followEyesUsageCode,
    };

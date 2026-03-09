import { SocialClock } from "@/components/ui/social-clock"
import { PropConfig, ComponentEntry } from './index'

export const socialClockMeta = {
    name: 'Social Clock',
    slug: 'social-clock',
    category: 'interaction' as const,
    description: 'A circular expanding social media button clock — hover to reveal social links arranged around a share trigger.',
    tags: ['social', 'clock', 'share', 'animation', 'interaction', 'hover'],
}
export const socialClockPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-20">
        <SocialClock
            size={props.size}
            buttonSize={props.buttonSize}
            triggerColor={props.triggerColor}
            hoverColor={props.hoverColor}
        />
    </div>
)
export const socialClockDependencies: string[] = ["clsx", "tailwind-merge"];

export const socialClockUsageCode = `const mySocials: SocialItem[] = [
{
label: "GitHub",
icon: <GitHubIcon />,   // any React node
link: "https://github.com/you",
color: "110,84,148",    // RGB format
},
{
label: "Twitter",
icon: <TwitterIcon />,
link: "https://twitter.com/you",
color: "29,161,242",
},
]

export default function MyComponent() {
return (
<SocialClock
  socials={mySocials}
  size={220}
  buttonSize={52}
  triggerColor="#a78bfa"
/>
)
}`
export const socialClockProps: PropConfig[] = [
        { name: 'socials', type: 'string', default: 'SocialItem[]', description: 'Array of { label, icon, link, color } objects' },
        { isEditable: true, 
            name: 'size',
            type: 'number' ,
            default: 220,
            min: 150,
            max: 350,
            step: 10,
            description: 'Clock Size',
        },
        { isEditable: true, 
            name: 'buttonSize',
            type: 'number' ,
            default: 52,
            min: 32,
            max: 72,
            step: 4,
            description: 'Button Size',
        },
        { isEditable: true, 
            name: 'triggerColor',
            type: 'string' ,
            default: '#a78bfa',
            description: 'Trigger Color',
        },
        { isEditable: true, 
            name: 'hoverColor',
            type: 'string' ,
            default: '167,139,250',
            description: 'Hover Color (RGB)',
        },
        { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
    ];
export const socialClockRegistry: ComponentEntry = {
        ...socialClockMeta,
        preview: socialClockPreview,
        props: socialClockProps,
        dependencies: socialClockDependencies,
        usageCode: socialClockUsageCode,
    };

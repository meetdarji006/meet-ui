import { SocialClock } from "@/components/ui/social-clock"
import { PropConfig } from './index'

export const socialClockMeta = {
    name: 'Social Clock',
    slug: 'social-clock',
    category: 'interaction' as const,
    description: 'A circular expanding social media button clock — hover to reveal social links arranged around a share trigger.',
    tags: ['social', 'clock', 'share', 'animation', 'interaction', 'hover'],
}

export const socialClockPreview = () => (
    <div className="w-full flex items-center justify-center py-20">
        <SocialClock />
    </div>
)

export const socialClockDynamicPreview = (props: any) => (
    <div className="w-full flex items-center justify-center py-20">
        <SocialClock
            size={props.size}
            buttonSize={props.buttonSize}
            triggerColor={props.triggerColor}
            hoverColor={props.hoverColor}
        />
    </div>
)

export const socialClockTableProps: PropConfig[] = [
    { name: 'socials', type: 'string', default: 'SocialItem[]', description: 'Array of { label, icon, link, color } objects' },
    { name: 'size', type: 'number', default: '220', description: 'Overall clock diameter in px' },
    { name: 'buttonSize', type: 'number', default: '52', description: 'Individual button diameter in px' },
    { name: 'triggerColor', type: 'string', default: '#a78bfa', description: 'Center trigger button color' },
    { name: 'hoverColor', type: 'string', default: '167,139,250', description: 'Uniform hover fill color (RGB)' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' },
]

export const socialClockEditableProps: PropConfig[] = [
    {
        name: 'size',
        type: 'number' as const,
        default: 220,
        min: 150,
        max: 350,
        step: 10,
        description: 'Clock Size',
    },
    {
        name: 'buttonSize',
        type: 'number' as const,
        default: 52,
        min: 32,
        max: 72,
        step: 4,
        description: 'Button Size',
    },
    {
        name: 'triggerColor',
        type: 'string' as const,
        default: '#a78bfa',
        description: 'Trigger Color',
    },
    {
        name: 'hoverColor',
        type: 'string' as const,
        default: '167,139,250',
        description: 'Hover Color (RGB)',
    },
]

export const socialClockDependencies: string[] = []

export const socialClockUsageCode = `import { SocialClock, SocialItem } from '@/components/ui/social-clock'

const mySocials: SocialItem[] = [
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

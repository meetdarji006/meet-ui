"use client"

import SignalLines from "@/components/ui/signal-lines"
import { PropConfig, ComponentEntry } from "./index";

export const signalLinesMeta = {
    name: 'Signal Lines',
    slug: 'signal-lines',
    category: '3d' as const,
    description: 'Animated fiber-optic style lines with glowing signals traveling along curved paths. Features bloom post-processing, transparent background option, and extensive customization.',
    tags: ['3d', 'animation', 'signals', 'threejs', 'react-three-fiber', 'bloom', 'postprocessing'],
}
export const signalLinesDependencies = ["three", "@react-three/fiber", "@react-three/postprocessing", "clsx", "tailwind-merge"];

export const signalLinesUsageCode = `<SignalLines
  height="600px"
  options={{
  transparent: true,  // Enable transparent background
  colorLine: "#373f48",
  colorSignal: "#8fc9ff",
  lineCount: 80,
  signalCount: 94,
  bloomStrength: 3.0
  }}
/>`
export const signalLinesPreview = (props: any) => {
    const options: any = {}

    Object.keys(props).forEach(key => {
        if (key.startsWith('options.')) {
            const optionName = key.split('.')[1]
            options[optionName] = props[key]
        }
    })

    return (
        <SignalLines
            height={props.height || "500px"}
            width={props.width || "100%"}
            options={options}
        />
    )
}
export const signalLinesProps: PropConfig[] = [
        { isEditable: true, 
            name: 'options.transparent',
            type: 'boolean' ,
            default: false,
            description: 'Transparent Background'
        },
        { isEditable: true, 
            name: 'options.colorBg',
            type: 'string' ,
            default: '#060010',
            description: 'Background Color'
        },
        { isEditable: true, 
            name: 'options.colorLine',
            type: 'string' ,
            default: '#4a5568',
            description: 'Line Color'
        },
        { isEditable: true, 
            name: 'options.colorSignal',
            type: 'string' ,
            default: '#00d4ff',
            description: 'Signal Color'
        },
        { isEditable: true, 
            name: 'options.lineCount',
            type: 'number' ,
            default: 60,
            min: 10,
            max: 200,
            step: 5,
            description: 'Line Count'
        },
        { isEditable: true, 
            name: 'options.signalCount',
            type: 'number' ,
            default: 120,
            min: 0,
            max: 200,
            step: 5,
            description: 'Signal Count'
        },
        { isEditable: true, 
            name: 'options.bloomStrength',
            type: 'number' ,
            default: 3.0,
            min: 0,
            max: 5,
            step: 0.1,
            description: 'Bloom Strength'
        },
        { isEditable: true, 
            name: 'height',
            type: 'string' ,
            default: '500px',
            description: 'Height'
        },
        { name: 'width', type: 'string | number', default: '"100%"', description: 'Container width' },
        { name: 'className', type: 'string', default: '-', description: 'Wrapper class name' },
        { isEditable: true, 
            name: 'options.spreadHeight',
            type: 'number' ,
            default: 35,
            min: 10,
            max: 100,
            step: 1,
            description: 'Spread Height'
        },
        { isEditable: true, 
            name: 'options.waveSpeed',
            type: 'number' ,
            default: 1.8,
            min: 0,
            max: 5,
            step: 0.1,
            description: 'Wave Speed'
        },
        { isEditable: true, 
            name: 'options.waveHeight',
            type: 'number' ,
            default: 0.3,
            min: 0,
            max: 2,
            step: 0.01,
            description: 'Wave Height'
        },
        { isEditable: true, 
            name: 'options.speedGlobal',
            type: 'number' ,
            default: 0.5,
            min: 0,
            max: 2,
            step: 0.05,
            description: 'Signal Speed'
        },
        { isEditable: true, 
            name: 'options.trailLength',
            type: 'number' ,
            default: 15,
            min: 1,
            max: 50,
            step: 1,
            description: 'Trail Length'
        },
        { isEditable: true, 
            name: 'options.lineOpacity',
            type: 'number' ,
            default: 0.8,
            min: 0,
            max: 1,
            step: 0.05,
            description: 'Line Opacity'
        }
    ];
export const signalLinesRegistry: ComponentEntry = {
        ...signalLinesMeta,
        preview: signalLinesPreview,
        props: signalLinesProps,
        dependencies: signalLinesDependencies,
        usageCode: signalLinesUsageCode,
    };

"use client"

import ElasticCurve from "@/components/ui/elastic-curve"
import { PropConfig, ComponentEntry } from "./index";

export const elasticCurveMeta = {
    name: 'Elastic Curve',
    slug: 'elastic-curve',
    category: 'ui' as const,
    description: 'An interactive SVG bezier curve that responds to mouse hover with elastic spring animation. Features gradient stroke and customizable physics.',
    tags: ['svg', 'animation', 'interactive', 'hover', 'elastic', 'spring', 'framer-motion'],
}
export const elasticCurveDependencies = ["framer-motion", "clsx", "tailwind-merge"];

export const elasticCurveUsageCode = `<ElasticCurve
  height={400}
  strokeWidth={2}
  gradientStart="rgb(255, 135, 9)"
  gradientEnd="rgb(247, 189, 248)"
  damping={12}
/>`
export const elasticCurvePreview = (props: any) => (
    <ElasticCurve
        height={props.height}
        strokeWidth={props.strokeWidth}
        hitAreaWidth={props.hitAreaWidth}
        gradientStart={props.gradientStart}
        gradientEnd={props.gradientEnd}
        stiffness={props.stiffness}
        damping={props.damping}
    />
)
export const elasticCurveProps: PropConfig[] = [
        { isEditable: true, 
            name: 'height',
            type: 'number' ,
            default: 400,
            min: 100,
            max: 800,
            step: 50,
            description: 'Height'
        },
        { isEditable: true, 
            name: 'strokeWidth',
            type: 'number' ,
            default: 2,
            min: 1,
            max: 10,
            step: 1,
            description: 'Stroke Width'
        },
        { isEditable: true, 
            name: 'hitAreaWidth',
            type: 'number' ,
            default: 60,
            min: 20,
            max: 150,
            step: 10,
            description: 'Hit Area Width'
        },
        { isEditable: true, 
            name: 'gradientStart',
            type: 'string' ,
            default: 'rgb(255, 135, 9)',
            description: 'Gradient Start Color'
        },
        { isEditable: true, 
            name: 'gradientEnd',
            type: 'string' ,
            default: 'rgb(247, 189, 248)',
            description: 'Gradient End Color'
        },
        { isEditable: true, 
            name: 'stiffness',
            type: 'number' ,
            default: 400,
            min: 10,
            max: 500,
            step: 10,
            description: 'Spring Stiffness'
        },
        { isEditable: true, 
            name: 'damping',
            type: 'number' ,
            default: 12,
            min: 5,
            max: 30,
            step: 1,
            description: 'Spring Damping'
        },
        { name: 'className', type: 'string', default: '-', description: 'Wrapper class name' }
    ];
export const elasticCurveRegistry: ComponentEntry = {
        ...elasticCurveMeta,
        preview: elasticCurvePreview,
        props: elasticCurveProps,
        dependencies: elasticCurveDependencies,
        usageCode: elasticCurveUsageCode,
    };

"use client"

import ElasticCurve from "@/components/ui/elastic-curve"

export const elasticCurveMeta = {
    name: 'Elastic Curve',
    slug: 'elastic-curve',
    category: 'ui' as const,
    description: 'An interactive SVG bezier curve that responds to mouse hover with elastic spring animation. Features gradient stroke and customizable physics.',
    tags: ['svg', 'animation', 'interactive', 'hover', 'elastic', 'spring', 'framer-motion'],
}

export const elasticCurveTableProps = [
    { name: 'height', type: 'number', default: '400', description: 'Height of the SVG container' },
    { name: 'strokeWidth', type: 'number', default: '2', description: 'Width of the curve stroke' },
    { name: 'hitAreaWidth', type: 'number', default: '60', description: 'Width of invisible hover area' },
    { name: 'gradientStart', type: 'string', default: 'rgb(255, 135, 9)', description: 'Start color of gradient' },
    { name: 'gradientEnd', type: 'string', default: 'rgb(247, 189, 248)', description: 'End color of gradient' },
    { name: 'stiffness', type: 'number', default: '400', description: 'Spring stiffness (higher = faster snap)' },
    { name: 'damping', type: 'number', default: '12', description: 'Spring damping (higher = less bounce)' },
    { name: 'className', type: 'string', default: '-', description: 'Wrapper class name' },
]

export const elasticCurveEditableProps = [
    {
        name: 'height',
        type: 'number' as const,
        default: 400,
        min: 100,
        max: 800,
        step: 50,
        description: 'Height'
    },
    {
        name: 'strokeWidth',
        type: 'number' as const,
        default: 2,
        min: 1,
        max: 10,
        step: 1,
        description: 'Stroke Width'
    },
    {
        name: 'hitAreaWidth',
        type: 'number' as const,
        default: 60,
        min: 20,
        max: 150,
        step: 10,
        description: 'Hit Area Width'
    },
    {
        name: 'gradientStart',
        type: 'string' as const,
        default: 'rgb(255, 135, 9)',
        description: 'Gradient Start Color'
    },
    {
        name: 'gradientEnd',
        type: 'string' as const,
        default: 'rgb(247, 189, 248)',
        description: 'Gradient End Color'
    },
    {
        name: 'stiffness',
        type: 'number' as const,
        default: 400,
        min: 10,
        max: 500,
        step: 10,
        description: 'Spring Stiffness'
    },
    {
        name: 'damping',
        type: 'number' as const,
        default: 12,
        min: 5,
        max: 30,
        step: 1,
        description: 'Spring Damping'
    },
]

export const elasticCurveDependencies = ['framer-motion']

export const elasticCurveUsageCode = `<ElasticCurve
  height={400}
  strokeWidth={2}
  gradientStart="rgb(255, 135, 9)"
  gradientEnd="rgb(247, 189, 248)"
  damping={12}
/>`

export const elasticCurvePreview = () => (
    <ElasticCurve height={300} />
)

export const elasticCurveDynamicPreview = (props: any) => (
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

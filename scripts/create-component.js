import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get component name from arguments
const args = process.argv.slice(2)
if (args.length === 0) {
    console.error('❌ Please provide a component name (e.g. "Image Tunnel")')
    process.exit(1)
}

const humanName = args[0]
const slug = humanName.toLowerCase().replace(/\s+/g, '-')
const pascalName = humanName.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1)).replace(/\s+/g, '')

console.log(`🚀 Creating component: ${humanName} (${slug})...\n`)

const rootDir = path.join(__dirname, '..')

// 1. Create Component File
const componentPath = path.join(rootDir, 'src/components/ui', `${slug}.tsx`)
const componentContent = `"use client"

import { cn } from "@/lib/utils"

interface ${pascalName}Props {
    text?: string
    className?: string
}

export const ${pascalName} = ({ text = "Hello", className }: ${pascalName}Props) => {
    return (
        <div className={cn("text-white p-4 bg-white/5 rounded-xl border border-white/10", className)}>
            {text}
        </div>
    )
}
`

if (!fs.existsSync(componentPath)) {
    fs.writeFileSync(componentPath, componentContent)
    console.log(`  ✅ Created src/components/ui/${slug}.tsx`)
} else {
    console.log(`  ⚠️  Component file already exists`)
}

// 2. Create Registry File
const registryPath = path.join(rootDir, 'src/lib/components-data/registry', `${slug}.tsx`)
const registryContent = `"use client"

import { ${pascalName} } from "@/components/ui/${slug}"

export const ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Meta = {
    name: '${humanName}',
    slug: '${slug}',
    category: 'ui' as const,
    description: 'Description for ${humanName}.',
    tags: ['New'],
}

export const ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Preview = () => (
    <${pascalName} text="Preview" />
)

export const ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}DynamicPreview = (props: any) => (
    <${pascalName} {...props} />
)
`

if (!fs.existsSync(registryPath)) {
    fs.writeFileSync(registryPath, registryContent)
    console.log(`  ✅ Created src/lib/components-data/registry/${slug}.tsx`)
}

// 3. Update Registry Index
const registryIndexPath = path.join(rootDir, 'src/lib/components-data/registry/index.tsx')
let registryIndex = fs.readFileSync(registryIndexPath, 'utf-8')

if (!registryIndex.includes(`'./${slug}'`)) {
    // Add import
    const importStatement = `import {\n    ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Meta,\n    ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Preview,\n    ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}DynamicPreview\n} from './${slug}'`
    registryIndex = registryIndex.replace('// Import all component registries', `// Import all component registries\n${importStatement}`)

    // Add to componentsList
    const listEntry = `    {
        ...${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Meta,
        preview: ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}Preview,
    },`
    registryIndex = registryIndex.replace('export const componentsList: ComponentEntry[] = [', `export const componentsList: ComponentEntry[] = [\n${listEntry}`)

    // Add to dynamicPreviews
    const dynamicEntry = `    '${slug}': ${pascalName.charAt(0).toLowerCase() + pascalName.slice(1)}DynamicPreview,`
    registryIndex = registryIndex.replace('export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {', `export const dynamicPreviews: Record<string, (props: Record<string, any>) => React.ReactNode> = {\n${dynamicEntry}`)

    fs.writeFileSync(registryIndexPath, registryIndex)
    console.log(`  ✅ Updated registry/index.tsx`)
}

// 4. Update Props config
const propsPath = path.join(rootDir, 'src/lib/components-data/props.ts')
let propsFile = fs.readFileSync(propsPath, 'utf-8')

if (!propsFile.includes(`'${slug}'`)) {
    const propsEntry = `    '${slug}': [
        { name: 'text', type: 'string', default: '"Hello"' },
    ],`
    propsFile = propsFile.replace('export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {', `export const componentProps: Record<string, { name: string; type: string; default: string }[]> = {\n${propsEntry}`)

    const editableEntry = `    '${slug}': [
        { name: 'text', type: 'string', default: 'Hello' },
    ],`
    propsFile = propsFile.replace('export const editableProps: Record<string, PropConfig[]> = {', `export const editableProps: Record<string, PropConfig[]> = {\n${editableEntry}`)

    fs.writeFileSync(propsPath, propsFile)
    console.log(`  ✅ Updated props.ts`)
}

// 5. Update Constants (Sidebar)
const constantsPath = path.join(rootDir, 'src/lib/components-data/constants.ts')
let constantsFile = fs.readFileSync(constantsPath, 'utf-8')

if (!constantsFile.includes(`'${slug}'`)) {
    const sidebarEntry = `    { name: '${humanName}', slug: '${slug}' },`
    constantsFile = constantsFile.replace('export const sidebarComponents = [', `export const sidebarComponents = [\n${sidebarEntry}`)
    fs.writeFileSync(constantsPath, constantsFile)
    console.log(`  ✅ Updated constants.ts`)
}

// 6. Update generate-codes.js
const generatePath = path.join(rootDir, 'scripts/generate-codes.js')
let generateFile = fs.readFileSync(generatePath, 'utf-8')

if (!generateFile.includes(`'${slug}'`)) {
    generateFile = generateFile.replace('const componentSlugs = [', `const componentSlugs = [\n    '${slug}',`)
    fs.writeFileSync(generatePath, generateFile)
    console.log(`  ✅ Updated generate-codes.js`)
}

console.log('\n🔄 Running code generation...')
try {
    execSync('npm run generate-codes', { stdio: 'inherit', cwd: rootDir })
} catch (e) {
    console.error('❌ Failed to run generate-codes')
}

console.log(`\n✨ Component "${humanName}" created successfully!`)
console.log(`👉 Edit src/components/ui/${slug}.tsx to start building.`)

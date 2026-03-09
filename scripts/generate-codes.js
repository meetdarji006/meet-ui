import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ts from 'typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ============================================
// ADD YOUR COMPONENT SLUGS HERE
// ============================================
const componentSlugs = [
    'animated-counter',
    'aurora-cursor',
    'blur-reveal',
    'bouncing-loader',
    'click-ripple',
    'content-reveal-card',
    'drawer-button',
    'elastic-curve',
    'floating-tech-stack',
    'floating-tilt-tags',
    'follow-eyes',
    'full-screen-menu',
    'glass-toggle',
    'glow-card',
    'gooey-text',
    'highlight-gallery',
    'hover-name-gallery',
    'hyper-text',
    'interactive-hover-menu',
    'isometric-tech-grid',
    'liquid-text-hover',
    'looping-words',
    'luminous-card',
    'magnetic-cursor',
    'marquee',
    'mask-text-hover',
    'morphing-card-stack',
    'morphing-text',
    'orbit-ecosystem',
    'pattern-text',
    'pixel-cursor-trail',
    'ring-cursor',
    'rubber-band-text',
    'scroll-fill-text',
    'shatter-text',
    'shiny-cta',
    'shooting-star',
    'signal-lines',
    'social-clock',
    'social-icon-hover',
    'sparkles-text',
    'splash-button',
    'split-text-reveal',
    'spotlight-text',
    'stacked-block-text',
    'stacked-carousel',
    'stacked-info-cards',
    'staggered-testimonials',
    'stretch-text',
    'testimonials-split',
    'text-image-reveal',
    'text-underline',
    'typewriter-text',
    'wave-card',
    'zajno-text-hover',
]

const componentsDir = path.join(__dirname, '../src/components/ui')
const codesDir = path.join(__dirname, '../src/lib/components-data/codes')

console.log('🔄 Generating component codes...\n')

// Ensure codes directory exists
if (!fs.existsSync(codesDir)) {
    fs.mkdirSync(codesDir, { recursive: true })
    console.log('📁 Created codes directory\n')
}

if (componentSlugs.length === 0) {
    console.log('⚠️  No components to generate. Add slugs to scripts/generate-codes.js\n')
    process.exit(0)
}

let successCount = 0
let errorCount = 0

// Helper to convert slug to camelCase export name
function toCamelCase(slug) {
    const parts = slug.split('-')
    const camelCase = parts.map((part, i) => {
        if (i === 0) return part
        if (/^\d/.test(part)) return part.toUpperCase()
        return part.charAt(0).toUpperCase() + part.slice(1)
    }).join('')
    return camelCase + 'Code'
}

// Generate individual code files
componentSlugs.forEach(slug => {
    const sourcePath = path.join(componentsDir, `${slug}.tsx`)
    const outputPath = path.join(codesDir, `${slug}.ts`)
    const exportNameTS = toCamelCase(slug) + 'TS'
    const exportNameJS = toCamelCase(slug) + 'JS'

    try {
        if (fs.existsSync(sourcePath)) {
            const contentTS = fs.readFileSync(sourcePath, 'utf-8')

            // Transpile to JS
            const result = ts.transpileModule(contentTS, {
                compilerOptions: {
                    target: ts.ScriptTarget.ESNext,
                    module: ts.ModuleKind.ESNext,
                    jsx: ts.JsxEmit.Preserve,
                    removeComments: false
                }
            })
            const contentJS = result.outputText;

            // Escape backticks and ${} in the content
            const escapeContent = (str) => str
                .replace(/\\/g, '\\\\')
                .replace(/`/g, '\\`')
                .replace(/\$\{/g, '\\${')

            const escapedTS = escapeContent(contentTS)
            const escapedJS = escapeContent(contentJS)

            const fileContent = `// Auto-generated from ${slug}.tsx
// Run: npm run generate-codes

export const ${exportNameTS} = \`${escapedTS}\`

export const ${exportNameJS} = \`${escapedJS}\`
`
            fs.writeFileSync(outputPath, fileContent, 'utf-8')
            console.log(`  ✅ ${slug}.ts (TS & JS)`)
            successCount++
        } else {
            console.log(`  ⚠️  ${slug}.tsx not found`)
            errorCount++
        }
    } catch (error) {
        console.log(`  ❌ Error processing ${slug}: ${error.message}`)
        errorCount++
    }
})

// Generate index.ts with static imports
const importsCode = componentSlugs.map(slug => {
    const tsName = toCamelCase(slug) + 'TS';
    const jsName = toCamelCase(slug) + 'JS';
    return `import { ${tsName}, ${jsName} } from './${slug}'`;
}).join('\n');

const registryCode = componentSlugs.map(slug => {
    const tsName = toCamelCase(slug) + 'TS';
    const jsName = toCamelCase(slug) + 'JS';
    return `    '${slug}': { ts: ${tsName}, js: ${jsName} },`;
}).join('\n');


const indexContent = `// Auto-generated synchronous loader for component codes
// Run: npm run generate-codes

export interface ComponentCode {
    ts: string
    js: string
}

${importsCode}

const codeRegistry: Record<string, ComponentCode> = {
${registryCode}
}

// Synchronously load component code by slug
export function loadComponentCode(slug: string): ComponentCode | null {
    return codeRegistry[slug] || null;
}
`

try {
    fs.writeFileSync(path.join(codesDir, 'index.ts'), indexContent, 'utf-8')
    console.log(`  ✅ index.ts(dynamic loader)`)
} catch (error) {
    console.error(`  ❌ Failed to write index.ts: ${error.message} `)
    errorCount++
}

console.log(`\n✨ Code generation complete!`)
console.log(`   📁 Output: src / lib / components - data / codes / `)
console.log(`   ✅ ${successCount} components generated`)
if (errorCount > 0) {
    console.log(`   ⚠️  ${errorCount} warnings`)
}

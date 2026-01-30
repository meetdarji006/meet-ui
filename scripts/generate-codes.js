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
    'split-text-reveal',
    'stretch-text',
    'scroll-fill-text',
    'magnetic-cursor',
    'shatter-text',
    'morphing-text',
    'sparkles-text',
    'rubber-band-text',
    'spotlight-text',
    'hyper-text',
    'typewriter-text',
    'blur-reveal',


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

// Generate index.ts barrel export
const imports = componentSlugs
    .filter(slug => fs.existsSync(path.join(codesDir, `${slug}.ts`)))
    .map(slug => `import { ${toCamelCase(slug)}TS, ${toCamelCase(slug)}JS } from './${slug}'`)
    .join('\n')

const codesMap = componentSlugs
    .filter(slug => fs.existsSync(path.join(codesDir, `${slug}.ts`)))
    .map(slug => `    '${slug}': { ts: ${toCamelCase(slug)}TS, js: ${toCamelCase(slug)}JS },`)
    .join('\n')

const exports = componentSlugs
    .filter(slug => fs.existsSync(path.join(codesDir, `${slug}.ts`)))
    .map(slug => `    ${toCamelCase(slug)}TS,\n    ${toCamelCase(slug)}JS,`)
    .join('\n')

const indexContent = `// Auto-generated barrel export for component codes
// Run: npm run generate-codes

${imports}

export interface ComponentCode {
    ts: string
    js: string
}

// Export as a map for easy lookup by slug
export const componentCodes: Record<string, ComponentCode> = {
${codesMap}
}

// Also export individual codes for direct import
export {
${exports}
}
`

try {
    fs.writeFileSync(path.join(codesDir, 'index.ts'), indexContent, 'utf-8')
    console.log(`  ✅ index.ts (barrel export)`)
} catch (error) {
    console.error(`  ❌ Failed to write index.ts: ${error.message}`)
    errorCount++
}

console.log(`\n✨ Code generation complete!`)
console.log(`   📁 Output: src/lib/components-data/codes/`)
console.log(`   ✅ ${successCount} components generated`)
if (errorCount > 0) {
    console.log(`   ⚠️  ${errorCount} warnings`)
}

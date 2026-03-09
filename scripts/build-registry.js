import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Project } from 'ts-morph'
import ts from 'typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const registryDir = path.join(__dirname, '../public/registry')
const componentsDir = path.join(__dirname, '../src/components/ui')
const registryDataDir = path.join(__dirname, '../src/lib/components-data/registry')

console.log('🔄 Building static component registry...\n')

// Ensure directory exists
if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true })
}

const project = new Project()
project.addSourceFilesAtPaths(path.join(registryDataDir, '*.tsx'))

const componentFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'))

let successCount = 0

componentFiles.forEach(file => {
    const slug = file.replace('.tsx', '')
    const sourcePath = path.join(componentsDir, file)
    const registryFilePath = path.join(registryDataDir, file)

    const contentTS = fs.readFileSync(sourcePath, 'utf-8')

    let dependencies = []

    if (fs.existsSync(registryFilePath)) {
        const sourceFile = project.getSourceFile(registryFilePath)
        if (sourceFile) {
            const varDecls = sourceFile.getVariableDeclarations()
            const depDecl = varDecls.find(v => v.getName().endsWith('Dependencies'))
            if (depDecl) {
                const initializer = depDecl.getInitializer()
                if (initializer && initializer.getKindName() === 'ArrayLiteralExpression') {
                    const elements = initializer.getElements()
                    dependencies = elements.map(e => {
                        return e.getText().replace(/^['"]|['"]$/g, '')
                    })
                }
            }
        }
    }

    // Filter out react as it's built-in
    dependencies = dependencies.filter(d => d !== 'react' && d !== 'react-dom')

    // Always require clsx and tailwind-merge if cn from @/lib/utils is imported
    if (contentTS.includes('@/lib/utils') && contentTS.includes('cn(')) {
        if (!dependencies.includes('clsx')) dependencies.push('clsx')
        if (!dependencies.includes('tailwind-merge')) dependencies.push('tailwind-merge')
    }

    // Sort logic
    dependencies.sort()

    const registryDependencies = []

    const resultJS = ts.transpileModule(contentTS, {
        compilerOptions: {
            target: ts.ScriptTarget.ESNext,
            module: ts.ModuleKind.ESNext,
            jsx: ts.JsxEmit.Preserve,
            removeComments: false
        }
    })

    const jsonContent = {
        name: slug,
        type: "registry:ui",
        dependencies: dependencies,
        registryDependencies: registryDependencies,
        files: [
            {
                name: `${slug}.tsx`,
                content: contentTS,
                nameJS: `${slug}.jsx`,
                contentJS: resultJS.outputText
            }
        ]
    }

    fs.writeFileSync(path.join(registryDir, `${slug}.json`), JSON.stringify(jsonContent, null, 2))
    successCount++
})

console.log(`✅ Generated ${successCount} registry files in public / registry\n`)

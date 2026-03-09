import { Command } from "commander"
import chalk from "chalk"
import ora from "ora"
import prompts from "prompts"
import fetch from "node-fetch"
import fs from "fs"
import path from "path"
import { execa } from "execa"

interface RegistryData {
    name: string
    type: string
    dependencies: string[]
    registryDependencies: string[]
    files: {
        name: string
        content: string
        nameJS?: string
        contentJS?: string
    }[]
}

const REGISTRY_URL = process.env.MEETUI_REGISTRY_URL || "https://meetui.dev/registry"

export const add = new Command()
    .name("add")
    .description("Add a component to your project")
    .argument("[component]", "The component to add.")
    .option("-y, --yes", "Skip confirmation prompt", false)
    .option("-c, --cwd <cwd>", "The working directory.", process.cwd())
    .option("-p, --path <path>", "The path to add the component to.")
    .action(async (component, options) => {
        try {
            if (!component) {
                // If no component specified, we could fetch an index and show a list, 
                // but for now let's just ask them to specify one.
                console.log(chalk.red("Please specify a component to add. Example: npx meetui add animated-counter"))
                process.exit(1)
            }

            const cwd = path.resolve(options.cwd)

            if (!fs.existsSync(cwd)) {
                console.log(chalk.red(`The path ${cwd} does not exist.`))
                process.exit(1)
            }

            const spinner = ora(`Fetching ${component} from registry...`).start()

            let registryData: RegistryData
            try {
                const res = await fetch(`${REGISTRY_URL}/${component}.json`)
                if (!res.ok) {
                    throw new Error(`Failed to fetch component: ${res.statusText}`)
                }
                registryData = await res.json() as RegistryData
            } catch (error: any) {
                spinner.fail(`Failed to fetch component ${component}.`)
                console.error(chalk.red(`Error: ${error.message}`))
                process.exit(1)
            }

            spinner.succeed(`Fetched ${component} from registry.`)

            // Determine where to put the component
            let targetDir = options.path ? path.resolve(cwd, options.path) : null

            if (!targetDir) {
                // Auto-detect src/components/ui or components/ui
                if (fs.existsSync(path.resolve(cwd, "src"))) {
                    targetDir = path.resolve(cwd, "src/components/ui")
                } else {
                    targetDir = path.resolve(cwd, "components/ui")
                }
            }

            if (!options.yes) {
                const { proceed } = await prompts({
                    type: "confirm",
                    name: "proceed",
                    message: `Ready to install ${chalk.green(component)} and its dependencies. Proceed?`,
                    initial: true,
                })

                if (!proceed) {
                    process.exit(0)
                }
            }

            // Ensure directory exists
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true })
            }

            // Detect Typescript
            const isTypeScript = isTypeScriptProject(cwd)
            if (isTypeScript) {
                spinner.info("Detected TypeScript project.")
            } else {
                spinner.info("Detected JavaScript project.")
            }

            // Write files
            const writeSpinner = ora(`Writing component files...`).start()
            for (const item of registryData.files) {
                const isTsx = item.name.endsWith('.tsx')

                // If it is a TSX component but the project uses JS, use the JS code & extension
                if (isTsx && !isTypeScript && item.nameJS && item.contentJS) {
                    const filePath = path.resolve(targetDir, item.nameJS)
                    fs.writeFileSync(filePath, item.contentJS, "utf8")
                    writeSpinner.succeed(`Created ${path.relative(cwd, filePath)}`)
                } else {
                    const filePath = path.resolve(targetDir, item.name)
                    fs.writeFileSync(filePath, item.content, "utf8")
                    writeSpinner.succeed(`Created ${path.relative(cwd, filePath)}`)
                }
            }

            // Create lib/utils.ts if it doesn't exist
            const writeUtilsSpinner = ora(`Checking for utility functions...`).start()
            const hasSrc = fs.existsSync(path.resolve(cwd, "src"))
            const libDir = hasSrc ? path.resolve(cwd, "src/lib") : path.resolve(cwd, "lib")

            const utilsTsPath = path.resolve(libDir, "utils.ts")
            const utilsJsPath = path.resolve(libDir, "utils.js")

            let utilsCreated = false
            if (!fs.existsSync(utilsTsPath) && !fs.existsSync(utilsJsPath)) {
                if (!fs.existsSync(libDir)) {
                    fs.mkdirSync(libDir, { recursive: true })
                }

                const utilsCode = isTypeScript
                    ? `import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`
                    : `import { clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs) {\n  return twMerge(clsx(inputs));\n}\n`

                const targetUtilsPath = isTypeScript ? utilsTsPath : utilsJsPath
                fs.writeFileSync(targetUtilsPath, utilsCode, "utf8")
                writeUtilsSpinner.succeed(`Created ${path.relative(cwd, targetUtilsPath)}`)
                utilsCreated = true
            } else {
                writeUtilsSpinner.info(`Utility functions already present.`)
            }

            // Install dependencies
            if (registryData.dependencies?.length) {
                const depSpinner = ora(`Installing dependencies: ${registryData.dependencies.join(", ")}...`).start()

                // Auto-detect package manager
                const packageManager = getPackageManager(cwd)

                try {
                    const args = packageManager === "npm" ? ["install"] : ["add"]
                    await execa(packageManager, [...args, ...registryData.dependencies], {
                        cwd,
                    })
                    depSpinner.succeed(`Installed dependencies.`)
                } catch (error) {
                    depSpinner.fail(`Failed to install dependencies. You can install them manually: ${packageManager} install ${registryData.dependencies.join(" ")}`)
                }
            }

            console.log("\n" + chalk.green(`✔ Component ${component} is ready!`) + "\n")

        } catch (error) {
            console.log(chalk.red("Something went wrong."))
            console.error(error)
            process.exit(1)
        }
    })

function getPackageManager(targetDir: string) {
    if (fs.existsSync(path.resolve(targetDir, "pnpm-lock.yaml"))) return "pnpm"
    if (fs.existsSync(path.resolve(targetDir, "yarn.lock"))) return "yarn"
    if (fs.existsSync(path.resolve(targetDir, "bun.lockb"))) return "bun"
    return "npm"
}

function isTypeScriptProject(cwd: string) {
    // Check for tsconfig.json
    if (fs.existsSync(path.resolve(cwd, "tsconfig.json"))) {
        return true
    }

    // Check package.json for typescript dependency
    try {
        const pkgJsonPath = path.resolve(cwd, "package.json")
        if (fs.existsSync(pkgJsonPath)) {
            const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"))
            if (
                (pkgJson.dependencies && pkgJson.dependencies.typescript) ||
                (pkgJson.devDependencies && pkgJson.devDependencies.typescript)
            ) {
                return true
            }
        }
    } catch (e) {
        // ignore
    }

    return false
}

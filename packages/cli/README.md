# @meet-darji/meetui

The official CLI for [MeetUI](https://meetui.dev), a modern open-source animated component library platform.

## Usage

You can add components to your project directly from your terminal using `npx`.

### Add a component

Run the following command to add a component to your project:

```bash
npx @meet-darji/meetui add [component-name]
```

Example:

```bash
npx @meet-darji/meetui add animated-counter
```

### Options

- `-y, --yes`: Skip confirmation prompt.
- `-c, --cwd <cwd>`: The working directory (defaults to current directory).
- `-p, --path <path>`: The path where components should be installed (defaults to `src/components/ui` or `components/ui`).

## Features

- **Automatic Dependency Installation**: Detects and installs required dependencies (like `framer-motion`, `gsap`, etc.) using your preferred package manager (npm, yarn, pnpm, or bun).
- **TS/JS Support**: Automatically detects if your project uses TypeScript and downloads the appropriate `.tsx` or `.jsx` file versions.
- **Smart Directory Detection**: Automatically finds your components directory.

## License

Licensed under the [MIT License](https://github.com/meetdarji006/meet-ui/blob/main/LICENSE).

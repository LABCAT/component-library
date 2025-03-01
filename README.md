# Vue Component Library Monorepo

## Overview
A monorepo containing:
- Vue 3 components
- Web Components
- SCSS styles
- Storybook documentation and theme support
- External web component integration

## Project Structure
```
./
├── apps/
│   ├── storybook/     # Storybook documentation and demos
│   └── astro/         # Astro site
├── _base/             # Core component library
│   └── package.json   # Base package configuration
├── _main-nav/           # Header component/application
├── README.md
└── .gitignore
```

## Packages
- `_base`: Core component library
- `_main-nav`: Header component/application
- `apps/storybook`: Storybook documentation
- `apps/astro`: Astro site

## Setup
```bash
pnpm install
```

## Development
```bash
# Start Storybook
pnpm run storybook

# Publish Storybook to Chromatic
pnpm chromatic

# Develop header application
pnpm run header:dev

# Develop Astro site
pnpm run astro:dev
```

## Chromatic Integration
- Automated visual regression testing
- Publish Storybook to Chromatic
- Detect and review UI changes

## Components
- Vue 3 components with SCSS styling
- Web Components support
- Theme customization via Storybook

## Stack
- Vue 3
- Astro
- Storybook 7
- SCSS
- pnpm workspaces
- Chromatic

## Next Steps
1. Module Federation Implementation
   - Integrate Module Federation between header and Astro app
   - Convert header to a remote module
   - Configure Astro app as a host application
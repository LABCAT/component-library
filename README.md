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
│   └── storybook/     # Storybook documentation and demos
├── _base/              # Core component library
│   └── package.json   # Base package configuration
├── README.md
└── package.json       # Workspace configuration
```

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
- Storybook 7
- SCSS
- pnpm workspaces
- Chromatic
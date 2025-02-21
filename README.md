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

## Prerequisites

### Google Cloud CLI
Required for deployment to Google Cloud Run. If not installed:

For Ubuntu/Debian:

```bash
# Add the Cloud SDK distribution URI as a package source
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Import the Google Cloud public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

# Update and install the CLI
sudo apt-get update
sudo apt-get install google-cloud-cli

# Initialize the CLI
gcloud init
```

For other operating systems, visit: https://cloud.google.com/sdk/docs/install

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

## Deployment to Google Cloud Run

### Set Google Cloud Project

Ensure you are using the correct Google Cloud project:

```bash
pnpm run cloud:project:set
```

### Build and Push Container

```bash
pnpm run cloud:build
```

### Tag the Container Image

```bash
pnpm run cloud:tag
```

### Deploy to Cloud Run

```bash
pnpm run cloud:deploy
```

Or run all steps in one command:

```bash
pnpm run cloud:deploy:all
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
- Google Cloud Run (deployment)


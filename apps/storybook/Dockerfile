FROM node:18-alpine as builder

# Install specific pnpm version to match your system
RUN npm install -g pnpm@9.15.0

# Set working directory
WORKDIR /app

# Copy root workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy the base component library
COPY _base ./_base

# Copy Storybook files
COPY apps/storybook ./apps/storybook

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build Storybook
WORKDIR /app/apps/storybook
RUN pnpm run build-storybook

# Production stage
FROM nginx:alpine
COPY --from=builder /app/apps/storybook/storybook-static /usr/share/nginx/html
COPY apps/storybook/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

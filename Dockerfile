# Multi-stage build for Vue.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with nginx
FROM nginx:1.25-alpine

# Add label to connect repository to container image
LABEL org.opencontainers.image.source=https://github.com/der-ttn/webseite

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
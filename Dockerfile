# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json only (not package-lock.json to avoid auth issues)
COPY package.json ./

# Install dependencies
# Clear all npm config and use public registry
RUN rm -rf /root/.npmrc /root/.npm && \
    npm config set registry https://registry.npmjs.org/ && \
    npm config delete //registry.npmjs.org/:_authToken || true && \
    npm config delete //registry.npmjs.org/:always-auth || true && \
    npm install --no-audit --no-fund --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

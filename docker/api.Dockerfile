FROM node:22-alpine AS builder
WORKDIR /app

# 1. Install pnpm globally using npm explicitly
RUN npm install -g pnpm

# 2. Copy all root configurations (CRITICAL for TypeScript compilation)
COPY pnpm-lock.yaml package.json ./
COPY pnpm-workspace.yaml* tsconfig*.json turbo.json* ./

# 3. Copy your server application source folder
COPY apps/server ./apps/server

# 4. Install dependencies locking them to your exact versions
RUN pnpm install --frozen-lockfile

# 5. Build your server app
RUN pnpm --filter=server run build

# --- Production Runner Stage ---
FROM node:22-alpine AS runner
WORKDIR /app

RUN npm install -g pnpm

# Copy built dist code and package configurations from the builder stage
COPY --from=builder /app/apps/server/dist ./dist
COPY --from=builder /app/apps/server/package.json ./package.json

# Install only pure production dependencies
RUN pnpm install --prod --frozen-lockfile

EXPOSE 5000

CMD ["node", "dist/server.js"]

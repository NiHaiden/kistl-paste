# Stage 1: Build
FROM node:22-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . ./

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:22-alpine as production

# Set the working directory inside the container
WORKDIR /app

# Copy built files from the build stage
COPY --from=builder /app/.output /app

# Expose port application will run on
EXPOSE 3000

# Start the application
CMD ["node", "/app/server/index.mjs"]

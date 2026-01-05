# Use official Node.js 20 LTS
FROM node:20-alpine

# Install dependencies for native modules
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git

# Set working directory
WORKDIR /opt/app

# Copy package files
COPY package*.json ./

# Set environment variables
ENV NODE_ENV=development
ENV PATH=/opt/app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Strapi admin and compile TypeScript
RUN npm run build

# Copy schema.json files to dist (TypeScript doesn't copy JSON)
RUN npm run copy-schemas

# Expose port
EXPOSE 1337

# Start Strapi in development mode with auto-reload
# Use start for production-like behavior that doesn't recompile
CMD ["npm", "run", "start"]

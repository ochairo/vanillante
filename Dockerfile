# Stage 1: Build the application
FROM node:20-alpine as builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Display contents of the current directory (debugging)
RUN ls -l

# Install dependencies
RUN npm ci --only=production --unsafe-perm

# Copy the rest of the application code
COPY . .

# Display contents of the 'dist' directory (debugging)
RUN ls -l ./dist

# Build the application
RUN npm run build:dev

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# Copy built app from the previous stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Command to start nginx
CMD ["nginx", "-g", "daemon off;"]

# Use official Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of app code
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose port 1337 (default for Strapi)
EXPOSE 1337

# Start the app
CMD ["npm", "start"]

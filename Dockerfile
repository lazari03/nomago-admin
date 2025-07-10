# Use the official Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose the port Strapi runs on
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]

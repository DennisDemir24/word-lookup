# Use the official Node.js 16 image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g bun

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["bun", "--watch", "run", "src/server/index.js"]

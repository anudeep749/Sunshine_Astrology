# Step 1: Use the official Node.js image as a base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose port 5173 for the Vite development server
EXPOSE 5173

# Step 7: Build the application for production (optional, if you want to run a production build)
RUN npm run build

# Step 8: Use a lightweight Nginx image to serve the production build (optional step if you're building for production)
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80

# Step 9: Start the development server with Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

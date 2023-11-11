# Stage 1: Build the React application
FROM node:latest as build-stage

WORKDIR /app

COPY Frontend/civid-seed-react-frontend/package*.json ./
RUN npm install

COPY Frontend/civid-seed-react-frontend/ ./
RUN npm run build

# Stage 2: Set up the server
FROM node:latest

WORKDIR /server

# Copy the backend dependencies and install them
COPY server/package*.json ./
RUN npm install

# Copy the built React application from the previous stage
COPY --from=build-stage /app/build /server/public

# Copy the backend code
COPY server/ ./

# Your Express server needs to serve the files from the 'public' directory
EXPOSE 5000

CMD ["node", "server.js"]

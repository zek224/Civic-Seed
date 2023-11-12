# react
FROM node:latest as build-stage
WORKDIR /app
COPY Frontend/civic-seed-react-frontend/package*.json ./
RUN npm install
COPY Frontend/civic-seed-react-frontend/ ./
RUN npm run build

# server
FROM node:latest
WORKDIR /server
COPY server/package*.json ./
RUN npm install --fetch-retries=5 --fetch-retry-factor=2 --fetch-retry-mintimeout=1000 --verbose

# copy the built react
COPY --from=build-stage /app/build /server/public

# copy the backend
COPY server/ ./
COPY global-bundle.pem .
EXPOSE 5000
CMD ["node", "server.js"]

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
RUN npm install

# copy the built react
COPY --from=build-stage /app/build /server/public

# copy the backend
COPY server/ ./
# COPY global-bundle.pem .
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem -O global-bundle.pem && \
    rm -rf /var/lib/apt/lists/*
EXPOSE 5000
CMD ["node", "server.js"]

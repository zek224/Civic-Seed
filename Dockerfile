# Use an official Node runtime as a parent image
FROM node:latest as build-stage

# Set the working directory
WORKDIR /app

# Copy the Frontend directory contents into the container at /app
COPY Frontend/civic-seed-react-frontend /app

# Install any needed packages specified in package.json
RUN npm install

# Build the React application
RUN npm run build

# Use an official Python runtime as a parent image for the production stage
FROM python:3.9

# Set the working directory to /app
WORKDIR /app

# Install wget
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem && \
    rm -rf /var/lib/apt/lists/*

# Copy the built React app from the previous stage
COPY --from=build-stage /app/build /app/build

# Copy the backend code


# Assuming your FastAPI backend code is in the 'backend' subdirectory
# and that you have a requirements.txt file there
COPY Frontend/civic-seed-react-frontend/main.py /app
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000 to the outside world
EXPOSE 5000

# Run main.py when the container launches
CMD ["python3", "main.py"]

#!/bin/bash

# Build script for Doctor NFSe Website
echo "🚀 Building Doctor NFSe Website..."

# Build the Docker image
docker build -t doctor-nfse-website .

# Run the container locally for testing
echo "🧪 Testing the build locally..."
docker run -d --name doctor-nfse-test -p 3000:80 doctor-nfse-website

# Wait for the container to start
sleep 5

# Check if the container is running
if docker ps | grep -q doctor-nfse-test; then
    echo "✅ Container is running successfully!"
    echo "🌐 Website available at: http://localhost:3000"
    echo ""
    echo "To stop the test container:"
    echo "docker stop doctor-nfse-test && docker rm doctor-nfse-test"
else
    echo "❌ Container failed to start"
    docker logs doctor-nfse-test
fi

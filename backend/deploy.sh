#!/bin/bash

# Talvyn Backend Docker Deployment Script

set -e

echo "🚀 Starting Talvyn Backend Deployment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found!"
    echo "Please copy .env.example to .env and configure your settings."
    exit 1
fi

# Create uploads directory if it doesn't exist
mkdir -p uploads

# Build and start the container
echo "🔨 Building Docker image..."
docker-compose -f docker-compose.prod.yml build

echo "🚀 Starting services..."
docker-compose -f docker-compose.prod.yml up -d

echo "⏳ Waiting for service to be healthy..."
sleep 10

# Check if service is running
if docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "🌐 Backend API is running at: http://localhost:8000"
    echo "🔍 Health check: http://localhost:8000/health"
    echo ""
    echo "📋 Useful commands:"
    echo "  View logs:    docker-compose -f docker-compose.prod.yml logs -f"
    echo "  Stop service: docker-compose -f docker-compose.prod.yml down"
    echo "  Restart:      docker-compose -f docker-compose.prod.yml restart"
else
    echo "❌ Deployment failed!"
    echo "Check logs with: docker-compose -f docker-compose.prod.yml logs"
    exit 1
fi
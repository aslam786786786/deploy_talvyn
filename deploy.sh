#!/bin/bash

# Talvyn Technologies Full Stack Deployment Script

set -e

echo "🚀 Starting Talvyn Full Stack Deployment..."

# Check if backend .env file exists
if [ ! -f "backend/.env" ]; then
    echo "❌ Error: backend/.env file not found!"
    echo "Please copy .env.example to backend/.env and configure your SMTP settings."
    exit 1
fi

# Create uploads directory if it doesn't exist
mkdir -p backend/uploads

# Build and start the containers
echo "🔨 Building Docker images..."
docker-compose -f docker-compose.prod.yml build

echo "🚀 Starting services..."
docker-compose -f docker-compose.prod.yml up -d

echo "⏳ Waiting for services to be healthy..."
sleep 15

# Check if services are running
if docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "🌐 Frontend is running at: http://localhost"
    echo "🔗 Backend API is running at: http://localhost/api"
    echo "🔍 Health check: http://localhost/health"
    echo ""
    echo "📋 Useful commands:"
    echo "  View logs:         docker-compose -f docker-compose.prod.yml logs -f"
    echo "  Stop services:     docker-compose -f docker-compose.prod.yml down"
    echo "  Restart services:  docker-compose -f docker-compose.prod.yml restart"
    echo "  View status:       docker-compose -f docker-compose.prod.yml ps"
else
    echo "❌ Deployment failed!"
    echo "Check logs with: docker-compose -f docker-compose.prod.yml logs"
    exit 1
fi
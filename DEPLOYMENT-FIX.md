# 🚨 API Connection Fix for Deployment

## Problem
Frontend tries to connect to `localhost:8000` instead of your deployed backend URL.

## Solution
Replace `your-aws-backend-ip:8000` with your actual deployed backend URL in these files:

### 1. Update `.env.production`
```bash
# Replace this line:
VITE_API_BASE_URL=http://your-aws-backend-ip:8000

# With your actual backend URL, for example:
VITE_API_BASE_URL=http://18.xxx.xxx.xxx:8000
# OR if you have a domain:
VITE_API_BASE_URL=https://api.yourdomain.com
```

### 2. Update `docker-compose.prod.yml`
The file is already configured to use the environment variable.

### 3. Rebuild and Deploy
```bash
# Rebuild with the new API URL
make prod
```

## Quick Fix Examples

### If your backend is at IP 18.123.456.789:
```bash
VITE_API_BASE_URL=http://18.123.456.789:8000
```

### If using AWS Load Balancer:
```bash
VITE_API_BASE_URL=http://your-alb-url.us-east-1.elb.amazonaws.com:8000
```

### If using domain with SSL:
```bash
VITE_API_BASE_URL=https://api.talvyntechnologies.com
```

## ⚡ Emergency Fix (No Rebuild)
If you need to fix this without rebuilding:

1. SSH into your deployed frontend container
2. Find the built JavaScript file containing `localhost:8000`
3. Replace with your backend URL using `sed`:
```bash
sed -i 's/localhost:8000/YOUR_BACKEND_IP:8000/g' /app/dist/assets/*.js
```

## 🔍 How to Find Your Backend URL
- **AWS EC2**: Use your instance's public IP
- **Load Balancer**: Use the ALB/NLB DNS name
- **Domain**: Use your configured domain name

After updating, redeploy and the connection error will be fixed!
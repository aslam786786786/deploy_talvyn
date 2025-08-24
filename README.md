# Talvyn Technologies - Full Stack Application

A complete Docker-based web application for Talvyn Technologies featuring a React frontend and FastAPI backend with integrated email functionality.

## 🚀 Quick Start (Docker Deployment)

### Prerequisites
- Docker and Docker Compose installed
- Git

### 1. Clone & Setup
```bash
git clone <your-repository-url>
cd Talvyn

# Setup backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your SMTP credentials
```

### 2. Deploy with Docker
```bash
# Development deployment
docker-compose up -d

# Production deployment
./deploy.sh
```

### 3. Access Application
- **Frontend**: http://localhost
- **Backend API**: http://localhost/api
- **Health Check**: http://localhost/health

## 📁 Project Structure

```
Talvyn/
├── src/                          # React frontend source
│   ├── components/               # React components
│   ├── services/                 # API service layer
│   └── styles/                   # CSS modules
├── backend/                      # FastAPI backend
│   ├── app.py                   # Main application
│   ├── Dockerfile               # Backend Docker config
│   └── .env.example             # Environment template
├── Dockerfile                   # Frontend Docker config
├── nginx.conf                   # Nginx configuration
├── docker-compose.yml           # Development deployment
├── docker-compose.prod.yml      # Production deployment
└── deploy.sh                    # Deployment script
```

## ⚙️ Configuration

### Environment Variables
Edit `backend/.env` with your email settings:
```env
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USERNAME=your-email@yourdomain.com
SMTP_PASSWORD=your-app-password
HR_EMAIL=hr@talvyntechnologies.com
```

### Office 365 SMTP Setup
1. Disable Security Defaults in Microsoft 365 Admin Center
2. Enable SMTP AUTH in Exchange Admin Center
3. Generate App Password for the email account
4. Use the app password in `SMTP_PASSWORD`

## 🐳 Docker Services

### Frontend Service
- **Build**: React app with Vite
- **Server**: Nginx with custom configuration
- **Port**: 80
- **Features**: API proxy, static file caching, React Router support

### Backend Service
- **Framework**: FastAPI with Python 3.11
- **Features**: SMTP email integration, file uploads, health checks
- **Internal Port**: 8000 (proxied through frontend)

## 📧 Email Integration

### Job Applications
- Collects resume and application data
- Sends detailed email to HR with resume attachment
- Sends confirmation email to candidate

### Contact Forms
- Processes contact inquiries
- Forwards to HR email with proper Reply-To headers

## 🔧 Development Commands

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Rebuild images
docker-compose build --no-cache

# Clean up Docker resources
docker system prune -f
```

## 💻 Local Development (Non-Docker)

### Prerequisites
- Node.js (v16 or higher)
- Python 3.11+
- npm or yarn

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:5173
```

### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env
# Edit .env with your SMTP settings

# Run development server
uvicorn app:app --reload --port 8000
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Tech Stack

### Frontend
- **Framework**: React 19 with Vite
- **Styling**: Bootstrap 5 + CSS Modules
- **Animations**: AOS (Animate On Scroll), Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM
- **Build**: Vite with SWC

### Backend
- **Framework**: FastAPI (Python 3.11)
- **Email**: SMTP with Office 365 integration
- **File Handling**: Aiofiles for async file operations
- **Validation**: Pydantic models
- **Server**: Uvicorn ASGI server

### Deployment
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (reverse proxy & static files)
- **Monitoring**: Health checks & logging

## 📱 Features

### Frontend
- Responsive design with Bootstrap
- Professional UI with smooth animations
- Contact form with validation
- Career portal with job applications
- Service showcase with modals
- Google Maps integration

### Backend
- RESTful API endpoints
- File upload handling (PDF, DOC, DOCX)
- Email notifications with templates
- Input validation and sanitization
- CORS support
- Health monitoring endpoints

## 🔒 Security Features

- Non-root Docker containers
- Input validation and sanitization
- Secure file upload handling
- SMTP authentication with app passwords
- Error handling without data exposure
- CORS protection

## 🚀 Production Features

### Resource Management
- **Frontend**: 256MB RAM, 0.3 CPU limit
- **Backend**: 512MB RAM, 0.5 CPU limit
- Automatic container restart policies

### Monitoring & Logging
- Health check endpoints
- Container status monitoring
- Log rotation (10MB max, 3 files)
- Docker system resource tracking

## 🤝 Contact Information

### Business
- **Email**: hr@talvyntechnologies.com
- **Phone**: 123344556
- **Address**: No.546, Left cross road, CBE, Coimbatore

### Technical Support
- **Email**: tech@talvyntechnologies.com

## 🔧 Troubleshooting

### Common Issues

1. **Email sending fails**:
   - Check SMTP credentials in `backend/.env`
   - Verify Office 365 app password
   - Ensure SMTP AUTH is enabled

2. **Docker build errors**:
   - Run `docker system prune -f` to clean up
   - Check Docker daemon is running
   - Verify file permissions

3. **API connection issues**:
   - Ensure backend container is healthy
   - Check nginx proxy configuration
   - Verify network connectivity between containers

### Logs & Debugging
```bash
# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f frontend
docker-compose logs -f backend

# Check container status
docker-compose ps

# Restart specific service
docker-compose restart backend
```

---

© 2024 Talvyn Technologies. All rights reserved.
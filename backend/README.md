# Talvyn Technologies Backend API

A production-ready Python FastAPI backend for handling job applications and contact form submissions with email notifications.

## Features

- **Job Application Processing**: Handle resume uploads and form submissions
- **Contact Form Processing**: Process contact inquiries
- **Email Notifications**: Send emails to HR and confirmation emails to candidates
- **File Upload**: Secure resume file handling (PDF, DOC, DOCX)
- **Production Ready**: Docker support, logging, error handling
- **CORS Support**: Cross-origin request handling
- **Health Check**: Monitoring endpoint

## Tech Stack

- **FastAPI**: Modern, fast web framework for Python
- **Python 3.11**: Latest Python version
- **SMTP**: Email delivery system
- **Docker**: Containerization
- **Uvicorn**: ASGI server

## Setup Instructions

### 1. Local Development

```bash
# Clone and navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env with your email configuration

# Run development server
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

### 2. Docker Deployment (Development)

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build and run manually
docker build -t talvyn-backend .
docker run -p 8000:8000 --env-file .env talvyn-backend
```

### 3. Docker Production Deployment

```bash
# Use production configuration
./deploy.sh

# Or manually:
docker-compose -f docker-compose.prod.yml up -d
```

## Environment Configuration

Create a `.env` file with the following variables:

```env
# Email Configuration - Office 365 SMTP
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USERNAME=hr@talvyntechnologies.com
SMTP_PASSWORD=your-app-password-here

# HR Email (where applications will be sent)
HR_EMAIL=hr@talvyntechnologies.com

# Application Settings
HOST=0.0.0.0
PORT=8000
```

### Office 365 SMTP Configuration

1. **Disable Security Defaults** (if enabled):
   - Go to https://entra.microsoft.com
   - Identity → Overview → Properties → Manage security defaults
   - Set to "No"

2. **Enable SMTP AUTH for the user**:
   - Go to https://admin.exchange.microsoft.com
   - Settings → Mail flow → SMTP AUTH
   - Enable "SMTP AUTH" globally

3. **Generate App Password**:
   - Go to https://mysignins.microsoft.com/security-info
   - Add sign-in method → App password
   - Name: "Website SMTP"
   - Use the generated password in `SMTP_PASSWORD`

## API Endpoints

### Job Application Submission

```http
POST /api/job-application
Content-Type: multipart/form-data

Form Fields:
- name: string
- email: string
- phone: string
- position: string
- experience: string
- currentCompany: string
- expectedSalary: string
- noticePeriod: string
- skills: string
- coverLetter: string
- resume: file (PDF, DOC, DOCX)
```

### Contact Form Submission

```http
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "serviceInterest": "string",
  "message": "string"
}
```

### Health Check

```http
GET /health
```

## Email Flow

### Job Applications
1. **Candidate fills application** → Form submitted with resume
2. **HR Email**: Detailed application info + resume attachment sent to `hr@talvyntechnologies.com`
3. **Candidate Confirmation**: Automatic confirmation email sent to applicant

### Contact Forms
1. **User submits contact form** → Form data processed
2. **HR Email**: Contact inquiry details sent to `hr@talvyntechnologies.com`

## Production Deployment

### 1. Server Setup (Ubuntu/CentOS)

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone repository
git clone <your-repo-url>
cd backend

# Configure environment
cp .env.example .env
nano .env  # Edit with production values

# Deploy
docker-compose up -d
```

### 2. Nginx Reverse Proxy (Optional)

```nginx
server {
    listen 80;
    server_name api.talvyntechnologies.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d api.talvyntechnologies.com
```

## Frontend Integration

Update your React app's environment variables:

```env
# .env.production
VITE_API_BASE_URL=https://api.talvyntechnologies.com

# .env.development
VITE_API_BASE_URL=http://localhost:8000
```

## Monitoring and Logs

```bash
# View logs
docker-compose logs -f backend

# Monitor health
curl http://localhost:8000/api/health
```

## Security Features

- **File Validation**: Only PDF, DOC, DOCX files allowed
- **File Size Limits**: Configurable upload limits
- **CORS Protection**: Restricted origin access
- **Input Validation**: Pydantic model validation
- **Email Sanitization**: Secure email handling
- **Error Handling**: No sensitive data in error responses

## Troubleshooting

### Common Issues

1. **Email sending fails**:
   - Check SMTP credentials
   - Verify app password for Gmail
   - Check firewall/port access

2. **File upload errors**:
   - Verify file type and size
   - Check uploads directory permissions

3. **CORS errors**:
   - Update CORS origins in production
   - Check frontend API URL configuration

### Logs and Debugging

```bash
# Enable debug mode
export DEBUG=True

# View detailed logs
docker-compose logs backend
```

## Support

For issues or questions:
- Email: tech@talvyntechnologies.com
- Documentation: [API Docs](http://localhost:8000/docs) (when running)
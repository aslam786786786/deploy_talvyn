# Backend Environment Setup Guide

## Prerequisites
- Python 3.7+
- pip package manager
- Outlook/Hotmail email account

## Installation Steps

1. **Install Dependencies**
```bash
cd backend
pip install -r requirements.txt
```

2. **Environment Configuration**

Copy the example environment file:
```bash
cp .env.example .env
```

Edit the `.env` file with your email credentials:
```env
# Email Configuration for Outlook/Hotmail
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USERNAME=your-email@outlook.com
SMTP_PASSWORD=your-app-password

# HR Email (where applications will be sent)
HR_EMAIL=hr@talvyntechnologies.com
```

## Email Setup (Outlook/Hotmail)

### Step 1: Enable App Passwords
1. Go to https://account.microsoft.com/security
2. Sign in with your Outlook account
3. Under "Security dashboard" → "Advanced security options"
4. Turn on "App passwords"

### Step 2: Generate App Password
1. Click "Create a new app password"
2. Choose "Mail" as the app type
3. Copy the generated 16-character password
4. Use this password in your `.env` file as `SMTP_PASSWORD`

### Step 3: Update Environment Variables
```env
SMTP_USERNAME=your-email@outlook.com
SMTP_PASSWORD=abcd-efgh-ijkl-mnop  # Your 16-character app password
```

### Alternative: Regular Password (Less Secure)
If you can't use app passwords, you may need to:
1. Enable "Less secure app access" in your Microsoft account
2. Use your regular password in `SMTP_PASSWORD`

## Gmail Configuration (Alternative)
If using Gmail instead:
```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

For Gmail:
1. Enable 2-Factor Authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character app password

## Running the Server

```bash
cd backend
python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

Server will be available at: http://localhost:8000

## API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Testing Email Configuration

1. Start the backend server
2. Visit http://localhost:8000/docs
3. Try the `/api/contact` endpoint with test data
4. Check if email is received at your configured HR email

## Troubleshooting

### Common Issues:

1. **535 Authentication failed**
   - Check your username/password
   - Ensure app password is used for Outlook
   - Verify 2FA is enabled for Gmail

2. **550 Relay not permitted**
   - Verify SMTP server settings
   - Check if your email provider allows SMTP

3. **Connection timeout**
   - Check firewall settings
   - Verify SMTP_SERVER and SMTP_PORT

4. **Module not found errors**
   - Run `pip install -r requirements.txt`
   - Ensure virtual environment is activated

### Environment Variables Not Loading:
- Ensure `.env` file is in the backend directory
- Check file permissions
- Verify python-dotenv is installed: `pip install python-dotenv`

## Production Deployment

For production, set environment variables directly on your server instead of using `.env` files:

```bash
export SMTP_USERNAME="your-email@outlook.com"
export SMTP_PASSWORD="your-app-password"
export HR_EMAIL="hr@talvyntechnologies.com"
```

Or use Docker with environment variables:
```bash
docker run -e SMTP_USERNAME=your-email@outlook.com -e SMTP_PASSWORD=your-app-password talvyn-backend
```
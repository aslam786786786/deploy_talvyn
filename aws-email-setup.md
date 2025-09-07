# AWS Email Delivery Fix Guide

## Problem: Emails work locally but not from AWS to external devices

### Root Causes & Solutions:

## 1. 🚨 **AWS EC2 Email Restrictions**
AWS blocks port 25 and limits SMTP by default.

**Solution:**
- Use port 587 (STARTTLS) or 465 (SSL)
- Request AWS to lift email restrictions: https://aws.amazon.com/forms/ec2-email-limit-request/

## 2. 🔐 **Outlook/Microsoft 365 Issues**

### Check These Settings:
1. **App Password Required** (not regular password)
   - Go to account.microsoft.com → Security → App passwords
   - Generate new app password
   - Use this instead of regular password

2. **Modern Authentication**
   ```bash
   SMTP_SERVER=smtp-mail.outlook.com
   SMTP_PORT=587
   SMTP_USERNAME=hr@talvyntechnologies.com
   SMTP_PASSWORD=your-16-char-app-password
   ```

## 3. 🌐 **AWS Security Group Configuration**

### Required Outbound Rules:
```
Type: Custom TCP
Port: 587
Destination: 0.0.0.0/0
Description: SMTP STARTTLS

Type: Custom TCP  
Port: 465
Destination: 0.0.0.0/0
Description: SMTP SSL
```

## 4. 📧 **Email Deliverability Issues**

### Common Problems:
- Emails going to spam folders
- Recipients not receiving emails
- ISP blocking emails from AWS IPs

### Solutions:

#### Option A: Use AWS SES (Recommended)
```python
# Add to requirements.txt
boto3==1.34.0

# Update environment variables
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
```

#### Option B: Use Third-Party Service
- **SendGrid** (recommended)
- **Mailgun** 
- **Postmark**

## 5. 🔧 **Quick Fixes**

### Update .env.production:
```bash
# Use these exact settings
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USERNAME=hr@talvyntechnologies.com
SMTP_PASSWORD=your-app-password-here
HR_EMAIL=hr@talvyntechnologies.com

# Add these new variables for better delivery
EMAIL_FROM_NAME=Talvyn Technologies
EMAIL_REPLY_TO=contact@talvyntechnologies.com
```

### Test Email Delivery:
```bash
# Run this from your AWS instance
python /app/email_debug.py
```

## 6. 📱 **Check Recipient Devices**

### Android Gmail:
- Check Spam/Junk folder
- Check Promotions tab
- Add sender to contacts

### Other Email Clients:
- Check spam filters
- Whitelist talvyntechnologies.com domain
- Check if emails are being delayed

## 7. 🔍 **Debug Steps**

1. **Check AWS CloudWatch Logs**
2. **Test SMTP connectivity:**
   ```bash
   telnet smtp-mail.outlook.com 587
   ```
3. **Check email headers** for delivery issues
4. **Monitor bounce/rejection rates**

## 8. 🚀 **Recommended Solution: AWS SES**

### Benefits:
- Better deliverability from AWS
- Built-in bounce/complaint handling
- Higher sending limits
- Better reputation management

### Setup:
1. Enable SES in AWS Console
2. Verify your domain
3. Request production access
4. Update backend to use SES instead of SMTP

Would you like me to implement AWS SES integration?
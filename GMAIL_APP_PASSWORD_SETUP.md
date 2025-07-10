# Gmail App Password Setup for EmailJS

This guide will help you set up Gmail with EmailJS using App Passwords, which is more reliable than OAuth.

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your Google Account settings: https://myaccount.google.com/security
2. Under "Signing in to Google", find "2-Step Verification"
3. Click on it and follow the setup process:
   - Enter your password
   - Add your phone number
   - Verify with the code sent to your phone
   - Turn ON 2-Step Verification

## Step 2: Generate App Password

1. After enabling 2FA, go to: https://myaccount.google.com/apppasswords
2. You might need to sign in again
3. In the "Select app" dropdown, choose "Mail"
4. In the "Select device" dropdown, choose "Other (Custom name)"
5. Enter a name like "EmailJS Contact Form"
6. Click "Generate"
7. **IMPORTANT**: Copy the 16-character password that appears (like: `abcd efgh ijkl mnop`)
8. Save this password securely - you won't be able to see it again!

## Step 3: Configure EmailJS with App Password

1. Log in to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Go to "Email Services"
3. If you have an existing Gmail service:
   - Click on it
   - Click "Disconnect" or "Delete Service"
4. Add New Service:
   - Click "Add New Service"
   - Choose "Gmail"
   - **IMPORTANT**: Select "Username/Password" option (NOT the Gmail icon/OAuth)
   - Fill in:
     - Service Name: "Gmail App Password" (or any name you prefer)
     - Username: Your full Gmail address (e.g., yourname@gmail.com)
     - Password: The 16-character app password (without spaces)
   - Click "Add Service"
5. Note your Service ID (like: `service_xxxxxxx`)

## Step 4: Update Your Email Template

1. In EmailJS Dashboard, go to "Email Templates"
2. If you haven't created one yet:
   - Click "Create New Template"
   - Set the template name
3. Configure your template:

**To Email**: `info@nexalytica.com` (or your receiving email)

**From Name**: `{{from_name}}`

**From Email**: Your Gmail address (the one you used above)

**Reply To**: `{{from_email}}`

**Subject**: `New Contact Form Message from {{from_name}}`

**Content**:
```
You have received a new message from the Nexalytica website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent via the contact form on nexalytica.com
```

4. Save the template
5. Note your Template ID (like: `template_xxxxxxx`)

## Step 5: Test in EmailJS Dashboard

1. In your template page, click "Test It"
2. Fill in test values:
   - from_name: Test User
   - from_email: test@example.com
   - company: Test Company
   - message: This is a test message
3. Click "Send Test Email"
4. Check if you received the email

## Step 6: Update Your .env File

Create a `.env` file in your project root with your actual values:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

To find your Public Key:
1. In EmailJS Dashboard, go to "Account"
2. Look for "Public Key" in the API Keys section

## Troubleshooting

### If emails aren't sending:

1. **Check Gmail Settings**:
   - Go to Gmail Settings → Forwarding and POP/IMAP
   - Ensure "IMAP" is enabled
   - Check that "Less secure app access" is not blocking (though App Passwords bypass this)

2. **Verify in EmailJS Dashboard**:
   - Check the "Email History" tab for error details
   - Use "Test" button on your service to verify connection

3. **Common Issues**:
   - Wrong app password (ensure no spaces)
   - Using regular Gmail password instead of app password
   - Template variables don't match what's being sent from your code
   - Service ID or Template ID typos

### Security Notes

- App passwords are specific to the application
- If compromised, you can revoke just that app password
- Your main Gmail password remains secure
- The app password only allows sending emails, not reading

## Alternative: If App Password Doesn't Work

Try using a different email provider in EmailJS:
- Outlook.com (usually easier)
- Yahoo Mail
- Or use a custom SMTP server

Remember to test your form after setup to ensure everything works correctly!
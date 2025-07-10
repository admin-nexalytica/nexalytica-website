# EmailJS Setup Guide for Nexalytica Contact Form

This guide will help you set up EmailJS to receive messages from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month) or paid plan

## Step 2: Set Up Email Service

1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authorization steps for your chosen provider
5. Note down your **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the Nexalytica website contact form.
```

4. Note down your **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

## Step 5: Update Your Code

In `/src/components/Contact.jsx`, replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your EmailJS public key

await emailjs.send(
    'YOUR_SERVICE_ID',  // Your EmailJS service ID
    'YOUR_TEMPLATE_ID', // Your EmailJS template ID
    templateParams
);
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email for the test message

## Alternative Options

If you prefer other solutions for form handling:

### 1. **Formspree** (Simple Form Backend)
- No backend required
- Easy integration
- Free tier available
- Visit: https://formspree.io/

### 2. **Netlify Forms** (If hosting on Netlify)
- Built-in form handling
- No JavaScript required
- Automatic spam filtering
- Just add `netlify` attribute to form

### 3. **Custom Backend API**
- Full control over data
- Can store in database
- Requires backend development
- Options: Node.js/Express, Python/Flask, etc.

### 4. **Google Sheets Integration**
- Store submissions in Google Sheets
- Use Google Apps Script
- Free and easy to manage

## Security Notes

1. Never expose sensitive API keys in your frontend code
2. Use environment variables for production deployments
3. Consider implementing rate limiting for form submissions
4. Add CAPTCHA for additional spam protection if needed

## Environment Variables (For Production)

Create a `.env` file in your project root:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Then update your code to use these variables:

```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams
);
```

Remember to add `.env` to your `.gitignore` file!
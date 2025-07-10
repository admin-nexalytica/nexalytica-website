# Fix Gmail Authentication Error with EmailJS

## Error: "Gmail_API: Request had insufficient authentication scopes"

This error occurs when Gmail hasn't been properly authorized in EmailJS. Here's how to fix it:

## Solution 1: Re-authorize Gmail in EmailJS

1. **Log in to EmailJS Dashboard**
   - Go to https://dashboard.emailjs.com/

2. **Navigate to Email Services**
   - Click on your Gmail service (service_d243ewi)
   - Click "Disconnect" if it's already connected

3. **Reconnect Gmail with Proper Permissions**
   - Click "Connect Account"
   - Choose your Gmail account
   - **IMPORTANT**: Make sure to check ALL permission boxes when Google asks
   - Specifically, ensure "Send email on your behalf" is allowed

4. **Test the Connection**
   - In EmailJS dashboard, use the "Test" button
   - Send a test email to verify it works

## Solution 2: Use Gmail App Password (More Reliable)

If the above doesn't work, use Gmail App Passwords:

1. **Enable 2-Factor Authentication on Gmail**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Configure in EmailJS**
   - In EmailJS, choose "Gmail" service
   - Instead of OAuth, select "Email/Password"
   - Enter your Gmail address and the app password

## Solution 3: Use a Different Email Service

If Gmail continues to have issues, consider these alternatives in EmailJS:

### Outlook/Hotmail
- Often easier to set up
- No complex authentication issues

### Yahoo Mail
- Simple setup process
- Reliable for form submissions

### Custom SMTP
- Use any email provider
- More control over configuration

## Quick Alternative: Use Formspree Instead

If EmailJS continues to cause issues, here's a quick alternative:

1. **Remove EmailJS code** from Contact.jsx
2. **Add Formspree** (no account needed for testing):

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            setSubmitStatus({
                type: 'success',
                message: 'Thank you! We\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', company: '', message: '' });
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        setSubmitStatus({
            type: 'error',
            message: 'Sorry, there was an error. Please try again.'
        });
    } finally {
        setIsSubmitting(false);
    }
};
```

3. **Get your Formspree endpoint**:
   - Go to https://formspree.io/
   - Enter your email
   - Get your form endpoint (like: https://formspree.io/f/xyzabc)

## Debugging Tips

1. **Check Browser Console**
   - Look for specific error messages
   - Check network tab for failed requests

2. **Verify Credentials**
   - Ensure service_id, template_id, and public_key are correct
   - No extra spaces or quotes

3. **Test in EmailJS Dashboard**
   - Use the "Test" feature to isolate issues
   - Check email service logs

Let me know which solution works for you!
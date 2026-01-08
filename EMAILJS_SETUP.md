# EmailJS Setup Instructions

## Steps to enable email functionality:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Connect Your Email Service
1. Click "Add New Service" in the EmailJS dashboard
2. Choose Gmail (or your preferred email provider)
3. Click "Connect Account" and authorize Gmail
4. Copy the **Service ID**

### 3. Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
You have a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to "Account" -> "General"
2. Copy your **Public Key**

### 5. Update Environment Variables
Open your `.env` file and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Add .env to Vercel
When deploying to Vercel, add these same environment variables in:
- Project Settings → Environment Variables

### 7. Test the Form
1. Run `npm run dev`
2. Visit the Contact page
3. Fill out and submit the form
4. Check your email (mazenmagdy190.mm@gmail.com)

## Important Notes
- EmailJS free tier allows 200 emails/month
- Make sure to add `.env` to your `.gitignore` (already done)
- Never commit your actual keys to Git
- The email will be sent directly from the browser using EmailJS's servers

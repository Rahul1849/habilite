# Environment Variables Configuration

This document describes the required environment variables for the Habilite Clinics Next.js application.

## Required Environment Variables

### Email Configuration (Rackspace SMTP)

The following environment variables are required for the consultation form email functionality:

```bash
EMAIL_HOST=secure.emailsrvr.com
EMAIL_PORT=465
EMAIL_USER=your-rackspace-email@habiliteclinics.com
EMAIL_PASS=your-rackspace-email-password
EMAIL_SECURE=true
```

#### Description:
- **EMAIL_HOST**: Rackspace SMTP server hostname (`secure.emailsrvr.com`)
- **EMAIL_PORT**: SMTP port number (587 for TLS)
- **EMAIL_USER**: Your Rackspace email address (e.g., `contact@habiliteclinics.com`)
- **EMAIL_PASS**: Your Rackspace email account password

## Setting Up Environment Variables

### Local Development

1. Create a `.env.local` file in the root directory of your project:

```bash
# .env.local
EMAIL_HOST=secure.emailsrvr.com
EMAIL_PORT=587
EMAIL_USER=contact@habiliteclinics.com
EMAIL_PASS=your-actual-password-here
```

2. **Important**: Never commit `.env.local` to version control. It should already be in `.gitignore`.

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:

   | Name | Value | Environment |
   |------|-------|-------------|
| `EMAIL_HOST` | `secure.emailsrvr.com` | Production, Preview, Development |
| `EMAIL_PORT` | `465` | Production, Preview, Development |
| `EMAIL_USER` | `contact@habiliteclinics.com` | Production, Preview, Development |
| `EMAIL_PASS` | `[your-password]` | Production, Preview, Development |
| `EMAIL_SECURE` | `true` | Production, Preview, Development |

4. Click **Save** for each variable
5. Redeploy your application for changes to take effect

### Security Notes

- ✅ Environment variables are server-side only and never exposed to the client
- ✅ Never hardcode credentials in source code
- ✅ Use different passwords for development and production if possible
- ✅ Rotate passwords regularly
- ✅ Use Vercel's encrypted environment variables for production

## Testing Email Configuration

After setting up environment variables, test the email functionality:

1. Submit a consultation form on your website
2. Check that emails are received at `contact@habiliteclinics.com`
3. Check Vercel function logs for any errors

## Troubleshooting

### Email Not Sending

1. **Verify environment variables are set correctly**
   - Check Vercel dashboard → Settings → Environment Variables
   - Ensure all 4 variables are present

2. **Check Rackspace credentials**
   - Verify email and password are correct
   - Ensure the email account is active

3. **Check Vercel function logs**
   - Go to Vercel dashboard → Your Project → Functions
   - Look for errors in the `/api/consultation` function logs

4. **Test SMTP connection**
   - Verify Rackspace SMTP is accessible from Vercel's servers
   - Port 587 should be open for TLS connections

### Rate Limiting Issues

If you see "Too many requests" errors:
- The API limits to 3 submissions per hour per IP address
- Wait for the rate limit window to reset (1 hour)
- For production, consider upgrading to Vercel KV for better rate limiting

## Future Enhancements

### Phase 2: WhatsApp Integration

When implementing WhatsApp Cloud API, you'll need additional environment variables:

```bash
WHATSAPP_API_URL=https://graph.facebook.com/v18.0
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
WHATSAPP_ACCESS_TOKEN=your-access-token
WHATSAPP_VERIFY_TOKEN=your-verify-token
```

These will be added in a future update.


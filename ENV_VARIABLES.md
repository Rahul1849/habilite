# Environment Variables Configuration

This document describes the required environment variables for the Habilite Clinics Next.js application.

## Required Environment Variables

### Email Configuration (Resend)

The application uses [Resend](https://resend.com) for sending emails from contact forms, appointment bookings, and consultation requests.

The following environment variables are required:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Habilite Clinics <no-reply@habiliteclinics.com>
RESEND_TO_EMAIL=contact@habiliteclinics.com
```

#### Description:
- **RESEND_API_KEY**: Your Resend API key (starts with `re_`). Get it from [Resend Dashboard](https://resend.com/api-keys)
- **RESEND_FROM_EMAIL**: The sender email address (format: `Name <email@domain.com>` or just `email@domain.com`)
- **RESEND_TO_EMAIL**: The recipient email address where form submissions will be sent

#### Important Notes:
- **Domain Verification**: The domain in `RESEND_FROM_EMAIL` must be verified in Resend. For example, if using `no-reply@habiliteclinics.com`, you need to verify `habiliteclinics.com` in your Resend dashboard.
- **Free Tier**: Resend offers 3,000 emails/month on the free tier, which is perfect for contact forms.
- **API Key Security**: Never commit your API key to version control. Always use environment variables.

## Setting Up Environment Variables

### Local Development

1. Create a `.env.local` file in the root directory of your project:

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Habilite Clinics <no-reply@habiliteclinics.com>
RESEND_TO_EMAIL=contact@habiliteclinics.com
```

2. **Important**: Never commit `.env.local` to version control. It should already be in `.gitignore`.

3. **Get Your Resend API Key**:
   - Sign up at [resend.com](https://resend.com) (free account available)
   - Go to [API Keys](https://resend.com/api-keys) in your dashboard
   - Create a new API key
   - Copy the key (starts with `re_`) and add it to `.env.local`

### Vercel Deployment

1. **Get Your Resend API Key** (if you don't have one):
   - Sign up at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys) in your dashboard
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **Verify Your Domain** (required for sending emails):
   - Go to [Domains](https://resend.com/domains) in Resend dashboard
   - Click "Add Domain" and enter your domain (e.g., `habiliteclinics.com`)
   - Add the DNS records provided by Resend to your domain's DNS settings
   - Wait for verification (usually takes a few minutes)

3. **Add Environment Variables in Vercel**:
   - Go to your Vercel project dashboard: https://vercel.com/dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add each variable:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxx` | Production, Preview, Development |
   | `RESEND_FROM_EMAIL` | `Habilite Clinics <no-reply@habiliteclinics.com>` | Production, Preview, Development |
   | `RESEND_TO_EMAIL` | `contact@habiliteclinics.com` | Production, Preview, Development |

4. Click **Save** for each variable
5. **Redeploy your application** for changes to take effect:
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Select **Redeploy**

### Security Notes

- ✅ Environment variables are server-side only and never exposed to the client
- ✅ Never hardcode credentials in source code
- ✅ Use different passwords for development and production if possible
- ✅ Rotate passwords regularly
- ✅ Use Vercel's encrypted environment variables for production

## PayU Payment Gateway Configuration

The application uses PayU payment gateway for online payments (appointment bookings and video consultations).

The following environment variables are required:

```bash
PAYU_MERCHANT_KEY=your-merchant-key
PAYU_MERCHANT_SALT=your-merchant-salt
PAYU_BASE_URL=https://secure.payu.in
NEXT_PUBLIC_BASE_URL=https://habilite-6qce.vercel.app
```

For local development:
```bash
PAYU_MERCHANT_KEY=your-merchant-key
PAYU_MERCHANT_SALT=your-merchant-salt
PAYU_BASE_URL=https://test.payu.in
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

#### Description:
- **PAYU_MERCHANT_KEY**: Your PayU merchant key (get from PayU dashboard)
- **PAYU_MERCHANT_SALT**: Your PayU merchant salt (get from PayU dashboard)
- **PAYU_BASE_URL**: PayU API base URL
  - Production: `https://secure.payu.in`
  - Test/Sandbox: `https://test.payu.in`
- **NEXT_PUBLIC_BASE_URL**: Your application base URL
  - Production: `https://habilite-6qce.vercel.app`
  - Local: `http://localhost:3000`

#### Important Notes:
- **Security**: `PAYU_MERCHANT_KEY` and `PAYU_MERCHANT_SALT` are server-side only and never exposed to the client
- **Test Mode**: Use `https://test.payu.in` for testing with PayU test credentials
- **Production**: Use `https://secure.payu.in` for live payments
- **Client-Side Access**: Only `NEXT_PUBLIC_BASE_URL` is accessible on the client side (prefixed with `NEXT_PUBLIC_`)

#### PayU Setup:
1. Sign up for a PayU merchant account at [PayU India](https://www.payu.in/)
2. Get your Merchant Key and Salt from the PayU dashboard
3. Configure the environment variables in Vercel (for production) and `.env.local` (for local development)
4. Test payments using PayU test mode before going live

## Sanity CMS Environment Variables

The application also uses Sanity CMS for content management. These variables are required:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-20
```

Add these to Vercel as well if not already configured.

## Testing Email Configuration

After setting up environment variables, test the email functionality:

1. Submit a contact form on your website (https://habilite-6qce.vercel.app/contact)
2. Check that emails are received at the address specified in `RESEND_TO_EMAIL`
3. Check Vercel function logs for any errors:
   - Go to Vercel dashboard → Your Project → **Functions** tab
   - Look for `/api/send-email` function logs

## Troubleshooting

### Email Not Sending (500 Error)

**Most Common Issue**: Missing `RESEND_API_KEY` in Vercel

1. **Verify environment variables are set correctly**
   - Go to Vercel dashboard → Settings → Environment Variables
   - Ensure all 3 Resend variables are present:
     - `RESEND_API_KEY`
     - `RESEND_FROM_EMAIL`
     - `RESEND_TO_EMAIL`
   - Make sure they're added to **Production**, **Preview**, and **Development** environments

2. **Check Resend API Key**
   - Verify the API key is correct (starts with `re_`)
   - Ensure the key is active in [Resend Dashboard](https://resend.com/api-keys)
   - Create a new key if needed

3. **Verify Domain in Resend**
   - Go to [Resend Domains](https://resend.com/domains)
   - Ensure your domain (e.g., `habiliteclinics.com`) is verified
   - The domain in `RESEND_FROM_EMAIL` must match a verified domain
   - If not verified, add the DNS records provided by Resend

4. **Check Vercel function logs**
   - Go to Vercel dashboard → Your Project → **Functions** tab
   - Click on `/api/send-email` function
   - Look for error messages in the logs
   - Common errors:
     - `RESEND_API_KEY is not configured` → Add the API key to Vercel
     - `Email domain not verified` → Verify domain in Resend dashboard
     - `Invalid API key` → Check your API key is correct

5. **Redeploy After Adding Variables**
   - After adding environment variables, you MUST redeploy
   - Go to **Deployments** → Click three dots → **Redeploy**

### Rate Limiting Issues

If you see "Too many requests" errors:
- Resend free tier: 3,000 emails/month
- The API limits to 3 submissions per hour per IP address
- Wait for the rate limit window to reset (1 hour)
- For production, consider upgrading Resend plan or using Vercel KV for better rate limiting

### Common Error Messages

- **"Email service is not configured"** → `RESEND_API_KEY` is missing in Vercel
- **"Email domain not verified"** → Verify your domain in Resend dashboard
- **"Invalid sender email address"** → Check `RESEND_FROM_EMAIL` format and domain verification
- **"Invalid API key"** → Verify your `RESEND_API_KEY` is correct

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


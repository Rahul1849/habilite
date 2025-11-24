# Consultation API Deployment Guide

## ✅ Implementation Complete

The secure consultation form API has been successfully implemented and is ready for deployment.

## 📁 Files Created

### API Route
- **`app/api/consultation/route.ts`** - Main API endpoint with:
  - POST method handler
  - Input validation and sanitization
  - Rate limiting (3 requests/hour per IP)
  - Nodemailer integration with Rackspace SMTP
  - WhatsApp placeholder (Phase 2)
  - Security best practices

### Frontend Integration
- **`lib/api/consultation.ts`** - TypeScript API client function
- **`lib/utils/toast.ts`** - Toast notification utility
- **`components/ui/Toast.tsx`** - Toast UI component
- **`components/forms/ConsultationForm.tsx`** - Updated form with API integration

### Documentation
- **`ENV_VARIABLES.md`** - Environment variables setup guide
- **`DEPLOYMENT_GUIDE.md`** - This file

## 🔧 Installation Steps

### 1. Install Dependencies

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Or if using yarn:

```bash
yarn add nodemailer
yarn add -D @types/nodemailer
```

### 2. Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `EMAIL_HOST` | `secure.emailsrvr.com` | Production, Preview, Development |
| `EMAIL_PORT` | `587` | Production, Preview, Development |
| `EMAIL_USER` | `contact@habiliteclinics.com` | Production, Preview, Development |
| `EMAIL_PASS` | `[your-rackspace-password]` | Production, Preview, Development |

4. Click **Save** for each variable

### 3. Deploy to Vercel

```bash
# Push to your repository
git add .
git commit -m "Add secure consultation API with email integration"
git push

# Vercel will automatically deploy
```

Or manually trigger deployment from Vercel dashboard.

## 🧪 Testing

### Test the API Endpoint

1. **Submit a consultation form** on your website
2. **Check email** at `contact@habiliteclinics.com`
3. **Verify rate limiting** by submitting 4 requests quickly (4th should be blocked)
4. **Check Vercel logs** for any errors:
   - Vercel Dashboard → Your Project → Functions → `/api/consultation`

### Test Rate Limiting

```bash
# Using curl (replace with your domain)
curl -X POST https://your-domain.vercel.app/api/consultation \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","phone":"9876543210","message":"Test message"}'

# Submit 4 times quickly - 4th should return 429 status
```

## 🔒 Security Features Implemented

✅ **Input Validation**
- Name: 2-100 characters, letters/spaces/hyphens only
- Phone: 10-15 digits
- Message: 10-2000 characters

✅ **Input Sanitization**
- HTML escaping to prevent XSS
- Null byte removal
- String trimming

✅ **Rate Limiting**
- 3 requests per hour per IP address
- In-memory storage (upgrade to Vercel KV for production scale)

✅ **Error Handling**
- No sensitive information exposed to client
- Server-side error logging only
- Graceful error messages

✅ **Method Restrictions**
- Only POST allowed
- GET, PUT, DELETE, PATCH return 405

✅ **Environment Variables**
- All credentials in environment variables
- Never exposed to client-side code

## 📧 Email Configuration

The API sends HTML emails to `contact@habiliteclinics.com` with:
- Professional HTML template
- Formatted consultation details
- Plain text fallback

**SMTP Settings:**
- Host: `secure.emailsrvr.com`
- Port: `587`
- Security: TLS (not SSL)
- Authentication: Username/Password from env vars

## 🚀 Next Steps (Phase 2)

### WhatsApp Integration Placeholder

The API includes a placeholder function `sendWhatsAppNotification()` that:
- Currently logs to console
- Does not block email sending if it fails
- Ready for WhatsApp Cloud API integration

When implementing WhatsApp:
1. Add WhatsApp environment variables
2. Implement the `sendWhatsAppNotification()` function
3. Test WhatsApp message delivery

## 📊 Monitoring

### Vercel Function Logs

Monitor API performance and errors:
1. Vercel Dashboard → Your Project
2. Functions tab
3. Click on `/api/consultation`
4. View logs, invocations, and errors

### Key Metrics to Monitor

- **Success Rate**: Should be > 95%
- **Response Time**: Should be < 2 seconds
- **Rate Limit Hits**: Monitor for abuse
- **Email Delivery**: Check email inbox regularly

## 🐛 Troubleshooting

### Email Not Sending

1. **Check environment variables** are set correctly in Vercel
2. **Verify Rackspace credentials** are correct
3. **Check Vercel function logs** for SMTP errors
4. **Test SMTP connection** from Rackspace dashboard

### Rate Limiting Too Strict

- Current: 3 requests/hour per IP
- To adjust: Modify `MAX_REQUESTS_PER_HOUR` in `app/api/consultation/route.ts`
- For production scale: Consider Vercel KV for distributed rate limiting

### Build Errors

- Ensure `nodemailer` and `@types/nodemailer` are installed
- Check TypeScript compilation: `npm run build`
- Verify all imports are correct

## ✅ Deployment Checklist

- [x] API route created at `/app/api/consultation/route.ts`
- [x] Input validation and sanitization implemented
- [x] Rate limiting configured (3/hour per IP)
- [x] Nodemailer configured with Rackspace SMTP
- [x] Environment variables documented
- [x] Frontend API client created
- [x] Toast notifications integrated
- [x] ConsultationForm updated to use API
- [x] Security best practices implemented
- [x] Error handling and logging configured
- [ ] Environment variables set in Vercel
- [ ] Dependencies installed (`npm install`)
- [ ] Tested in production environment

## 🎉 Status: Ready for Deployment

The consultation API is fully implemented and ready for production deployment. Follow the steps above to deploy and test.

**Important**: Don't forget to set the environment variables in Vercel before deploying!


# Sanity Webhook Setup Guide

## Problem
Changes made in Sanity Studio are not reflecting on the website because Next.js is caching pages.

## Solution
We've created a webhook endpoint that automatically revalidates pages when content is published in Sanity.

## Setup Instructions

### 1. Get Your Webhook URL
Your webhook endpoint is:
```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET
```

### 2. Set Environment Variable
Add this to your Vercel environment variables:
- **Variable Name:** `SANITY_REVALIDATE_SECRET`
- **Value:** Generate a strong random string (e.g., use `openssl rand -base64 32`)

### 3. Configure Webhook in Sanity Studio

1. Go to your Sanity project: https://www.sanity.io/manage
2. Navigate to **API** → **Webhooks**
3. Click **Create Webhook**
4. Configure:
   - **Name:** `Next.js Revalidation`
   - **URL:** `https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET`
     (Replace `YOUR_SECRET` with the value from step 2)
   - **Dataset:** `production` (or your dataset name)
   - **Trigger on:** Select:
     - ✅ Create
     - ✅ Update
     - ✅ Delete
   - **Filter:** Leave empty (or use: `_type == "home" || _type == "service" || _type == "blog" || _type == "post" || _type == "testimonial" || _type == "faq" || _type == "doctor" || _type == "aboutPage"`)
   - **HTTP method:** `POST`
   - **API version:** `v2021-06-07` or later
   - **Secret:** Leave empty (we're using query param instead)
   - **Projection:** Leave empty
   - **Description:** `Revalidates Next.js pages when Sanity content changes`

5. Click **Save**

### 4. Test the Webhook

1. Make a change in Sanity Studio (e.g., update the homepage banner title)
2. Publish the change
3. Check Vercel logs to see if the webhook was called:
   - Go to Vercel Dashboard → Your Project → Deployments → Functions → `api/revalidate`
   - Look for logs showing "Revalidated homepage"
4. Visit your website - changes should appear immediately

### 5. Manual Revalidation (Optional)

If you need to manually revalidate, you can call:
```bash
curl -X POST "https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"_type": "home", "_id": "your-document-id"}'
```

Or visit in browser:
```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET
```

## How It Works

1. When you publish content in Sanity, Sanity sends a POST request to `/api/revalidate`
2. The endpoint verifies the secret
3. Based on the document type (`_type`), it revalidates the appropriate pages:
   - `homePage` → Revalidates homepage (`/`)
   - `service` → Revalidates service pages and homepage
   - `blog` → Revalidates blog pages
   - `testimonial` → Revalidates homepage and testimonials page
   - `faq` → Revalidates homepage and about pages
   - `doctor` → Revalidates about pages
4. Next.js regenerates the pages with fresh data from Sanity

## Troubleshooting

### Changes still not showing?
1. Check Vercel logs to see if webhook is being called
2. Verify `SANITY_REVALIDATE_SECRET` is set correctly in Vercel
3. Check Sanity webhook logs (Sanity Dashboard → API → Webhooks → Your webhook → View logs)
4. Ensure `useCdn: false` in `lib/sanity/client.ts` (already configured)
5. Try manually calling the webhook endpoint

### Webhook not being called?
1. Verify webhook is enabled in Sanity
2. Check webhook URL is correct
3. Ensure secret matches in both places
4. Check Sanity webhook logs for errors

### Still seeing old content?
1. Clear browser cache
2. Check if page has `export const revalidate = 0` (homepage already has this)
3. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check Vercel deployment logs

## Current Revalidation Settings

- **Homepage (`app/page.tsx`):** `revalidate = 0` (always fresh)
- **Blog posts:** `revalidate = 60` (1 minute)
- **Other pages:** Use webhook for on-demand revalidation

## Security Note

The webhook uses a secret query parameter for authentication. Make sure:
- The secret is strong and random
- Never commit the secret to git
- Only share the secret with trusted team members


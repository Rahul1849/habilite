# Fix: Blog Title Not Updating on Individual Page

## Problem
- ✅ Listing page (`/post`) shows updated title
- ❌ Individual page (`/post/anal-fistula-surgery-cost-in-delhi`) shows old title

## Root Cause
The webhook revalidates the listing page but the individual blog post page isn't being revalidated properly.

## Solution 1: Manual Revalidation (Immediate Fix)

Visit this URL in your browser:
```
https://habilite-6qce.vercel.app/api/revalidate?secret=habilite_revalidate_9382lsPq&path=/post/anal-fistula-surgery-cost-in-delhi
```

**Steps:**
1. Make your change in Sanity Studio
2. Publish the change
3. Visit the revalidation URL above
4. Wait 2-3 seconds
5. Visit your blog post page
6. Hard refresh (Ctrl+Shift+R)

## Solution 2: Verify Webhook Projection

1. Go to: https://www.sanity.io/manage → Your Project → API → Webhooks
2. Click "Next.js Blog Revalidation"
3. Check **Projection** field - it MUST be:
   ```json
   {
     "_id": _id,
     "_type": _type,
     "slug": slug
   }
   ```
4. If missing or incorrect, update and save

## Solution 3: Check Vercel Deployment

The updated revalidation code needs to be deployed:

1. **Commit and push** the changes to your repository
2. **Wait for Vercel to deploy** (check Vercel Dashboard)
3. **Test again** after deployment

## Solution 4: Verify Webhook is Working

After making a change and publishing:

1. Go to **Vercel Dashboard** → Your Project → Deployments → Latest
2. Click **Functions** → `api/revalidate`
3. Look for logs:
   - `✅ Revalidated blog post by ID: /post/anal-fistula-surgery-cost-in-delhi`
   - OR `⚠️ Could not extract slug`

If you see the warning, the webhook projection is missing the slug.

## Solution 5: Check Browser Console

On the blog post page, open browser console (F12) and look for:
- `✅ Sanity post found:` - Check if `title` matches your updated title
- If it shows old title, the page is fetching cached data

## What the Code Does Now

The updated revalidation code:
1. ✅ Always revalidates listing page (`/post`)
2. ✅ Tries to extract slug from webhook payload
3. ✅ **Always fetches blog post by document ID and revalidates it** (even if slug extraction fails)
4. ✅ Falls back to revalidating all blog posts if needed

This ensures the individual blog post page gets revalidated.

## Next Steps

1. **Deploy the updated code** to Vercel
2. **Verify webhook projection** includes slug
3. **Test by making a change** and checking Vercel logs
4. **Use manual revalidation** as temporary solution until webhook works


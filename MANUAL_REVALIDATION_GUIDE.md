# Manual Revalidation Guide

## Quick Fix: Manually Revalidate Blog Posts

If changes from Sanity Studio aren't showing on your blog pages, you can manually trigger revalidation:

### Option 1: Revalidate Specific Blog Post (Recommended)

Visit this URL in your browser (replace `YOUR_SECRET` and `your-slug`):

```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/post/anal-fistula-surgery-cost-in-delhi
```

**Example:**
```
https://habilite-6qce.vercel.app/api/revalidate?secret=abc123&path=/post/anal-fistula-surgery-cost-in-delhi
```

### Option 2: Revalidate All Blog Pages

```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&type=blog
```

### Option 3: Revalidate Homepage

```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&type=home
```

## How to Get Your Secret

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Find `SANITY_REVALIDATE_SECRET`
3. Copy the value

## Steps to Fix Blog Post Not Updating

1. **Make your change in Sanity Studio** (e.g., change title from "Delhi" to "Mumbai")
2. **Publish the change** in Sanity Studio
3. **Manually revalidate** by visiting:
   ```
   https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/post/anal-fistula-surgery-cost-in-delhi
   ```
4. **Visit your blog post** - changes should now appear
5. **Hard refresh** if needed (Ctrl+Shift+R)

## Permanent Solution: Set Up Webhook

For automatic revalidation (no manual steps needed):

1. **Set up webhook in Sanity Studio** (see `SANITY_WEBHOOK_SETUP.md`)
2. **Every time you publish** in Sanity, the page will automatically revalidate
3. **No manual steps needed** - changes appear immediately

## Troubleshooting

### Still not working?

1. **Check Vercel logs:**
   - Go to Vercel Dashboard → Your Project → Deployments → Functions → `api/revalidate`
   - Look for errors or success messages

2. **Verify secret is correct:**
   - Make sure `SANITY_REVALIDATE_SECRET` matches in both places

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. **Check if page is deployed:**
   - Make sure latest code is deployed to Vercel

5. **Try revalidating category page too:**
   ```
   https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/post/category/laser-surgery
   ```

## Common Blog Post Slugs

If you need to revalidate other blog posts, use these patterns:

- `/post/anal-fistula-surgery-cost-in-delhi`
- `/post/anal-fistula-surgery-cost-in-mumbai`
- `/post/best-way-to-cure-piles-in-3-days`
- `/post/botox-injection-for-anal-fissure`

Just replace the slug in the URL above.


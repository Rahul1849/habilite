# Debug: Blog Post Title Not Updating

## Quick Test Steps

### Step 1: Manual Revalidation Test
Visit this URL in your browser:
```
https://habilite-6qce.vercel.app/api/revalidate?secret=habilite_revalidate_9382lsPq&path=/post/anal-fistula-surgery-cost-in-delhi
```

**Expected Response:**
```json
{
  "revalidated": true,
  "path": "/post/anal-fistula-surgery-cost-in-delhi",
  "now": 1234567890
}
```

**After visiting:**
1. Wait 2-3 seconds
2. Visit: https://habilite-6qce.vercel.app/post/anal-fistula-surgery-cost-in-delhi
3. Hard refresh (Ctrl+Shift+R)
4. Check if title updated

### Step 2: Check Webhook Projection

1. Go to: https://www.sanity.io/manage → Your Project → API → Webhooks
2. Click "Next.js Blog Revalidation"
3. Check the **Projection** field - it MUST contain:
   ```json
   {
     "_id": _id,
     "_type": _type,
     "slug": slug
   }
   ```
4. If it's empty or missing `slug`, update it and save

### Step 3: Test Webhook Trigger

1. Make a small change in Sanity Studio (e.g., add a space to the title)
2. **Publish** the change
3. Go to Vercel Dashboard → Your Project → Deployments → Latest → Functions → `api/revalidate`
4. Check logs for:
   - `Revalidating for Sanity document: blog (...)`
   - `✅ Revalidated blog post: /post/anal-fistula-surgery-cost-in-delhi`
   - OR `⚠️ Could not extract slug from webhook payload`

### Step 4: Check Sanity Data

1. Open browser console on the blog post page
2. Look for: `✅ Sanity post found:` log
3. Check if the `title` in the log matches your updated title
4. If it shows old title, Sanity query is returning cached data

### Step 5: Verify Slug Match

In browser console, check:
- `requestedSlug: "anal-fistula-surgery-cost-in-delhi"`
- `slug: "anal-fistula-surgery-cost-in-delhi"` (from Sanity)
- `slugMatch: true`

If `slugMatch: false`, the slug in Sanity doesn't match the URL.

## Common Issues & Fixes

### Issue 1: Webhook Projection Missing Slug
**Symptom:** Vercel logs show `⚠️ Could not extract slug from webhook payload`

**Fix:** Add projection to webhook (see Step 2)

### Issue 2: Webhook Not Being Called
**Symptom:** No logs in Vercel when publishing

**Fix:**
1. Check webhook is enabled in Sanity
2. Verify webhook URL is correct
3. Check webhook delivery logs in Sanity Dashboard

### Issue 3: Page Still Shows Old Data
**Symptom:** Manual revalidation works but webhook doesn't

**Fix:**
1. Update webhook projection (Step 2)
2. Test webhook trigger (Step 3)
3. If still not working, use manual revalidation as temporary solution

### Issue 4: Slug Mismatch
**Symptom:** Console shows `slugMatch: false`

**Fix:**
1. Check slug in Sanity Studio
2. Update slug to match URL OR visit correct URL

## Next Steps

If manual revalidation works but webhook doesn't:
1. ✅ Webhook projection needs to be fixed (most likely)
2. ✅ Verify webhook is enabled and URL is correct
3. ✅ Check Vercel logs for webhook calls

If manual revalidation doesn't work:
1. Check Vercel deployment - ensure latest code is deployed
2. Clear browser cache completely
3. Try incognito/private window
4. Check if Sanity data actually changed (view in Sanity Studio)



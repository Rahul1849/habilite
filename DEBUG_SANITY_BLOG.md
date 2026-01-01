# Debug Guide: Why Blog Changes Aren't Showing

## Quick Diagnostic Steps

### Step 1: Check if Sanity Post is Being Found

1. **Visit your blog post URL** (e.g., `https://habilite-6qce.vercel.app/post/anal-fistula-surgery-cost-in-delhi`)
2. **Open browser DevTools** (F12)
3. **Check the Console tab** - Look for these log messages:
   - `✅ Sanity post found:` - Means Sanity data is being fetched
   - `⚠️ No Sanity post found for slug:` - Means it's using static `data/blog.ts`

### Step 2: Verify Slug Match

The slug in the URL must **exactly match** the slug in Sanity Studio:

- **URL:** `/post/anal-fistula-surgery-cost-in-delhi`
- **Sanity Slug:** Must be `anal-fistula-surgery-cost-in-delhi` (check in Sanity Studio)

**Common Issues:**
- Slug in URL: `anal-fistula-surgery-cost-in-delhi`
- Slug in Sanity: `anal-fistula-surgery-cost-in-mumbai` ❌ (mismatch!)
- Slug in Sanity: `anal-fistula-surgery-cost-in-delhi` ✅ (match!)

### Step 3: Check Sanity Studio

1. Go to **Sanity Studio**
2. Find your blog post: "Anal Fistula Surgery Cost in Mumbai"
3. Check the **Slug field** - what is the current value?
4. **If slug doesn't match URL**, either:
   - Update the slug in Sanity to match the URL, OR
   - Update the URL to match the slug

### Step 4: Verify Data is Published

1. In Sanity Studio, make sure the post is **Published** (not just saved as draft)
2. Check the **Published** indicator in Sanity Studio
3. If it shows "Draft", click **Publish**

### Step 5: Check Vercel Logs

1. Go to **Vercel Dashboard** → Your Project
2. **Deployments** → Latest Deployment → **Functions** → `app/post/[slug]/page`
3. Look for console logs showing:
   - `✅ Sanity post found:` with the title
   - Check if the title matches what you see on the page

---

## Common Issues & Solutions

### Issue 1: Slug Mismatch

**Symptom:** Category page shows updated title, but individual blog page shows old title

**Cause:** The slug in the URL doesn't match the slug in Sanity

**Solution:**
1. Check the slug in Sanity Studio for that blog post
2. If it's different, either:
   - Update Sanity slug to match URL, OR
   - Visit the correct URL with the Sanity slug

### Issue 2: Using Static Data

**Symptom:** Console shows `⚠️ No Sanity post found for slug:`

**Cause:** Sanity post doesn't exist for that slug, so it's using `data/blog.ts`

**Solution:**
1. Verify the blog post exists in Sanity Studio
2. Check the slug field matches the URL
3. Make sure it's published (not draft)

### Issue 3: Caching

**Symptom:** Changes show in category page but not individual page

**Cause:** Page might still be cached despite `force-dynamic`

**Solution:**
1. **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear browser cache** completely
3. **Try incognito/private window**
4. **Manually revalidate:** Visit `/api/revalidate?secret=YOUR_SECRET&path=/post/your-slug`

### Issue 4: Body Field Missing

**Symptom:** Post exists in Sanity but page uses static data

**Cause:** Old code was checking for `body` field (now fixed)

**Solution:** The code is now fixed to use Sanity data even without body. Redeploy if you haven't already.

---

## Testing Checklist

- [ ] Blog post exists in Sanity Studio
- [ ] Slug in Sanity matches URL slug exactly
- [ ] Post is **Published** (not draft)
- [ ] Console shows `✅ Sanity post found:`
- [ ] Title in console matches what you changed
- [ ] Hard refreshed the page (Ctrl+Shift+R)
- [ ] Tried incognito/private window
- [ ] Manually revalidated the page
- [ ] Checked Vercel logs for errors

---

## Quick Fix: Manual Revalidation

If nothing else works, manually revalidate:

```
https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/post/anal-fistula-surgery-cost-in-delhi
```

Replace:
- `YOUR_SECRET` with your actual secret from Vercel
- `anal-fistula-surgery-cost-in-delhi` with your actual blog slug

---

## Still Not Working?

1. **Check the exact slug** in Sanity Studio for that blog post
2. **Verify the URL** you're visiting matches that slug
3. **Check browser console** for the log message
4. **Share the console logs** so we can see what's happening


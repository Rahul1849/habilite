# 🔍 Troubleshooting: Blog Changes Not Showing

## Most Common Issue: Slug Mismatch

**The problem:** When you change the title in Sanity Studio, the **slug doesn't change automatically**. So:

- **Old URL:** `/post/anal-fistula-surgery-cost-in-delhi` (slug: `anal-fistula-surgery-cost-in-delhi`)
- **New Title:** "Anal Fistula Surgery Cost in Mumbai"
- **Slug in Sanity:** Still `anal-fistula-surgery-cost-in-delhi` (unchanged)
- **Result:** Page shows old title because it's using the old slug

### Solution 1: Update the Slug in Sanity

1. Go to **Sanity Studio**
2. Open your blog post
3. Find the **Slug** field
4. Click **Generate** or manually change it to match the new title
5. **Publish** the changes
6. Visit the **new URL** with the updated slug

### Solution 2: Check What Slug Sanity Has

1. In Sanity Studio, check the **Slug** field for your blog post
2. Visit the URL that matches that slug
3. Changes should appear

---

## Quick Diagnostic Steps

### Step 1: Check Browser Console

1. Visit your blog post URL
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Look for: `✅ Sanity post found:` or `⚠️ No Sanity post found for slug:`

**What it means:**
- `✅ Sanity post found:` = Using Sanity data (good!)
- `⚠️ No Sanity post found` = Using static `data/blog.ts` (problem!)

### Step 2: Verify Slug Match

**In Sanity Studio:**
- Open your blog post
- Check the **Slug** field value

**In URL:**
- Check the slug part: `/post/YOUR-SLUG-HERE`

**They must match exactly!**

### Step 3: Check if Published

- In Sanity Studio, make sure the post shows **Published** (green indicator)
- If it shows **Draft**, click **Publish**

---

## Why Category Page Works But Individual Page Doesn't

**Category page** (`/post/category/laser-surgery`):
- Fetches ALL blogs from Sanity
- Shows the updated title because it's fetching fresh data

**Individual page** (`/post/anal-fistula-surgery-cost-in-delhi`):
- Fetches ONE blog by slug
- If slug doesn't match, it falls back to static `data/blog.ts`
- Shows old title from static file

**The fix:** Make sure the slug in the URL matches the slug in Sanity Studio!

---

## Manual Test

1. **Get the exact slug from Sanity Studio:**
   - Open the blog post in Sanity
   - Copy the slug value

2. **Visit the URL with that exact slug:**
   ```
   https://habilite-6qce.vercel.app/post/[EXACT-SLUG-FROM-SANITY]
   ```

3. **Changes should appear!**

---

## Still Not Working?

1. **Check Vercel logs** for the console messages
2. **Share the console output** from browser DevTools
3. **Verify the slug** in Sanity matches the URL
4. **Try manual revalidation:**
   ```
   https://habilite-6qce.vercel.app/api/revalidate?secret=YOUR_SECRET&path=/post/YOUR-EXACT-SLUG
   ```


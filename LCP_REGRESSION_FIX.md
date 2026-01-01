# LCP Regression Fix - Homepage
## Issue: Performance dropped to 89, LCP increased to 3.9s

**Problem:** Recent optimizations caused performance regression  
**Root Cause:** Over-optimization with blocking resources and too many preloads

---

## 🔴 Issues Identified & Fixed

### 1. **Sync Decoding Blocking Main Thread**
**Problem:** `decoding="sync"` was blocking the main thread, delaying other resources

**Fix Applied:**
- ✅ Reverted to `decoding="async"` (non-blocking)
- ✅ Kept `priority` and `fetchPriority="high"` for LCP image

**Impact:** Prevents main thread blocking

---

### 2. **Too Many Preload Links**
**Problem:** Preloading 4 different images was competing for bandwidth

**Fix Applied:**
- ✅ Removed preloads for non-homepage images
- ✅ Kept ONLY `/images/dr.webp` preload (homepage LCP element)
- ✅ Other pages will preload their own images when needed

**Impact:** Reduces bandwidth competition, faster LCP image loading

---

### 3. **Redundant Preconnect**
**Problem:** Preconnecting to same domain (Vercel) is redundant and adds overhead

**Fix Applied:**
- ✅ Removed redundant `preconnect` to Vercel domain
- ✅ Kept DNS prefetch for fonts (non-blocking)

**Impact:** Reduces unnecessary network overhead

---

### 4. **Bloated Critical CSS**
**Problem:** Too much CSS inlined was increasing HTML size and parse time

**Fix Applied:**
- ✅ Removed non-essential hero image styles from critical CSS
- ✅ Kept only essential above-the-fold styles
- ✅ Let Tailwind handle image container styles

**Impact:** Faster HTML parsing, smaller initial payload

---

### 5. **Data Fetching Strategy**
**Problem:** Parallel fetching of all data might cause blocking

**Fix Applied:**
- ✅ Reverted to sequential: hero data first, then parallel for rest
- ✅ Hero uses static image, so Sanity data doesn't block LCP

**Impact:** Ensures hero renders first, then other content loads

---

## 📊 Expected Results

### Before (Regression):
- **Performance:** 89 ⚠️
- **LCP:** 3.9s ⚠️

### After (Target):
- **Performance:** 90+ ✅
- **LCP:** < 2.4s ✅

---

## 📝 Files Modified

1. **components/home/Hero.tsx**
   - Reverted `decoding="async"` (was sync)
   - Quality set to 85 (balanced)
   - Kept static image path

2. **app/layout.tsx**
   - Removed extra preload links (only homepage)
   - Removed redundant preconnect
   - Reduced critical CSS size

3. **app/page.tsx**
   - Reverted to sequential data fetching (hero first)

4. **next.config.js**
   - Removed unnecessary image config options

---

## ✅ Key Principles Applied

1. **Less is More:** Fewer preloads = faster LCP image
2. **Non-Blocking:** Async decoding doesn't block main thread
3. **Minimal Critical CSS:** Only essential above-the-fold styles
4. **Sequential Priority:** Hero data first, then parallel for rest

---

## 🚀 Next Steps

1. **Deploy and Test:**
   - Run Lighthouse (Mobile, Slow 4G, Moto G Power)
   - Verify Performance > 90
   - Verify LCP < 2.4s

2. **If Still Issues:**
   - Check `/images/dr.webp` file size (should be < 50KB)
   - Verify image is served as AVIF/WebP
   - Check network waterfall in DevTools
   - Consider image CDN if static file is slow

3. **Monitor:**
   - Core Web Vitals in production
   - Real User Monitoring (RUM)
   - Performance metrics over time

---

## 🎯 Summary

**Key Fix:** Removed over-optimizations that were causing blocking:
- ✅ Async decoding (non-blocking)
- ✅ Single preload (homepage only)
- ✅ Minimal critical CSS
- ✅ Sequential data fetching

These changes should restore performance to 90+ and LCP to < 2.4s.


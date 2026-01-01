# Critical LCP Fixes - Homepage
## Target: Reduce LCP from 3.6s to < 2.4s

**Issue:** LCP is still 3.6s after initial optimizations  
**Root Cause Analysis:** Multiple factors delaying LCP image discovery and loading

---

## 🔴 Critical Issues Identified

### 1. **Sanity Image Loading Delay**
**Problem:** Hero component was using `getImageUrl(bannerImage)` which could load from Sanity CDN, causing:
- Network latency to external CDN
- Image URL mismatch with preload link
- Potential image optimization delay

**Fix Applied:**
- ✅ Changed Hero component to **always use static `/images/dr.webp`**
- ✅ Removed dependency on Sanity image for LCP element
- ✅ Ensures preload link matches actual image URL

**Expected Impact:** ~500-800ms reduction

---

### 2. **Image Decoding Strategy**
**Problem:** `decoding="async"` can delay image rendering

**Fix Applied:**
- ✅ Changed to `decoding="sync"` for LCP image
- ✅ Removed placeholder blur (can delay rendering)
- ✅ Reduced quality from 90 to 80 (faster loading, minimal visual impact)

**Expected Impact:** ~200-300ms reduction

---

### 3. **Critical CSS Enhancement**
**Problem:** Hero image container styles not fully inlined

**Fix Applied:**
- ✅ Added hero image specific styles to critical CSS:
  - `.w-40`, `.sm:w-48`, `.lg:w-80`, `.xl:w-96` (dimensions)
  - `.rounded-full` (border-radius)
- ✅ Ensures image container renders immediately

**Expected Impact:** ~100-200ms reduction

---

### 4. **Resource Hints Optimization**
**Problem:** Missing preconnect for image domain

**Fix Applied:**
- ✅ Added `preconnect` to Vercel domain for faster image loading
- ✅ Preload link already exists and matches image URL

**Expected Impact:** ~50-100ms reduction

---

### 5. **Data Fetching Optimization**
**Problem:** Sanity data fetching could delay initial render

**Fix Applied:**
- ✅ Changed to parallel fetching (all data fetched together)
- ✅ Hero component no longer depends on Sanity data for image
- ✅ Static image ensures no blocking

**Expected Impact:** ~100-200ms reduction

---

## 📊 Expected Results

### Before:
- **LCP:** 3.6s

### After (Target):
- **LCP:** < 2.4s
- **Total Reduction:** ~950-1600ms

---

## 📝 Files Modified

1. **components/home/Hero.tsx**
   - Changed to always use static `/images/dr.webp`
   - Changed `decoding="sync"`
   - Reduced quality to 80
   - Removed placeholder blur
   - Added `willChange: 'auto'`

2. **app/layout.tsx**
   - Added preconnect to Vercel domain
   - Enhanced critical CSS with hero image styles

3. **app/page.tsx**
   - Optimized data fetching to parallel

4. **next.config.js**
   - Added image optimization comments

---

## ⚠️ Important Notes

1. **Static Image Priority:** The hero now always uses `/images/dr.webp` instead of Sanity images. This ensures:
   - Fastest possible loading
   - Preload link matches actual URL
   - No external CDN latency

2. **Image Quality:** Reduced from 90 to 80 for faster loading. Visual quality should still be excellent for a 160-384px image.

3. **Decoding Strategy:** `decoding="sync"` ensures the image blocks rendering until loaded, which is correct for LCP elements.

---

## 🚀 Next Steps

1. **Deploy and Test:**
   - Run Lighthouse (Mobile, Slow 4G, Moto G Power)
   - Verify LCP < 2.4s
   - Check that image loads correctly

2. **If LCP Still > 2.4s:**
   - Verify `/images/dr.webp` file size (should be < 50KB)
   - Check if image is being served as AVIF/WebP
   - Consider using a smaller image for mobile
   - Check network waterfall in DevTools

3. **Monitor:**
   - Core Web Vitals in production
   - Real User Monitoring (RUM) data
   - Image loading performance

---

## ✅ Verification Checklist

- [ ] LCP < 2.4s on mobile (Lighthouse)
- [ ] Hero image loads from `/images/dr.webp`
- [ ] Preload link matches image URL
- [ ] Image served as AVIF/WebP format
- [ ] No console errors
- [ ] Image displays correctly
- [ ] No layout shifts (CLS = 0)

---

## 🎯 Summary

**Critical Fix:** Changed hero image from dynamic Sanity URL to static `/images/dr.webp`

This single change should provide the largest LCP improvement (~500-800ms) by:
- Eliminating external CDN latency
- Ensuring preload link matches
- Using optimized static asset

Combined with other optimizations, LCP should drop from 3.6s to < 2.4s.


# Banner Image Dimensions Guide

## Recommended Dimensions for Hero/Banner Images

For banner images like `bariatric-surgeon-delhi-india.webp`, use the following specifications:

### ✅ **Optimal Dimensions: 1200px × 375px (3.2:1 aspect ratio)**

**Why this works best:**
- **Optimized for performance**: Smaller file size, faster loading (~100-150KB)
- **Perfect for container width**: Matches `container-custom` max-width (1280px with padding)
- **Not too tall**: Better spacing, less scrolling
- **Not full width**: Constrained to container, doesn't span entire page
- **Responsive**: Works perfectly with responsive aspect ratios

### 📐 **Aspect Ratios Used in Code (Updated):**
- **Mobile**: 21:9 (2.33:1) - `aspect-[21/9]`
- **Small screens**: 21:8 (2.625:1) - `sm:aspect-[21/8]`
- **Medium screens**: 21:7 (3:1) - `md:aspect-[21/7]`
- **Large screens**: 21:6 (3.5:1) - `lg:aspect-[21/6]` ⬅️ Less tall, better spacing

### 🎯 **Safe Area Guidelines:**

Since images use `object-cover` and are constrained to container width, important content should be placed in the **center safe area**:

- **Safe area width**: Full width (1200px)
- **Safe area height**: 320px (center portion)
- **Avoid placing important text/elements** in the top 27px and bottom 27px

### 📏 **Alternative Dimensions (If you need larger):**

1. **1600px × 500px (3.2:1)**
   - ✅ Good for high-DPI displays
   - ✅ Still optimized file size
   - ✅ Works well on all devices

2. **1920px × 600px (3.2:1)**
   - ✅ Maximum quality for large displays
   - ⚠️ Larger file size (optimize well)
   - ✅ Perfect for retina displays

3. **1024px × 320px (3.2:1)**
   - ✅ Smallest file size
   - ✅ Good for mobile-first approach
   - ⚠️ May look pixelated on large screens

### 🎨 **Design Tips:**

1. **Content Placement:**
   - Place main subject/text in the **center horizontal band** (640px height)
   - Avoid important elements in top/bottom 20% of image

2. **File Format:**
   - Use **WebP** format for best performance
   - Keep file size under **300KB** (optimize with tools like TinyPNG)

3. **Quality:**
   - Export at **90-95% quality** for web
   - Use **sRGB color space**

4. **Responsive Considerations:**
   - Image will be cropped differently on different screen sizes
   - Test on mobile, tablet, and desktop views
   - Ensure important content remains visible at all breakpoints

### 📝 **Example Specifications (Optimized):**

```
Image: bariatric-surgeon-delhi-india.webp
Dimensions: 1200px × 375px (RECOMMENDED)
Alternative: 1280px × 400px (for high-DPI)
Aspect Ratio: 3.2:1
File Size: < 150KB (optimized)
Format: WebP
Quality: 85% (optimized for web)
Color Space: sRGB
```

**Note**: Banner images are now constrained to `container-custom` (max-width: 1280px) instead of full viewport width, providing better spacing and preventing images from covering the entire page length.

### ⚡ **Performance Optimizations Applied:**

1. **Optimized `sizes` attribute**: 
   - `(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px`
   - Tells Next.js to load appropriate image sizes for each breakpoint
   - Reduces unnecessary data transfer

2. **Reduced quality**: 
   - Changed from 95% to 85%
   - Minimal visual difference, significant file size reduction

3. **Better aspect ratios**:
   - Changed from 21:7 (3:1) to 21:6 (3.5:1) on large screens
   - Less tall, better spacing, more professional look

### 🔧 **Tools for Optimization:**

- **Image Compression**: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Format Conversion**: Use Next.js Image component (auto-converts to WebP/AVIF)
- **Aspect Ratio Calculator**: [AspectRatioCalculator.com](https://www.aspectratiocalculator.com/)

### ✅ **Checklist:**

- [ ] Image is 1200px wide (or 1280px for high-DPI)
- [ ] Image is 375px tall (or 400px for high-DPI)
- [ ] Important content is in center safe area
- [ ] File size is under 150KB (optimized)
- [ ] Format is WebP (or PNG/JPG that Next.js will convert)
- [ ] Image is optimized for web
- [ ] Image displays within container (not full viewport width)


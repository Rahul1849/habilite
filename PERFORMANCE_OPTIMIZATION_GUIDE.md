# Performance Optimization Guide

## Overview
This document outlines the performance optimizations applied to improve mobile performance scores to 90+ and reduce LCP (Largest Contentful Paint) to below 2 seconds.

## Optimizations Applied

### 1. Dynamic Imports for Below-the-Fold Components
All heavy components are now loaded dynamically with `ssr: false` to reduce initial bundle size and improve TBT (Total Blocking Time).

**Components optimized:**
- `ConsultationForm`
- `CostCalculator`
- `PostOperativeCare`
- `WhatsAppExpertChat`
- `FAQ` components (PilesFAQ, HerniaFAQ, FistulaFAQ, etc.)
- `Testimonials` components
- `RecoveryTimeline`
- `RelatedBlogs`

**Pattern:**
```typescript
const ConsultationForm = dynamic(() => import('@/components/forms/ConsultationForm'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />,
})
```

### 2. LCP Image Optimization
- **Quality**: Increased from 75 to 85 for hero images (LCP elements)
- **Priority**: All hero images use `priority` and `fetchPriority="high"`
- **Sizes**: Proper responsive sizes attribute: `(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px`
- **Loading**: `loading="eager"` and `decoding="sync"` for LCP images
- **Placeholder**: Blur placeholders for better perceived performance

**Pattern:**
```typescript
<Image
  src="/images/hero-image.webp"
  alt="Description"
  fill
  className="object-cover object-center"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
  priority
  fetchPriority="high"
  quality={85}
  loading="eager"
  decoding="sync"
  placeholder="blur"
  blurDataURL="..."
/>
```

### 3. Structured Data Optimization
Structured data scripts moved to the bottom of the component to prevent render blocking.

**Before:**
```typescript
return (
  <>
    <StructuredData data={schema} />
    <div>Content</div>
  </>
)
```

**After:**
```typescript
return (
  <>
    <div>Content</div>
    {/* StructuredData moved to bottom to prevent blocking render */}
    <StructuredData data={schema} />
  </>
)
```

### 4. Defer Section Wrapper
Below-the-fold components are wrapped in `defer-section` divs for better code splitting and lazy loading.

**Pattern:**
```typescript
<div className="defer-section">
  <CostCalculator serviceName="Service Name" />
</div>
```

### 5. Next.js Configuration Optimizations
Already in place:
- ✅ Image optimization with WebP/AVIF formats
- ✅ SWC minification
- ✅ Package optimization (`lucide-react`)
- ✅ CSS optimization
- ✅ Server-side minification
- ✅ Console removal in production

## Pages Optimized

### ✅ Completed
1. `app/best-laser-piles-surgeon-in-delhi/page.tsx`
2. `app/best-hernia-surgeon-in-delhi/page.tsx`
3. `app/best-laser-fistula-treatment/page.tsx`

### ⏳ Remaining Pages (12 pages)
Run the optimization script to check status:
```bash
node scripts/optimize-pages.js
```

**Pages to optimize:**
- `app/best-anal-fissure-treatment/page.tsx`
- `app/best-laser-pilonidal-sinus-treatment/page.tsx`
- `app/best-appendix-surgeon-in-delhi/page.tsx`
- `app/best-rectal-prolapse-surgeon-in-delhi/page.tsx`
- `app/best-femoral-hernia-surgeon-in-delhi/page.tsx`
- `app/best-incisional-hernia-surgeon-in-delhi/page.tsx`
- `app/best-inguinal-hernia-surgeon-in-delhi/page.tsx`
- `app/best-hiatus-hernia-surgeon-in-delhi/page.tsx`
- `app/cbd-stone-treatment-in-delhi/page.tsx`
- `app/gallbladder-polyps-treatment-in-delhi/page.tsx`
- `app/lipoma-treatment/page.tsx`

## Quick Optimization Checklist

For each page, apply these changes:

1. **Replace synchronous imports with dynamic imports:**
   ```typescript
   // Before
   import ConsultationForm from '@/components/forms/ConsultationForm'
   
   // After
   import dynamic from 'next/dynamic'
   const ConsultationForm = dynamic(() => import('@/components/forms/ConsultationForm'), {
     ssr: false,
     loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50 rounded-2xl" />,
   })
   ```

2. **Update LCP image quality:**
   ```typescript
   // Change quality from 75 to 85
   quality={85}
   ```

3. **Move structured data to bottom:**
   - Move all `<StructuredData />` and `<script type="application/ld+json">` tags to the end of the return statement

4. **Wrap below-the-fold components:**
   ```typescript
   <div className="defer-section">
     <Component />
   </div>
   ```

5. **Update non-LCP image quality:**
   - Blog images and other non-critical images can use `quality={75}`

## Expected Results

After applying these optimizations:
- **Performance Score**: 90+ on mobile
- **LCP**: < 2 seconds
- **Speed Index**: < 2 seconds
- **TBT**: Reduced significantly
- **FCP**: Improved

## Testing

Test each page using:
1. Google PageSpeed Insights: https://pagespeed.web.dev/
2. Lighthouse (Chrome DevTools)
3. WebPageTest: https://www.webpagetest.org/

## Notes

- All optimizations maintain existing UI and functionality
- No breaking changes to user experience
- Progressive enhancement: content loads even if JavaScript is disabled
- Loading states provide good UX during component loading


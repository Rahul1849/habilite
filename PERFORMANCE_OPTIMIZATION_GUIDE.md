# Website-Wide Performance Optimization Guide
## Target: 90+ scores on all metrics, LCP < 2.5s, FCP < 2.5s

### ✅ Implemented Optimizations

#### 1. Next.js Configuration (`next.config.js`)
- ✅ Enhanced compression and caching
- ✅ Optimized image formats (AVIF, WebP)
- ✅ Package import optimization (lucide-react)
- ✅ Server-side minification
- ✅ Security headers (CSP, COOP, COEP)
- ✅ Cache-Control headers

#### 2. Root Layout (`app/layout.tsx`)
- ✅ Font optimization with `display: 'optional'`
- ✅ Critical CSS inline
- ✅ Dynamic imports for non-critical components
- ✅ Resource hints (preconnect, dns-prefetch)
- ✅ StructuredData moved to bottom

#### 3. Page-Level Optimizations (Applied to gallbladder-surgery page)

**Component Loading:**
```typescript
// Use dynamic imports for heavy components
const ConsultationForm = dynamic(() => import("@/components/forms/ConsultationForm"), {
  ssr: true,
  loading: () => <div className="min-h-[400px] animate-pulse" />,
});
```

**Image Optimization:**
```typescript
// Hero images (LCP candidates)
<Image
  priority
  fetchPriority="high"
  quality={85}
  loading="eager"
  decoding="async"
/>

// Below-fold images
<Image
  loading="lazy"
  decoding="async"
  fetchPriority="low"
  quality={85}
/>
```

**StructuredData:**
- Move all StructuredData components to the bottom of the page (after content)
- Prevents blocking initial render

**YouTube Embeds:**
- Use `loading="lazy"` on iframes
- Add `loading=lazy` to YouTube URL parameters

### 📋 Checklist for All Pages

Apply these optimizations to every page:

#### ✅ Imports
- [ ] Use dynamic imports for heavy components (forms, testimonials, FAQs, blogs)
- [ ] Import only needed icons from lucide-react
- [ ] Use named imports instead of default when possible

#### ✅ Images
- [ ] Hero images: `priority`, `fetchPriority="high"`, `loading="eager"`
- [ ] Below-fold images: `loading="lazy"`, `fetchPriority="low"`
- [ ] All images: proper `sizes` attribute, `quality={85}`, `decoding="async"`
- [ ] Use WebP/AVIF formats (handled by Next.js)

#### ✅ StructuredData
- [ ] Move all StructuredData to bottom of page (after closing `</div>` tags, before `</>`)
- [ ] Keep schema generation at top level (not in component)

#### ✅ Components
- [ ] Add loading states for dynamic components
- [ ] Use `ssr: true` for SEO-critical components
- [ ] Use `ssr: false` for client-only components

#### ✅ Forms
- [ ] All form inputs have `htmlFor` and `id` attributes
- [ ] All select elements have proper labels
- [ ] Add `aria-required` and `aria-describedby` where needed

#### ✅ Headings
- [ ] Proper hierarchy: h1 → h2 → h3 (no skipping)
- [ ] Only one h1 per page
- [ ] Use semantic HTML

#### ✅ Contrast
- [ ] Replace `text-gray-400` with `text-gray-500` or `text-gray-600`
- [ ] Replace `text-[#0891b2]/80` with `text-[#0891b2]`
- [ ] Ensure 4.5:1 contrast ratio for normal text
- [ ] Ensure 3:1 contrast ratio for large text

#### ✅ Performance
- [ ] Remove unused CSS classes
- [ ] Minimize JavaScript bundle size
- [ ] Use `loading="lazy"` for below-fold content
- [ ] Optimize third-party scripts (YouTube, analytics)

### 🔧 Quick Fix Script Pattern

For each page, apply this pattern:

```typescript
// 1. Convert heavy imports to dynamic
const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  ssr: true,
  loading: () => <div className="min-h-[300px] animate-pulse" />,
});

// 2. Move StructuredData to bottom
export default function Page() {
  return (
    <>
      <div>
        {/* All content */}
      </div>
      {/* StructuredData at bottom */}
      <StructuredData data={schema1} />
      <StructuredData data={schema2} />
    </>
  );
}

// 3. Optimize images
// Hero: priority, fetchPriority="high"
// Others: loading="lazy", fetchPriority="low"
```

### 📊 Expected Results

**Before:**
- Performance: 77
- Accessibility: 85
- Best Practices: 73
- SEO: 100
- FCP: 2.0s
- LCP: 4.2s

**After (Target):**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100
- FCP: < 2.5s
- LCP: < 2.5s

### 🚀 Next Steps

1. Apply dynamic imports to all service pages
2. Optimize all images with proper loading attributes
3. Move StructuredData to bottom on all pages
4. Fix heading hierarchy on all pages
5. Fix contrast issues on all pages
6. Add proper form labels on all pages
7. Test each page with PageSpeed Insights

### 📝 Files to Update

Priority order:
1. All service pages in `app/laparoscopic-surgery/`
2. All service pages in `app/laser-surgery/`
3. All service pages in `app/bariatrics/`
4. All service pages in `app/best-*-surgeon-in-delhi/`
5. Home page and other main pages

### ✅ Completed
- ✅ `app/laparoscopic-surgery/gallbladder-surgery/page.tsx`
- ✅ `next.config.js`
- ✅ `app/layout.tsx`
- ✅ Form components (ConsultationForm, CostCalculator)

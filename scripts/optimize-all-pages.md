# Page Optimization Script Guide

This document provides the systematic approach to optimize all pages for 90+ performance scores.

## Optimization Pattern to Apply

### 1. Dynamic Imports (Change ssr: false to ssr: true for SEO-critical components)

**Find and Replace Pattern:**
```typescript
// OLD (Bad for SEO)
const ConsultationForm = dynamic(() => import("..."), {
  ssr: false,
});

// NEW (Good for SEO)
const ConsultationForm = dynamic(() => import("..."), {
  ssr: true,
  loading: () => <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 min-h-[400px] animate-pulse" />,
});
```

**Components that should use ssr: true:**
- ConsultationForm
- CostCalculator
- PostOperativeCare
- RecoveryTimeline
- RelatedBlogs
- FAQ components
- Testimonial components

**Components that can use ssr: false:**
- WhatsAppExpertChat (client-only)

### 2. Move StructuredData to Bottom

**Find:**
```typescript
export default function Page() {
  return (
    <>
      <StructuredData data={schema1} />
      <StructuredData data={schema2} />
      <div>...</div>
    </>
  );
}
```

**Replace with:**
```typescript
export default function Page() {
  return (
    <>
      <div>...</div>
      {/* StructuredData moved to bottom to prevent blocking render */}
      <StructuredData data={schema1} />
      <StructuredData data={schema2} />
    </>
  );
}
```

### 3. Optimize Hero Images

**Find:**
```typescript
<Image
  decoding="sync"
  quality={85}
/>
```

**Replace with:**
```typescript
<Image
  decoding="async"
  quality={75}
  priority
  fetchPriority="high"
  loading="eager"
/>
```

### 4. Fix Contrast Issues

**Find:**
- `text-[#0891b2]/80` → Replace with `text-[#0891b2]`
- `text-gray-400` → Replace with `text-gray-500` or `text-gray-600`

### 5. Optimize YouTube Embeds

**Find:**
```typescript
<iframe
  src="https://www.youtube.com/embed/..."
  loading="lazy"
/>
```

**Replace with:**
```typescript
<iframe
  src="https://www.youtube.com/embed/...&loading=lazy"
  loading="lazy"
/>
```

## Files to Optimize (Priority Order)

### High Priority (Main Service Pages)
1. ✅ app/laparoscopic-surgery/gallbladder-surgery/page.tsx (DONE)
2. ✅ app/best-appendix-surgeon-in-delhi/page.tsx (IN PROGRESS)
3. ✅ app/best-hernia-surgeon-in-delhi/page.tsx (IN PROGRESS)
4. app/best-laser-piles-surgeon-in-delhi/page.tsx
5. app/best-rectal-prolapse-surgeon-in-delhi/page.tsx
6. app/best-hiatus-hernia-surgeon-in-delhi/page.tsx
7. app/best-inguinal-hernia-surgeon-in-delhi/page.tsx
8. app/best-umbilical-hernia-surgeon-in-delhi/page.tsx
9. app/best-epigastric-hernia-surgeon-in-delhi/page.tsx
10. app/best-femoral-hernia-surgeon-in-delhi/page.tsx
11. app/best-incisional-hernia-surgeon-in-delhi/page.tsx
12. app/best-laser-fistula-treatment/page.tsx
13. app/best-laser-pilonidal-sinus-treatment/page.tsx
14. app/best-anal-fissure-treatment/page.tsx
15. app/bariatric-surgeon-in-delhi-india/page.tsx
16. app/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy/page.tsx
17. app/bariatric-surgeon-in-delhi-india/gastric-bypass/page.tsx
18. app/bariatric-surgeon-in-delhi-india/mini-gastric-bypass/page.tsx
19. app/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass/page.tsx
20. app/bariatric-surgeon-in-delhi-india/revision-surgeries/page.tsx

### Medium Priority
- All other service pages
- Resource pages
- Calculator pages

## Automated Find & Replace Commands

### 1. Fix decoding="sync" to decoding="async"
```bash
# Find all files with decoding="sync"
grep -r 'decoding="sync"' app/
grep -r "decoding='sync'" app/
```

### 2. Fix ssr: false to ssr: true for SEO components
```bash
# Find all files with ssr: false in dynamic imports
grep -r "ssr: false" app/ --include="*.tsx"
```

### 3. Fix contrast issues
```bash
# Find text-[#0891b2]/80
grep -r "text-\[#0891b2\]/80" app/
# Find text-gray-400
grep -r "text-gray-400" app/
```

## Checklist for Each Page

- [ ] Convert imports to dynamic with ssr: true (except WhatsAppExpertChat)
- [ ] Move StructuredData to bottom
- [ ] Change decoding="sync" to decoding="async" on hero images
- [ ] Set hero image quality to 75
- [ ] Fix contrast issues (text-[#0891b2]/80, text-gray-400)
- [ ] Optimize YouTube embeds
- [ ] Add preload link in layout if needed
- [ ] Fix heading hierarchy
- [ ] Add proper form labels


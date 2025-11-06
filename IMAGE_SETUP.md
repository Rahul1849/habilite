# Image Setup Guide for Dr. Kapil Agrawal

## 📁 Where to Place the Image

Place Dr. Kapil Agrawal's image in the following location:

```
public/images/doctors/dr-kapil-agrawal.jpg
```

**Recommended Image Specifications:**
- **Format**: JPG or PNG (Next.js will auto-convert to WebP/AVIF)
- **Hero Image**: 1200x800px (3:2 aspect ratio) - for Hero section
- **Profile Image**: 800x1000px (4:5 aspect ratio) - for MeetDoctor section
- **File Size**: Keep under 300KB for optimal performance
- **Quality**: High quality but optimized (use tools like TinyPNG or ImageOptim)

## 🎯 Image Optimization Tips

1. **Compress the image** before uploading:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: 200-300KB file size

2. **Use proper dimensions**:
   - Hero: 1200x800px (will be displayed at various sizes)
   - Profile: 800x1000px (will be displayed at 600x700px)

3. **File naming**:
   - Use lowercase with hyphens: `dr-kapil-agrawal.jpg`
   - This helps with SEO and caching

## ✅ Performance Features Already Implemented

- ✅ Next.js Image optimization (auto WebP/AVIF conversion)
- ✅ Priority loading for above-the-fold images
- ✅ Proper `sizes` attribute for responsive images
- ✅ Lazy loading for below-the-fold images
- ✅ Image caching (1 year TTL)
- ✅ Blur placeholder support

## 📝 After Placing the Image

The components are already configured to use:
- Hero: `/images/doctors/dr-kapil-agrawal-hero.jpg`
- MeetDoctor: `/images/doctors/dr-kapil-agrawal.jpg`

If you use different filenames, update the paths in:
- `components/home/Hero.tsx`
- `components/home/MeetDoctor.tsx`


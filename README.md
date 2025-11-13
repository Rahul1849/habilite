# Habilite Clinics Website

A modern, performance-optimized website for Habilite Clinics, built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- ✅ **Next.js 14** with App Router and Server Components
- ✅ **TypeScript** for type safety
- ✅ **TailwindCSS** with custom design tokens
- ✅ **Framer Motion** for smooth animations
- ✅ **SEO Optimized** with metadata, sitemap, and structured data
- ✅ **Performance Optimized** for Core Web Vitals (LCP, FCP, CLS)
- ✅ **Responsive Design** for mobile and desktop
- ✅ **Dummy Data** structure ready for CMS integration

## Pages

- **Home** - Hero, services overview, testimonials, video section
- **Treatments** - Detailed service pages with benefits, FAQs, and consultation CTA
- **Doctors** - Profiles with experience, qualifications, and achievements
- **Blog** - Educational articles and patient stories

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd habilite-clinics
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key_here
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
habilite-clinics/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── doctors/           # Doctors pages
│   ├── treatments/        # Treatments pages
│   ├── testimonials/     # Testimonials page
│   ├── blog/             # Blog pages
│   ├── appointment/      # Appointment booking
│   └── contact/          # Contact page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page components
│   ├── treatments/       # Treatment components
│   ├── blog/             # Blog components
│   └── contact/          # Contact components
├── data/                  # Dummy data (ready for CMS)
│   ├── services.ts
│   ├── doctors.ts
│   ├── testimonials.ts
│   └── blog.ts
└── public/               # Static assets
```

## Performance Optimizations

- **LCP Optimization**: Hero image preloaded, priority loading
- **FCP Optimization**: Minimal CSS, optimized fonts
- **Image Optimization**: Next/Image with proper sizes and lazy loading
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Images, videos, and iframes
- **Font Optimization**: Using next/font with display swap

## SEO Features

- Metadata for all pages
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## CMS Integration Ready

The data structure is designed to easily integrate with a CMS like Payload CMS:

- All data in `/data` folder can be replaced with API calls
- Component structure is modular and reusable
- TypeScript interfaces match data structure

## Brand Colors

- **Primary**: Blue (#1a91b9)
- **Secondary**: Green (#69c39b)
- **Accent**: Orange (#f97316)

## Future Enhancements

- [ ] Backend API integration
- [ ] CMS integration (Payload CMS)
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] Email notifications

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact: info@habiliteclinics.com

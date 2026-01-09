import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.habiliteclinics.com'
  const currentDate = new Date()

  // ONLY include pages that ACTUALLY EXIST on your site
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/dr-kapil-agrawal', priority: 0.9, changeFreq: 'monthly' as const },
    
    // REMOVED: '/treatments' (404) - if this page exists, keep it
    // { path: '/treatments', priority: 0.9, changeFreq: 'monthly' as const },
    
    { path: '/appointment', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/video-consultation', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/post', priority: 0.8, changeFreq: 'weekly' as const },
    
    // REMOVED: '/laparoscopic-surgery' (404) - if this page exists, keep it
    // { path: '/laparoscopic-surgery', priority: 0.9, changeFreq: 'monthly' as const },
    
    // REMOVED: '/laser-surgery' (404) - if this page exists, keep it
    // { path: '/laser-surgery', priority: 0.9, changeFreq: 'monthly' as const },
    
    { path: '/hospital-affiliations', priority: 0.7, changeFreq: 'monthly' as const },
    
    // REMOVED: '/non-surgical' and subpages (404) - if these exist, keep them
    // { path: '/non-surgical', priority: 0.8, changeFreq: 'monthly' as const },
    // { path: '/non-surgical/consultation', priority: 0.7, changeFreq: 'monthly' as const },
    // { path: '/non-surgical/nutrition', priority: 0.7, changeFreq: 'monthly' as const },
    // { path: '/non-surgical/follow-up', priority: 0.7, changeFreq: 'monthly' as const },
    
    // REMOVED: '/bariatrics' (404) - keep only calculator pages that exist
    // { path: '/bariatrics', priority: 0.8, changeFreq: 'monthly' as const },
    
    // Calculator pages - check if these exist
    { path: '/bmi-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/calorie-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/exercise-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    
    // REMOVED: '/calculators/*' pages (404)
    // { path: '/calculators/bmi', priority: 0.6, changeFreq: 'yearly' as const },
    // { path: '/calculators/calorie', priority: 0.6, changeFreq: 'yearly' as const },
    // { path: '/calculators/exercise', priority: 0.6, changeFreq: 'yearly' as const },
    
    { path: '/best-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-hiatus-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-appendix-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-rectal-prolapse-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-laser-piles-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-laser-fistula-treatment', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-laser-pilonidal-sinus-treatment', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-anal-fissure-treatment', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-gallbladder-stone-surgeon-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/bariatric-surgeon-in-delhi-india', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/surgery-for-diabetes', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/endoscopic-intra-gastric-balloon', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/medical-weight-loss-program', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/laser-zsr-circumcision', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/lipoma-treatment', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/habilite-clinic', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/awards', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/international-patient', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
    
    // ADDED: Missing but important pages from redirects
    { path: '/single-port-surgeries', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/gastric-plication-surgery', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/gastric-bypass', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/rectal-prolapse', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/gallbladder-polyps-treatment-in-delhi', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/cbd-stone-treatment-in-delhi', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/cost-of-hernia-surgery-in-delhi', priority: 0.7, changeFreq: 'yearly' as const },
    { path: '/best-umbilical-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-epigastric-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-femoral-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-incisional-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-inguinal-hernia-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-laparoscopic-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-phimosis-treatment-in-delhi', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/best-laser-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/best-robotic-surgeon-in-delhi', priority: 0.9, changeFreq: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  // Service routes - ONLY if these pages exist
  // If /treatments/[slug] pages exist, keep this. If not, remove it.
  const serviceRoutes = services
    .filter(service => {
      // Check if the service page actually exists on your site
      // Return true only for services that have actual pages
      const existingServices = [
        'laparoscopic-gallbladder-surgery',
        'hernia-surgery',
        'robotic-surgery',
        'gastrointestinal-surgery',
        'appendectomy',
        'bariatric-surgery'
      ]
      return existingServices.includes(service.slug)
    })
    .map((service) => ({
      url: `${baseUrl}/treatments/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  // Doctor routes - ONLY if these pages exist
  // Currently only Dr. Kapil Agrawal exists
  const doctorRoutes = doctors
    .filter(doctor => doctor.slug === 'dr-kapil-agrawal') // Only include existing doctors
    .map((doctor) => ({
      url: `${baseUrl}/doctors/${doctor.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  // Blog posts - filter out future dates
  const currentDateObj = new Date()
  const blogRoutes = blogPosts
    .filter(post => {
      const postDate = new Date(post.publishedDate)
      return postDate <= currentDateObj // Only include past or present dates
    })
    .map((post) => ({
      url: `${baseUrl}/post/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  // Laparoscopic surgery routes - ONLY if these pages exist
  const existingLaparoscopicServices = [
    'gallbladder-surgery',
    'hernia-surgery',
    'appendix-surgery',
    'rectal-prolapse-surgery',
    'gerd-hiatus-hernia',
    'gerd-hiatus-surgery'
  ]
  
  const laparoscopicServiceRoutes = existingLaparoscopicServices
    .map((slug) => ({
      url: `${baseUrl}/laparoscopic-surgery/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  // Additional laparoscopic surgery sub-pages - ONLY if these exist
  const laparoscopicSubRoutes = [
    { path: '/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps', priority: 0.8 },
    { path: '/laparoscopic-surgery/gallbladder-surgery/cbd-stones', priority: 0.8 },
    { path: '/gallbladder-polyps-treatment-in-delhi', priority: 0.8 },
    { path: '/cbd-stone-treatment-in-delhi', priority: 0.8 },
  ]
    .filter(route => {
      // Check if these pages actually exist on your site
      // Return true only for pages that exist
      return true // Set to false if pages don't exist
    })
    .map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route.priority as 0.7 | 0.8,
    }))

  // Bariatric service routes - ONLY if these pages exist
  const bariatricServiceRoutes = [
    { path: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy-surgery', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass-surgery', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/gastric-bypass-surgery', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass-surgery', priority: 0.8 },
    { path: '/bariatric-surgeon-in-delhi-india/revision-surgeries-surgery', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon/allurion-balloon-treatment', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon/spatz-balloon-treatment', priority: 0.8 },
  ]
    .filter(route => {
      // Check if these pages actually exist
      return true // Set to false if pages don't exist
    })
    .map((service) => ({
      url: `${baseUrl}${service.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: service.priority as 0.7 | 0.8 | 0.9,
    }))

  // Laser service routes - ONLY if these pages exist
  const laserServiceRoutes = [
    { slug: 'anal-fissure', priority: 0.8 },
    { slug: 'anal-fistula', priority: 0.8 },
    { slug: 'hemorrhoids-piles', priority: 0.9 },
    { slug: 'pilonidal-sinus', priority: 0.8 },
    { slug: 'circumcision', priority: 0.8 },
    { slug: 'lipoma', priority: 0.7 },
  ]
    .filter(service => {
      // Check if these pages actually exist
      return true // Set to false if pages don't exist
    })
    .map((service) => ({
      url: `${baseUrl}/laser-surgery/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: service.priority as 0.7 | 0.8 | 0.9,
    }))

  // Resource guide pages - ONLY if these exist
  const resourceRoutes = [
    { path: '/resources/obesity-complete-guide', priority: 0.7 },
    { path: '/resources/piles-complete-guide', priority: 0.7 },
    { path: '/resources/hernia-complete-guide', priority: 0.7 },
    { path: '/resources/gallbladder-complete-guide', priority: 0.7 },
  ]
    .filter(route => {
      // Check if these pages actually exist
      return false // Set to true if pages exist
    })
    .map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route.priority as 0.7,
    }))

  // Combine all routes
  const allRoutes = [
    ...routes,
    ...serviceRoutes,
    ...doctorRoutes,
    ...blogRoutes,
    ...laparoscopicServiceRoutes,
    ...laparoscopicSubRoutes,
    ...bariatricServiceRoutes,
    ...laserServiceRoutes,
    ...resourceRoutes,
  ]

  // Remove duplicate URLs (some might appear in multiple sections)
  const uniqueRoutes = allRoutes.reduce((acc, current) => {
    const x = acc.find(item => item.url === current.url)
    if (!x) {
      return acc.concat([current])
    }
    return acc
  }, [] as MetadataRoute.Sitemap)

  return uniqueRoutes
}
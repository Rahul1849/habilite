import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.habiliteclinics.com'

  // Fixed date for static pages (use actual modification date if tracking available)
  const staticPageDate = new Date('2024-01-15')

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/dr-kapil-agrawal', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/treatments', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/appointment', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/video-consultation', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/post', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/laparoscopic-surgery', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/laser-surgery', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/hospital-affiliations', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/non-surgical', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/non-surgical/consultation', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/non-surgical/nutrition', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/non-surgical/follow-up', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/bariatrics', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/bariatrics/bmi-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/bariatrics/calorie-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/bariatrics/exercise-calculator', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/calculators/bmi', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/calculators/calorie', priority: 0.6, changeFreq: 'yearly' as const },
    { path: '/calculators/exercise', priority: 0.6, changeFreq: 'yearly' as const },
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
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: staticPageDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/treatments/${service.slug}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const doctorRoutes = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Service detail pages - Laparoscopic Surgery
  const laparoscopicServiceRoutes = [
    { slug: 'gallbladder-surgery', priority: 0.9 },
    { slug: 'hernia-surgery', priority: 0.9 },
    { slug: 'appendix-surgery', priority: 0.9 },
    { slug: 'rectal-prolapse-surgery', priority: 0.9 },
    { slug: 'gerd-hiatus-hernia', priority: 0.9 },
    { slug: 'gerd-hiatus-surgery', priority: 0.9 },
  ].map((service) => ({
    url: `${baseUrl}/laparoscopic-surgery/${service.slug}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.8 | 0.9,
  }))

  // Additional laparoscopic surgery sub-pages
  const laparoscopicSubRoutes = [
    { path: '/laparoscopic-surgery/gallbladder-surgery/gallbladder-polyps', priority: 0.8 },
    { path: '/laparoscopic-surgery/gallbladder-surgery/cbd-stones', priority: 0.8 },
    { path: '/gallbladder-polyps-treatment-in-delhi', priority: 0.8 },
    { path: '/cbd-stone-treatment-in-delhi', priority: 0.8 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority as 0.7 | 0.8,
  }))

  // Bariatric service routes
  const bariatricServiceRoutes = [
    { path: '/bariatric-surgeon-in-delhi-india', priority: 0.9 },
    { path: '/surgery-for-diabetes', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon', priority: 0.8 },
    { path: '/bariatrics/bariatric-surgery', priority: 0.9 },
    { path: '/bariatrics/intragastric-balloon', priority: 0.8 },
    { path: '/bariatrics/allurion-balloon', priority: 0.8 },
    { path: '/bariatrics/spatz-balloon', priority: 0.8 },
    { path: '/bariatrics/non-surgical-weight-loss', priority: 0.8 },
    { path: '/bariatrics/surgery-for-diabetes', priority: 0.8 },
    { path: '/bariatrics/bariatric-surgery/sleeve-gastrectomy', priority: 0.9 },
    { path: '/bariatrics/bariatric-surgery/mini-gastric-bypass', priority: 0.9 },
    { path: '/bariatrics/bariatric-surgery/gastric-bypass', priority: 0.9 },
    { path: '/bariatrics/bariatric-surgery/duodenal-jejunal-bypass', priority: 0.8 },
    { path: '/bariatrics/bariatric-surgery/revision-bariatric-surgery', priority: 0.8 },
    { path: '/bariatric-surgeon-in-delhi-india/sleeve-gastrectomy', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/mini-gastric-bypass', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/gastric-bypass', priority: 0.9 },
    { path: '/bariatric-surgeon-in-delhi-india/duodenal-jejunal-bypass', priority: 0.8 },
    { path: '/bariatric-surgeon-in-delhi-india/revision-surgeries', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon/best-allurion-surgeon-in-delhi', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon/best-spatz-surgeon-in-delhi', priority: 0.8 },
  ].map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.7 | 0.8 | 0.9,
  }))

  // Laser service routes
  const laserServiceRoutes = [
    { slug: 'anal-fissure', priority: 0.8 },
    { slug: 'anal-fistula', priority: 0.8 },
    { slug: 'hemorrhoids-piles', priority: 0.9 },
    { slug: 'pilonidal-sinus', priority: 0.8 },
    { slug: 'circumcision', priority: 0.8 },
    { slug: 'lipoma', priority: 0.7 },
  ].map((service) => ({
    url: `${baseUrl}/laser-surgery/${service.slug}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.7 | 0.8 | 0.9,
  }))

  // Additional service pages
  const additionalServiceRoutes = [
    { path: '/best-umbilical-hernia-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-epigastric-hernia-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-femoral-hernia-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-incisional-hernia-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-inguinal-hernia-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-phimosis-treatment-in-delhi', priority: 0.8 },
    { path: '/best-laser-surgeon-in-delhi', priority: 0.9 },
    { path: '/best-robotic-surgeon-in-delhi', priority: 0.9 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority as 0.7 | 0.8 | 0.9,
  }))

  // Resource guide pages
  const resourceRoutes = [
    { path: '/resources/obesity-complete-guide', priority: 0.7 },
    { path: '/resources/piles-complete-guide', priority: 0.7 },
    { path: '/resources/hernia-complete-guide', priority: 0.7 },
    { path: '/resources/gallbladder-complete-guide', priority: 0.7 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: staticPageDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority as 0.7,
  }))

  return [
    ...routes,
    ...serviceRoutes,
    ...doctorRoutes,
    ...blogRoutes,
    ...laparoscopicServiceRoutes,
    ...laparoscopicSubRoutes,
    ...bariatricServiceRoutes,
    ...laserServiceRoutes,
    ...additionalServiceRoutes,
    ...resourceRoutes,
  ]
}

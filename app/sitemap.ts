import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.habiliteclinics.com'

  const routes = [
    '',
    '/dr-kapil-agrawal',
    '/treatments',
    '/testimonials',
    '/post',
    '/appointment',
    '/video-consultation',
    '/contact',
    '/laparoscopic-surgery',
    '/best-hernia-surgeon-in-delhi',
    '/best-hiatus-hernia-surgeon-in-delhi',
    '/best-appendix-surgeon-in-delhi',
    '/best-rectal-prolapse-surgeon-in-delhi',
    '/bariatrics',
    '/laser-surgery',
    '/best-laser-piles-surgeon-in-delhi',
    '/best-laser-fistula-treatment',
    '/best-laser-pilonidal-sinus-treatment',
    '/lipoma-treatment',
    '/medical-weight-loss-program',
    '/laser-zsr-circumcision',
    '/habilite-clinic',
    '/awards',
    '/international-patient',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/video-consultation' ? 0.9 : 0.8,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/treatments/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const doctorRoutes = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Service detail pages
  const laparoscopicServiceRoutes = [
    { slug: 'gallbladder-surgery', priority: 0.9 },
    { slug: 'hernia-surgery', priority: 0.9 },
  ].map((service) => ({
    url: `${baseUrl}/laparoscopic-surgery/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.8 | 0.9,
  }))

  const bariatricServiceRoutes = [
    { path: '/bariatric-surgeon-in-delhi-india', priority: 0.9 },
    { path: '/surgery-for-diabetes', priority: 0.8 },
    { path: '/endoscopic-intra-gastric-balloon', priority: 0.8 },
  ].map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.7 | 0.8 | 0.9,
  }))

  const laserServiceRoutes = [
    { slug: 'anal-fissure', priority: 0.8 },
  ].map((service) => ({
    url: `${baseUrl}/laser-surgery/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.7 | 0.8 | 0.9,
  }))

  return [
    ...routes,
    ...serviceRoutes,
    ...doctorRoutes,
    ...blogRoutes,
    ...laparoscopicServiceRoutes,
    ...bariatricServiceRoutes,
    ...laserServiceRoutes,
  ]
}

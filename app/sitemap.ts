import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.habiliteclinics.com'

  const routes = [
    '',
    '/doctors',
    '/treatments',
    '/testimonials',
    '/post',
    '/appointment',
    '/video-consultation',
    '/contact',
    '/laparoscopic-surgery',
    '/bariatrics',
    '/laser-surgery',
    '/about',
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
    { slug: 'appendix-surgery', priority: 0.8 },
    { slug: 'rectal-prolapse-surgery', priority: 0.8 },
  ].map((service) => ({
    url: `${baseUrl}/laparoscopic-surgery/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.8 | 0.9,
  }))

  const bariatricServiceRoutes = [
    { slug: 'bariatric-surgery', priority: 0.9 },
    { slug: 'non-surgical-weight-loss', priority: 0.8 },
    { slug: 'surgery-for-diabetes', priority: 0.8 },
    { slug: 'intragastric-balloon', priority: 0.8 },
  ].map((service) => ({
    url: `${baseUrl}/bariatrics/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority as 0.7 | 0.8 | 0.9,
  }))

  const laserServiceRoutes = [
    { slug: 'hemorrhoids-piles', priority: 0.9 },
    { slug: 'anal-fistula', priority: 0.8 },
    { slug: 'anal-fissure', priority: 0.8 },
    { slug: 'pilonidal-sinus', priority: 0.8 },
    { slug: 'lipoma', priority: 0.7 },
    { slug: 'circumcision', priority: 0.7 },
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

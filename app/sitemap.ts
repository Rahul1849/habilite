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
    '/gallery',
    '/testimonials',
    '/blog',
    '/appointment',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
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
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...serviceRoutes, ...doctorRoutes, ...blogRoutes]
}

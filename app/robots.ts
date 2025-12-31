import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/preview/', '/studio/'],
    },
    sitemap: 'https://www.habiliteclinics.com/sitemap.xml',
  }
}

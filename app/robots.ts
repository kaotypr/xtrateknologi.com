import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/static/',
    },
    sitemap: 'https://xtrateknologi.com/sitemap.xml',
  }
}

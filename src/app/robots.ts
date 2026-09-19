import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'Applebot',
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://steelduct.com.my/sitemap.xml',
    host: 'https://steelduct.com.my',
  }
}

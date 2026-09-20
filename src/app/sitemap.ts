import type { MetadataRoute } from 'next'
import { caseStudies } from '@/content/projects'
import { posts } from '@/content/posts'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/work'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: absoluteUrl('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: absoluteUrl('/terms'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  return [
    ...staticRoutes,
    ...caseStudies.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ]
}

import type { Metadata } from 'next'
import { site } from '@/content/site'

export function absoluteUrl(path = '/'): string {
  return new URL(path, site.url).toString()
}

export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.foundedYear),
    sameAs: site.social.map((s) => s.href),
    areaServed: 'Worldwide',
    serviceType: [
      'SaaS platform development',
      'Marketplace development',
      'Web application development',
      'Native mobile app development',
      'AI and LLM product development',
      'E-commerce development',
      'Blockchain and Web3 development',
      'Game development',
    ],
  }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

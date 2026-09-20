/**
 * Single source of truth for brand, navigation and contact details.
 * Rebranding the site starts and (mostly) ends here.
 */
export const site = {
  name: 'Stratum Labs',
  legalName: 'Stratum Labs LLC',
  tagline: 'SaaS, AI, Commerce & Mobile App Development',
  description:
    'Design and engineering partner for SaaS, marketplaces, AI, e-commerce, blockchain, games and native iOS + Android apps. Shipping since 2017.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.stratumlabs.io',
  foundedYear: 2017,
  availability: 'Accepting projects — Q2 2026',
  email: 'hello@stratumlabs.io',
  phone: '+1 (415) 555-0142',
  location: 'Remote-first · North America & EMEA hours',
  replyPromise: 'We reply within one business day.',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stratumlabs' },
    { label: 'GitHub', href: 'https://github.com/stratumlabs' },
    { label: 'X', href: 'https://x.com/stratumlabs' },
  ],
} as const

export const primaryNav = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
] as const

export const secondaryNav = [
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
] as const

export const footerNav = {
  services: [
    { label: 'SaaS platforms', href: '/#services' },
    { label: 'Marketplaces', href: '/#services' },
    { label: 'Web applications', href: '/#services' },
    { label: 'Native mobile apps', href: '/#services' },
    { label: 'AI products', href: '/#services' },
    { label: 'E-commerce', href: '/#services' },
    { label: 'Blockchain & Web3', href: '/#services' },
    { label: 'Games & interactive', href: '/#services' },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Process', href: '/#process' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const

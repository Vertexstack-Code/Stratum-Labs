export type Service = {
  id: string
  title: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const services: Service[] = [
  {
    id: 'saas',
    title: 'SaaS platforms',
    summary:
      'Multi-tenant products with subscription billing, role-based access, and admin tooling — built to scale past the first 100 paying customers.',
    highlights: [
      'Multi-tenant data model · RBAC + audit logs',
      'Stripe subscriptions + customer portal',
      'Customer-facing analytics + admin console',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces',
    summary:
      'Two-sided platforms with onboarding flows, escrow payments, reviews, and moderation tooling — designed for both sides from day one.',
    highlights: [
      'Buyer + seller onboarding with verification',
      'Stripe Connect split payments + escrow',
      'Moderation, reviews, and dispute tools',
    ],
    stack: ['Next.js', 'Stripe Connect', 'PostgreSQL', 'Algolia', 'AWS'],
  },
  {
    id: 'web-apps',
    title: 'Web applications',
    summary:
      'Custom internal tools, portals, and dashboards — typed end-to-end, tested, and fast enough for your power users.',
    highlights: [
      'Custom workflows + form engines',
      'Real-time dashboards via WebSockets',
      'Third-party integrations + API layer',
    ],
    stack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'WebSockets'],
  },
  {
    id: 'mobile',
    title: 'Native mobile apps',
    summary:
      'Swift for iOS and Kotlin for Android — native performance, proper design, and proper release through App Store + Play Store.',
    highlights: [
      'Native Swift + Kotlin (or React Native)',
      'Offline-first + background sync',
      'App Store + Play Store submission',
    ],
    stack: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'GraphQL'],
  },
]

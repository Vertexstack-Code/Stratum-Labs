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
  {
    id: 'ai',
    title: 'AI products',
    summary:
      'LLM features that survive contact with real users — retrieval over your own data, agents wired to your systems, and evals that catch regressions before your customers do.',
    highlights: [
      'RAG over your data · vector search + reranking',
      'Tool-calling agents wired into your APIs',
      'Eval suites, guardrails, cost + latency budgets',
    ],
    stack: ['Claude API', 'OpenAI', 'Vercel AI SDK', 'pgvector', 'Python'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    summary:
      'Headless storefronts and custom checkout flows — built for catalogue depth, conversion, and the operational reality of fulfilment.',
    highlights: [
      'Headless storefronts on Shopify or Medusa',
      'Custom checkout, subscriptions, tax + shipping',
      'ERP, PIM, and fulfilment integrations',
    ],
    stack: ['Next.js', 'Shopify Hydrogen', 'Medusa', 'Stripe', 'Algolia'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    summary:
      'Smart contracts and the products around them — written to be audited, tested against forked mainnet, and deployed with custody you actually control.',
    highlights: [
      'Solidity contracts · unit + mainnet-fork tests',
      'Wallet auth, indexing, on-chain data pipelines',
      'Audit preparation, upgrade + custody strategy',
    ],
    stack: ['Solidity', 'Foundry', 'viem', 'The Graph', 'EVM chains'],
  },
  {
    id: 'games',
    title: 'Games & interactive',
    summary:
      'Cross-platform games and real-time interactive experiences — from prototype to store release, with the backend and live-ops needed to keep them running.',
    highlights: [
      'Unity + WebGL builds · desktop, mobile, web',
      'Authoritative multiplayer netcode + matchmaking',
      'Accounts, in-game economy, and live-ops tooling',
    ],
    stack: ['Unity', 'C#', 'Godot', 'WebGL', 'Colyseus'],
  },
]

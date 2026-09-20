export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  name: string
  kind: string
  eyebrow: string
  summary: string
  liveUrl?: string
  tags: string[]
  problem: string
  outcome: string
  metrics: Metric[]
  stack: string[]
  featured: boolean
  /** Long-form content used on /work/[slug]. */
  detail?: {
    year: string
    duration: string
    role: string
    platforms: string[]
    context: string
    challenges: { title: string; body: string }[]
    approach: { title: string; body: string }[]
    results: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'ledgerly',
    name: 'Ledgerly',
    kind: 'FinTech SaaS',
    eyebrow: 'Featured case study — FinTech SaaS',
    summary:
      'Personal finance SaaS that turns daily spending awareness into long-term wealth — behavioral budgeting, AI insights, bank sync, and an offline-first installable PWA.',
    tags: ['SaaS', 'FinTech', 'Progressive Web App'],
    problem:
      'Traditional budgeting apps track spending but do not change behavior. Small repeated “micro-splurges” quietly cost users thousands per year.',
    outcome:
      'A production-grade freemium SaaS with behavioral journaling, an AI insight pipeline, Stripe subscriptions, bank sync, receipt OCR, and an offline-capable installable PWA.',
    metrics: [
      { value: '100+', label: 'REST endpoints' },
      { value: '30+', label: 'Database models' },
      { value: '15+', label: 'Background jobs' },
      { value: '12', label: 'Integrations shipped' },
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Stripe',
      'Plaid',
      'OpenAI',
      'Azure OCR',
      'Vercel',
    ],
    featured: true,
    detail: {
      year: '2025',
      duration: '22 weeks to v1, ongoing retainer',
      role: 'Product design, full-stack engineering, infrastructure',
      platforms: ['Web', 'Installable PWA', 'Public API'],
      context:
        'A two-person founding team had validated a behavioral-finance thesis with a spreadsheet and 300 beta users. They needed a real product — billing, bank connectivity, and an insight engine — without hiring an in-house team first.',
      challenges: [
        {
          title: 'Behavior, not bookkeeping',
          body: 'Transaction lists are a solved problem and a commodity. The product had to surface the three or four decisions a user could change this week, which meant an opinionated categorisation and journaling model rather than a generic ledger.',
        },
        {
          title: 'Bank sync without a support nightmare',
          body: 'Aggregator connections break constantly. Every failure mode — expired consent, MFA re-auth, partial backfill — needed a recovery path the user could resolve alone.',
        },
        {
          title: 'Offline on a commute',
          body: 'Most journaling happens on a phone with poor signal. Entries had to be capturable offline and reconciled later without duplicates.',
        },
      ],
      approach: [
        {
          title: 'Typed contract end to end',
          body: 'One shared schema package drives the database layer, the REST surface and the client types. A category or field change fails at compile time rather than in production.',
        },
        {
          title: 'Queue-backed insight pipeline',
          body: 'Categorisation, anomaly detection and LLM summarisation run as idempotent background jobs with retries and dead-letter handling, so a slow model call never blocks a page render.',
        },
        {
          title: 'Offline-first sync layer',
          body: 'Client-generated ULIDs plus a last-write-wins reconciliation pass let the PWA queue writes offline and replay them safely on reconnect.',
        },
      ],
      results: [
        'Freemium conversion instrumented end to end from first session to paid subscription.',
        'Median API response under 120 ms at the 95th percentile on production traffic.',
        'Support load cut by self-service re-auth flows for every bank-connection failure state.',
        'Handed over with CI, migrations, runbooks and a documented job catalogue.',
      ],
    },
  },
  {
    slug: 'casaba',
    name: 'Casaba',
    kind: 'Marketplace',
    eyebrow: 'Featured case study — Marketplace',
    summary:
      'A trilingual (EN/FR/AR), dual-currency rental marketplace unifying short-term stays and vehicle rentals — real-time messaging, local payment rails, identity-verified hosts, and a role-based admin console.',
    liveUrl: 'https://example.com',
    tags: ['Marketplace', 'Real-time', 'Trilingual (RTL)'],
    problem:
      'A regional rental ecosystem fragmented across classifieds, social groups and offline agencies — no trust layer, no digital booking, and international platforms that support neither local payments nor full right-to-left localisation.',
    outcome:
      'A production marketplace unifying property stays and vehicle rentals, with identity verification, real-time messaging, local payment rails, and an admin moderation console.',
    metrics: [
      { value: '3', label: 'Languages (EN / FR / AR)' },
      { value: '2', label: 'Currencies' },
      { value: '40+', label: 'Notification event types' },
      { value: '22', label: 'Core data models' },
    ],
    stack: [
      'Next.js 14',
      'React 18',
      'Express',
      'PostgreSQL',
      'Socket.IO',
      'Google Maps',
      'JWT + OAuth',
      'Nginx + PM2',
    ],
    featured: true,
    detail: {
      year: '2024',
      duration: '18 weeks to launch',
      role: 'Discovery, design system, full-stack engineering, deployment',
      platforms: ['Web', 'Responsive mobile web', 'Admin console'],
      context:
        'The founders had strong supply-side relationships but nothing to book against. Renters negotiated over social messaging apps and paid in cash, so neither side had recourse when a listing was wrong.',
      challenges: [
        {
          title: 'Two inventories, one booking engine',
          body: 'Stays and vehicles have different availability rules, pricing units and deposit logic, but sharing one search, messaging and payout core was essential to avoid building the platform twice.',
        },
        {
          title: 'RTL as a first-class layout',
          body: 'Arabic was not an afterthought translation pass. Direction-aware layout, numerals, date formats and iconography all had to be correct at component level.',
        },
        {
          title: 'Local payment rails',
          body: 'Card penetration is low in the target market. The flow had to support a local gateway plus cash-on-arrival with a verified deposit hold.',
        },
      ],
      approach: [
        {
          title: 'Polymorphic listing model',
          body: 'A shared listing entity with typed extensions keeps search, messaging, reviews and payouts generic while letting each vertical own its availability and pricing rules.',
        },
        {
          title: 'Logical CSS properties throughout',
          body: 'The component library uses inline-start/inline-end spacing, so the full app mirrors correctly under dir="rtl" with no per-locale overrides.',
        },
        {
          title: 'Socket-backed messaging with delivery state',
          body: 'Real-time threads with persisted read receipts and push fallbacks, so a host on mobile never misses a booking request.',
        },
      ],
      results: [
        'Launched with verified hosts on both verticals and end-to-end booking in three languages.',
        'Dispute rate held low by identity verification plus an immutable moderation audit trail.',
        'Admin console gave a two-person ops team control of listings, payouts and escalations.',
      ],
    },
  },
  {
    slug: 'tradeloop',
    name: 'TradeLoop',
    kind: 'Two-sided marketplace',
    eyebrow: 'Featured case study — Marketplace',
    summary:
      'A production SaaS marketplace connecting service seekers with verified providers — intelligent job routing, a credit-based lead economy, Stripe-backed credit packs, real-time chat, and a full admin console with audit logging.',
    liveUrl: 'https://example.com',
    tags: ['Two-sided marketplace', 'Real-time', 'Credit economy'],
    problem:
      'Directory sites force seekers to cold-call strangers. Lead-gen platforms sell the same lead to five providers in a race to the bottom. Neither side gets accountability, transparent pricing, or dispute recourse.',
    outcome:
      'A request-first, claim-based marketplace where complexity-tiered credits replace blind lead-selling, price confirmation prevents bait-and-switch, and an immutable audit log backs every moderation action.',
    metrics: [
      { value: '~57K', label: 'Lines of code' },
      { value: '30+', label: 'Notification types' },
      { value: '14', label: 'Core data models' },
      { value: '5', label: 'User roles' },
    ],
    stack: [
      'Next.js 15',
      'React 18',
      'Express 4',
      'PostgreSQL',
      'Socket.IO',
      'Stripe',
      'Chart.js',
      'PM2 + Nginx',
    ],
    featured: true,
    detail: {
      year: '2025',
      duration: '16 weeks to launch',
      role: 'Product strategy, design, full-stack engineering',
      platforms: ['Web', 'Provider dashboard', 'Admin console'],
      context:
        'The client had run a services agency for a decade and knew exactly why lead-gen marketplaces erode trust. The brief was to encode that operating knowledge into a marketplace where providers choose which jobs to claim.',
      challenges: [
        {
          title: 'Pricing the lead honestly',
          body: 'A flat per-lead fee overcharges for small jobs and undercharges for large ones. Credits had to scale with job complexity in a way both sides could predict.',
        },
        {
          title: 'Preventing bait-and-switch',
          body: 'Quoted price drifting after the claim is the single biggest source of disputes in this category, so price confirmation had to be a first-class, logged state transition.',
        },
        {
          title: 'Moderation you can defend',
          body: 'Every suspension, refund and takedown needed an evidence trail an operator could point at months later.',
        },
      ],
      approach: [
        {
          title: 'Complexity-tiered credit ledger',
          body: 'A double-entry credit ledger prices claims by job tier; every debit, refund and expiry is an immutable row rather than a mutated balance.',
        },
        {
          title: 'State machine for job lifecycle',
          body: 'Requests move through an explicit, validated state machine. Illegal transitions are impossible rather than merely discouraged.',
        },
        {
          title: 'Append-only audit log',
          body: 'Moderation actions write actor, reason, before/after snapshot and timestamp, surfaced in the admin console with filtering and export.',
        },
      ],
      results: [
        'Providers claim jobs they want instead of buying blind leads; seekers get confirmed pricing before work starts.',
        'Credit ledger reconciles exactly against Stripe payouts at month end.',
        'Ops team resolves disputes from the audit trail without engineering involvement.',
      ],
    },
  },
  {
    slug: 'pawchart',
    name: 'PawChart',
    kind: 'Vertical SaaS',
    eyebrow: 'Featured case study — Vertical SaaS',
    summary:
      'A full-stack, multi-tenant SaaS platform for veterinary clinic management — appointments, medical records with dental charts, inventory, prescriptions, billing, team permissions, and analytics — with regionally tuned recurring subscriptions.',
    liveUrl: 'https://example.com',
    tags: ['Vertical SaaS', 'Multi-tenant', 'Regional billing'],
    problem:
      'Veterinary clinics still juggle paper charts, spreadsheets, messaging apps and fragmented point-of-sale tools — while international practice-management products ignore regional payment rails, local-language UX and local currencies.',
    outcome:
      'A cloud practice platform covering the full clinical workflow — appointments, pet medical records with dental charts, inventory, prescriptions, invoicing and real-time team coordination — with recurring subscriptions across seven regional currencies.',
    metrics: [
      { value: '60+', label: 'React pages' },
      { value: '17', label: 'Data models' },
      { value: '20+', label: 'API modules' },
      { value: '7', label: 'Regional currencies' },
    ],
    stack: [
      'React 19',
      'Express 5',
      'PostgreSQL',
      'Socket.IO',
      'FullCalendar',
      'Recharts',
      'JWT + 2FA',
      'Tailwind CSS',
    ],
    featured: true,
    detail: {
      year: '2025',
      duration: '24 weeks to v1',
      role: 'Domain discovery, design system, full-stack engineering',
      platforms: ['Web', 'Tablet-optimised clinical views', 'Admin console'],
      context:
        'A veterinarian-turned-founder had mapped the clinical workflow in detail but had no software team. The product needed to be credible to practising vets on day one, which meant getting the medical record model right before anything else.',
      challenges: [
        {
          title: 'Clinical records are not CRM records',
          body: 'Dental charts, vaccination schedules and prescription histories have strict structure and retention expectations. A generic notes field would have been unusable.',
        },
        {
          title: 'Multi-tenant isolation with shared reference data',
          body: 'Clinics must never see each other’s patients, while drug catalogues and breed taxonomies stay shared and centrally maintained.',
        },
        {
          title: 'Billing across seven currencies',
          body: 'Subscription pricing, invoices and tax display all had to be correct per region without forking the codebase.',
        },
      ],
      approach: [
        {
          title: 'Row-level tenancy enforced at the query layer',
          body: 'Tenant scoping lives in a single data-access boundary rather than being reapplied in every handler, so an isolation bug cannot be introduced by a new endpoint.',
        },
        {
          title: 'Structured clinical schema',
          body: 'Dental charts and vaccination plans are typed entities with their own history, making longitudinal views and recall reminders straightforward.',
        },
        {
          title: 'Currency-aware billing layer',
          body: 'Prices are stored in minor units with an explicit currency, and every display path formats through one locale-aware helper.',
        },
      ],
      results: [
        'Clinics replaced paper charts, a spreadsheet and a separate booking tool with one system.',
        'Real-time coordination between front desk and consult rooms via socket-backed updates.',
        'Recurring subscriptions live across seven regional currencies from a single deployment.',
      ],
    },
  },
  {
    slug: 'cofoundhq',
    name: 'CofoundHQ',
    kind: 'SaaS',
    eyebrow: 'Project',
    summary: 'Curated co-founder matching with profile vetting, warm intros and async messaging.',
    tags: ['SaaS'],
    problem: 'Early-stage founders needed a structured way to match with technical co-founders.',
    outcome: 'Shipped a curated matching product with profile vetting, intros, and async messaging.',
    metrics: [],
    stack: ['Next.js', 'tRPC', 'PostgreSQL', 'Resend', 'Vercel'],
    featured: false,
  },
  {
    slug: 'fleetdesk',
    name: 'FleetDesk',
    kind: 'Web application',
    eyebrow: 'Project',
    summary: 'One operations console replacing six spreadsheets for dispatch, invoicing and fleet tracking.',
    tags: ['Web application'],
    problem: 'Operations team was drowning in spreadsheets for dispatch, invoicing, and fleet tracking.',
    outcome:
      'Replaced 6 spreadsheets with one integrated ops console. Dispatch time down from hours to minutes.',
    metrics: [],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Mapbox', 'Twilio'],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
export const caseStudies = projects.filter((p) => p.detail)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

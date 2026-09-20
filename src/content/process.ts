export type Step = {
  number: string
  title: string
  body: string
  deliverables: string[]
}

export const processSteps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    body: 'We map the problem, users, constraints, and success metrics. If it should not be built, we will tell you.',
    deliverables: ['Scoped brief', 'Risk map', 'Ballpark timeline'],
  },
  {
    number: '02',
    title: 'Design',
    body: 'Wireframes, an interactive prototype, and a clear interaction model you can click through — before a line of production code is written.',
    deliverables: ['Interactive prototype', 'Component system', 'Copy draft'],
  },
  {
    number: '03',
    title: 'Build',
    body: 'Weekly releases to a staging environment. You see progress every week, not every quarter — and can course-correct before a direction hardens.',
    deliverables: ['Weekly builds', 'Full CI/CD', 'Typed end-to-end'],
  },
  {
    number: '04',
    title: 'Ship',
    body: 'Production launch, monitoring wired up, analytics instrumented, and App Store / Play Store submission if mobile is in scope.',
    deliverables: ['Production launch', 'Store submission', 'Observability'],
  },
  {
    number: '05',
    title: 'Iterate',
    body: 'We stay on for a minimum 30-day post-launch window to fix, tune, and measure against the original success metrics. Many engagements continue as a monthly retainer.',
    deliverables: ['30-day fix SLA', 'Usage review', 'v2 roadmap'],
  },
]

export type Differentiator = {
  title: string
  body: string
  proof: string
}

export const differentiators: Differentiator[] = [
  {
    title: 'Senior only',
    body: 'Every contributor has shipped a production product at scale. No juniors, no subcontractors, no chain of account managers. You work directly with the people writing the code.',
    proof: '100% senior engineers',
  },
  {
    title: 'Weekly shipping',
    body: 'New builds land in staging every week — not every sprint demo. You see progress continuously and can course-correct before a direction hardens.',
    proof: 'Weekly staging releases',
  },
  {
    title: 'Typed, tested, reviewed',
    body: 'TypeScript end-to-end, automated test suites, and pull-request code review on every change. The code you inherit is code you can actually maintain — by your team or ours.',
    proof: 'PR review + CI on every change',
  },
  {
    title: '30-day post-launch',
    body: 'We stay on for a minimum 30 days after launch to fix, tune, and measure against the original success metrics. No "thanks, goodbye" on release day.',
    proof: '30-day fix window included',
  },
]

export const stats = [
  { value: '50+', label: 'Products shipped' },
  { value: '8+', label: 'Years building' },
  { value: '4', label: 'Platforms (Web · iOS · Android · API)' },
  { value: '100%', label: 'Senior engineers' },
]

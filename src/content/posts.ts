export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tag: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'scoping-an-mvp-that-ships',
    title: 'Scoping an MVP that actually ships in ten weeks',
    excerpt:
      'Most MVPs fail on scope, not on engineering. Here is the cut list we run in week one, and the three questions that decide what survives it.',
    date: '2026-08-14',
    readingTime: '6 min read',
    tag: 'Process',
    body: [
      'Every founder we meet has a feature list. Almost none of them have a cut list — the explicit, written record of what is not in v1 and why. Without it, scope grows silently, and the launch date moves by a week at a time until nobody remembers what the original plan was.',
      'We run the same exercise in week one of every engagement. Each proposed feature gets three questions: does the product fail its core promise without this, can a human do it manually for the first hundred users, and does shipping it later cost materially more than shipping it now? Anything that answers no, yes, no goes on the cut list.',
      'The cut list is not a backlog. A backlog implies eventual delivery. The cut list is a record of decisions, with reasoning attached, so that when someone asks in week seven why there is no bulk import, the answer already exists and the schedule does not move.',
      'The result is usually a v1 that is 40 to 60 percent of the original list and ships on the original date. Everything else gets built with real usage data behind it, which is a far better position than guessing.',
    ],
  },
  {
    slug: 'multi-tenant-data-models',
    title: 'Multi-tenant data models: the decision you cannot defer',
    excerpt:
      'Row-level, schema-per-tenant, or database-per-tenant. The wrong choice is survivable — making it implicitly is not.',
    date: '2026-07-02',
    readingTime: '8 min read',
    tag: 'Engineering',
    body: [
      'Tenancy is the one architectural decision in a SaaS product that is genuinely expensive to change later. It touches every query, every migration, every backup and every compliance conversation you will have with an enterprise buyer.',
      'Row-level tenancy — a tenant column on every table — is the right default for the overwhelming majority of products. It is cheap to operate, simple to migrate and scales further than most teams expect. Its single weakness is that isolation depends on discipline, which is why the scoping must live in one data-access boundary rather than being reapplied in every handler.',
      'Schema-per-tenant buys stronger isolation and per-tenant restore at the cost of migration complexity that grows linearly with your customer count. Database-per-tenant buys the strongest isolation story and the heaviest operational burden. Both are reasonable answers for regulated verticals and premature for everyone else.',
      'What is never reasonable is choosing implicitly — writing the first ten tables without a tenant column and discovering the requirement when the first enterprise security review arrives.',
    ],
  },
  {
    slug: 'weekly-releases-not-sprint-demos',
    title: 'Why we release weekly instead of demoing sprints',
    excerpt:
      'A demo is a performance. A staging release is evidence. The difference shows up in month three of every project.',
    date: '2026-05-21',
    readingTime: '5 min read',
    tag: 'Process',
    body: [
      'Sprint demos optimise for the meeting. The build is prepared, the happy path is rehearsed, and the parts that are not ready are simply not shown. Everyone leaves reassured, and nobody has touched the product.',
      'A weekly staging release inverts that. The client clicks through the real thing, on their own time, on their own device, including the parts that are half-finished. Problems surface while they are cheap — a wrong interaction model found in week four costs a day, and the same model found at launch costs a fortnight.',
      'The engineering cost of this is a CI pipeline and the discipline to keep main deployable, both of which are worth having anyway. The payoff is that no client has ever been surprised by what they received at launch.',
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export type TechGroup = { title: string; items: string[] }

export const techGroups: TechGroup[] = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma', 'tRPC'],
  },
  {
    title: 'Mobile',
    items: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'React Native', 'Expo'],
  },
  {
    title: 'Infrastructure',
    items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'],
  },
  {
    title: 'Payments & Services',
    items: ['Stripe', 'Stripe Connect', 'Paddle', 'Resend', 'Auth0', 'Mapbox'],
  },
]

export const heroStack = ['Next.js', 'Node.js', 'TypeScript', 'Swift', 'Kotlin', 'PostgreSQL']

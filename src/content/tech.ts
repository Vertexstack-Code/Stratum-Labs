export type TechGroup = { title: string; items: string[] }

export const techGroups: TechGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
      'Zustand',
      'TanStack Query',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'Fastify',
      'NestJS',
      'Python',
      'FastAPI',
      'Django',
      'Java',
      'Spring Boot',
    ],
  },
  {
    title: 'APIs & Auth',
    items: ['REST APIs', 'GraphQL', 'WebSockets', 'OAuth2', 'JWT', 'RBAC'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'AI',
    items: [
      'OpenAI API',
      'Claude API',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector databases',
      'AI agents',
      'MCP',
      'Function calling',
    ],
  },
  {
    title: 'Commerce',
    items: ['Shopify Hydrogen', 'Medusa', 'Stripe', 'Algolia', 'Klaviyo', 'Sanity'],
  },
  {
    title: 'Blockchain',
    items: ['Solidity', 'Foundry', 'Hardhat', 'viem', 'wagmi', 'The Graph'],
  },
  {
    title: 'Games & Real-time',
    items: ['Unity', 'C#', 'Godot', 'WebGL', 'Colyseus', 'WebRTC'],
  },
  {
    title: 'Payments & Services',
    items: ['Stripe', 'Stripe Connect', 'Paddle', 'Resend', 'Auth0', 'Mapbox'],
  },
]

export const heroStack = ['Next.js', 'Node.js', 'TypeScript', 'Swift', 'Kotlin', 'PostgreSQL']

export type Testimonial = { quote: string; author: string; context: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'They joined mid-build, cleaned up three months of tech debt, and shipped what we had been trying to ship for half a year. It is rare to find a team that is actually faster than working alone would have been.',
    author: 'Co-founder & CTO',
    context: 'Fintech SaaS · Series A',
  },
  {
    quote:
      'Our native iOS app now ships updates every two weeks. Before this engagement, we were lucky to get one release a quarter out of our previous agency.',
    author: 'Head of Product',
    context: 'Healthcare mobile · Seed stage',
  },
  {
    quote:
      'We asked for a marketplace MVP in 10 weeks. They pushed back in week one on three features we did not need, delivered the rest in eight, and the code review notes alone were worth the engagement.',
    author: 'Founder',
    context: 'Two-sided marketplace · Pre-seed',
  },
]

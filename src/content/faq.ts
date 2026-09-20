export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'How do you price projects?',
    answer:
      'Fixed-price for well-scoped phases, monthly retainer for ongoing work. We quote after discovery, never before — a number given without understanding the problem is a number that gets revised. Most engagements start between $25k and $100k.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'An MVP is usually 8–14 weeks from kickoff to production. A full platform with billing, admin tooling and mobile apps runs 4–6 months. You see a working build in staging every week from week three onward.',
  },
  {
    question: 'Who actually writes the code?',
    answer:
      'The senior engineers you meet on the first call. No handoff to a junior bench, no offshore subcontracting, no account manager between you and the team. The person who designs the data model is the person who ships it.',
  },
  {
    question: 'Do we own the code and IP?',
    answer:
      'Yes — fully, from day one. Code lives in your repository under your organisation, with every commit attributed. Our contract assigns all IP to you on payment, and there is no licensing tail or vendor lock-in.',
  },
  {
    question: 'Can you work with our existing team or codebase?',
    answer:
      'Often. We start with a short technical audit, agree on conventions and review standards, and then work as part of your process — your board, your branching model, your release cadence. We will say so plainly if a rewrite is cheaper than a rescue.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'A minimum 30-day post-launch window is included in every engagement: we fix, tune and measure against the original success metrics. After that, most clients continue on a monthly retainer, and some take the code fully in-house with a handover walkthrough.',
  },
]

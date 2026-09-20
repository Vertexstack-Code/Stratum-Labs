import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: `The terms that govern use of the ${site.name} website.`,
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: 1 September 2026"
      intro={`These terms govern your use of the ${site.name} website. Project engagements are governed by a separate signed agreement. This page is a starting point — have it reviewed by counsel before launch.`}
      sections={[
        {
          heading: 'Use of this site',
          body: [
            'You may browse and share this site for lawful purposes. You may not attempt to disrupt it, probe it for vulnerabilities without written permission, or scrape it at a volume that degrades service for others.',
          ],
        },
        {
          heading: 'Content and intellectual property',
          body: [
            `All text, design and code on this site are owned by ${site.legalName} unless stated otherwise. Case studies are published with client permission; client names and marks remain the property of their owners.`,
          ],
        },
        {
          heading: 'No warranty',
          body: [
            'This site is provided "as is". Content is informational and does not constitute professional advice or a binding offer. Timelines, pricing ranges and metrics shown are indicative.',
          ],
        },
        {
          heading: 'Engagements',
          body: [
            'Nothing on this site creates a contract. Work begins only under a signed statement of work that sets out scope, deliverables, pricing, IP assignment and confidentiality.',
          ],
        },
        {
          heading: 'Limitation of liability',
          body: [
            `To the extent permitted by law, ${site.legalName} is not liable for indirect or consequential loss arising from use of this site.`,
          ],
        },
        {
          heading: 'Contact',
          body: [`Questions about these terms: ${site.email}.`],
        },
      ]}
    />
  )
}

import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: 1 September 2026"
      intro={`This policy explains what information ${site.name} collects through this website, why we collect it, and what we do with it. It is a starting point — have it reviewed by counsel before launch.`}
      sections={[
        {
          heading: 'Information we collect',
          body: [
            'Contact form submissions: the name, email address, company, phone number, project type, budget range, timeline and message you choose to send us.',
            'Basic technical data collected automatically by our hosting provider, such as IP address, browser type and the pages requested, used for security and aggregate traffic analysis.',
          ],
        },
        {
          heading: 'How we use it',
          body: [
            'To reply to your enquiry and, if we work together, to deliver the engagement.',
            'To keep the site secure and to understand, in aggregate, how it is used.',
            'We do not sell personal information, and we do not use enquiry details for unrelated marketing.',
          ],
        },
        {
          heading: 'Who we share it with',
          body: [
            'Service providers who process data on our behalf — hosting, email delivery and analytics — under contract and only for the purposes above.',
            'Legal authorities where we are required by law to disclose information.',
          ],
        },
        {
          heading: 'Retention',
          body: [
            'Enquiries are retained for as long as needed to respond and for our business records, and are deleted on request.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            `You can ask us to access, correct or delete the information you have sent us. Email ${site.email} and we will respond within 30 days.`,
          ],
        },
        {
          heading: 'Contact',
          body: [`Questions about this policy: ${site.email}.`],
        },
      ]}
    />
  )
}

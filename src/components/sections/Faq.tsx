import Link from 'next/link'
import { faqs } from '@/content/faq'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ChevronDownIcon } from '@/components/ui/Icons'

export function Faq() {
  return (
    <section id="faq" className="scroll-anchor section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Frequently asked"
          title="Questions we get before every kickoff."
          description="Do not see yours? The contact form has an open message field — send it and we will reply within one business day."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 50}>
              <details className="card group p-0 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <h3 className="font-display text-base font-semibold text-slate-900 sm:text-lg">{faq.question}</h3>
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Do not see your question?{' '}
          <Link href="/#contact" className="font-semibold text-brand-600 hover:text-brand-700">
            Ask it in the contact form →
          </Link>
        </p>
      </div>
    </section>
  )
}

import { site } from '@/content/site'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/sections/ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Contact"
          title="Tell us about your project."
          description="A few details and we will reply within one business day with honest next steps — not a sales pitch."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div className="space-y-8">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Email</dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-medium text-slate-900 hover:text-brand-600"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Phone</dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
                    className="text-base font-medium text-slate-900 hover:text-brand-600"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Where we work</dt>
                <dd className="mt-1.5 text-base text-slate-600">{site.location}</dd>
              </div>
            </dl>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-600">1.</span>
                  We read the brief and reply within one business day.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-600">2.</span>
                  A 30-minute call to pressure-test scope, budget and timeline.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-600">3.</span>
                  A written proposal with phases, pricing and a start date.
                </li>
              </ol>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

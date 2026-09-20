import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function CtaBanner() {
  return (
    <section className="section-padding bg-brand-600">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-200 sm:text-sm">
            Ready when you are
          </span>
          <h2 className="heading-2 mt-3 text-white">Let&apos;s talk about what you&apos;re building.</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            Tell us about the product. We will reply within one business day with honest next steps — not a sales
            pitch, not a 20-page discovery template. Just the questions we need to answer.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="btn w-full bg-white text-brand-700 shadow-card hover:bg-brand-50 sm:w-auto"
            >
              Start a project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="btn w-full border border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

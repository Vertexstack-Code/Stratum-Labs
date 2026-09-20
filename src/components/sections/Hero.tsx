import Link from 'next/link'
import { site } from '@/content/site'
import { heroStack } from '@/content/tech'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons'

const promises = ['Senior-only team', 'Weekly staging releases', '30-day post-launch window']

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl"
      />

      <div className="container-custom relative py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-card sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </span>

          <h1 className="heading-1 mt-6 animate-fade-up">
            Design and engineering partner for{' '}
            <span className="text-brand-600">founders shipping SaaS, marketplaces, and native mobile apps</span>
          </h1>

          <p className="body-large mx-auto mt-6 max-w-2xl">
            We design, build, and ship web platforms and native iOS + Android apps for founders and product teams —
            from discovery through launch and beyond. Senior engineers, weekly releases, no handoffs.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#contact" className="btn-primary w-full sm:w-auto">
              Start a project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/#portfolio" className="btn-secondary w-full sm:w-auto">
              See our work
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckIcon className="h-4 w-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">We ship with</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {heroStack.map((tech, index) => (
              <li key={tech} className="flex items-center gap-5 text-sm font-medium text-slate-600">
                {tech}
                {index < heroStack.length - 1 ? <span aria-hidden className="text-slate-300">·</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

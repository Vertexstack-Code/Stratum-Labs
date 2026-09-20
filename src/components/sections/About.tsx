import Link from 'next/link'
import { site } from '@/content/site'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function About() {
  return (
    <section id="about" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">About {site.name}</span>
            <h2 className="heading-2 mt-3">A senior team building serious software for founders and operators.</h2>
          </Reveal>

          <Reveal delay={80} className="flex flex-col justify-center">
            <p className="body-large">
              {site.name} is a senior-only engineering and design studio. We partner with founders and product teams
              to design, build, and ship SaaS platforms, two-sided marketplaces, AI products, e-commerce, blockchain
              systems, games and native iOS + Android apps — from discovery to launch and beyond.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Every project is led by the engineers writing the code — not account managers. We work in weekly release
              cycles, review every pull request, and stay on for a minimum 30 days post-launch to tune against success
              metrics.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/#services" className="btn-ghost text-sm">
                See what we build
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/#process" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
                How we work →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

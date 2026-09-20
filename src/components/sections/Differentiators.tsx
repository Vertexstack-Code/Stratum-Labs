import { site } from '@/content/site'
import { differentiators } from '@/content/process'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { CheckIcon } from '@/components/ui/Icons'

export function Differentiators() {
  return (
    <section id="why-us" className="scroll-anchor section-padding bg-slate-900">
      <div className="container-custom">
        <div className="section-header-mb mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand-400">Why {site.name}</span>
          <h2 className="heading-2 mt-3 text-white">Senior engineering, end to end.</h2>
          <p className="body-large mt-4 text-slate-300">
            Four concrete things that separate us from a typical dev shop — with receipts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-white/20">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{item.body}</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-500/15 px-3 py-1.5 text-sm font-medium text-brand-300">
                  <CheckIcon className="h-4 w-4" />
                  {item.proof}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

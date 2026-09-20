import { processSteps } from '@/content/process'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function Process() {
  return (
    <section id="process" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="How we work"
          title="From first call to ongoing iteration."
          description="A practical five-step engagement. No theatrical 50-page decks — just the artifacts you need to ship."
        />

        <ol className="relative space-y-6 border-l border-slate-200 pl-8 sm:pl-10">
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 60}>
                <span
                  aria-hidden
                  className="absolute -left-[1.125rem] mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white font-display text-xs font-bold text-brand-600 shadow-card"
                >
                  {step.number}
                </span>
                <div className="card p-6 sm:p-7">
                  <h3 className="heading-4">{step.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate-600">{step.body}</p>
                  <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-slate-500">
                    {step.deliverables.map((item, i) => (
                      <li key={item} className="flex items-center gap-3">
                        {item}
                        {i < step.deliverables.length - 1 ? <span aria-hidden className="text-slate-300">·</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

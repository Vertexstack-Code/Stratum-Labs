import { services } from '@/content/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { CheckIcon } from '@/components/ui/Icons'

export function Services() {
  return (
    <section id="services" className="scroll-anchor section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What we build"
          title="Focused expertise in four areas."
          description="Every engagement is led by senior engineers who have shipped at scale. No generalists, no handoffs to juniors, no offshore subcontracting."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <article className="card-hover flex h-full flex-col p-7">
                <h3 className="heading-4">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.summary}</p>

                <ul className="mt-6 space-y-2.5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {service.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

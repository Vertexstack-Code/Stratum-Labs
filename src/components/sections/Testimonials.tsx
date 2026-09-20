import { testimonials } from '@/content/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What clients say"
          title="Working with senior engineers shows."
          description="A few words from founders and product leads we have shipped with. Names omitted where not authorised — happy to make intros on request."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 70}>
              <figure className="card h-full p-7">
                <span aria-hidden className="font-display text-4xl leading-none text-brand-200">
                  &ldquo;
                </span>
                <blockquote className="mt-3 leading-relaxed text-slate-700">{item.quote}</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <div className="text-sm font-semibold text-slate-900">{item.author}</div>
                  <div className="mt-0.5 text-sm text-slate-500">{item.context}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

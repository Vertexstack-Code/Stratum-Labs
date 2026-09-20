import { techGroups } from '@/content/tech'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function TechStack() {
  return (
    <section id="tech-stack" className="scroll-anchor section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Technology"
          title="A boring, proven stack — because reliability ships products."
          description="We pick tools based on what the product needs, not what is trending this quarter. Every choice is reversible, documented, and justified."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="card h-full p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

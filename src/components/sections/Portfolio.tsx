import Link from 'next/link'
import { featuredProjects, otherProjects } from '@/content/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/Icons'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Selected work"
          title="Shipped work — not mockups."
          description="Recent SaaS, marketplace, and web engagements. Open any featured case study for a full technical breakdown."
        />

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article className="card-hover overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50/60 px-7 py-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">
                    {project.eyebrow}
                  </span>
                </div>

                <div className="grid gap-8 p-7 lg:grid-cols-[1.15fr_1fr] lg:p-9">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="heading-3">{project.name}</h3>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                        >
                          {new URL(project.liveUrl).hostname.replace('www.', '')}
                          <ExternalLinkIcon className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>

                    <p className="mt-3 leading-relaxed text-slate-600">{project.summary}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="tag-brand">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-7 space-y-4">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Problem</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Outcome</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{project.outcome}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-col justify-between gap-7 rounded-lg border border-slate-100 bg-slate-50/60 p-6">
                    <dl className="grid grid-cols-2 gap-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dt className="sr-only">{metric.label}</dt>
                          <dd>
                            <span className="block font-display text-2xl font-bold tracking-tight text-slate-900">
                              {metric.value}
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-500">{metric.label}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div>
                      <ul className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li key={tech} className="tag bg-white">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/work/${project.slug}`} className="btn-ghost mt-6 text-sm">
                        Read the full case study
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">More projects</span>
              <p className="mt-2 text-slate-600">Representative projects from our archive.</p>
            </div>
            <Link href="/work" className="btn-ghost text-sm">
              View all work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <article className="card-hover h-full p-7">
                  <span className="tag">{project.kind}</span>
                  <h3 className="heading-4 mt-4">{project.name}</h3>
                  <dl className="mt-4 space-y-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Problem</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-slate-600">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Outcome</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-slate-600">{project.outcome}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                    {project.stack.map((tech) => (
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
      </div>
    </section>
  )
}

import Link from 'next/link'
import { projects } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/Icons'
import { ProjectShot } from '@/components/ui/ProjectShot'

export const metadata = pageMetadata({
  title: 'Work',
  description:
    'SaaS platforms, two-sided marketplaces, vertical software and internal tools we have designed, built and shipped.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <section className="section-padding border-b border-slate-200 bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Selected work"
            title="Products we designed, built and shipped."
            description="Every engagement below went to production. Open a case study for the architecture, the constraints and what actually shipped."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <article className="card-hover flex h-full flex-col p-7">
                  {project.screenshot ? (
                    <ProjectShot
                      {...project.screenshot}
                      host={project.liveUrl ? new URL(project.liveUrl).hostname.replace('www.', '') : undefined}
                      priority={index < 2}
                      className="mb-6"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  ) : null}

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-brand">{project.kind}</span>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-brand-600"
                      >
                        {new URL(project.liveUrl).hostname.replace('www.', '')}
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <h2 className="heading-4 mt-4 text-xl">{project.name}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{project.summary}</p>

                  {project.metrics.length > 0 ? (
                    <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                      {project.metrics.slice(0, 4).map((metric) => (
                        <div key={metric.label}>
                          <dt className="sr-only">{metric.label}</dt>
                          <dd>
                            <span className="block font-display text-xl font-bold text-slate-900">
                              {metric.value}
                            </span>
                            <span className="text-xs text-slate-500">{metric.label}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.detail ? (
                    <Link href={`/work/${project.slug}`} className="btn-ghost mt-6 text-sm">
                      Read the case study
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

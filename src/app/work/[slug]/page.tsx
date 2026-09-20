import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getProject } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/Icons'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return pageMetadata({ title: 'Case study not found', description: '', path: '/work' })

  return pageMetadata({
    title: `${project.name} — ${project.kind} case study`,
    description: project.summary,
    path: `/work/${project.slug}`,
  })
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project?.detail) notFound()

  const { detail } = project

  return (
    <>
      <article>
        <header className="border-b border-slate-200 bg-slate-50">
          <div className="container-custom py-14 lg:py-20">
            <Link href="/work" className="text-sm font-medium text-slate-500 hover:text-slate-900">
              ← All work
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-brand">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="heading-1 mt-5">{project.name}</h1>
            <p className="body-large mt-5 max-w-3xl">{project.summary}</p>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary mt-7"
              >
                Visit the live product
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            ) : null}

            <dl className="mt-12 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Year</dt>
                <dd className="mt-1.5 text-sm text-slate-700">{detail.year}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Duration</dt>
                <dd className="mt-1.5 text-sm text-slate-700">{detail.duration}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Our role</dt>
                <dd className="mt-1.5 text-sm text-slate-700">{detail.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Platforms</dt>
                <dd className="mt-1.5 text-sm text-slate-700">{detail.platforms.join(' · ')}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="container-custom py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
            <div className="max-w-3xl space-y-14">
              <section>
                <h2 className="heading-3">Context</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{detail.context}</p>
              </section>

              <section>
                <h2 className="heading-3">The problem</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{project.problem}</p>
                <div className="mt-8 space-y-6">
                  {detail.challenges.map((item) => (
                    <div key={item.title} className="border-l-2 border-slate-200 pl-5">
                      <h3 className="heading-4 text-base">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading-3">How we built it</h2>
                <div className="mt-6 space-y-6">
                  {detail.approach.map((item) => (
                    <div key={item.title} className="card p-6">
                      <h3 className="heading-4 text-base">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading-3">Outcome</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{project.outcome}</p>
                <ul className="mt-6 space-y-3">
                  {detail.results.map((result) => (
                    <li key={result} className="flex gap-3 leading-relaxed text-slate-600">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="card p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">By the numbers</h2>
                <dl className="mt-4 space-y-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="sr-only">{metric.label}</dt>
                      <dd>
                        <span className="block font-display text-2xl font-bold text-slate-900">{metric.value}</span>
                        <span className="text-xs text-slate-500">{metric.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Stack</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link href="/#contact" className="btn-primary mt-8 w-full text-sm">
                  Start a project
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  )
}

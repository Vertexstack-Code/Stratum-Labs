import Link from 'next/link'
import { posts } from '@/content/posts'
import { pageMetadata } from '@/lib/seo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { ArrowRightIcon } from '@/components/ui/Icons'

export const metadata = pageMetadata({
  title: 'Blog',
  description: 'Notes on scoping, architecture and shipping software — written by the engineers doing the work.',
  path: '/blog',
})

const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export default function BlogPage() {
  return (
    <>
      <section className="section-padding border-b border-slate-200 bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Blog"
            title="Notes from the build."
            description="Short, practical writing on scoping, architecture and delivery — no thought-leadership filler."
            align="left"
          />

          <div className="mx-auto max-w-3xl divide-y divide-slate-200">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <article className="py-8 first:pt-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                    <span className="tag">{post.tag}</span>
                    <time dateTime={post.date}>{formatter.format(new Date(post.date))}</time>
                    <span aria-hidden className="text-slate-300">
                      ·
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="heading-4 mt-3 text-xl">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 leading-relaxed text-slate-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="btn-ghost mt-4 text-sm">
                    Read the post
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
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

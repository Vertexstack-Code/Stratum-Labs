import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, posts } from '@/content/posts'
import { pageMetadata } from '@/lib/seo'
import { CtaBanner } from '@/components/sections/CtaBanner'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return pageMetadata({ title: 'Post not found', description: '', path: '/blog' })

  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` })
}

const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <Link href="/blog" className="text-sm font-medium text-slate-500 hover:text-slate-900">
              ← All posts
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span className="tag">{post.tag}</span>
              <time dateTime={post.date}>{formatter.format(new Date(post.date))}</time>
              <span aria-hidden className="text-slate-300">
                ·
              </span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="heading-2 mt-4">{post.title}</h1>

            <div className="mt-8 space-y-5 border-t border-slate-200 pt-8">
              {post.body.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  )
}

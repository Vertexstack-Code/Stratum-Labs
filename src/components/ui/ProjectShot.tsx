import Image from 'next/image'
import type { Screenshot } from '@/content/projects'

type Props = Screenshot & {
  /** Rendered in the browser frame's address bar. Ignored when `frame` is 'plain'. */
  host?: string
  /** Set on the first screenshot above the fold so it is not lazy-loaded. */
  priority?: boolean
  sizes?: string
  className?: string
}

/**
 * A product screenshot.
 *
 * Intrinsic `width`/`height` drive the layout, so each image keeps its own
 * aspect ratio — presentation boards are far wider than a browser window, and
 * forcing them into one fixed ratio crops the outer panels off.
 *
 * `frame: 'browser'` wraps a captured web page in browser chrome so it reads as
 * a running site. `frame: 'plain'` (the default) suits showcase boards, which
 * carry their own background and are not a single browser window.
 */
export function ProjectShot({
  src,
  alt,
  width,
  height,
  frame = 'plain',
  host,
  priority = false,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  className = '',
}: Props) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className="h-auto w-full"
    />
  )

  if (frame === 'browser') {
    return (
      <figure className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card ${className}`}>
        <div className="flex items-center gap-2.5 border-b border-slate-200 bg-slate-100 px-3.5 py-2.5">
          <span aria-hidden className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </span>
          {host ? (
            <span className="truncate rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-500">
              {host}
            </span>
          ) : null}
        </div>
        {image}
      </figure>
    )
  }

  return (
    <figure className={`overflow-hidden rounded-xl border border-slate-200 shadow-card ${className}`}>{image}</figure>
  )
}

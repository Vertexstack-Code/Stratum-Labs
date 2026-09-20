'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Stagger in milliseconds. */
  delay?: number
  className?: string
}

/**
 * Fades content in the first time it enters the viewport.
 *
 * The hidden state is applied by CSS only under `html.js` (set by an inline
 * script in the root layout), so if JavaScript never runs — no-JS browsers,
 * crawlers, a hydration failure — the content renders fully visible instead
 * of staying at opacity 0.
 */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal={visible ? 'in' : 'out'}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  )
}

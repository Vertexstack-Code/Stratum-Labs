'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { primaryNav, secondaryNav, site } from '@/content/site'
import { CloseIcon, Logo, MenuIcon } from '@/components/ui/Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [...primaryNav, ...secondaryNav]

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'border-slate-200 bg-white/90 backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      <div className="container-custom flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/#contact" className="btn-primary px-5 py-2 text-sm">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-custom flex flex-col py-4">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-slate-100 py-3 text-base font-medium text-slate-700 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary mt-4">
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

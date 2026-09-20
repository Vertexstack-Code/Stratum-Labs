import Link from 'next/link'
import { footerNav, site } from '@/content/site'
import { ArrowRightIcon, Logo } from '@/components/ui/Icons'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-custom py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{site.description}</p>
            <Link href="/#contact" className="btn-ghost mt-5 text-sm">
              Start a conversation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Services</h2>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Company</h2>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            {footerNav.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

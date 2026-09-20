import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-lg py-16 text-center">
          <span className="eyebrow">404</span>
          <h1 className="heading-2 mt-3">This page does not exist.</h1>
          <p className="body-large mt-4">
            The link may be out of date. Start from the homepage, or tell us what you were looking for.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary w-full sm:w-auto">
              Back to homepage
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

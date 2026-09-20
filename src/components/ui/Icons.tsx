import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="M14 4h6v6M20 4l-8 8" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg aria-hidden {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

/** Brand mark — three stacked strata. Swap this for the client's logo. */
export function Logo(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="8" className="fill-brand-600" />
      <path d="M8 12.5 16 8l8 4.5-8 4.5-8-4.5Z" className="fill-white" />
      <path d="m8 17 8 4.5L24 17" className="stroke-white/70" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m8 21.5 8 4.5 8-4.5" className="stroke-white/40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

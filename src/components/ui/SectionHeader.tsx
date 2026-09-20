import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, description, align = 'center', className = '' }: Props) {
  const isCentered = align === 'center'
  return (
    <div
      className={`section-header-mb ${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-2 mt-3">{title}</h2>
      {description ? <p className="body-large mt-4">{description}</p> : null}
    </div>
  )
}

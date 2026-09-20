type Props = { value: string; label: string; className?: string }

export function Stat({ value, label, className = '' }: Props) {
  return (
    <div className={className}>
      <div className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  )
}

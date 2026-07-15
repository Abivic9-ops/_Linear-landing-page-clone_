import { cn } from '@/lib/utils'
import type { StatusType } from '@/types'

interface StatusPillProps {
  status: StatusType
  className?: string
}

const STATUS_STYLES: Record<StatusType, { color: string; label: string }> = {
  done: { color: 'var(--color-status-done)', label: 'Done' },
  progress: { color: 'var(--color-status-progress)', label: 'In Progress' },
  todo: { color: 'var(--color-status-todo)', label: 'Todo' },
  urgent: { color: 'var(--color-status-urgent)', label: 'Urgent' },
}

export function StatusPill({ status, className }: StatusPillProps) {
  const { color, label } = STATUS_STYLES[status]

  return (
    <span
      className={cn('status-pill', className)}
      style={{ color, backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)` }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  )
}

import { StatusPill } from './StatusPill'
import type { StatusType } from '@/types'

interface IssueRowProps {
  identifier: string
  title: string
  status: StatusType
  assigneeInitials?: string
}

export function IssueRow({ identifier, title, status, assigneeInitials }: IssueRowProps) {
  return (
    <div className="issue-row">
      <span className="w-16 shrink-0 font-mono text-[0.625rem] text-[var(--color-text-muted)]">
        {identifier}
      </span>
      <span className="flex-1 truncate text-[var(--color-text-primary)]">{title}</span>
      <StatusPill status={status} />
      {assigneeInitials && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-raised)] text-[0.5rem] font-semibold text-[var(--color-text-muted)]">
          {assigneeInitials}
        </span>
      )}
    </div>
  )
}

import { Bot, FileCode2, GitPullRequest, CheckCircle2 } from 'lucide-react'

const LOG_ENTRIES = [
  {
    icon: Bot,
    time: '2m ago',
    action: 'Drafted spec for',
    target: 'ENG-1210: Webhook retry logic',
    detail: 'Analyzed existing codebase, identified 3 failure modes, proposed exponential backoff strategy.',
    status: 'done',
  },
  {
    icon: FileCode2,
    time: '8m ago',
    action: 'Wrote implementation for',
    target: 'ENG-1208: Rate limiter middleware',
    detail: 'Created sliding window rate limiter using Redis. Added 4 unit tests and 1 integration test.',
    status: 'done',
  },
  {
    icon: GitPullRequest,
    time: '15m ago',
    action: 'Opened PR for',
    target: 'ENG-1205: Fix pagination cursor',
    detail: 'PR #847 — 3 files changed, 42 additions, 18 deletions. All CI checks passing.',
    status: 'progress',
  },
  {
    icon: CheckCircle2,
    time: '22m ago',
    action: 'Updated status for',
    target: 'ENG-1201: Migrate auth tokens',
    detail: 'Marked as done. All 1,240 tokens successfully migrated to new format.',
    status: 'done',
  },
]

export function AgentLogMock() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <Bot className="h-4 w-4 text-[var(--color-accent)]" />
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">AI Agent Activity</span>
        <span className="ml-auto flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-done)]" />
          <span className="text-[0.625rem] text-[var(--color-status-done)]">4 active</span>
        </span>
      </div>
      <div className="divide-y divide-[var(--color-border)]">
        {LOG_ENTRIES.map((entry, i) => (
          <div key={i} className="flex gap-3 px-4 py-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-raised)] text-[var(--color-accent)]">
              <entry.icon className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[0.625rem] font-medium text-[var(--color-text-muted)]">
                  {entry.time}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    entry.status === 'done'
                      ? 'bg-[var(--color-status-done)]'
                      : 'bg-[var(--color-status-progress)]'
                  }`}
                />
              </div>
              <p className="mt-0.5 text-[0.6875rem] leading-snug text-[var(--color-text-primary)]">
                {entry.action}{' '}
                <span className="font-medium text-[var(--color-accent)]">{entry.target}</span>
              </p>
              <p className="mt-1 text-[0.625rem] leading-relaxed text-[var(--color-text-muted)]">
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { StatusPill } from '../StatusPill'

const TIMELINE_ITEMS = [
  { label: 'Auth overhaul', start: 10, width: 35, status: 'progress' as const, owner: 'PA' },
  { label: 'Mobile app v2', start: 25, width: 45, status: 'progress' as const, owner: 'JO' },
  { label: 'API v3 migration', start: 5, width: 55, status: 'todo' as const, owner: 'SL' },
  { label: 'Dashboard redesign', start: 40, width: 30, status: 'done' as const, owner: 'MW' },
  { label: 'Infra cost reduction', start: 55, width: 25, status: 'todo' as const, owner: 'AS' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

export function TimelineMock() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">Roadmap</span>
        <span className="text-[0.625rem] text-[var(--color-text-muted)]">Q1 – Q3 2026</span>
      </div>
      <div className="p-4">
        {/* Month headers */}
        <div className="mb-3 flex pl-[120px]">
          {MONTHS.map((m) => (
            <div key={m} className="flex-1 text-center text-[0.5rem] text-[var(--color-text-muted)]">
              {m}
            </div>
          ))}
        </div>
        {/* Rows */}
        <div className="space-y-2.5">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center">
              <div className="w-[120px] shrink-0 truncate pr-3 text-right text-[0.625rem] font-medium text-[var(--color-text-muted)]">
                {item.label}
              </div>
              <div className="relative flex-1">
                <div className="h-5 rounded bg-[var(--color-surface-raised)]" />
                <div
                  className="absolute top-0 flex h-5 items-center gap-1.5 rounded px-2"
                  style={{
                    left: `${item.start}%`,
                    width: `${item.width}%`,
                    backgroundColor: 'var(--color-accent)',
                    opacity: 0.25,
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded opacity-100"
                    style={{ backgroundColor: 'var(--color-accent)', width: '100%' }}
                  />
                  <span className="relative z-10 flex items-center gap-1 text-[0.5rem] font-semibold text-[var(--color-text-primary)]">
                    {item.label}
                    <StatusPill status={item.status} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

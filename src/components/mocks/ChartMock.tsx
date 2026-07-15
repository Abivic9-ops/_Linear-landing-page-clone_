const BAR_DATA = [
  { label: 'Mon', completed: 18, total: 24 },
  { label: 'Tue', completed: 22, total: 26 },
  { label: 'Wed', completed: 15, total: 20 },
  { label: 'Thu', completed: 28, total: 30 },
  { label: 'Fri', completed: 20, total: 22 },
]

const METRICS = [
  { label: 'Velocity', value: '+18%', trend: 'up' },
  { label: 'Cycle time', value: '2.1d', trend: 'down' },
  { label: 'Completion', value: '94%', trend: 'up' },
  { label: 'Blocked', value: '3', trend: 'down' },
]

export function ChartMock() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">Project Health</span>
        <span className="text-[0.625rem] text-[var(--color-text-muted)]">Last 5 days</span>
      </div>

      <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] sm:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="bg-[var(--color-surface)] p-4">
            <div className="text-[0.625rem] text-[var(--color-text-muted)]">{m.label}</div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg font-semibold text-[var(--color-text-primary)]">{m.value}</span>
              <span
                className={`text-[0.5rem] font-medium ${
                  m.trend === 'up' ? 'text-[var(--color-status-done)]' : 'text-[var(--color-status-progress)]'
                }`}
              >
                {m.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="flex items-end gap-3" style={{ height: 120 }}>
          {BAR_DATA.map((d) => {
            const pct = (d.completed / d.total) * 100
            return (
              <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="relative w-full" style={{ height: 80 }}>
                  {/* Total bar */}
                  <div className="absolute bottom-0 w-full rounded-t bg-[var(--color-surface-raised)]" style={{ height: `${(d.total / 30) * 100}%` }} />
                  {/* Completed bar */}
                  <div
                    className="absolute bottom-0 w-full rounded-t"
                    style={{
                      height: `${(d.completed / 30) * 100}%`,
                      backgroundColor: 'var(--color-accent)',
                      opacity: 0.8,
                    }}
                  />
                </div>
                <span className="text-[0.5rem] text-[var(--color-text-muted)]">{d.label}</span>
              </div>
            )
          })}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[0.5rem] text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-sm bg-[var(--color-accent)] opacity-80" />
            Completed
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-sm bg-[var(--color-surface-raised)]" />
            Remaining
          </span>
        </div>
      </div>
    </div>
  )
}

import { StatusPill } from '../StatusPill'
import { Inbox, MessageSquare } from 'lucide-react'

const COLUMNS = [
  {
    title: 'New',
    count: 3,
    items: [
      { id: 'ASK-401', text: 'Customer reports login timeout on mobile', source: 'Slack' },
      { id: 'ASK-402', text: 'Feature request: bulk CSV import', source: 'Email' },
      { id: 'ASK-403', text: 'Bug: invoice PDF not downloading', source: 'Linear' },
    ],
  },
  {
    title: 'Triaged',
    count: 2,
    items: [
      { id: 'ASK-398', text: 'Performance regression on dashboard', source: 'Slack' },
      { id: 'ASK-395', text: 'SSO redirect loop for Okta users', source: 'API' },
    ],
  },
  {
    title: 'Assigned',
    count: 2,
    items: [
      { id: 'ASK-390', text: 'Add two-factor authentication', source: 'Linear' },
      { id: 'ASK-388', text: 'Update webhook retry logic', source: 'Email' },
    ],
  },
]

export function KanbanMock() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <Inbox className="h-4 w-4 text-[var(--color-accent)]" />
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">Linear Asks</span>
        <span className="ml-auto text-[0.625rem] text-[var(--color-text-muted)]">Auto-triaged</span>
      </div>
      <div className="flex gap-3 overflow-x-auto p-4">
        {COLUMNS.map((col) => (
          <div key={col.title} className="min-w-[200px] flex-1 sm:min-w-[180px]">
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-[var(--color-text-muted)]">
              <span>{col.title}</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-surface-raised)] text-[0.5rem]">
                {col.count}
              </span>
            </div>
            <div className="space-y-2">
              {col.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-3"
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-mono text-[0.5rem] text-[var(--color-text-muted)]">
                      {item.id}
                    </span>
                    <span className="flex items-center gap-1 text-[0.5rem] text-[var(--color-text-muted)]">
                      <MessageSquare className="h-2.5 w-2.5" />
                      {item.source}
                    </span>
                  </div>
                  <p className="text-[0.625rem] leading-snug text-[var(--color-text-primary)]">
                    {item.text}
                  </p>
                  <div className="mt-2">
                    <StatusPill status="todo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

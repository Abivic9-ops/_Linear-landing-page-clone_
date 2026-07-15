import { IssueRow } from './IssueRow'
import {
  Inbox,
  CircleDot,
  Layers,
  BarChart3,
  Settings,
  Search,
  Plus,
} from 'lucide-react'

const SIDEBAR_ITEMS = [
  { icon: Inbox, label: 'Inbox', active: false },
  { icon: CircleDot, label: 'My Issues', active: true },
  { icon: Layers, label: 'Projects', active: false },
  { icon: BarChart3, label: 'Views', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const ISSUES = [
  { identifier: 'ENG-1204', title: 'Implement SSO for enterprise customers', status: 'progress' as const, assigneeInitials: 'PA' },
  { identifier: 'ENG-1198', title: 'Fix memory leak in WebSocket connection', status: 'done' as const, assigneeInitials: 'JO' },
  { identifier: 'ENG-1195', title: 'Add dark mode toggle to settings page', status: 'todo' as const, assigneeInitials: 'SL' },
  { identifier: 'ENG-1190', title: 'Refactor authentication middleware', status: 'urgent' as const, assigneeInitials: 'MW' },
  { identifier: 'ENG-1187', title: 'Update API docs for v3 endpoints', status: 'done' as const, assigneeInitials: 'AS' },
  { identifier: 'ENG-1183', title: 'Migrate database to PostgreSQL 16', status: 'progress' as const, assigneeInitials: 'DP' },
]

export function ProductPanel() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex min-h-[340px] md:min-h-[420px]">
        {/* Sidebar */}
        <div className="hidden w-48 shrink-0 border-r border-[var(--color-border)] p-3 md:block">
          <div className="mb-4 flex items-center gap-2 px-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-accent)] text-[0.625rem] font-bold text-white">
              M
            </div>
            <span className="text-xs font-semibold text-[var(--color-text-primary)]">Meridian</span>
          </div>
          <div className="mb-3 flex items-center gap-1.5 rounded-md bg-[var(--color-surface-raised)] px-2 py-1.5 text-[var(--color-text-muted)]">
            <Search className="h-3 w-3" />
            <span className="text-[0.625rem]">Search</span>
          </div>
          <nav className="space-y-0.5">
            {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`mock-sidebar-item ${active ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)]' : ''}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </div>
            ))}
          </nav>
        </div>

        {/* Issue List */}
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-3 sm:px-4">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">My Issues</h3>
            <button className="btn-primary !px-2.5 !py-1.5 !text-[0.625rem]">
              <Plus className="h-3 w-3" />
              New
            </button>
          </div>
          <div className="flex-1 divide-y divide-[var(--color-border)] p-2">
            {ISSUES.map((issue) => (
              <IssueRow key={issue.identifier} {...issue} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </div>
  )
}

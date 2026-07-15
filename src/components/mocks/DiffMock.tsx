import { GitBranch, Plus, Minus, MessageSquare } from 'lucide-react'

const DIFF_LINES = [
  { type: 'context', num: 42, content: '  async function processWebhook(payload: WebhookPayload) {' },
  { type: 'remove', num: 43, content: '    const retryCount = 0;' },
  { type: 'add', num: 43, content: '    const retryConfig = { maxRetries: 3, baseDelay: 1000 };', additions: 1 },
  { type: 'context', num: 44, content: '    try {' },
  { type: 'remove', num: 45, content: '      await deliverEvent(payload);', deletions: 1 },
  { type: 'add', num: 45, content: '      return await withRetry(() => deliverEvent(payload), retryConfig);', additions: 1 },
  { type: 'context', num: 46, content: '    } catch (error) {' },
  { type: 'context', num: 47, content: '      logger.error("Webhook delivery failed", { error });' },
  { type: 'add', num: 48, content: '      await queueForManualReview(payload);', additions: 1 },
  { type: 'context', num: 49, content: '    }' },
  { type: 'context', num: 50, content: '  }' },
]

const TYPE_STYLES = {
  context: 'text-[var(--color-text-muted)]',
  add: 'bg-[var(--color-status-done)]/10 text-[var(--color-status-done)]',
  remove: 'bg-[var(--color-status-urgent)]/10 text-[var(--color-status-urgent)]',
}

export function DiffMock() {
  return (
    <div className="card-panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-[var(--color-accent)]" />
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">PR #847</span>
          <span className="rounded-full bg-[var(--color-status-done)]/15 px-2 py-0.5 text-[0.5rem] font-semibold text-[var(--color-status-done)]">
            CI Passing
          </span>
        </div>
        <div className="flex items-center gap-3 text-[0.625rem] text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <Plus className="h-3 w-3 text-[var(--color-status-done)]" />
            3
          </span>
          <span className="flex items-center gap-1">
            <Minus className="h-3 w-3 text-[var(--color-status-urgent)]" />
            2
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            1
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-[0.6rem]">
          <tbody>
            {DIFF_LINES.map((line, i) => (
              <tr key={i} className={TYPE_STYLES[line.type as keyof typeof TYPE_STYLES]}>
                <td className="w-10 select-none border-r border-[var(--color-border)] px-2 py-0.5 text-right text-[var(--color-text-muted)]/50">
                  {line.num}
                </td>
                <td className="w-6 select-none px-1.5 py-0.5 text-center">
                  {line.type === 'add' && <Plus className="inline h-2.5 w-2.5" />}
                  {line.type === 'remove' && <Minus className="inline h-2.5 w-2.5" />}
                </td>
                <td className="whitespace-pre px-2 py-0.5">{line.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

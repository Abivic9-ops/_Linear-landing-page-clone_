import { cn } from '@/lib/utils'

interface EyebrowLabelProps {
  accent?: boolean
  className?: string
  children: React.ReactNode
}

export function EyebrowLabel({
  accent = false,
  className,
  children,
}: EyebrowLabelProps) {
  return (
    <span className={cn(accent ? 'eyebrow-accent' : 'eyebrow-label', className)}>
      {children}
    </span>
  )
}

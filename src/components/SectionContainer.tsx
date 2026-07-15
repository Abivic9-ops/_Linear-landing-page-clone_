import { cn } from '@/lib/utils'

interface SectionContainerProps {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

export function SectionContainer({
  className,
  children,
  as: Tag = 'section',
}: SectionContainerProps) {
  return (
    <Tag className={cn('section-container', className)}>
      {children}
    </Tag>
  )
}

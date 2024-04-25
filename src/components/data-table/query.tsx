import { LucideIcon, LucideProps } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

import { Button, ButtonProps } from '../ui/button'

// Query Table - Root
const QueryTable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn('flex items-center gap-2', className)}
  />
))

QueryTable.displayName = 'QueryTable'

// Query Table - Icon
const QueryTableIcon = ({
  icon: Icon,
  ...props
}: { icon: LucideIcon } & LucideProps) => {
  return (
    <div>
      <Button
        className="w-min rounded-full bg-background p-2"
        size={'sm'}
        variant={'shimmer'}
      >
        <Icon {...props} />
      </Button>
    </div>
  )
}

QueryTableIcon.displayName = 'QueryTableIcon'

const QueryTableActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn('flex w-full justify-end space-x-4', className)}
  />
))

QueryTableActions.displayName = 'QueryTableActions'

const QueryTableButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button ref={ref} {...props} className={cn('w-min', className)} />
  ),
)

QueryTableButton.displayName = 'QueryTableButton'

export { QueryTable, QueryTableIcon, QueryTableActions, QueryTableButton }

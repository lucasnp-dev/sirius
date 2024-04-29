import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function Steps({
  step,
  title,
  children,
}: {
  step: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-full pb-4">
      <div className="flex items-center space-x-2">
        <Button
          className="pointer-events-none h-4 w-4 rounded-full px-3 py-3 text-xs"
          size={'sm'}
          variant={'shimmer'}
        >
          {step}
        </Button>
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="flex max-w-full space-x-2">
        <div className="w-6">
          <Separator className="mx-auto mt-2 h-full" orientation="vertical" />
        </div>
        <div className="max-w-4xl flex-1 space-y-8 pl-4 pt-4">{children}</div>
      </div>
    </div>
  )
}

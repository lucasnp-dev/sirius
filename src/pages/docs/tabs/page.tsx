import { code, code2, code3 } from '@/components/_examples/code'
import TabsExample from '@/components/_examples/tabs'
import { BashBlock, CodeBlock } from '@/components/code/block'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function DocsTabsPage() {
  return (
    <div className="space-y-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tabs Animated</h1>
        <p className="text-muted-foreground">Motion Tabs</p>
      </div>
      {/** Demo Block */}
      <div className="relative flex justify-center overflow-hidden rounded-xl border border-border py-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TabsExample />
      </div>
      {/** Code Block */}
      <div className="max-w-full space-y-4 overflow-x-auto">
        <Steps step={1} title="Install the following dependencies:">
          <BashBlock
            title="shadcn-ui tabs"
            code={'npx shadcn-ui@latest add tabs'}
            language="bash"
          />
          <BashBlock
            title="framer-motion"
            code={'npm i framer-motion'}
            language="bash"
          />
        </Steps>

        <Steps step={2} title="Copy and paste the component:">
          <CodeBlock code={code2} copy={code3} language="tsx" />
        </Steps>
      </div>
      {/** Usage */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Now you can use it!</h2>
          <Separator className="my-4 w-full" />
        </div>
        <CodeBlock code={code} language="tsx" />
      </div>
    </div>
  )
}

function Steps({
  step,
  title,
  children,
}: {
  step: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="pb-4">
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
      <div className="flex space-x-2">
        <div className="w-6">
          <Separator className="mx-auto mt-2 h-full" orientation="vertical" />
        </div>
        <div className="flex-1 space-y-8 pl-4 pt-4">{children}</div>
      </div>
    </div>
  )
}

import { code } from '@/components/_examples/code'
import TabsExample from '@/components/_examples/tabs'
import { CodeBlock } from '@/components/code/block'

export function DocsTabsPage() {
  return (
    <div className="space-y-4 py-8">
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
      <div className="max-w-full overflow-x-auto">
        <CodeBlock code={code} language="tsx" />
      </div>
    </div>
  )
}

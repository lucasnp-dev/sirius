import { useLoaderData } from 'react-router-dom'

import { ComponentType } from '@/@types/components'
import { CodeBlock } from '@/components/code-block'
import { Separator } from '@/components/ui/separator'

import { Steps } from './_components/steps'

export function ComponentPage() {
  const { component } = useLoaderData() as { component: ComponentType }

  return (
    <div className="max-w-full space-y-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{component.title}</h1>
        <p className="text-muted-foreground">{component.description}</p>
      </div>
      {/** Demo Block */}
      <div className="relative flex justify-center overflow-hidden rounded-xl border border-border py-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <component.component />
      </div>
      {/** Code Block */}
      <div className="max-w-full space-y-4 overflow-x-auto">
        {component.steps.map(({ codes, ...rest }) => (
          <Steps key={rest.step} {...rest}>
            {codes.map((code) => (
              <CodeBlock key={code.language} {...code} />
            ))}
          </Steps>
        ))}
      </div>
      {/** Usage */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Now you can use it!</h2>
          <Separator className="my-4 w-full" />
        </div>
        <CodeBlock {...component.usage} />
      </div>
    </div>
  )
}

'use client'

import { BashBlock, CodeBlock } from '@/components/code-block'
import { DemoBlock } from '@/components/demo-block'
import { Separator } from '@/components/ui/separator'
import { useAppContext } from '@/contexts/app-contexts'

export default function ComponentsPage() {
  const { state: app } = useAppContext()

  return (
    <>
      {app && app.page && (
        <div className="space-y-8">
          {app.page.demo && (
            <DemoBlock>
              <app.page.demo />
            </DemoBlock>
          )}

          <div>{app.page.beforeDemo && <app.page.beforeDemo />}</div>

          <div className="space-y-16">
            {app.page.installation && (
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border dark:bg-black">
                    1
                  </span>
                  <h3 className="text-lg font-semibold">
                    Install the following dependencies:
                  </h3>
                </div>
                <Separator className="mb-4 mt-2" />

                <div className="space-y-4">
                  {app.page.installation.bashs.map((bash, index) => (
                    <div key={`code-${index}`}>
                      <BashBlock codes={bash.codes} language={bash.language} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {app.page.copy && (
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border dark:bg-black">
                    {app.page.installation ? 2 : 1}
                  </span>
                  <h3 className="text-lg font-semibold">
                    Copy and paste the component:
                  </h3>
                </div>
                <Separator className="mb-4 mt-2" />

                <div className="space-y-4">
                  <CodeBlock
                    file={app.page.copy.bash.pathFile}
                    title={app.page.copy.bash.title}
                    language={app.page.copy.bash.language}
                  />
                </div>
              </div>
            )}

            {app.page.usage && (
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold">
                    Now you can use it!
                  </h3>
                </div>
                <Separator className="mb-4 mt-2" />

                <div className="space-y-4">
                  <CodeBlock
                    file={app.page.usage.bash.pathFile}
                    language={app.page.usage.bash.language}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

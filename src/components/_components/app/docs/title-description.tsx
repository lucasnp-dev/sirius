'use client'

import { useAppContext } from '@/contexts/app-contexts'

export default function TitleAndDescription() {
  const { state: app } = useAppContext()

  return (
    <>
      {app && app.page && (
        <div className="space-y-12">
          <div>
            <h1 className="text-2xl font-bold">{app.page.title}</h1>
            <p className="text-muted-foreground">{app.page?.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

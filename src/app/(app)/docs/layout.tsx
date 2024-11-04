import React from 'react'

import TitleAndDescription from '@/components/_components/app/docs/title-description'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <TitleAndDescription />
      <div>{children}</div>
    </div>
  )
}

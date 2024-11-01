import React from 'react'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className="p-6">
        <img src="/logo.svg" width={200} />
      </header>
      {children}
    </div>
  )
}

'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

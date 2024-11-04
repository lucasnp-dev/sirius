'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
// eslint-disable-next-line import/no-unresolved
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

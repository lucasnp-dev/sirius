'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

export function Logo() {
  const theme = useTheme()

  const currentTheme =
    theme.theme === 'system' ? theme.systemTheme : theme.theme

  return (
    <Link href="/">
      {currentTheme === 'dark' ? (
        <img src="/logo.svg" alt="Logo" width={150} />
      ) : (
        <img src="/logo-dark.svg" alt="Logo" width={150} />
      )}
    </Link>
  )
}

'use client'

import { useTheme } from 'next-themes'

/**
 * Shine border
 * @returns {JSX.Element}
 * @example
 * <div className="relative">
 * <ShineBorder />
 * </div>
 */
export function ShineBorder() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent dark:hidden"
    />
  )
}

export function LightBorder() {
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div
      data-theme={currentTheme}
      aria-hidden="true"
      className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 data-[theme=light]:hidden md:max-w-[400px]"
      style={{
        background:
          'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)',
      }}
    />
  )
}

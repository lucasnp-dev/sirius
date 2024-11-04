import { ReactNode } from 'react'

import { Menu } from '@/components/_components/app/menu'
import { Sidebar } from '@/components/_components/app/sidebar'
import { ThemeProvider } from '@/components/_components/app/theme-provider'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen flex-col">
        <Menu />
        <main className="flex-1max-lg:px-4 container relative lg:grid lg:grid-cols-12">
          <aside className="max-lg:hidden lg:sticky lg:top-14 lg:col-span-3 lg:max-h-screen">
            <Sidebar />
          </aside>
          <div className="relative space-y-4 lg:col-span-9">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}

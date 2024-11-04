import '../../styles/app.css'

import { ReactNode } from 'react'

import BreadCrumbs from '@/components/_components/app/breadcrumbs'
import { Menu } from '@/components/_components/app/menu'
import { Providers } from '@/components/_components/app/providers'
import { Sidebar } from '@/components/_components/app/sidebar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col">
        <Menu />
        <main className="flex-1max-lg:px-4 container relative lg:grid lg:grid-cols-12 mx-auto">
          <aside className="max-lg:hidden lg:sticky lg:top-14 lg:col-span-3 lg:max-h-screen">
            <Sidebar />
          </aside>
          <div className="relative space-y-4 py-4 lg:col-span-9">
            <BreadCrumbs />
            {children}
          </div>
        </main>
      </div>
    </Providers>
  )
}

import { Outlet, useLocation } from 'react-router-dom'

import { Menu } from '@/components/menu'
import { Sidebar } from '@/components/sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcumbItem {
  name: string
}

interface BreadcumbSection {
  path: string
  item: BreadcumbItem
}

const breadcumbs: BreadcumbSection[] = [
  {
    path: '/docs',
    item: {
      name: 'Introduction',
    },
  },
  {
    path: '/docs/components/tabs',
    item: {
      name: 'Tabs',
    },
  },
  {
    path: '/docs/components/table',
    item: {
      name: 'Table',
    },
  },
]

function returnBreadcumb(path: string) {
  return breadcumbs.find((section) => section.path === path)?.item
}

export function DocsLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Menu />
      <main className="container relative grid flex-1 grid-cols-[260px_1fr]">
        <aside className="sticky top-14 max-h-screen">
          <Sidebar />
        </aside>
        <div className="relative space-y-4 p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Docs</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>
                {returnBreadcumb(location.pathname)?.name}
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>

          <Outlet />
        </div>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-muted-foreground">Made by Lucas Nunes.</p>
      </footer>
    </div>
  )
}

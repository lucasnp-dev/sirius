import { Home } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { ScrollArea } from '@/components/ui/scroll-area'

interface DocsSidebarItem {
  name: string
  to: string
}

interface DocsSidebarSection {
  name: string
  to?: string
  items?: DocsSidebarItem[]
}

export const sidebarDocs: DocsSidebarSection[] = [
  {
    name: 'Getting Started',
    items: [
      {
        name: 'Introduction',
        to: '/docs',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'All Components',
        to: '/docs/components',
      },
      {
        name: 'Tabs Animated',
        to: '/docs/components/tabs',
      },
      {
        name: 'Multi Step',
        to: '/docs/components/multi-step',
      },
    ],
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <ScrollArea className="h-full">
      <div className="space-y-6 p-4">
        <Link
          data-active={false}
          to={'/'}
          className={
            'flex items-center gap-2 text-sm data-[active=false]:text-muted-foreground data-[active=false]:hover:underline'
          }
        >
          <Home size={16} />
          Go Home
        </Link>
        {sidebarDocs.map((section) => (
          <div key={section.name} className="space-y-4">
            {section.to ? (
              <NavLink
                to={section.to}
                className={({ isActive, isPending }) =>
                  isActive ? 'underline' : isPending ? '' : 'text-sm font-bold'
                }
              >
                {section.name}
              </NavLink>
            ) : (
              <h3 className="text-sm font-bold">{section.name}</h3>
            )}
            <ul className="space-y-2 pl-1">
              {section.items?.map((item) => (
                <li key={item.name} className="text-sm font-medium">
                  <Link
                    to={item.to}
                    className={
                      'data-[active=false]:text-muted-foreground data-[active=false]:hover:underline'
                    }
                    data-active={item.to === location.pathname}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

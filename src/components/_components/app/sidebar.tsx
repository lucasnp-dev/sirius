'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ScrollArea } from '@/components/ui/scroll-area'
import { docsPages } from '@/lib/config/docs-pages'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ScrollArea className="sticky top-0 h-full">
      <div className="space-y-6 p-4 pl-8">
        {docsPages.map((section) => (
          <div key={section.title} className="space-y-4">
            {section.slug ? (
              <Link
                href={section.slug}
                className={cn(
                  pathname === section.slug && 'underline',
                  'text-sm font-bold',
                )}
              >
                {section.title}
              </Link>
            ) : (
              <h3 className="text-sm font-bold">{section.title}</h3>
            )}
            <ul className="space-y-2 pl-1">
              {section.items?.map((item) => (
                <li key={item.title} className="text-sm font-medium">
                  <Link
                    href={item.slug as string}
                    className="data-[active=false]:text-muted-foreground data-[active=false]:hover:underline"
                    data-active={item.slug === pathname}
                  >
                    {item.title}
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

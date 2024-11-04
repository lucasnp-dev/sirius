'use client'

import { Command, Home, Menu as MenuIcon, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { docsPages } from '@/lib/config/docs-pages'

import { Button } from '../../ui/button'
import { CommandShortcut } from '../../ui/command'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet'
import { CommandMenu } from './command-menu'
import { Logo } from './logo'
import { ModeToggle } from './mode-toggle'

export function Menu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-2 max-lg:px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant="ghost">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Docs Menu</SheetTitle>

              <div className="space-y-6 p-4">
                <Link
                  data-active={false}
                  href="/"
                  className="flex items-center gap-2 text-sm data-[active=false]:text-muted-foreground data-[active=false]:hover:underline max-sm:justify-center"
                >
                  <Home size={16} />
                  Go Home
                </Link>
                {docsPages.map((section) => (
                  <div key={section.title} className="space-y-4">
                    {section.slug ? (
                      <Link href={section.slug} className="text-sm font-bold">
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
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />
        <div className="flex items-center gap-2">
          {/* <Button
            size="sm"
            onClick={() => setOpen(true)}
            variant="outline"
            className="w-72 items-center gap-2 pr-2 text-muted-foreground"
          >
            <Search size={16} />
            Search in docs{' '}
            <CommandShortcut className="flex items-center gap-1 rounded border border-border p-1 text-xs">
              <Command size={12} /> <kbd>K</kbd>
            </CommandShortcut>
          </Button> */}
          <ModeToggle />
        </div>
      </div>

      <CommandMenu open={open} onOpenChange={setOpen} />
    </header>
  )
}

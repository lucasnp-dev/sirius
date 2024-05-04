import { Command, Home, Menu as MenuIcon, Search } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { CommandMenu } from './command-menu'
import { ModeToggle } from './mode-toggle'
import { sidebarDocs } from './sidebar'
import { Button } from './ui/button'
import { CommandShortcut } from './ui/command'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10  p-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant={'ghost'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle>Docs Menu</SheetTitle>

              <div className="space-y-6 p-4">
                <Link
                  data-active={false}
                  to={'/'}
                  className={
                    'flex items-center gap-2 text-sm data-[active=false]:text-muted-foreground data-[active=false]:hover:underline max-sm:justify-center'
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
                          isActive
                            ? 'underline'
                            : isPending
                              ? ''
                              : 'text-sm font-bold'
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
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <p className="font-code text-3xl max-lg:hidden">Sirius</p>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-72 items-center gap-2 text-muted-foreground"
        >
          <Search size={16} />
          Search{' '}
          <CommandShortcut className="flex items-center gap-1 rounded border border-border p-1 text-xs">
            <Command size={12} /> <kbd>K</kbd>
          </CommandShortcut>
        </Button>
        <ModeToggle />
      </div>

      <CommandMenu open={open} onOpenChange={setOpen} />
    </header>
  )
}

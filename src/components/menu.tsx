import { Command, Search } from 'lucide-react'
import { useState } from 'react'

import { CommandMenu } from './command-menu'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { CommandShortcut } from './ui/command'

export function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10  p-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-code text-3xl">Sirius</p>
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

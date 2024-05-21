// TODO: DropdownMenu Root, Trigger, Content and Item
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/lib/utils'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'

const container = {
  hidden: { scale: 0.3, y: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      bounce: 0,
      ease: 'easeOut',
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
  exit: {
    scale: 0.3,
    y: -50,
    transition: { duration: 0.15 },
  },
}

const item = {
  hidden: { x: 20, opacity: 0, filter: 'blur(4px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: {
    x: 20,
    opacity: 0,
    filter: 'blur(4px)',
  },
}

/**
 * Dropdown State
 */
type DropdownState = {
  /**
   * Open state of Dropdown
   * @type boolean
   * @default false
   */
  open: boolean
}

/**
 * Data and methods accessibles through dropdown state
 */
type DropdownContextType = {
  /**
   * Current state of the dropdown
   * @type {DropdownState}
   * @default {open: false}
   */
  state: DropdownState
  onStateChange: (value: boolean) => void
}

const DropdownContext = React.createContext<DropdownContextType>({
  state: {
    open: false,
  },
  onStateChange: () => {},
})

/**
 * Root and Provider context.
 * @see https://ui.shadcn.com/docs/components/dropdown-menu
 * @extends DropdownMenu - shadcn-ui
 * @example
 * <MotionDropdownMenu>
 *    <MotionDropdownMenuTrigger>
 *      Open
 *    </MotionDropdownMenuTrigger>
 *    <MotionDropdownMenuContent>
 *      // content...
 *    </MotionDropdownMenuContent>
 *   </MotionDropdownMenu>
 */
const MotionDropdownMenu = React.forwardRef<
  React.ElementRef<typeof DropdownMenu>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ onOpenChange, open, defaultOpen, ...props }, _ref) => {
  const [state, setState] = React.useState<DropdownState>({
    open: !!defaultOpen,
  })

  const onStateChange = (value: boolean) => {
    setState((prev) => ({ ...prev, open: value }))
    onOpenChange?.(value)
  }

  React.useEffect(() => {
    if (open !== undefined) {
      setState((prev) => ({ ...prev, open }))
    }
  }, [open])

  return (
    <DropdownContext.Provider value={{ state, onStateChange }}>
      <DropdownMenu
        onOpenChange={onStateChange}
        open={open}
        defaultOpen={defaultOpen}
        {...props}
      />
    </DropdownContext.Provider>
  )
})

MotionDropdownMenu.displayName = 'MotionDropdownMenu'

/**
 * Dropdown menu trigger component.
 * @see https://ui.shadcn.com/docs/components/dropdown-menu
 * @extends DropdownMenuTrigger - shadcn-ui
 * @example
 * <MotionDropdownMenu>
 *    <MotionDropdownMenuTrigger>
 *      Open
 *    </MotionDropdownMenuTrigger>
 *      // content...
 *   </MotionDropdownMenu>
 */
const MotionDropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>
>((props, ref) => (
  <motion.span whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}>
    <DropdownMenuTrigger ref={ref} {...props} />
  </motion.span>
))

// TODO: animation click
MotionDropdownMenuTrigger.displayName = 'MotionDropdownMenuTrigger'

/**
 * Dropdown menu content component.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu
 * @extends DropdownMenuPrimitive.Content - Radix UI
 * @example
 * <MotionDropdownMenu>
 *    // trigger
 *    <MotionDropdownMenuContent>
 *      <MotionDropdownMenuItem />
 *    </MotionDropdownMenuContent>
 *   </MotionDropdownMenu>
 */
const MotionDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => {
  const { state } = React.useContext(DropdownContext)

  return (
    <AnimatePresence>
      {state.open && (
        <DropdownMenuPrimitive.Portal forceMount>
          <DropdownMenuPrimitive.Content
            asChild
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
              'shadow-md z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground',
              className,
            )}
            {...props}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={container}
            >
              {children}
            </motion.div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      )}
    </AnimatePresence>
  )
})

MotionDropdownMenuContent.displayName = 'MotionDropdownMenuContent'

/**
 * Dropdown menu item component.
 * @see https://ui.shadcn.com/docs/components/dropdown-menu
 * @extends DropdownMenuItem - shadcn-ui
 * @example
 * <MotionDropdownMenu>
 *    // trigger
 *     <MotionDropdownMenuContent>
 *        <MotionDropdownMenuItem>
 *          Item 1
 *        </MotionDropdownMenuItem>
 *     </MotionDropdownMenuContent>
 *   </MotionDropdownMenu>
 */
const MotionDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItem>
>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuItem ref={ref} {...props} asChild>
      <motion.span variants={item} key={crypto.randomUUID()}>
        {children}
      </motion.span>
    </DropdownMenuItem>
  )
})

// TODO: animation side blur
MotionDropdownMenuItem.displayName = 'MotionDropdownMenuItem'

export {
  MotionDropdownMenu,
  MotionDropdownMenuTrigger,
  MotionDropdownMenuContent,
  MotionDropdownMenuItem,
}

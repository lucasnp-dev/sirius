// TODO: DropdownMenu Root, Trigger, Content and Item
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

import { DropdownMenu } from './dropdown-menu'

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
  onStateChange: React.Dispatch<React.SetStateAction<boolean>>
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
>(({ onOpenChange, open, defaultOpen, ...props }, ref) => {
  const [state, setState] = React.useState<DropdownState>({
    open: !!defaultOpen,
  })
  return ''
})

MotionDropdownMenu.displayName = 'MotionDropdownMenu'

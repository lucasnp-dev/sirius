'use client'

import { motion } from 'framer-motion'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import * as React from 'react'
import useMeasure from 'react-use-measure'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export type ComboboxState = {
  currentValue: string | null | string[]
  items: { label: string; value: string }[]
  bounds: {
    width: number
  }
  open: boolean
  multiple?: boolean
}

export type ComboboxContextType = {
  state: ComboboxState
  setState: React.Dispatch<React.SetStateAction<ComboboxState>>
  setCurrentValue: (value: string | null | string[]) => void
  pushInCurrentValue: (value: string) => void
  pushItem: (label: string, value?: string | null) => void
  setOpen: (open: boolean) => void
}

export const ComboboxContext = React.createContext<ComboboxContextType>({
  state: {
    currentValue: null,
    items: [],
    bounds: {
      width: 0,
    },
    open: false,
  },
  setState: () => {
    /* empty */
  },
  setCurrentValue: () => {
    /* empty */
  },
  pushInCurrentValue: () => {
    /* empty */
  },
  pushItem: () => {
    /* empty */
  },
  setOpen: () => {
    /* empty */
  },
})

const Combobox = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover> & {
    value?: string | null | string[]
    onValueChange?: (value: string | null | string[]) => void
    multiple?: boolean
  }
>(
  (
    {
      open,
      onOpenChange,
      value,
      multiple,
      defaultOpen,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [state, setState] = React.useState<ComboboxState>({
      currentValue: value || null,
      items: [],
      bounds: {
        width: 0,
      },
      open: open || false,
      multiple: multiple || false,
    })

    const setCurrentValue = (value: string | null | string[]) => {
      setState((prev) => ({ ...prev, currentValue: value }))
      onValueChange?.(value)
    }

    const pushInCurrentValue = (value: string) => {
      if (
        multiple &&
        value &&
        (Array.isArray(state.currentValue) || state.currentValue === null)
      ) {
        const alreadyIn = (state.currentValue || []).includes(value)
        if (alreadyIn) {
          setCurrentValue(
            (state.currentValue || []).filter((val) => val !== value),
          )
          return
        }

        setCurrentValue([...(state.currentValue || []), value])
      }
    }

    const pushItem = (label: string, value?: string | null) => {
      setState((prev) => ({
        ...prev,
        items: [...prev.items, { label, value: value || label }].reduce(
          (acc, current) => {
            if (
              !acc.some(
                (item) =>
                  item.label === current.label && item.value === current.value,
              )
            ) {
              acc.push(current)
            }
            return acc
          },
          [] as { label: string; value: string }[],
        ),
      }))
    }

    const setOpen = (open: boolean) => {
      setState((prev) => ({ ...prev, open }))
      onOpenChange?.(open)
    }

    React.useEffect(() => {
      setOpen(true)

      return () => {
        setOpen(open || false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <ComboboxContext.Provider
        value={{
          state,
          setState,
          setCurrentValue,
          pushItem,
          setOpen,
          pushInCurrentValue,
        }}
      >
        <span ref={ref}>
          <Popover
            {...props}
            open={state.open}
            onOpenChange={setOpen}
            defaultOpen={defaultOpen}
          />
        </span>
      </ComboboxContext.Provider>
    )
  },
)
Combobox.displayName = 'Combobox'

const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  Omit<React.ComponentPropsWithoutRef<typeof Button>, 'role'>
>(({ className, children, variant, ...props }, ref) => {
  const {
    state: { items, currentValue, multiple },
    setState,
    setCurrentValue,
  } = React.useContext(ComboboxContext)

  const [refTrigger, bounds] = useMeasure()

  React.useEffect(() => {
    if (bounds) {
      setState((prev) => ({ ...prev, bounds: { width: bounds.width } }))
    }
  }, [bounds, setState])

  return (
    <div className="relative pt-2" ref={refTrigger}>
      <div className="px-2">
        <motion.div
          className={cn(
            'flex w-fit flex-wrap items-center rounded-t-md border border-b-0 bg-background py-2',
            multiple && Array.isArray(currentValue) && currentValue.length > 0
              ? 'gap-2 px-2'
              : 'hidden',
          )}
        >
          {multiple &&
            currentValue &&
            currentValue.length > 0 &&
            Array.isArray(currentValue) &&
            currentValue.map((val) => (
              <motion.span
                exit={{ opacity: 0, scale: 0.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.15,
                    ease: 'easeIn',
                    type: 'spring',
                    bounce: 0.1,
                  },
                }}
                key={`${val}-open`}
                className="group flex cursor-default items-center gap-2 whitespace-nowrap rounded-lg bg-muted p-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {items.find((item) => item.value === val)?.label}
                <button
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  type="button"
                >
                  <X
                    size={16}
                    onClick={() =>
                      setCurrentValue(currentValue.filter((v) => v !== val))
                    }
                  />
                </button>
              </motion.span>
            ))}
        </motion.div>
      </div>

      <PopoverTrigger asChild>
        <Button
          variant={variant || 'outline'}
          size="sm"
          role="combobox"
          className={cn(className, 'w-full justify-between')}
          ref={ref}
          {...props}
        >
          {currentValue && !multiple
            ? items.find((item) => item.value === currentValue)?.label
            : children}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
    </div>
  )
})
ComboboxTrigger.displayName = 'ComboboxTrigger'

const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ className, style, children, ...props }, ref) => {
  const {
    state: { bounds },
  } = React.useContext(ComboboxContext)

  return (
    <PopoverContent
      className={cn('p-0', className)}
      {...props}
      ref={ref}
      style={{
        ...style,
        width: bounds.width,
      }}
    >
      <Command>{children}</Command>
    </PopoverContent>
  )
})
ComboboxContent.displayName = 'ComboboxContent'

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof CommandInput>,
  React.ComponentPropsWithoutRef<typeof CommandInput>
>(({ ...props }, ref) => <CommandInput ref={ref} {...props} />)
ComboboxInput.displayName = 'ComboboxInput'

const ComboboxList = React.forwardRef<
  React.ElementRef<typeof CommandList>,
  React.ComponentPropsWithoutRef<typeof CommandList>
>(({ ...props }, ref) => <CommandList ref={ref} {...props} />)
ComboboxList.displayName = 'ComboboxList'

const ComboboxEmpty = React.forwardRef<
  React.ElementRef<typeof CommandEmpty>,
  React.ComponentPropsWithoutRef<typeof CommandEmpty>
>(({ ...props }, ref) => <CommandEmpty ref={ref} {...props} />)
ComboboxEmpty.displayName = 'ComboboxEmpty'

const ComboboxGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroup>,
  React.ComponentPropsWithoutRef<typeof CommandGroup>
>(({ ...props }, ref) => <CommandGroup ref={ref} {...props} />)
ComboboxGroup.displayName = 'ComboboxGroup'

const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem> & {
    label: string
  }
>(({ label, children, ...props }, ref) => {
  const {
    setOpen,
    pushItem,
    setCurrentValue,
    pushInCurrentValue,
    state: { currentValue, multiple },
  } = React.useContext(ComboboxContext)

  React.useEffect(() => {
    pushItem(label, props.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selected = () => {
    if (multiple && Array.isArray(currentValue)) {
      return currentValue.some((val) => val === props.value)
    }
    return currentValue === props.value
  }

  return (
    <CommandItem
      ref={ref}
      {...props}
      onSelect={(itemValue) => {
        if (multiple) {
          pushInCurrentValue(itemValue)
        } else {
          setCurrentValue(itemValue === currentValue ? null : itemValue)
        }
        setOpen(false)
      }}
    >
      <Check
        className={cn('mr-2 h-4 w-4', selected() ? 'opacity-100' : 'opacity-0')}
      />
      {children || label}
    </CommandItem>
  )
})
ComboboxItem.displayName = 'ComboboxItem'

export {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
}

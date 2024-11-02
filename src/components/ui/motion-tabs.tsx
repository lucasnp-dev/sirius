// radix-ui/tabs: https://www.radix-ui.com/primitives/docs/components/tabs
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

// shadcn-ui/tabs: https://ui.shadcn.com/docs/components/tabs
import { Tabs, TabsContent, TabsList } from './tabs'

/**
 * State of the tabs
 */
interface StateTab {
  /**
   * Current active tab value.
   * @type {string | undefined}
   * @default undefined
   */
  currentValue: string | undefined

  /**
   * List of all tab values.
   * @type {string[]}
   * @default []
   * @fires setValues - Fired when values are set via TabsContext by MotionsTabsTrigger component
   * @change - When the value of MotionsTabsTrigger component is loaded
   */
  values: string[]

  /**
   * Previous active tab value.
   * @type {string | undefined}
   * @default undefined
   * @fires setCurrentValue - Fired via TabsContext by MotionsTabsTrigger component
   * @change - When the tab value changes
   */
  prevValue?: string
}

/**
 * Data and methods accessibles through TabsContext
 */
interface TabsContextTypes {
  /**
   * Current state of the tabs
   * @type {StateTab}
   * @default {currentValue: undefined, values: []}
   * @description Values of the context tab
   */
  tabState: StateTab

  /**
   * Sets the current tab value
   * @type {React.Dispatch<React.SetStateAction<string>>}
   * @default () => {}
   * @description Set the current tab and previous tab. Fire onValueChange if exists
   * @fire MotionsTabsTrigger - Fired via MotionsTabsTrigger component
   * @change - When the tab value changes
   */
  setCurrentValue: (value: string) => void

  /**
   * Sets the tab values
   * @type {React.Dispatch<React.SetStateAction<string[]>>}
   * @default () => {}
   * @description Set the tab values
   * @fire MotionsTabsTrigger - Fired via MotionsTabsTrigger component
   * @change - When the MotionsTabsTrigger component is loaded
   */
  setValues: (value: string) => void
}

const TabsContext = React.createContext<TabsContextTypes>({
  tabState: {
    currentValue: undefined,
    values: [],
  },
  setCurrentValue: () => {},
  setValues: () => {},
})

/**
 * Root and context component of the tabs.
 * @see https://ui.shadcn.com/docs/components/tabs
 * @extends Tabs - shadcn-ui
 * @example
 * <MotionsTabs defaultValue="Tab 1">
 *    <MotionsTabsList>
 *      // triggers...
 *    </MotionsTabsList>
 *    <MotionsTabsContent>
 *      // content...
 *    </MotionsTabsContent>
 *   </MotionsTabs>
 */
const MotionsTabs = React.forwardRef<
  React.ElementRef<typeof Tabs>,
  React.ComponentPropsWithoutRef<typeof Tabs>
>(({ className, defaultValue, onValueChange, ...props }, ref) => {
  const [tabState, setTabState] = React.useState<StateTab>({
    currentValue: defaultValue,
    values: [],
  })

  const setCurrentValue = (value: string) => {
    setTabState((prev) => ({
      ...prev,
      currentValue: value,
      prevValue: prev.currentValue,
    }))

    onValueChange?.(value)
  }

  const setValues = (value: string) => {
    setTabState((prevValue) => ({
      ...prevValue,
      values: [...prevValue.values, value],
    }))
  }

  return (
    <TabsContext.Provider value={{ tabState, setCurrentValue, setValues }}>
      <Tabs
        defaultValue={tabState.currentValue}
        onValueChange={setCurrentValue}
        ref={ref}
        {...props}
        className={cn('overflow-hidden', className)}
      />
    </TabsContext.Provider>
  )
})

MotionsTabs.displayName = 'MotionsTabs'

/**
 * Flex for triggers.
 * @see https://ui.shadcn.com/docs/components/tabs
 * @extends TabsList - shadcn-ui
 * @example
 * <MotionsTabsList>
 *    <MotionsTabsTrigger value="Tab 1">
 *      // triggers...
 * </MotionsTabsList>
 */
const MotionTabsList = React.forwardRef<
  React.ElementRef<typeof TabsList>,
  React.ComponentPropsWithoutRef<typeof TabsList>
>((props, ref) => <TabsList ref={ref} {...props} />)

MotionTabsList.displayName = 'MotionTabsList'

/**
 * Animated trigger for tabs.
 * @see https://ui.shadcn.com/docs/components/tabs
 * @extends TabsPrimitive.Trigger - Radix UI
 * @example <MotionsTabsTrigger value="Tab 1">
 */
const MotionTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { tabState, setValues } = React.useContext(TabsContext)

  const isActive = tabState.currentValue === props.value

  React.useEffect(() => {
    setValues(props.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'relative inline-flex items-center justify-center ring-offset-background focus-visible:ring-ring',
        'px-3 py-1 text-sm font-medium focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className,
        isActive ? 'z-0' : 'z-[1]',
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="clickedbutton"
          transition={{
            type: 'spring',
            stiffness: 90,
            mass: 1,
            damping: 14,
            // bounce: 0.3,
            // duration: 0.6,
            ease: 'easeInOut',
          }}
          className={cn('absolute inset-0 rounded-md bg-background shadow')}
        />
      )}
      <span
        className={cn(
          'relative z-[2] block font-medium delay-100 duration-200',
          isActive
            ? 'text-foreground'
            : 'text-foreground/50 group-hover:text-muted-foreground',
        )}
      >
        {children}
      </span>
    </TabsPrimitive.Trigger>
  )
})
MotionTabsTrigger.displayName = 'MotionTabsTrigger'

/**
 * Animated content for tabs.
 * @see https://ui.shadcn.com/docs/components/tabs
 * @extends TabsContent - shadcn-ui
 * @example
 * // list
 * <MotionsTabsContent value="Tab 1">
 *    // content
 * </MotionsTabsContent>
 */
const MotionTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsContent>,
  React.ComponentPropsWithoutRef<typeof TabsContent>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ children, ...props }, ref) => {
  const { tabState } = React.useContext(TabsContext)

  const isHigherThen =
    tabState.prevValue &&
    tabState.values.indexOf(tabState.currentValue || '') >
      tabState.values.indexOf(tabState.prevValue)

  const variantsDefault = {
    from: {
      x: isHigherThen ? '20px' : '-20px',
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <TabsContent ref={ref} {...props}>
      <motion.div
        initial="from"
        animate="to"
        transition={{
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 90,
          mass: 1,
          damping: 12,
        }}
        variants={variantsDefault}
      >
        {children}
      </motion.div>
    </TabsContent>
  )
})
MotionTabsContent.displayName = 'MotionTabsContent'

export { MotionsTabs, MotionTabsList, MotionTabsTrigger, MotionTabsContent }

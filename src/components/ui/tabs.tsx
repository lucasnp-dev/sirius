import * as TabsPrimitive from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface StateTab {
  currentValue: string
  values: string[]
  prevValue?: string
}

interface TabsContextTypes {
  value: StateTab
  setCurrentValue: (value: string) => void
  setValues: (value: string) => void
}

const TabsContext = React.createContext<TabsContextTypes>({
  value: {
    currentValue: '',
    values: [],
  },
  setCurrentValue: () => {},
  setValues: () => {},
})

interface MotionsTabProps {
  defaultValue: string
  children: React.ReactNode
}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-[300] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

const MotionsTabs = ({ children, defaultValue }: MotionsTabProps) => {
  const [value, setvalue] = React.useState<StateTab>({
    currentValue: defaultValue,
    values: [],
  })

  const setCurrentValue = (value: string) => {
    setvalue((prev) => ({
      ...prev,
      currentValue: value,
      prevValue: prev.currentValue,
    }))
  }

  const setValues = (value: string) => {
    setvalue((prevValue) => ({
      ...prevValue,
      values: [...prevValue.values, value],
    }))
  }

  return (
    <TabsContext.Provider value={{ value, setCurrentValue, setValues }}>
      <TabsPrimitive.Root
        defaultValue={value.currentValue}
        onValueChange={setCurrentValue}
        className="overflow-hidden"
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  )
}

MotionsTabs.displayName = 'MotionsTabs'

const MotionTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { value, setValues } = React.useContext(TabsContext)

  const isActive = value.currentValue === props.value

  React.useEffect(() => {
    setValues(props.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        ' relative inline-flex items-center justify-center ring-offset-background focus-visible:ring-ring',
        ' px-3 py-1 text-sm font-medium focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className,
        isActive ? 'z-0' : 'z-[1]',
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
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

const MotionTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { value } = React.useContext(TabsContext)

  const isHigherThen =
    value.values.indexOf(value.currentValue) >
    value.values.indexOf(value.prevValue as string)

  const variants = {
    from: {
      x: isHigherThen ? '200px' : '-200px',
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exitLeft: {
      x: '-200px',
      opacity: 0,
      transition: { duration: 0.2 },
    },
    exitRight: {
      x: '200px',
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'relative mt-2 overflow-x-hidden p-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      <motion.div
        initial="from"
        animate="to"
        exit={isHigherThen ? 'exitRight' : 'exitLeft'}
        variants={variants}
      >
        {children}
      </motion.div>
    </TabsPrimitive.Content>
  )
})
MotionTabsContent.displayName = 'MotionTabsContent'

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  MotionsTabs,
  MotionTabsTrigger,
  MotionTabsContent,
}

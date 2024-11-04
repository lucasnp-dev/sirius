import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Button } from './button'

/**
 * State of the Multi Step.
 */
export type MultiStepState = {
  /**
   * Current active step value.
   * @type {string | null}
   * @default null
   */
  currentValue: string | null
  /**
   * List of all step values.
   * @type {string[]}
   * @default []
   */
  values: string[]
}

type MultiStepContextType = {
  state: MultiStepState
  setState: React.Dispatch<React.SetStateAction<MultiStepState>>
  setValue: (value: string) => void
}

export const MultiStepContext = React.createContext<MultiStepContextType>({
  state: {
    currentValue: null,
    values: [],
  },
  setState: () => {
    /* empty */
  },
  setValue: () => {
    /* empty */
  },
})

interface RootProps extends React.ComponentPropsWithoutRef<'div'> {
  defaultValue?: string
  value?: string
  onValueChange?: React.Dispatch<React.SetStateAction<string>>
  onStateChange?: React.Dispatch<
    React.SetStateAction<MultiStepState | undefined>
  >
}

interface StepProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string
}

/**
 * Root and context component of the Multi Step.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 * <MultiStep defaultValue="step1">
 *    <MultiStepList>
 *      // steps...
 *    </MultiStepList>
 *    <MultiStepContent value="step1">
 *      // content...
 *    </MultiStepContent>
 * </MultiStep>
 */
const MultiStep = React.forwardRef<React.ElementRef<'div'>, RootProps>(
  ({ defaultValue, value, onValueChange, onStateChange, ...props }, ref) => {
    const [state, setState] = React.useState<MultiStepState>({
      currentValue: defaultValue || null,
      values: [],
    })

    React.useEffect(() => {
      if (state.currentValue !== value && onValueChange) {
        onValueChange(state.currentValue || '')
      }

      if (onStateChange) onStateChange(state)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    React.useEffect(() => {
      if (value && value !== state.currentValue) {
        setState((prev) => ({
          ...prev,
          currentValue: value,
        }))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const setValue = (value: string) => {
      if (state.values.includes(value)) return
      setState((prev) => ({
        ...prev,
        values: Array.from(new Set([...prev.values, value])),
      }))
    }

    return (
      <MultiStepContext.Provider value={{ state, setState, setValue }}>
        <div ref={ref} {...props} />
      </MultiStepContext.Provider>
    )
  },
)
MultiStep.displayName = 'MultiStep'

/**
 * Flex for steps.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 *    <MultiStepList>
 *      <MultiStepStep value="step1">First</MultiStepItem>
 *      <MultiStepStep value="step2">Second</MultiStepItem>
 *      <MultiStepStep value="step3">Final</MultiStepItem>
 *    </MultiStepList>
 */
const MultiStepList = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between gap-8', className)}
    {...props}
  />
))
MultiStepList.displayName = 'MultiStepList'

/**
 * Steps progress.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 *    <MultiStepList>
 *      <MultiStepItem value="step1">First</MultiStepItem>
 *      <MultiStepItem value="step2">Second</MultiStepItem>
 *      <MultiStepItem value="step3">Final</MultiStepItem>
 *    </MultiStepList>
 */
const MultiStepItem = React.forwardRef<React.ElementRef<'div'>, StepProps>(
  ({ children, value, ...props }, ref) => {
    const { state } = React.useContext(MultiStepContext)

    const isPrev =
      state.values.indexOf(value) <
      state.values.indexOf(state.currentValue || '')

    return (
      <div
        data-step={value}
        className="mb-10 flex items-center gap-8"
        {...props}
        ref={ref}
      >
        <div className="relative">
          <div
            data-prev={isPrev}
            data-current={state.currentValue === value}
            className="relative h-8 w-8 rounded-full bg-primary/20 data-[current=true]:bg-primary data-[prev=true]:bg-primary/90"
          >
            <motion.div
              data-prev={isPrev}
              data-current={state.currentValue === value}
              className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-background"
              animate={
                state.currentValue === value
                  ? {
                      scale: 1,
                      transition: {
                        duration: 0.2,
                        type: 'spring',
                        bounce: 0.2,
                        damping: 10,
                      },
                    }
                  : {
                      scale: 0,
                      transition: { duration: 0.15, bounce: 0, ease: 'easeIn' },
                    }
              }
            />
          </div>
          <p
            data-prev={isPrev}
            data-current={state.currentValue === value}
            className="absolute bottom-0 left-1/2 max-w-[200px] -translate-x-1/2 translate-y-full text-center text-sm text-primary/20 data-[current=true]:text-primary data-[prev=true]:text-primary/90"
          >
            {children}
          </p>
        </div>
        {state.values.indexOf(value) !== state.values.length - 1 && (
          <div
            data-prev={isPrev}
            data-current={state.currentValue === value}
            className="relative h-2 w-20 overflow-hidden rounded-xl bg-primary/20 lg:w-44"
          >
            <AnimatePresence>
              {isPrev && (
                <motion.div
                  className="absolute h-full bg-primary"
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  exit={{ width: 0 }}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    )
  },
)
MultiStepItem.displayName = 'MultiStepItem'

/**
 * Contents for steps.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 * <MultiStep defaultValue="step1">
 *    // list...
 *    <MultiStepContent value="step1">
 *      // content...
 *    </MultiStepContent>
 *    <MultiStepContent value="step2">
 *      // content...
 *    </MultiStepContent>
 * </MultiStep>
 */
const MultiStepContent = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    value: string
  }
>(({ value, children, ...props }, ref) => {
  const { state, setValue } = React.useContext(MultiStepContext)

  React.useEffect(() => {
    setValue(value)
  }, [setValue, value])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        key={state.currentValue === value ? state.currentValue : 'empty'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {state.currentValue === value ? children : null}
      </motion.div>
    </AnimatePresence>
  )
})
MultiStepContent.displayName = 'MultiStepContent'

/**
 * Flex for prev and next buttons.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 * <MultiStep defaultValue="step1">
 *    // list...
 *    // content...
 *    <MultiStepActions>
 *      <MultiStepPrev>Prev</MultiStepPrev>
 *      <MultiStepNext>Next</MultiStepNext>
 *   </MultiStepActions>
 * </MultiStep>
 */
const MultiStepActions = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  const { state } = React.useContext(MultiStepContext)

  const isFirst = state.values.indexOf(state.currentValue || '') === 0

  return (
    <div
      ref={ref}
      className={cn(
        'mt-4 flex w-full items-center',
        isFirst ? 'justify-end' : 'justify-between',
        className,
      )}
      {...props}
    />
  )
})
MultiStepActions.displayName = 'MultiStepActions'

/**
 * Next button.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 * <MultiStep defaultValue="step1">
 *    // Inside root...
 *    <MultiStep>Next</MultiStep>
 * </MultiStep>
 */
const MultiStepNext = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ ...props }, ref) => {
  const { state, setState } = React.useContext(MultiStepContext)

  const toNext = () => {
    if (state.currentValue) {
      setState((prev) => ({
        ...prev,
        currentValue:
          state.values[state.values.indexOf(state.currentValue || '') + 1],
      }))
    }
  }

  return (
    <Button
      ref={ref}
      data-disabled={
        state.currentValue !== null
          ? state.values.indexOf(state.currentValue) === state.values.length - 1
          : true
      }
      className="data-[disabled=true]:hidden"
      onClick={toNext}
      {...props}
    />
  )
})
MultiStepNext.displayName = 'MultiStepNext'

/**
 * Prev button.
 * @see https://www.siriusui.dev/docs/components/multi-step
 * @example
 * <MultiStep defaultValue="step1">
 *    // Inside root...
 *    <MultiStepPrev>Prev</MultiStepPrev>
 * </MultiStep>
 */
const MultiStepPrev = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ variant, ...props }, ref) => {
  const { state, setState } = React.useContext(MultiStepContext)

  const toPrev = () => {
    if (state.currentValue) {
      setState((prev) => ({
        ...prev,
        currentValue:
          state.values[state.values.indexOf(state.currentValue || '') - 1],
      }))
    }
  }

  return (
    <Button
      variant={variant || 'outline'}
      ref={ref}
      data-disabled={
        state.currentValue !== null
          ? state.values.indexOf(state.currentValue) === 0
          : true
      }
      className="data-[disabled=true]:hidden"
      onClick={toPrev}
      {...props}
    />
  )
})
MultiStepPrev.displayName = 'MultiStepPrev'

export {
  MultiStep,
  MultiStepItem,
  MultiStepList,
  MultiStepContent,
  MultiStepActions,
  MultiStepNext,
  MultiStepPrev,
}

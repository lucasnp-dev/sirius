import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ElementRef, HTMLAttributes, useRef } from 'react'

import { cn } from '@/lib/utils'

type DockItem = {
  id: string
  icon?: JSX.Element
}

type DockContainerProps = {
  side?: 'top' | 'bottom'
  items: DockItem[]
} & HTMLAttributes<HTMLDivElement>

export function Dock({
  side = 'bottom',
  className,
  items,
  ...props
}: DockContainerProps) {
  const mouseX = useMotionValue(Infinity)
  const containerX = useMotionValue(0)

  const containerRef = useRef<ElementRef<'div'>>(null)

  return (
    <div
      {...props}
      className={cn(side === 'top' ? 'top-4' : 'bottom-4', className)}
    >
      <motion.div
        ref={containerRef}
        className="shadow-inner bg-light flex h-16 items-end gap-4 rounded-full border border-neutral-800 bg-primary px-3 pb-2 shadow-neutral-300/5"
        onMouseLeave={() => mouseX.set(Infinity)}
        onMouseMove={(e) => {
          const rect = containerRef.current?.getBoundingClientRect()

          if (rect) {
            mouseX.set(e.clientX - rect.left)
            containerX.set(rect.x)
          }
        }}
      >
        {items.map((item) => (
          <DockItem key={item.id} containerX={containerX} mouseX={mouseX}>
            {item.icon}
          </DockItem>
        ))}
      </motion.div>
    </div>
  )
}

interface DockItemProps extends HTMLAttributes<HTMLElement> {
  mouseX: MotionValue<number>
  containerX: MotionValue<number>
}

function DockItem({ children, containerX, mouseX }: DockItemProps) {
  const itemRef = useRef<ElementRef<'div'>>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = itemRef.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
      left: 0,
    }

    const XDiffToContainerX = bounds?.x - containerX.get()

    return val - bounds?.width / 2 - XDiffToContainerX
  })

  const widthSync = useTransform(distance, [-125, 0, 125], [44, 85, 44])
  const width = useSpring(widthSync)

  return (
    <motion.div
      role="button"
      ref={itemRef}
      className="shadow-inner group flex aspect-square items-center justify-center overflow-hidden rounded-full border border-neutral-800 bg-neutral-950 p-2 text-neutral-400 shadow-neutral-300/20 transition duration-500 hover:text-white active:-translate-y-10 active:duration-1000 active:ease-out"
      style={{
        width,
      }}
    >
      {children}
    </motion.div>
  )
}

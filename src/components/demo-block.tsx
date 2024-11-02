import { ReactNode } from 'react'

export function DemoBlock({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex justify-center overflow-hidden rounded-xl border border-border px-4 py-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {children}
    </div>
  )
}

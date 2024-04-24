import './index.css'

import { cn } from '@/lib/utils'

export function LabTest() {
  return (
    <div className="h-screen bg-white">
      <div className="container space-y-16 py-8">
        <h1 className="text-center font-code text-5xl text-black">
          Sirius/Lab Tests
        </h1>

        <section className="flex justify-center">
          <div className="border-top w-[600px] space-y-4 p-8 text-black">
            <div
              className={cn(
                'h-px w-1/2',
                'absolute left-1/2 top-0',
                '-translate-x-1/2 -translate-y-1/2',
                'bg-gradient-to-l from-transparent via-black/80 via-50% to-transparent',
              )}
              aria-hidden
            />
            <div
              className={cn(
                'h-[200px] w-full max-w-[200px] md:max-w-[400px]',
                'absolute left-1/2 top-0',
                '-translate-x-1/2 -translate-y-1/2',
                'conic-gradient radial-gradient',
              )}
            />
            <h2 className="text-2xl font-semibold text-black">Teste</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur cum harum incidunt voluptates eligendi optio ipsa
              expedita quisquam sunt quas assumenda eveniet asperiores saepe
              corporis fugiat, ratione maxime! Doloremque, consectetur?
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

import '../styles/web.css'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { TECHS } from '@/data/techs'
import { cn } from '@/lib/utils'

function createArray(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, k) => k + start)
}

export default function Home() {
  return (
    <div className="pb-12">
      <div className="relative flex h-[40rem] w-full flex-col overflow-hidden md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-sourceCodePro text-4xl font-bold text-transparent md:text-7xl">
            Sirius/ui
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            Build fast. That’s the spirit of Sirius. Use the components to build
            a elegance UI and feel free to customize them.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="mx-auto block" asChild>
            <Link href="/docs/getting-started/introduction">Get started</Link>
          </Button>
          <Button>Github</Button>
        </div>
        <p className="absolute bottom-2 mx-auto max-w-96 rounded-lg px-4 py-2 font-sourceCodePro text-sm text-foreground">
          {' '}
          Integrated with{' '}
          <Link
            href="https://ui.shadcn.com/"
            className="underline"
            target="_blank"
          >
            shadcn/ui
          </Link>
          .
        </p>
      </div>

      <div className="container mx-auto mt-24 space-y-24">
        <div>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-sourceCodePro text-xl font-bold text-transparent md:text-2xl">
                Copy and paste components
              </h2>
              <p className="mx-auto mt-2 w-3/5">
                Easily integrate components by copying and pasting the code into
                your UI folder. Simply add them to your project, and you&apos;re
                good to go!
              </p>
            </div>
          </div>
          <div className="pt-8">
            <div className="relative mx-auto w-3/5 overflow-hidden rounded-lg border-b border-t border-b-neutral-900">
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute left-1/2 top-0 h-px',
                  'w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/80 via-60% to-transparent',
                )}
              />
              <div
                aria-hidden="true"
                className="user-select-none center pointer-events-none absolute -top-1 left-1/2 z-10 h-[288px] w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)',
                }}
              />
              <div className="flex items-center gap-2 px-4 py-4">
                <span className="block h-4 w-4 rounded-full border bg-black/40" />
                <span className="block h-4 w-4 rounded-full border bg-black/40" />
                <span className="block h-4 w-4 rounded-full border bg-black/40" />
              </div>
              <div className="relative">
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute right-0 top-0 h-px',
                    'w-1/2 translate-y-1/2 bg-gradient-to-r from-white/30 via-15% to-transparent',
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute left-0 top-0 h-px',
                    'w-1/2 translate-y-1/2 bg-gradient-to-l from-white/30 via-15% to-transparent',
                  )}
                />
              </div>

              <div className="space-y-4 p-2">
                <img src="/copy-code2.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 space-y-8">
        <div className="text-center">
          <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-sourceCodePro text-xl font-bold text-transparent md:text-2xl">
            Animated components
          </h2>
          <p className="mx-auto mt-2 w-3/5">
            The components feature smooth and sophisticated animations.
          </p>
        </div>

        <div className="relative z-40 mx-auto grid max-w-6xl grid-cols-1 items-start gap-20 md:grid-cols-3 lg:gap-10 xl:grid-cols-3">
          <a className="group space-y-2" href="/demo">
            <div className="relative flex items-center justify-center rounded-lg border bg-black p-4 py-8 transition-colors">
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute left-1/2 top-0 h-px',
                  'w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/80 via-60% to-transparent',
                )}
              />
              <img
                className="aspect-video h-full w-full rounded-md object-cover blur-0 transition duration-300 group-hover:scale-105"
                src="/demo.gif"
                alt=""
              />
            </div>
            <p className="text-lg font-medium group-hover:underline">
              Multi Step
            </p>
            <p className="text-sm text-muted-foreground">
              Guide the user through a step-by-step process. Easily configurable
              and integrable.
            </p>
          </a>
          <a className="group space-y-2" href="/demo">
            <div className="relative flex items-center justify-center rounded-lg border bg-black p-4 py-8 transition-colors">
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute left-1/2 top-0 h-px',
                  'w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/80 via-60% to-transparent',
                )}
              />
              <img
                className="aspect-video h-full w-full rounded-md object-contain blur-0 transition duration-300 group-hover:scale-105"
                src="/demo2.gif"
                alt=""
              />
            </div>
            <p className="text-lg font-medium group-hover:underline">
              Motion Tabs
            </p>
            <p className="text-sm text-muted-foreground">
              Tabs that are simple to use and easily customizable.
            </p>
          </a>
          <a className="group space-y-2" href="/demo">
            <div className="relative flex items-center justify-center rounded-lg border bg-black p-4 py-8 transition-colors">
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute left-1/2 top-0 h-px',
                  'w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/80 via-60% to-transparent',
                )}
              />
              <img
                className="aspect-video h-full w-full rounded-md object-cover blur-0 transition duration-300 group-hover:scale-105"
                src="/demo.gif"
                alt=""
              />
            </div>
            <p className="text-lg font-medium group-hover:underline">
              Multi Step
            </p>
            <p className="text-sm text-muted-foreground">
              Guide the user through a step-by-step process. Easily configurable
              and integrable.
            </p>
          </a>
        </div>

        <Link
          href="/components"
          className="block text-center text-sm text-muted-foreground underline"
        >
          <span>See all</span>
        </Link>
      </div>

      <div className="mt-40">
        <div
          className={cn(
            'group relative mx-auto flex max-w-xl gap-10 overflow-hidden',
          )}
          data-id="slider"
        >
          <div className="absolute left-0 z-10 h-full w-1/12 bg-gradient-to-r from-background to-transparent" />
          {createArray(0, 16).map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 animate-slide justify-around gap-10 [--gap:1rem]"
              data-id={`slider-child-${i + 1}`}
            >
              {TECHS.map(({ icon, name }) => (
                <div key={name} className="flex items-center gap-1">
                  <span>{icon}</span>
                  <span className="flex-shrink-0 text-base text-muted-foreground">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
          <div className="absolute right-0 z-10 h-full w-1/12 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </div>
  )
}

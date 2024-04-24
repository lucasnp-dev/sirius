import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme-provider'

import { ModeToggle } from './components/mode-toggle'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | Sirius" />
        <div className="relative">
          <ModeToggle />
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  )
}

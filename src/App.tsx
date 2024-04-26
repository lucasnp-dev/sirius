import './globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme-provider'

import { router } from './routes'

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Helmet titleTemplate="%s | Sirius" />
          <div className="relative">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

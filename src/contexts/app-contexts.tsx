'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import { DocsPage, docsPages } from '@/lib/config/docs-pages'

type AppState = {
  page?: DocsPage | Omit<DocsPage, 'items'> | false
}

type AppContextType = {
  state: AppState
  dispatch: React.Dispatch<React.SetStateAction<AppState>>
}

export const AppContext = React.createContext<AppContextType>({
  state: {},
  dispatch: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useState<AppState>({})
  const pathname = usePathname()

  useEffect(() => {
    let page: DocsPage | false | undefined = docsPages.find((page) => {
      if (page.slug === pathname) {
        return true
      }

      if (page.items) {
        return page.items.find((item) => item.slug === pathname)
      }

      return false
    })

    if (page && 'items' in page && page.items) {
      const verifyChildren = page.items.find((item) => item.slug === pathname)
      page = verifyChildren || page
    }

    dispatch({ page })
  }, [pathname])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext)

import { createBrowserRouter } from 'react-router-dom'

import { DocsLayout } from './pages/_layouts/_docs'
import { HomeLayout } from './pages/_layouts/home'
import { BlocksPage } from './pages/blocks/page'
import { DocsPage } from './pages/docs/page'
import { DocsTablePage } from './pages/docs/table/page'
import { DocsTabsPage } from './pages/docs/tabs/page'
import { Home } from './pages/home/page'
import { Lab } from './pages/lab/page'
import { LabTest } from './pages/lab/test/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/labs',
    element: <Lab />,
  },
  {
    path: '/labs/tests',
    element: <LabTest />,
  },
  {
    path: 'blocks',
    element: <BlocksPage />,
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        path: '/docs',
        element: <DocsPage />,
      },
      {
        path: '/docs/components/tabs',
        element: <DocsTabsPage />,
      },
      {
        path: '/docs/components/table',
        element: <DocsTablePage />,
      },
    ],
  },
])

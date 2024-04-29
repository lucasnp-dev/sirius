import { createBrowserRouter } from 'react-router-dom'

import { loader } from './data/components'
import { DocsLayout } from './pages/_layouts/_docs'
import { HomeLayout } from './pages/_layouts/home'
import { BlocksPage } from './pages/blocks/page'
import { ComponentPage } from './pages/docs/components/[slug]/page'
import { DocsComponentsPage } from './pages/docs/components/page'
import { DocsPage } from './pages/docs/page'
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
        path: '',
        element: <DocsPage />,
      },
      {
        path: 'components',
        element: <DocsComponentsPage />,
      },
      {
        path: 'components/:slug',
        element: <ComponentPage />,
        loader,
      },
    ],
  },
])

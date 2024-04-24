import { createBrowserRouter } from 'react-router-dom'

import { HomeLayout } from './pages/_layouts/home'
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
])

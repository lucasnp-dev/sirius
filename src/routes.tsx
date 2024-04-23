import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/page'
import { Ui } from './pages/ui'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

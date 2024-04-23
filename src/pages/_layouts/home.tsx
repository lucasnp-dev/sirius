import { Outlet } from 'react-router-dom'

export function HomeLayout() {
  return (
    <main className="bg-light min-h-screen">
      <Outlet />
    </main>
  )
}

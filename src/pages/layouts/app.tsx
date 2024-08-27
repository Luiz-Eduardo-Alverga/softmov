import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'
import { MenuBar } from '../../components/menu-bar'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex justify-center">
        <MenuBar />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}

import { CircleGauge, Home, PhoneCall } from 'lucide-react'
import { useEffect, useState } from 'react'

import { AccountMenu } from './account-menu'
import { ModeToggle } from './mode-toggle'
// import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
// import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = root.classList.contains('dark') ? 'dark' : 'light'
    setTheme(initialTheme)
  }, [theme])

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-5 px-6">
        {/* <FolderOpen className="h-10 w-10" /> */}

        <img
          src="../../assets/logo_softcom_white_bg.png"
          alt=""
          className="h-10"
        />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className="flex flex-col items-center">
            <Home className="h-4 w-4" />
            <span className="text-sm">Inicio</span>
          </NavLink>

          <NavLink to="/agenda" className="flex flex-col items-center">
            <PhoneCall className="h-4 w-4" />
            <span className="text-sm">Agenda</span>
          </NavLink>

          <NavLink to="/dashboard" className="flex flex-col items-center">
            <CircleGauge className="h-4 w-4" />
            <span className="text-sm">Dashboard</span>
          </NavLink>
        </nav>

        <div className="flex gap-1 ml-auto">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}

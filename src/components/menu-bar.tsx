import { NavLink } from 'react-router-dom'

import { MenuBarAdministration } from './Menu-bar-items/Administration-item'
import { MenuBarFinance } from './Menu-bar-items/Finance-item'
import { MenuBarRegister } from './Menu-bar-items/Register-item'
import { MenuBarReports } from './Menu-bar-items/Report-item'
import { MenuBarShopping } from './Menu-bar-items/Shopping-item'
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar'

export function MenuBar() {
  return (
    <Menubar className="border-t-0">
      <MenuBarRegister />

      <MenubarMenu>
        <NavLink to="obras">
          <MenubarTrigger>Obras </MenubarTrigger>
        </NavLink>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Imóveis</MenubarTrigger>
      </MenubarMenu>

      <MenuBarShopping />

      <MenuBarAdministration />

      <MenuBarFinance />

      <MenuBarReports />
    </Menubar>
  )
}

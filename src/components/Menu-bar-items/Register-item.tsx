import { Building2, ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../ui/menubar'

export function MenuBarRegister() {
  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-1">
        Cadastros <ChevronDown className="h-4 w-4" />
      </MenubarTrigger>
      <MenubarContent>
        <NavLink to="/cadastros/empresa">
          <MenubarItem>
            Empresa
            <MenubarShortcut>
              <Building2 className="h-4 w-4 text-primary"></Building2>
            </MenubarShortcut>
          </MenubarItem>
        </NavLink>

        <MenubarSeparator />

        <MenubarSub>
          <MenubarSubTrigger>Usuários</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Grupos de usuários</MenubarItem>
            <MenubarItem>Cadastro de usuários</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Pessoas</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Funcionários</MenubarItem>
            <MenubarItem>Clientes</MenubarItem>
            <NavLink to="/cadastros/fornecedores">
              <MenubarItem>Fornecedores</MenubarItem>
            </NavLink>

            <MenubarItem>Corretores</MenubarItem>
            <MenubarItem>Fiadores</MenubarItem>
            <MenubarItem>Propietários</MenubarItem>
            <MenubarItem>Sócios</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSeparator />

        <MenubarItem>Imobiliárias</MenubarItem>
        <MenubarItem>Bancos</MenubarItem>
        <MenubarItem>Administradores</MenubarItem>

        <MenubarSeparator />

        <MenubarItem>Mercadorias</MenubarItem>
        <MenubarItem>CFOP</MenubarItem>

        <MenubarSeparator />

        <MenubarItem>Etapas</MenubarItem>
        <MenubarItem>Assuntos de ocorrências</MenubarItem>
        <MenubarItem>Locais</MenubarItem>
        <MenubarItem>Documentos de Processos</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  )
}

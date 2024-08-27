import { ChevronDown } from 'lucide-react'

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../ui/menubar'

export function MenuBarAdministration() {
  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-1">
        Administrativo <ChevronDown className="h-4 w-4 gap-1" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Gestão de Contratos</MenubarSubTrigger>

          <MenubarSeparator />

          <MenubarSubContent>
            <MenubarItem>Locação</MenubarItem>
            <MenubarItem>Vendas</MenubarItem>

            <MenubarSeparator />

            <MenubarItem>Intermediação</MenubarItem>
            <MenubarItem>Índice/Correção</MenubarItem>
            <MenubarItem>Contratos Resíduos</MenubarItem>
            <MenubarItem>Licitação</MenubarItem>
            <MenubarItem>Andamentos Processos</MenubarItem>
            <MenubarItem>Contratos passíveis de correção</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarItem>Agenda</MenubarItem>
        <MenubarItem>Ficha de Atendimento</MenubarItem>
        <MenubarItem>Controle de ligações</MenubarItem>
        <MenubarItem>Registros de Horas Extras</MenubarItem>

        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>Propostas</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Cadastro</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarItem>Registro de Quilometragem</MenubarItem>
        <MenubarItem>Controle Patrimônio</MenubarItem>
        <MenubarItem>Reparos</MenubarItem>

        <MenubarItem>Controle de documentos</MenubarItem>

        <MenubarSeparator />
        <MenubarItem>e-Marketing</MenubarItem>

        <MenubarSub>
          <MenubarSubTrigger>Mala Direta</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Modelos de Mensagem</MenubarItem>
            <MenubarItem>Composição</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>
  )
}

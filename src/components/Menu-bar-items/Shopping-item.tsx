import { ChevronDown } from 'lucide-react'

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../ui/menubar'

export function MenuBarShopping() {
  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-1   ">
        Compras <ChevronDown className="h-4 w-4" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarItem>Compra</MenubarItem>
        <MenubarItem>Painel de Compras</MenubarItem>

        <MenubarSeparator />
        <MenubarItem>Order de Fornecimento</MenubarItem>
        <MenubarItem>Solictaçao Material</MenubarItem>
        <MenubarItem>Gerenciar Solicitações</MenubarItem>
        <MenubarItem>Gerenciar Ordem Fornecimento</MenubarItem>
        <MenubarItem>Feedback do Fornecedor</MenubarItem>
        <MenubarItem>Notas Fiscais em Obras</MenubarItem>

        <MenubarSeparator />
        <MenubarItem>Pesquisa de Preço</MenubarItem>
        <MenubarItem>Movimentar Estoque</MenubarItem>
        <MenubarItem>Produtos Pendentes</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  )
}

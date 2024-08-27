import { ChevronDown } from 'lucide-react'

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../ui/menubar'

export function MenuBarFinance() {
  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-1">
        Financeiro <ChevronDown className="h-4 w-4" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Contas a Receber</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Arquivo Remessa</MenubarItem>
            <MenubarItem>Arquivo Retorno</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Locação</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Geral</MenubarItem>
                <MenubarItem>Resumido</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Intermidiação</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Vendas </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Geral</MenubarItem>
                <MenubarItem>Resumido</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Baixar Lote</MenubarItem>
            <MenubarItem>Unidade</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Despesas/Receitas</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Categorias</MenubarItem>
            <MenubarItem>Lançamentos</MenubarItem>
            <MenubarItem>Baixar lançamentos</MenubarItem>
            <MenubarItem>Baixar em Lote</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>PIX</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Painel PIX</MenubarItem>
            <MenubarItem>Estorno PIX</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>SPED</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Gerar Sped</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarItem>Frota</MenubarItem>
        <MenubarItem>Painel Financeiro</MenubarItem>
        <MenubarItem>Painel Indicador</MenubarItem>
        <MenubarItem>Painel Gráfico</MenubarItem>
        <MenubarItem>Transferências</MenubarItem>
        <MenubarItem>Recibo</MenubarItem>
        <MenubarItem>Cheque</MenubarItem>
        <MenubarItem>NFS-e</MenubarItem>
        <MenubarItem>Recibo Autônomo</MenubarItem>
        <MenubarItem>Pagamento p/ Visto</MenubarItem>
        <MenubarItem>Caixa</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  )
}

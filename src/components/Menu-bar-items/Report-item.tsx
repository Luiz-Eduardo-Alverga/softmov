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
import { ScrollArea } from '../ui/scroll-area'

export function MenuBarReports() {
  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-1">
        Relatórios <ChevronDown className="h-4 w-4" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Clientes</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Bairro</MenubarItem>
            <MenubarItem>Clientes Ativos</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>Aniversariante do Mês</MenubarItem>

        <MenubarSeparator />

        <MenubarSub>
          <MenubarSubTrigger>Imóveis</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Unidades</MenubarItem>
            <MenubarItem>Mais Visitados</MenubarItem>
            <MenubarItem>Aprovar Mudanças</MenubarItem>
            <MenubarItem>Propietários</MenubarItem>
            <MenubarItem>Ocorrências/Contratos</MenubarItem>
            <MenubarItem>Cadastros Incompletos</MenubarItem>
            <MenubarItem>Contratos por Propiétario</MenubarItem>
            <MenubarItem>Briefing</MenubarItem>
            <MenubarItem>Distrato</MenubarItem>
            <MenubarItem>Transferência</MenubarItem>
            <MenubarItem>Recebimento Mensal</MenubarItem>
            <MenubarItem>Ranking de Corretores</MenubarItem>
            <MenubarItem>Efetivação por Corretores</MenubarItem>
            <MenubarItem>Contratos a Renovar</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Obras</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Acompanhamento Etapa</MenubarItem>
            <MenubarItem>Custo por unidade</MenubarItem>
            <MenubarItem> Realizado X Orçado</MenubarItem>
            <MenubarItem> Controle de Aportes</MenubarItem>
            <MenubarItem> Custo Detalhado por Mercadoria</MenubarItem>
            <MenubarItem> Curva ABC (20-80)</MenubarItem>
            <MenubarItem> Funcionários em Obras</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Obras Composição</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Realizado X Orçado</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSeparator />

        <MenubarItem>Conciliação Bancária</MenubarItem>

        <MenubarSub>
          <MenubarSubTrigger>Compras</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Total de Compras</MenubarItem>
            <MenubarItem>Estoque de Materias</MenubarItem>
            <MenubarItem>Melhores Preços p/ Grupo</MenubarItem>
            <MenubarItem>Rel. Estoque Mercadorias</MenubarItem>
            <MenubarItem>Movimentação Estoque</MenubarItem>
            <MenubarItem>Ordem Fornecimento</MenubarItem>
            <MenubarItem>Ordem Fornecimento - Resumido</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Financeiro</MenubarSubTrigger>

          <MenubarSubContent>
            <ScrollArea className="h-72">
              <MenubarItem>Arquivo Retorno</MenubarItem>
              <MenubarItem>Leitura do Retorno</MenubarItem>
              <MenubarItem>Armotização(S.A.C)</MenubarItem>
              <MenubarItem>Comissionamento</MenubarItem>
              <MenubarItem>Despesas/Receitas</MenubarItem>
              <MenubarItem>Despesas/Receitas - Resumido</MenubarItem>
              <MenubarItem>Despesas p/ Categorias</MenubarItem>
              <MenubarItem>Despesas Agrupado</MenubarItem>
              <MenubarItem>Movimentação</MenubarItem>
              <MenubarItem>Fluxo de Caixa</MenubarItem>
              <MenubarItem>Relatório de Cheques</MenubarItem>
              <MenubarItem>Fluxo p/ Empresa</MenubarItem>
              <MenubarItem>Composição de Saldo</MenubarItem>
              <MenubarItem>Realizado x Orçado</MenubarItem>
              <MenubarItem>Realizado x Orçado - Sub</MenubarItem>
              <MenubarItem>Despesas p/ Funções</MenubarItem>
              <MenubarItem>Parcelas em Atraso</MenubarItem>
              <MenubarItem>Posição Carteira Mensal</MenubarItem>
              <MenubarItem>Protocolo Recebimento Carnê</MenubarItem>
            </ScrollArea>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarItem>Dimob</MenubarItem>

        <MenubarSeparator />

        <MenubarSub>
          <MenubarSubTrigger>Recursos Humanos</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Faltas Funcionários</MenubarItem>
            <MenubarItem>Produtividade </MenubarItem>
            <MenubarItem> Folha Pagamento</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSub>
          <MenubarSubTrigger>Imposto de Renda</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Imposto de Renda Locação</MenubarItem>
            <MenubarItem>Imposto de Renda Venda</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>

        <MenubarSeparator />

        <MenubarItem>Auditoria do Sistema</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  )
}

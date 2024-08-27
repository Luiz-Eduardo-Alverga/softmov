import { CirclePlus, Search } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { InputWithoutRing } from '@/components/ui/input-without-ring'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { DialogRegisterNewEnterprise } from './register-new-enterprise-dialog'

const enterprises = [
  {
    id: 1,
    razaoSocial: 'Extremo Oriental',
    nomeFantasia: 'Extremo Oriental LTDA',
    email: 'extremo@hotmail.com',
    fone: '(83) 3225-7000',
  },
  {
    id: 2,
    razaoSocial: 'Grao Forneria',
    nomeFantasia: 'Grao Forneria LTDA',
    email: 'grao@hotmail.com',
    fone: '(83) 3225-7050',
  },
  {
    id: 3,
    razaoSocial: 'Softcom Tecnologia',
    nomeFantasia: 'Softcom Tecnologia LTDA',
    email: 'softcom@hotmail.com',
    fone: '(83) 3225-8000',
  },
  {
    id: 4,
    razaoSocial: 'Softcom Tecnologia',
    nomeFantasia: 'Softcom Tecnologia LTDA',
    email: 'softcom@hotmail.com',
    fone: '(83) 3225-8000',
  },
  {
    id: 5,
    razaoSocial: 'Softcom Tecnologia',
    nomeFantasia: 'Softcom Tecnologia LTDA',
    email: 'softcom@hotmail.com',
    fone: '(83) 3225-8000',
  },
  {
    id: 6,
    razaoSocial: 'Softcom Tecnologia',
    nomeFantasia: 'Softcom Tecnologia LTDA',
    email: 'softcom@hotmail.com',
    fone: '(83) 3225-8000',
  },
  {
    id: 7,
    razaoSocial: 'Softcom Tecnologia',
    nomeFantasia: 'Softcom Tecnologia LTDA',
    email: 'softcom@hotmail.com',
    fone: '(83) 3225-8000',
  },
]

export function EnterprisePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Helmet title="Empresa" />
        <h1 className="text-2xl font-bold tracking-tighter">Empresa</h1>

        <Separator />

        <form action="" className="flex">
          <InputWithoutRing
            className="h-9 w-64 rounded-r-none border-r-0 focus-within:ring-0 focus:border-primary"
            placeholder="Digite aqui sua busca..."
          />
          <Button className="h-9 rounded-l-none border-r-0">
            <Search />
          </Button>

          <DialogTrigger asChild>
            <Button
              className="ml-auto gap-1"
              onClick={() => setIsDialogOpen(true)}
            >
              <CirclePlus />
              Novo Cadastro
            </Button>
          </DialogTrigger>
        </form>

        <Table>
          <TableCaption>Uma lista de suas empresas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome Fantasia</TableHead>
              <TableHead>Razão Social</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Fone</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {enterprises.map((enterprise) => {
              return (
                <TableRow key={enterprise.id}>
                  <TableCell>{enterprise.nomeFantasia}</TableCell>
                  <TableCell>{enterprise.razaoSocial}</TableCell>
                  <TableCell>{enterprise.email}</TableCell>
                  <TableCell>{enterprise.fone}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <DialogRegisterNewEnterprise onClose={() => setIsDialogOpen(false)} />
      </Dialog>
    </>
  )
}

import { CirclePlus } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { DialogRegisterNewSupplier } from './register-new-supplier'

export function SupplierPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Helmet title="Fornecedor" />
        <h1 className="text-2xl font-bold tracking-tighter">Fornecedor</h1>

        <Separator />

        <form action="" className="flex items-center gap-2">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input className="h-9 w-64" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="name">Razão Social</Label>
            <Input className="h-9" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="name">CPF / CNPJ</Label>
            <Input className="h-9" />
          </div>
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

        <DialogRegisterNewSupplier onClose={() => setIsDialogOpen(false)} />
      </Dialog>
    </>
  )
}

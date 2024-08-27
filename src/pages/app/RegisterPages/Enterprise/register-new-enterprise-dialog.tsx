import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { toast } from 'sonner'
import { z } from 'zod'

import { EnterToTabForm } from '@/components/enter-to-tab-form'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input' // Certifique-se de importar seu componente Input
import { Label } from '@/components/ui/label'

const newEnterpriseProfileShcema = z.object({
  razaoSocial: z.string(),
  nomeFantasia: z.string(),
  pessoa: z.string(),
  Cnpj: z.string(),
  cep: z.string(),
  numero: z.string(),
  endereco: z.string(),
  cidade: z.string(),
  uf: z.string(),
  complemento: z.string().optional(),
})

type NewEnterpriseProfileSchema = z.infer<typeof newEnterpriseProfileShcema>

interface DialogRegisterNewEnterpriseProps {
  onClose: () => void
}

export function DialogRegisterNewEnterprise({
  onClose,
}: DialogRegisterNewEnterpriseProps) {
  const { handleSubmit, register, reset, setValue } =
    useForm<NewEnterpriseProfileSchema>({
      resolver: zodResolver(newEnterpriseProfileShcema),
      defaultValues: {
        pessoa: 'fisica',
      },
    })

  function handleRegisterNewEnterpise(data: unknown) {
    console.log(data)

    try {
      toast.success('Empresa cadastrado com sucesso')
      onClose()
    } catch {
      toast.error('Erro ao cadastrar empresa')
    }

    reset()
    setValue('Cnpj', '')
    setValue('cep', '')
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Nova Empresa</DialogTitle>
        <DialogDescription>Cadastre uma nova empresa</DialogDescription>
      </DialogHeader>

      <EnterToTabForm
        action=""
        className="space-y-4 py-4"
        onSubmit={handleSubmit(handleRegisterNewEnterpise)}
      >
        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
          <Input
            className="col-span-3"
            id="nomeFantasia"
            {...register('nomeFantasia')}
          />
        </div>

        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="razaoSocial">Razão Social</Label>
          <Input
            className="col-span-3"
            id="razaoSocial"
            {...register('razaoSocial')}
          />
        </div>

        <div className="grid grid-cols-8 items-center">
          <Label className="col-span-2">CNPJ</Label>
        </div>

        <div className="grid grid-cols-8 items-center">
          <Label htmlFor="cep" className="col-span-2">
            CEP
          </Label>
          <InputMask
            id="cep"
            {...register('cep')}
            mask="99999-999"
            className="col-span-2 rounded-r-none border-r-0 focus-within:ring-0 focus:border-primary flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="button" className="h-10 rounded-l-none border-r-0">
            <Search />
          </Button>

          <Label htmlFor="numero" className="ml-4">
            N.º
          </Label>
          <Input className="col-span-2" id="numero" {...register('numero')} />
        </div>

        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="endereco">Endereço</Label>
          <Input
            className="col-span-3"
            id="endereco"
            {...register('endereco')}
          />
        </div>

        <div className="grid grid-cols-8 items-center">
          <Label htmlFor="cidade" className="col-span-2">
            Cidade
          </Label>
          <Input className="col-span-3" id="cidade" {...register('cidade')} />

          <Label htmlFor="uf" className="ml-4">
            UF
          </Label>
          <Input id="uf" {...register('uf')} className="col-span-2" />
        </div>

        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="complemento">Complemento</Label>
          <Input
            id="complemento"
            {...register('complemento')}
            className="col-span-3"
          />
        </div>

        <DialogFooter>
          <DialogClose asChild onClick={onClose}>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </EnterToTabForm>
    </DialogContent>
  )
}

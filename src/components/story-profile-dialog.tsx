import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const userProfileSchema = z.object({
  email: z.string().email({
    message: 'Digite um E-mail válido',
  }),
  password: z
    .string()
    .min(3, {
      message: 'A senha precisa ter no minimo 3 caracteres',
    })
    .max(20, {
      message: 'A senha pode ter até no máximo 20 caracteres',
    }),
  newPassword: z.string().min(3).max(20),
})

type UserProfileSchema = z.infer<typeof userProfileSchema>

interface DialogStoryProfileProps {
  onClose: () => void
}

export function DialogStoryProfile({ onClose }: DialogStoryProfileProps) {
  const { handleSubmit, register, reset, formState } =
    useForm<UserProfileSchema>({
      resolver: zodResolver(userProfileSchema),
    })

  useEffect(() => {
    if (formState.errors.email) {
      toast.error(formState.errors.email.message)

      reset()
    }

    if (formState.errors.password) {
      toast.error(formState.errors.password.message)

      reset()
    }

    if (formState.errors.newPassword) {
      toast.error(formState.errors.newPassword.message)

      reset()
    }
  }, [formState, reset])

  function handleUpdateUser(data: UserProfileSchema) {
    console.log('Dados recebidos:', data)

    if (data.newPassword !== data.password) {
      toast.error('As senhas precisam ser iguais')

      return
    }

    try {
      toast.success('Usuario atualizado com sucesso')
      reset()
      onClose()
    } catch {
      toast.error('Erro ao atualizar dados do usuario')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil do Usuário</DialogTitle>
        <DialogDescription>
          Atualize as suas credenciais de Login
        </DialogDescription>
      </DialogHeader>

      <form action="" onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              E-mail
            </Label>
            <Input className="col-span-3" id="name" {...register('email')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Nova Senha
            </Label>
            <Input
              type="password"
              className="col-span-3"
              {...register('password')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Confirme a senha
            </Label>
            <Input
              type="password"
              className="col-span-3"
              {...register('newPassword')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild onClick={onClose}>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

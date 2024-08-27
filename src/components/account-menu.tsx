import { DialogClose } from '@radix-ui/react-dialog'
import { ChevronDown, LogOut, User } from 'lucide-react'
import { useState } from 'react'

import { DialogStoryProfile } from './story-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="bg-primary">
          <Button variant="outline" className="flex select-none gap-2">
            <span className="text-white">Softcom Tecnologia</span>
            <ChevronDown className="h-4 w-4 text-white" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            Luiz Eduardo luizzz154@hotmail.com
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem
              className="flex items-center"
              onClick={() => setIsDialogOpen(true)}
            >
              <User className="h-4 w-4 mr-3" />
              Perfil do Usuário
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem className="flex items-center">
            <LogOut className="h-4 w-4 mr-3 text-rose-500" />
            <span className="text-rose-500">Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogStoryProfile onClose={() => setIsDialogOpen(false)} />
      <DialogClose />
    </Dialog>
  )
}

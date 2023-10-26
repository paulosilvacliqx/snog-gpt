import { Meta, StoryObj } from '@storybook/react'
import { DeleteItem } from '../components/ShoppingBag/CheckoutBag/DeleteItem'
import { CheckCircle, TrashSimple, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export default {
  title: 'Components/DeleteItem',
  component: DeleteItem,
  decorators: [
    () => {
      return (
        <Dialog.Root>
          <Dialog.Trigger type="button">
            <TrashSimple size={20} className="text-R200 ml-12 cursor-pointer" weight="bold" />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
            <Dialog.Content className="absolute w-130 h-60 bg-white left-1/4">
              <Dialog.Close className="absolute right-6 top-6 text-P300">
                <X size={24} aria-label="Fechar" />
              </Dialog.Close>

              <div className="flex flex-col items-center justify-center p-6">
                <CheckCircle size={48} className="text-G300" weight="fill" />
                <h1 className="font-bold text-P300 text-4xl mt-6">Excluído com Sucesso!</h1>
                <p className="w-72 text-center font-normal text-B90 text-base mt-6">O item [nome do item] foi removido da sua sacola com sucesso.</p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}
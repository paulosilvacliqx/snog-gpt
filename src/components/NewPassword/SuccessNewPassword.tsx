import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle, TrashSimple, X } from 'phosphor-react';
import { useContext } from 'react';
import { NewPasswordContext } from '../../contexts/ContextsFiles/NewPassword';

export function SuccessNewPassword() {
  const { successNewPassword, setSuccessNewPassword } = useContext(NewPasswordContext);

  function handleCloseModal() {
    setSuccessNewPassword(false);
  }

  return (
    <Dialog.Root open={successNewPassword}>
      <Dialog.Trigger type="button">
        <TrashSimple size={20} className="text-R200 ml-12 cursor-pointer" weight="bold" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
        <Dialog.Content className="absolute w-130 h-60 bg-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-P300">
            <X size={24} aria-label="Fechar" onClick={handleCloseModal} />
          </Dialog.Close>

          <div className="flex flex-col items-center justify-center p-6">
            <CheckCircle size={48} className="text-G300" weight="fill" />
            <h1 className="font-bold text-P300 text-4xl mt-6">Alteração realizada!</h1>
            <p className="w-72 text-center font-normal text-B90 text-base mt-6">Senha nova senha foi alterada e salva com sucesso.</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
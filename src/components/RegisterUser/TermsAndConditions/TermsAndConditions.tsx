import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { RegisterUserContext } from '../../../contexts/ContextsFiles/RegisterUser';
import { Button } from '../../Button/Button';
import { DescriptionProtectionLaw } from './DescriptionTerms/DescriptionProtectionLaw';
import { DescriptionTermsAndConditions } from './DescriptionTerms/DescriptionTermsAndConditions';
import styled from 'styled-components';

export function TermsAndConditions() {
  const { openTerms, setOpenTerms } = useContext(RegisterUserContext)
  const [lgpd, setLgpd] = useState(false);

  function handleCloseModal() {
    setOpenTerms(false);
    setLgpd(false);
  }

  function handleOpenModal() {
    setOpenTerms(true);
    setLgpd(false);
  }

  const Content = styled.div`
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: #78C6BF;
      border-radius: 20px;
    }
  `;

  return (
    <Dialog.Root open={openTerms} onOpenChange={setOpenTerms}>
      <Dialog.Trigger>
        <span className="font-bold text-lg text-GL300 cursor-pointer outline-none" onClick={handleOpenModal}>
          Termos e Condições
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content
          className="fixed w-1200 max-h-110 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll scrollbar"
        >
          <Dialog.Close className="absolute right-6 top-6 text-P300">
            <X size={24} weight="bold" aria-label="Fechar" onClick={handleCloseModal} />
          </Dialog.Close>

          <Dialog.Title>
            <div className="flex items-center justify-center mt-8">
              <Button
                title='Termos e Condições'
                className="w-60 h-12 border outline-none bg-GL300 border-GL300 text-sm text-white font-medium "
                onClick={() => setLgpd(false)}
              />
              <Button
                title='LGPD'
                className="w-60 h-12 border outline-none bg-white border-GL300 text-sm text-GL300 font-medium"
                onClick={() => setLgpd(true)}
              />
            </div>
          </Dialog.Title>

          <Dialog.Description>
            {
              lgpd ?
                <DescriptionProtectionLaw />
                :
                <DescriptionTermsAndConditions />
            }
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
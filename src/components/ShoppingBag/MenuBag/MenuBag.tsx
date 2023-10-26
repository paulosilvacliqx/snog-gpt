import { X } from 'phosphor-react';
import { Button } from '../../Button/Button';
import imgTeste from '../../../assets/imgs/img-carousel.png';
import bagIcon from '../../../assets/icons/bag-icon.svg';
import * as Popover from '@radix-ui/react-popover'

export function MenuBag() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <img className="mr-7" src={bagIcon} alt="Sacola de compras" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="w-64 h-105 flex flex-col bg-GL300 shadow-2xl mr-64 mt-1">
          <div className="flex items-center justify-between p-6">
            <span className="text-white text-xl font-normal">Carrinho</span>

            <Popover.Close className="text-P300">
              <X size={20} aria-label="Fechar" weight="bold" />
            </Popover.Close>
          </div>

          <div className="flex items-center justify-between px-6">
            <span className="text-white text-xs font-light">Itens</span>

            <span className="text-white text-xs font-light">02</span>
          </div>

          <section className="flex flex-row p-6">
            <img className="w-16 h-16" src={imgTeste} alt="Imagem Itália" />

            <div className="flex flex-col ml-4 -mt-1">
              <p className="w-32 text-base text-B500 font-bold">Conheça Cultura da Itália</p>
              <span className="text-base text-B30 font-semibold">R$ 1.500,00</span>
            </div>
          </section>

          <section className="flex flex-row p-6">
            <img className="w-16 h-16" src={imgTeste} alt="Imagem Itália" />

            <div className="flex flex-col ml-4 -mt-1">
              <p className="w-32 text-base text-B500 font-bold">Conheça Cultura da Itália</p>
              <span className="text-base text-B30 font-semibold">R$ 1.500,00</span>
            </div>
          </section>

          <div className="flex flex-col items-end p-6">
            <p className="text-base text-B500 font-medium">Total</p>
            <span className="text-xl text-B30 font-semibold">R$ 1.500,00</span>
          </div>

          <div className="flex items-center justify-center">
            <Button
              className="w-52 h-14 flex items-center justify-center bg-P300 rounded-full text-white text-xl font-medium hover:opacity-80 transition-all duration-200"
              title="Fechar Pedido"
            />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
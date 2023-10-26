import { Heart, List, Question } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import closeMenu from "../../../../assets/icons/close-menu.svg";
import logoTripness from "../../../../assets/imgs/logo-tripness.png";
import userProfile from "../../../../assets/icons/account-box.svg";
import bagIcon from "../../../../assets/icons/bag.svg";
import calendarIcon from "../../../../assets/icons/calendar.svg";
import airplaneIcon from "../../../../assets/icons/airplane.svg";
import newExperienceIcon from "../../../../assets/icons/new-experience.svg";
import { Link } from "react-router-dom";

export function DropdownMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" className="p-3">
        <List size={24} color="#78c6bf" weight="fill" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
        <Dialog.Content className="absolute w-80 h-110 bg-GL300 left-1/4 -translate-x-64 -translate-y-52">
          <Dialog.Close className="absolute right-6 top-6 text-P300">
            <img src={closeMenu} alt="Fechar Menu" />
          </Dialog.Close>

          <div className="flex flex-row items-center mx-11 mt-12 mb-8 cursor-pointer">
            <img className="w-5 h-5" src={userProfile} alt="Perfil" />
            <p className="text-white font-semibold text-sm ml-4">Perfil</p>
          </div>

          <div className="flex flex-row items-center mx-11 mb-8 cursor-pointer">
            <img className="w-5 h-5" src={bagIcon} alt="Compras" />
            <Link
              to="/menudecompras"
              className="text-white font-semibold text-sm ml-4"
            >
              Compras
            </Link>
          </div>

          <div className="flex flex-row items-center mx-11 mb-8 cursor-pointer">
            <Heart
              size={22}
              weight="bold"
              className="text-white"
              aria-label="Favoritos"
            />
            <p className="text-white font-semibold text-sm ml-4">Favoritos</p>
          </div>

          <div className="flex flex-row items-center mx-11 mb-8 cursor-pointer">
            <img className="w-5 h-5" src={calendarIcon} alt="Programação" />
            <p className="text-white font-semibold text-sm ml-4">Programação</p>
          </div>

          <div className="flex flex-row items-center mx-11 mb-8 cursor-pointer">
            <img
              className="w-5 h-5"
              src={airplaneIcon}
              alt="Minhas experiências"
            />
            <p className="text-white font-semibold text-sm ml-4">
              Minhas experiências
            </p>
          </div>

          <div className="w-[274px] h-[1px] bg-GL100 mx-5" />

          <div className="flex flex-row items-center mx-11 mt-8 mb-8 cursor-pointer">
            <img
              className="w-5 h-5"
              src={newExperienceIcon}
              alt="Crie uma experiência"
            />
            <Link
              to="/criarexperiencia"
              className="text-white font-semibold text-sm ml-4"
            >
              Crie uma experiência
            </Link>
          </div>

          <div className="flex flex-row items-center px-11 mb-8 cursor-pointer">
            <Question
              size={22}
              className="text-white"
              weight="bold"
              aria-label="Ajuda"
            />
            <p className="text-white font-semibold text-sm ml-4">Ajuda</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

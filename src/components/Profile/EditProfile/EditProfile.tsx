import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { PencilSimple, X } from "phosphor-react";
import { Button } from "../../Button/Button";
import { InfosUpdateUser } from "./InfosUpdateUser/InfosUpdateUser";
import { SocialUser } from "./SocialUser/SocialUser";
import { DescriptionUser } from "./DescriptionUser/DescriptionUser";

export function EditProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        title="Editar Perfil"
        className="w-36 h-12 border border-P300 rounded-full flex items-center justify-center font-bold text-sm text-P300 hover:opacity-80 transition-all duration-300"
        icon={
          <PencilSimple
            size={24}
            className="text-P300 mr-2"
            aria-label="Editar Perfil"
          />
        }
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        isFullHeight={true}
      >
        <DrawerOverlay className="w-screen h-screen bg-black/50 fixed inset-0" />
        <DrawerContent
          className="h-screen bg-white left-[55rem]"
          overflowY={"scroll"}
        >
          <div className="flex items-center p-6">
            <X
              size={24}
              className="text-GL300 cursor-pointer mr-3"
              weight="bold"
              aria-label="Fechar"
              onClick={onClose}
            />
            <span className="text-GL300 text-xl font-semibold">
              Editar Perfil
            </span>
          </div>

          <DrawerHeader className="flex p-6">
            <DescriptionUser />
          </DrawerHeader>

          <DrawerBody className="flex flex-col">
            <InfosUpdateUser />
            <SocialUser />

            <Button
              className="w-99 h-14 mx-6 mt-16 mb-4 bg-GL300 rounded-full text-white text-base font-medium"
              title="Salvar"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

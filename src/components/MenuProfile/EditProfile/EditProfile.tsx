import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { MapPin, PencilSimple, X } from "phosphor-react";
import { Button } from "../../Button/Button";
import { UserDataContext } from "../../../contexts/ContextsFiles/UserData";
import { useContext } from "react";
import { EditProfileContext } from "../../../contexts/ContextsFiles/EditProfile";
import { Input } from "../../Input/Input";
import userProfile from "../../../assets/icons/user.svg";
import ReactInputMask from "react-input-mask";
import axios from "axios";

export function EditProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData, setUserData, accessToken } = useContext(UserDataContext);
  const { name, contactUser, setName, setContactUser } =
    useContext(EditProfileContext);
  const [disabled, setDisabled] = useState(false);

  async function handleEditUser() {
    await axios
      .put(
        `${import.meta.env.VITE_APP_WEB_API}user/register/`,
        {
          name: name,
          phone: contactUser,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Button
        onClick={onOpen}
        title="Meu Perfil"
        className="flex text-P300 font-semibold text-base"
        icon={
          <img className="w-5 h-5 mr-3" src={userProfile} alt="Meu perfil" />
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
          className="h-screen bg-white left-[75rem]"
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
            {userData?.photoURL && (
              <img
                className="w-28 h-28"
                src={userData?.photoURL}
                alt="Imagem de perfil"
              />
            )}

            <div className="flex flex-col ml-4 mt-10">
              <h1 className="text-2xl text-O300 font-bold">
                {userData?.displayName}
              </h1>

              <div className="flex flex-row items-center mt-4">
                <MapPin size={16} className="text-B70 mr-2" weight="regular" />
                <span className="font-normal text-sm text-B70">
                  São Paulo, SP
                </span>
              </div>
            </div>
          </DrawerHeader>

          <DrawerBody className="flex flex-col">
            <div className="w-99 h-14 mx-6 mt-2 border border-P300 rounded-xl flex items-center">
              <Input
                className={
                  "w-99 h-14 p-4 rounded-xl border-none outline-none bg-transparent"
                }
                placeholder={"Nome de Usuário"}
                type={"text"}
                value={userData?.displayName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <Input
              className={
                "w-99 h-14 mx-6 mt-2 p-4 bg-B30 rounded-xl outline-none cursor-not-allowed"
              }
              type="email"
              placeholder="E-mail"
              value={userData?.email}
              // disabled
              onChange={() => {}}
            />

            <ReactInputMask
              className="w-99 h-14 mx-6 mt-2 p-4 border border-P300 rounded-xl outline-none"
              mask="(99) 99999 - 9999"
              placeholder="Telefone"
              type="text"
              value={userData?.telefone}
              onChange={(e) => setContactUser(e.target.value)}
            />

            <Button
              onClick={handleEditUser}
              className="w-99 h-14 mx-6 fixed bottom-6 bg-B30 cursor-not-allowed rounded-full text-white text-base font-medium"
              title="Salvar"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

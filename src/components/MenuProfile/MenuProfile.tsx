import { useContext } from "react";
import { UserDataContext } from "../../contexts/ContextsFiles/UserData";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { ToastError, ToastSuccess } from "../Toastify/ToastifyNotification";
import { EditProfile } from "./EditProfile/EditProfile";
import { NewPasswordContext } from "../../contexts/ContextsFiles/NewPassword";
import { X } from "phosphor-react";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";

import arrowDropDown from "../../assets/icons/arrow-drop-down.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import padLock from "../../assets/icons/padlock.svg";
import roadMap from "../../assets/icons/road-map.svg";
import add from "../../assets/icons/add.svg";
import { NewPassword } from "../NewPassword/NewPassword";
import clsx from "clsx";
import { logout } from "../../services/auth";

export function MenuProfile() {
  const { userData, setUserData } = useContext(UserDataContext);
  const {
    setOpenNewPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmNewPassword,
    openNewPassword,
  } = useContext(NewPasswordContext);
  const auth = getAuth();

  // Função que permite ao usuário sair da conta dele
  function signOutForm() {
    logout();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        ToastSuccess("Nos vemos em breve");
      })
      .catch((error) => {
        console.error(error);
        ToastError("Erro ao sair");
      });
  }

  function handleCloseDialog() {
    setOpenNewPassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  const urlParamsProfile = location.href.split("/").pop();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="w-20 h-12 flex flex-row items-center justify-evenly rounded-full cursor-pointer bg-P300 hover:opacity-70 transition-all duration-200">
          <div>
            {userData?.photoURL && (
              <img
                className="w-8 h-8 rounded-full"
                src={userData?.photoURL}
                alt="Imagem de Perfil"
              />
            )}
          </div>
          <div>
            <img src={arrowDropDown} alt="Abrir menu" />
          </div>
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="flex flex-col w-48 h-full pb-3.5 rounded-lg bg-white shadow-3xl mr-20">
          <div className="flex flex-row items-center ml-4 mt-4 cursor-pointer">
            <EditProfile />
          </div>

          <Dialog.Root open={openNewPassword}>
            <Dialog.Trigger
              onClick={() => setOpenNewPassword(true)}
              type="button"
            >
              <div className="flex flex-row items-center ml-4 mt-8 cursor-pointer">
                <img src={padLock} alt="Alterar Senha" />
                <p className="text-P300 font-semibold text-base ml-3 mb-0">
                  Alterar Senha
                </p>
              </div>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />

              <Dialog.Content
                className={clsx(
                  "absolute w-full max-w-xl h-[31rem] bg-white top-[20%] left-1/2 -translate-x-1/2",
                  {
                    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
                      urlParamsProfile === "meusroteiros",
                  }
                )}
              >
                <Dialog.Close
                  onClick={handleCloseDialog}
                  className="absolute right-6 top-6 text-P300"
                >
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <NewPassword />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <div className="flex flex-row items-center ml-4 mt-8 cursor-pointer">
            <img src={add} alt="Novo Roteiros" />
            <Link
              to="/"
              className="text-P300 font-semibold text-base ml-3 mb-0"
            >
              Criar Roteiro
            </Link>
          </div>

          <div className="flex flex-row items-center ml-4 mt-8 cursor-pointer">
            <img src={roadMap} alt="Meus Roteiros" />
            <Link
              to="/meusroteiros"
              className="text-P300 font-semibold text-base ml-3 mb-0"
            >
              Meus Roteiros
            </Link>
          </div>

          <div
            className="flex flex-row items-center ml-4 mt-8 cursor-pointer"
            onClick={signOutForm}
          >
            <img src={arrowRight} alt="Sair" />
            <p className="text-P300 font-semibold text-base ml-3 mb-0">Sair</p>
          </div>
          <Popover.Arrow height={8} width={16} className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

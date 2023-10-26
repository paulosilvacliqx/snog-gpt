import { useContext, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import clsx from "clsx";
import axios from "axios";
import { UserDataContext } from "../../contexts/ContextsFiles/UserData";
import { ToastError, ToastSuccess } from "../Toastify/ToastifyNotification";

export function RecoverPassword() {
  const {
    recoverSuccess,
    setOpenRecoverPassword,
    setRecoverSuccess,
    setOpenLogin,
  } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);

  function handleBackForm() {
    setOpenRecoverPassword(false);
    setRecoverSuccess(false);
    setOpenLogin(false);
  }

  function handleValidateEmail() {
    var validate = true;

    if (
      !(
        email.length > 6 &&
        email.indexOf("@") > -1 &&
        email.split("@")[1].length > 3
      )
    ) {
      setEmailValidate(true);
      validate = false;
    }

    return validate;
  }

  async function handleRecoverPassword() {
    if (handleValidateEmail()) {
      setDisabled(true);
      await axios
        .post(`${import.meta.env.VITE_APP_WEB_API}user/recovery/`, {
          email: email,
        })
        .then((response) => {
          if (response.data.message === "Password has been updated.") {
            ToastSuccess("Uma nova senha foi enviada para seu e-mail");
            setDisabled(false);
            setRecoverSuccess(true);
          }
        })
        .catch((error) => {
          ToastError("E-mail não encontrado");
          console.error(error);
        });
    } else {
      ToastError("Insira um e-mail válido");
    }
    setDisabled(false);
  }

  useEffect(() => {
    if (email === "" && !recoverSuccess) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, recoverSuccess]);

  return (
    <main className="flex flex-col items-center justify-center mt-24">
      {!recoverSuccess && (
        <Input
          className={clsx(
            "w-105 h-14 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none",
            {
              "bg-P300 text-white": email !== "",
            }
          )}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      <Button
        onClick={recoverSuccess ? handleBackForm : handleRecoverPassword}
        title={recoverSuccess ? "Voltar" : "Enviar"}
        className={clsx(
          "w-105 h-14 absolute bottom-6 font-medium text-bas flex items-center justify-center rounded-full transition-colors duration-700",
          {
            "text-P200 cursor-not-allowed": disabled,
            "bg-GL300 text-white": !disabled,
          }
        )}
      />
    </main>
  );
}

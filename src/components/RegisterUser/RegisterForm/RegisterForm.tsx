import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUserContext } from "../../../contexts/ContextsFiles/RegisterUser";
import { Check, EyeSlash, X } from "phosphor-react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { ToastError, ToastSuccess } from "../../Toastify/ToastifyNotification";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import InputMask from "react-input-mask";
import axios from "axios";
import { TermsAndConditions } from "../TermsAndConditions/TermsAndConditions";
import { Button as ButtonItineraryV2 } from "../../ItineraryV2/Button/Button";

export function RegisterForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    contact,
    setContact,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setOpenTerms,
    openTerms,
  } = useContext(RegisterUserContext);
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [passwordEquals, setPasswordEquals] = useState("");
  const [checked, setChecked] = useState<Checkbox.CheckedState>();

  const auth = getAuth();
  const navigate = useNavigate();

  async function handleRegisterUser(e: any) {
    e.preventDefault();
    setDisabled(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.uid) {
          setDisabled(true);
          axios
            .post(`${import.meta.env.VITE_APP_WEB_API}user/register/`, {
              firebase_id: userCredential.user.uid,
              name: name,
              email: email,
              phone: contact,
            })
            .then((response) => {
              if (
                response.data.message ===
                  "The user_sale created successfully!" &&
                response.data.success
              ) {
                ToastSuccess("Usuário criado com sucesso");
                setName("");
                setEmail("");
                setContact("");
                setPassword("");
                setConfirmPassword("");
                navigate("/");
              }
            })
            .catch((error) => {
              console.error(error);
              ToastError("Erro ao criar usuário, tente novamente");
              setDisabled(false);
            });
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          ToastError("E-mail já em uso");
        } else if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          ToastError("A senha deve conter pelo menos 6 caracters");
        }
        console.error(error);
        setDisabled(false);
      });
  }

  useEffect(() => {
    if (password && confirmPassword !== "" && password !== confirmPassword) {
      setPasswordEquals("As senhas devem ser iguais");
    } else {
      setPasswordEquals("");
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      contact !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      checked
    ) {
      setDisabled(!disabled);
    } else {
      setDisabled(true);
    }
  }, [name, email, contact, password, confirmPassword, checked]);

  return (
    <form className="w-full flex flex-col items-center ">
      {/* Nome */}
      <Input
        className={clsx(
          "w-120 h-12 mt-8 autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none",
          {
            "bg-black text-white": name !== "",
          }
        )}
        placeholder="Nome Completo"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* E-mail */}
      <Input
        className={clsx(
          "w-120 h-12 mt-4 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none",
          {
            "bg-P300 text-white": email !== "",
          }
        )}
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Telefone */}
      <InputMask
        className={clsx(
          "w-120 h-12 mt-4 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none",
          {
            "bg-P300 text-white": contact !== "",
          }
        )}
        mask="(99) 99999-9999"
        placeholder="Telefone"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      {/* Senha / Confirmar Senha */}
      <div className="flex flex-row">
        <div
          className={clsx(
            "w-[16.5rem] h-12 flex mr-10 flex-row items-center justify-between font-normal text-lg border transition-colors duration-700 border-P300 rounded-xl mt-6",
            {
              "bg-P300 text-white": password !== "",
              "bg-white text-white": password === "",
            }
          )}
        >
          <Input
            className={clsx(
              "w-60 h-10 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none",
              {
                "bg-P300 text-white": password !== "",
              }
            )}
            placeholder="Senha"
            type={viewPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <EyeSlash
            onClick={() => setViewPassword(!viewPassword)}
            size={28}
            className={clsx(
              "text-white font-bold mr-2 cursor-pointer transition-colors duration-700",
              {
                "text-P300": password === "",
              }
            )}
          />
        </div>

        <div
          className={clsx(
            "w-[16.875rem] h-12 flex flex-row items-center justify-between font-normal text-lg text-white border transition-colors duration-700 border-P300 rounded-xl mt-6",
            {
              "bg-P300 text-white": confirmPassword !== "",
              "bg-white text-white": confirmPassword === "",
            }
          )}
        >
          <Input
            className={clsx(
              "w-60 h-10 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none",
              {
                "bg-P300 text-white": confirmPassword !== "",
              }
            )}
            placeholder="Confirmação"
            type={viewConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <EyeSlash
            onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
            size={28}
            className={clsx(
              "text-white font-bold mr-2 cursor-pointer transition-colors duration-700",
              {
                "text-P300": confirmPassword === "",
              }
            )}
          />
        </div>
      </div>

      <p className="font-medium text-base text-red-600 mr-90 mt-2">
        {passwordEquals}
      </p>

      <div className="flex flex-row items-center mr-56 mt-6 mb-10">
        <Checkbox.Root
          className="flex items-center gap-3 group mr-2 focus:outline-none"
          checked={checked}
          onCheckedChange={(checked: Checkbox.CheckedState) =>
            setChecked(checked)
          }
        >
          <div className="w-6 h-6 rounded-lg flex items-center justify-center border-2 group-data-[state=checked]:bg-P300 group-data-[state=checked]:border-P300 transition-colors duration-300">
            <Checkbox.Indicator>
              <Check size={16} className="text-white" />
            </Checkbox.Indicator>
          </div>
        </Checkbox.Root>
        <p className="font-normal text-lg text-black">
          Concordo com os&nbsp;
          <TermsAndConditions />
        </p>
      </div>

      <ButtonItineraryV2 onClick={(e) => handleRegisterUser(e)}>
        Continuar
      </ButtonItineraryV2>
    </form>
  );
}

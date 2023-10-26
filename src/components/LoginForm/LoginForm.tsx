import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import { Check, EyeSlash } from "phosphor-react";
import { auth } from "../../services/firebase";
import { UserDataContext } from "../../contexts/ContextsFiles/UserData";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ToastError, ToastSuccess } from "../Toastify/ToastifyNotification";
import * as Checkbox from "@radix-ui/react-checkbox";
import { login, setUser } from "../../services/auth";
import clsx from "clsx";

export function LoginForm() {
  const navigate = useNavigate();
  const {
    setEmail,
    email,
    setPassword,
    password,
    setOpenLogin,
    openRecoverPassword,
    setOpenRecoverPassword,
  } = useContext(UserDataContext);

  type UserType = {
    email: string;
    password: string;
  };

  const [disabled, setDisabled] = useState(true);
  const [viewPassword, setViewPassword] = useState(false);
  const [checked, setChecked] = useState<Checkbox.CheckedState>();

  function handleSigInEmailAndPassword(e: any) {
    setDisabled(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        login(user.accessToken);
        setUser(user);
        setEmail("");
        setPassword("");
        ToastSuccess("Login realizado");
      })
      .catch((error) => {
        console.error(error.message);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          ToastError("Usuário não encontrado");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          ToastError("Usuário/senha invalido");
        } else {
          ToastError("Erro ao fazer login, tente novamente");
        }
        setDisabled(false);
      });
  }

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("REMEMBER_SIGN");
    if (localStorageUser !== null) {
      const user: UserType = JSON.parse(localStorageUser);
      setEmail(user.email);
      setPassword(user.password);
      setChecked(true);
    }
  }, []);

  // Função responsável pela autenticação via Google
  const provider = new GoogleAuthProvider();
  auth.languageCode = "pt-BR";

  return (
    <form className="w-full flex items-center flex-col mt-8">
      <Input
        className={clsx(
          "w-105 h-14 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none",
          {
            "bg-P300 text-white": email !== "",
          }
        )}
        placeholder={"E-mail"}
        type={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setChecked(false);
          localStorage.removeItem("REMEMBER_SIGN");
        }}
      />

      <div
        className={clsx(
          "w-105 h-14 flex flex-row items-center justify-between font-normal text-lg text-white border transition-colors duration-700 border-P300 rounded-xl mt-6",
          {
            "bg-P300 text-white": password !== "",
          }
        )}
      >
        <Input
          className={clsx(
            "w-100 h-12 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none",
            {
              "bg-P300 text-white": password !== "",
            }
          )}
          placeholder="Senha"
          type={viewPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setChecked(false);
            localStorage.removeItem("REMEMBER_SIGN");
          }}
        />
        <EyeSlash
          onClick={() => setViewPassword(!viewPassword)}
          size={28}
          className={clsx(
            "text-white font-bold mr-5 cursor-pointer transition-colors duration-700",
            {
              "text-P300": password === "",
            }
          )}
        />
      </div>

      <section className="w-105 flex justify-between mt-6">
        <div className="flex items-center">
          <Checkbox.Root
            disabled={disabled}
            className="flex items-center group mr-2 focus:outline-none"
            checked={checked}
            onCheckedChange={(checked: Checkbox.CheckedState) => {
              setChecked(checked);
              if (checked) {
                localStorage.setItem(
                  "REMEMBER_SIGN",
                  JSON.stringify({
                    email,
                    password,
                  })
                );
              } else {
                localStorage.removeItem("REMEMBER_SIGN");
              }
            }}
          >
            <div
              className={clsx(
                "w-6 h-6 rounded-lg flex items-center justify-center  border-2 transition-colors duration-300",
                {
                  "bg-P300 text-white": checked,
                  "bg-white": !checked,
                }
              )}
            >
              <Checkbox.Indicator>
                <Check
                  size={14}
                  weight="bold"
                  className="text-white font-extrabold"
                />
              </Checkbox.Indicator>
            </div>
          </Checkbox.Root>
          <span className="text-sm text-B500 font-semibold">Lembrar-me</span>
        </div>

        <p className="text-sm text-BL300 font-bold mt-1">
          Esqueceu sua senha ?&nbsp;
          <span
            className="text-sm text-BL300 font-bold underline cursor-pointer"
            onClick={() => setOpenRecoverPassword(true)}
          >
            Clique aqui
          </span>
        </p>
      </section>

      <Button
        disabled={disabled}
        onClick={handleSigInEmailAndPassword}
        title={"Entrar"}
        className={clsx(
          "w-105 h-14 mt-4 font-medium text-base text-white flex items-center justify-center rounded-full transition-colors duration-700",
          {
            "bg-P10 text-P200": disabled,
            "bg-GL300 text-white": !disabled,
          }
        )}
      />

      {/* <section onClick={handleLoginWithGoogle} className="w-105 h-10 flex items-center justify-center mt-4 rounded-3xl border border-P100 hover:opacity-80 transition-all duration-300 cursor-pointer">
        <img
          src={googleLogin}
          className="w-6 h-6 rounded-full cursor-pointer"
          alt="Faça login usando o Google"
        />
        <p className="font-medium text-base text-P200 ml-4">Continue com Google</p>
      </section> */}
    </form>
  );
}

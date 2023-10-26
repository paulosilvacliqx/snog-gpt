import { RegisterForm } from "./RegisterForm/RegisterForm";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import backIcon from "../../assets/icons/back-colored-icon.svg";
import { RegisterUserContext } from "../../contexts/ContextsFiles/RegisterUser";
import { useContext } from "react";

export function RegisterUser() {
  const navigate = useNavigate();
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
  } = useContext(RegisterUserContext);

  function handleBackLandingPage() {
    navigate("/");
    setName("");
    setEmail("");
    setContact("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main className="w-full bg-black">
      <Header />

      <div className="w-full h-full bg-P50 flex flex-col items-center bg-black">
        <h1 style={{ color: "#b9b0d2 " }} className="font-bold text-5xl">
          Seus momentos começam aqui
        </h1>
        <p
          style={{ color: "#949494" }}
          className="font-normal text-P300 text-2xl mt-3"
        >
          Antes de iniciarmos, precisamos de algumas informações para cadastro:
        </p>

        <RegisterForm />
      </div>
    </main>
  );
}

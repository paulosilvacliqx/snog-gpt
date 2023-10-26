import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { CardsExperiences } from "./CardsExperiences/CardsExperiences";
import { SideBar } from "./SideBar/SideBar";
import { Button } from "../Button/Button";
import backIcon from "../../assets/icons/back-colored-icon.svg";

export function SelectionExperiences() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="w-full h-auto bg-P50 flex flex-col">
        <h1 className="font-bold text-P300 text-5xl text-center">
          Seus momentos começam aqui
        </h1>
        <p className="font-normal text-P300 text-2xl mt-3 text-center">
          As experiências abaixo foram selecionadas com base na sua escolha de
          palavras:
        </p>

        <div className="flex mt-16">
          <SideBar />

          <div className="grid grid-cols-3">
            <CardsExperiences />
          </div>
        </div>
      </div>
    </main>
  );
}

import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { CardsSelection } from "./CardsSelection/CardsSelection";
import backIcon from "../../assets/icons/back-colored-icon.svg";
import { useNavigate } from "react-router-dom";

export function SelectionTripness() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="w-full h-full bg-P50 flex flex-col items-center justify-center">
        <h1 className="font-bold text-P300 text-5xl">Seleção Tripness</h1>
        <p className="font-normal text-P300 text-2xl mt-3">
          As experiências são uma seleção especial escolhidas a dedo pela nossa
          curadoria:
        </p>

        <div className="grid grid-cols-3 mt-16 gap-10">
          <CardsSelection />
        </div>
      </div>
    </main>
  );
}

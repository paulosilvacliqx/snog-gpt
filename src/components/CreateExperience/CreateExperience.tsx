import { Topbar } from "../Profile/Topbar/Topbar";
import { CreateExperienceForm } from "./CreateExperienceForm/CreateExperienceForm";

export function CreateExperience() {
  return (
    <main className="w-full bg-P50 flex flex-col items-center justify-between">
      <div className="w-full h-60" >
        <Topbar />
      </div>

      <div className="w-full h-[50rem] bg-P50 flex flex-col items-center">
        <h1 className="font-bold text-P300 text-5xl">Ajudemos a criar momento incríveis</h1>
        <p className="w-1000 text-center font-normal text-P300 text-2xl mt-3">Preencha os campos abaixo com as suas sugestões de experiências a serem fornecidas na Tripness</p>

        <CreateExperienceForm />
      </div>
    </main>
  );
} 
import instructionsImg from '../../../assets/imgs/instructions-img.png';
import { InstructionsCards } from './InstructionsCards';

export function InstructionsTripness() {
  return (
    <main className="w-full bg-P50 flex flex-col items-center justify-center">
      <div className="w-full h-80 flex flex-col items-center pt-20" style={{ backgroundImage: `url(${instructionsImg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="w-152 font-light text-white text-5xl text-center">
          Garantimos a você tudo que precisa para viver um momento única
        </h1>
        <h1 className="w-152 font-bold text-white text-5xl text-center">de forma simples</h1>
      </div>

      <InstructionsCards />
    </main>
  );
}
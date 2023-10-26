import instructionOne from '../../../assets/icons/instruction-1.svg';
import instructionTwo from '../../../assets/icons/instruction-2.svg';
import instructionThree from '../../../assets/icons/instruction-3.svg';
import instructionFor from '../../../assets/icons/instruction-4.svg';
import instructionFive from '../../../assets/icons/instruction-5.svg';

export function InstructionsCards() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex items-center mt-12">
        <section className="flex flex-col items-center mr-16">
          <img src={instructionOne} alt="Cadastre-se rapidamente e apenas o essencial" />
          <p className="font-normal text-lg text-B10 w-36 text-center mt-5">Cadastre-se rapidamente e apenas o essencial</p>
        </section>

        <section className="flex flex-col items-center mr-16">
          <img src={instructionTwo} alt="Selecione as palavras que dão match ao seu estado de espírito atual" />
          <p className="font-normal text-lg text-B10 w-36 text-center mt-5">Selecione as palavras que dão match ao seu estado de espírito atual</p>
        </section>

        <section className="flex flex-col items-center mr-16">
          <img src={instructionThree} alt="Escolha as experiências que mais te agradam" />
          <p className="font-normal text-lg text-B10 w-36 text-center mt-5">Escolha as experiências que mais te agradam</p>
        </section>
      </div>

      <div className="flex items-center mt-16">
        <section className="flex flex-col items-center mr-16">
          <img src={instructionFor} alt="Finalize pagamendo a compra e está tudo certo!" />
          <p className="font-normal text-lg text-B10 w-36 text-center mt-5">Finalize pagamendo a compra e está tudo certo!</p>
        </section>

        <section className="flex flex-col items-center mr-16">
          <img src={instructionFive} alt="Só aguardar sua experiência única para você." />
          <p className="font-normal text-lg text-B10 w-36 text-center mt-5">Só aguardar sua experiência única para você.</p>
        </section>
      </div>
    </main>
  );
}
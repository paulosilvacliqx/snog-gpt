import { ArrowLeft } from "phosphor-react";
import { Button } from "../../Button/Button";
import { Header } from "../../Header/Header";
import { ListRequests } from "./ListRequests";
import backIcon from "../../../assets/icons/back-colored-icon.svg";

export function CheckoutBag() {
  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="w-full h-152 bg-P50 flex flex-col items-center">
        <section className="w-1000 h-64 p-6 mt-6 bg-white">
          <div className="grid grid-cols-4">
            <span className="font-medium text-sm text-B50">Experiências</span>
            <span className="font-medium text-sm text-B50 ml-16">Preço</span>
            <span className="font-medium text-sm text-B50 ml-16">
              Participantes
            </span>
            <span className="font-medium text-sm text-B50 ml-12">
              Valor Total
            </span>
          </div>

          <ListRequests />
          <ListRequests />
        </section>

        <div className="w-1000 h-24 p-6 mt-6 bg-GL300">
          <span className="font-normal text-sm text-white">Resumo</span>
          <div className="flex items-center justify-between mt-3">
            <span className="font-semibold text-sm text-white">Total</span>
            <span className="font-semibold text-sm text-white">
              R$ 3.000,00
            </span>
          </div>
        </div>

        <div className="w-1000 mt-14 flex items-center justify-between">
          <Button
            title="Continuar escolhendo experiências"
            className="flex items-center text-P300 text-base font-bold"
            icon={<ArrowLeft size={24} className="mr-3" weight="regular" />}
          />

          <Button
            title="Checkout"
            className="w-100 h-14 flex items-center justify-center bg-P300 rounded-full text-white text-base font-bold"
          />
        </div>
      </div>
    </main>
  );
}

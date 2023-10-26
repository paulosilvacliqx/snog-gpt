import { useState } from 'react'
import { Minus, Plus } from "phosphor-react";
import { DeleteItem } from './DeleteItem';
import imgTeste from '../../../assets/imgs/img-carousel.png';

export function ListRequests() {
  const [participants, setParticipants] = useState(0)

  function handleAddPariticpants() {
    setParticipants(participants + 1);
  }

  function handleRemovePariticpants() {
    if (participants > 0) {
      setParticipants(participants - 1);
    }
  }

  return (
    <div className="w-full grid grid-cols-4">
      <div className="w-72">
        <div className="flex flex-row items-center mt-6">
          <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
          <h1 className="font-bold text-base text-B400 ml-4">Conheça Cultura da Itália</h1>
        </div>
      </div>

      <div className="w-24 ml-16">
        <div className="w-24 mt-10">
          <span className="font-medium text-sm text-B50">R$ 1.500,00</span>
        </div>
      </div>

      <div className="w-24 ml-16">
        <div className="w-24 h-12 flex flex-row items-center justify-center border border-B40 rounded-xl mt-6">
          <Minus size={20} className="text-P100 cursor-pointer mr-2" weight="bold" onClick={handleRemovePariticpants} />
          {participants}
          <Plus size={20} className="text-P300 cursor-pointer ml-2" weight="bold" onClick={handleAddPariticpants} />
        </div>
      </div>

      <div className="w-24 ml-12">
        <div className="w-48 mt-10 flex flex-row">
          <span className="font-medium text-sm text-B50">R$ 1.500,00</span>
          <DeleteItem />
        </div>
      </div>
    </div>
  );
}
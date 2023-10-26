import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../Button/Button";
import { X } from "phosphor-react";
import { TangranContext } from "../../../contexts/ContextsFiles/Tangran";
import iconKey from '../../../assets/icons/Vector.svg';

export function SideBar() {
  const { wordValues, selectedWords } = useContext(TangranContext)
  const navigate = useNavigate();

  return (
    <div className="w-60 h-105 ml-28 flex flex-col">
      <p className="font-semibold text-xl text-P300">Palavras - Chave Selecionadas:</p>

      {wordValues && wordValues.map((wordValue) => {
        return (
          <div className="w-max h-12 bg-P300 rounded-full flex items-center p-4 my-2">
            <img src={iconKey} alt="Natureza" />
            <p key={wordValue} className="text-white text-base font-bold ml-2 uppercase">{wordValue}</p>
            <div className="w-4 h-4 ml-2 bg-white rounded-full flex items-center justify-center cursor-pointer">
              <X size={12} className="text-P300" />
            </div>
          </div>
        )
      })}

      <Button
        onClick={() => navigate('/tangran')}
        title="Trocar"
        className="w-60 h-14 mt-9 rounded-full border-2 border-P300 text-P300 text-xl font-semibold transition-all duration-300 hover:opacity-80"
      />
    </div>
  );
}
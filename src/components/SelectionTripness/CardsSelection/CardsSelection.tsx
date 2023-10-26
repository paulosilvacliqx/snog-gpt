import { useContext, useEffect } from 'react';
import { Heart } from 'phosphor-react';
import { TripnessSelectionContext } from '../../../contexts/ContextsFiles/SelectionTripness';
import imgCard from '../../../assets/imgs/card.png';
import axios from 'axios';
import { UserDataContext } from '../../../contexts/ContextsFiles/UserData';
import { handleGetSelectionTripness } from '../../../services/apis/SelectionTripness';

export function CardsSelection() {
  const { accessToken } = useContext(UserDataContext)
  const { allSelection, setAllSelection } = useContext(TripnessSelectionContext)

  useEffect(() => {
    handleGetSelectionTripness(accessToken, setAllSelection);
  }, [accessToken])

  return (
    <>
      {allSelection && allSelection.map((experience) => {
        var priceExperience = experience.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        return (
          <div key={experience.experience_id} className="w-64 h-[25.125rem] bg-black mb-16 flex flex-col">
            <img className="w-64" src={imgCard} alt="Imagem ilustrativa" />

            <div className="p-4">
              <span className="font-bold text-lg text-white">{experience.experience_name}</span>
              <p className="font-normal text-xs text-B70">{experience.experience_short_description}</p>
            </div>

            <div className="flex flex-row items-center justify-between px-4">
              <div className="flex flex-col">
                <p className="font-normal text-xs text-B300">A partir de</p>
                <strong className="font-bold text-xl text-white">{priceExperience}</strong>
              </div>

              <Heart size={24} className="text-P300 font-extrabold cursor-pointer" />
            </div>
          </div>
        )
      })}
    </>
  );
}
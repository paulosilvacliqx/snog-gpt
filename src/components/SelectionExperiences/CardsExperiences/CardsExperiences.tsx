import { useContext, useEffect } from 'react';
import { Heart } from 'phosphor-react';
import { ExperienceListContext } from '../../../contexts/ContextsFiles/ExperienceList';
import imgCard from '../../../assets/imgs/card.png';

export function CardsExperiences() {
  const { experienceItem } = useContext(ExperienceListContext)

  return (
    <>
    {experienceItem.map((experienceCard) => {
      var priceExperience = experienceCard.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

      return (
        <div key={experienceCard.experience_id} className="w-64 h-[25.125rem] bg-white ml-4 mb-16 flex flex-col">
          <img className="w-64" src={imgCard} alt="Imagem ilustrativa" />

          <div className="py-4 px-3">
            <span className="font-bold text-base text-P300">{experienceCard.experience_name}</span>
            <p className="font-normal text-xs text-B300">{experienceCard.experience_short_description}</p>
          </div>

          <div className="flex flex-row items-center justify-between px-4 py-8">
            <div className="flex flex-col">
              <p className="font-normal text-xs text-B300">A partir de</p>
              <strong className="font-bold text-xl text-B300">{priceExperience}</strong>
            </div>

            <Heart size={24} className="text-P300 font-extrabold cursor-pointer" />
          </div>
        </div>
      );
    })}
    </>
  );
}
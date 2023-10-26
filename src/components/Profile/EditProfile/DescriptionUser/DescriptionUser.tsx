import { MapPin } from "phosphor-react";
import { useContext } from 'react';
import { UserDataContext } from '../../../../contexts/ContextsFiles/UserData';

export function DescriptionUser() {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      {userData?.photoURL && <img className="w-28 h-28" src={userData?.photoURL} alt="Imagem de perfil" />}

      <div className="flex flex-col ml-3">
        <h1 className="text-2xl text-O300 font-bold">{userData.displayName}</h1>
        <span className="font-normal text-xl text-B70 mt-1">@marioalb_</span>

        <div className="flex flex-row items-center mt-1">
          <MapPin size={16} className="text-B70 mr-2" weight="regular" />
          <span className="font-normal text-sm text-B70">São Paulo, SP</span>
        </div>
        <span className="text-BL300 text-sm font-normal mt-2">#viagem #Paris #vidademochileiro #cultura</span>
      </div>
    </>
  );
}
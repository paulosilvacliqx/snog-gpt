import { useContext } from "react";
import { UserDataContext } from "../../../contexts/ContextsFiles/UserData";
import { Button } from "../../Button/Button";
import bgPost from '../../../assets/imgs/img-carousel.png';

export function PostsUser() {
  const { userData } = useContext(UserDataContext);

  return (
    <main className="w-152 bg-white float-right">
      <div className="w-full p-3 flex items-center">

        <div className="w-11 h-11 flex items-center justify-center">
          {userData?.photoURL && <img className="w-10 h-10 rounded-full" src={userData?.photoURL} alt="Imagem de perfil" />}
        </div>

        <div className="w-152 h-14 flex flex-col">
          <h1 className="text-B500 text-base font-bold ml-2">
            {userData.displayName}
            <span className="text-B200 text-base font-normal ml-2">@marioadlb ✈️ 🗺️</span>
            <span className="text-B90 text-base font-normal ml-2">adquiriu a [nomexperiência] experiência recentemente e está pronto para aproveitar momentos incríveis em Paris.</span>
          </h1>
          <p className="text-P400 text-xs font-normal ml-2">00/00/00 às 00:00</p>
        </div>
      </div>

      <div className="w-full h-100 flex items-stretch" style={{ backgroundImage: `url(${bgPost})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="w-full h-16 bg-P300 flex items-center justify-between self-end px-4">
          <div>
            <h1 className="text-white text-base font-semibold uppercase">Conheça a Cultura - Paris</h1>
          </div>

          <Button 
            title="Ver Detalhes"
            className="w-32 h-8 rounded-full flex items-center justify-center bg-white text-P300 text-sm font-semibold hover:opacity-80 transition-all duration-300"
          />  
        </div>
      </div>
    </main>
  );
}
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import carouselImg4 from "../../../../assets/imgs/carousel-img4.png";
import { Button } from "../../../Button/Button";
import { UserDataContext } from "../../../../contexts/ContextsFiles/UserData";

export function FourthSlide() {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div
      className="h-[700px] flex flex-col text-left"
      style={{
        backgroundImage: `url(${carouselImg4})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-100 font-bold text-5xl text-white ml-16 mt-48">
        Uma experiência conexão profunda.
      </h1>
      <p className="w-100 font-light text-2xl text-white ml-16 mt-6">
        Aventure, registre e conecte-se a paisagens monumetais em uma
        experiência natural.
      </p>
      <Button
        className={`ml-16 w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl text-G300  cursor-pointer
        }`}
        title="Explore o desconhecido"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

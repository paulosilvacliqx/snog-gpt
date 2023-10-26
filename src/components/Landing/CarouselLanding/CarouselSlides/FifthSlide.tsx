import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import carouselImg5 from "../../../../assets/imgs/carousel-img5.png";
import { Button } from "../../../Button/Button";
import { UserDataContext } from "../../../../contexts/ContextsFiles/UserData";

export function FifthSlide() {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div
      className="h-[700px] flex flex-col text-left"
      style={{
        backgroundImage: `url(${carouselImg5})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-100 font-bold text-5xl text-white ml-16 mt-48">
        Uma experiência diversidade sensorial.
      </h1>
      <p className="w-100 font-light text-2xl text-white ml-16 mt-6">
        Dance, cante, coma e aprenda em experiências que irão agunçar todos os
        seus sentidos.
      </p>
      <Button
        className={`ml-16 w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl  text-O350 "cursor-pointer"
        }`}
        title="Explore os sentidos "
        onClick={() => navigate("/")}
      />
    </div>
  );
}

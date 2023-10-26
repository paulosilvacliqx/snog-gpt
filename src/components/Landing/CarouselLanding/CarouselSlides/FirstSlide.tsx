import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import carouselImg1 from "../../../../assets/imgs/carousel-img1.png";
import { Button } from "../../../Button/Button";
import { UserDataContext } from "../../../../contexts/ContextsFiles/UserData";

export function FirstSlide() {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div
      className="h-[700px] flex flex-col text-left"
      style={{
        backgroundImage: `url(${carouselImg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-100 font-bold text-5xl text-white ml-16 mt-48">
        Um novo jeito de viajar e viver.
      </h1>
      <p className="w-96 font-light text-2xl text-white ml-16 mt-6">
        Viaje, explore, e aprenda vivências e histórias inesquecíveis em
        experiências que moldam a alma.
      </p>
      <Button
        className={`ml-16 w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl text-P300  "cursor-pointer"
        }`}
        title="Explore novas experiências"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

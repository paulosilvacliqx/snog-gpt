import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import carouselImg2 from "../../../../assets/imgs/carousel-img2.png";
import { Button } from "../../../Button/Button";
import { UserDataContext } from "../../../../contexts/ContextsFiles/UserData";

export function SecondSlide() {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div
      className="h-[700px] flex flex-col text-left"
      style={{
        backgroundImage: `url(${carouselImg2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-100 font-bold text-5xl text-white ml-16 mt-48">
        Uma experiência artística incrível.
      </h1>
      <p className="w-96 font-light text-2xl text-white ml-16 mt-6">
        Tenha momentos inesquecíveis e se inspire nas mais diversas culturas ao
        redor do mundo.
      </p>
      <Button
        className={`ml-16 w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl text-P300  cursor-pointer
        }`}
        title="Explore o artístico"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import carouselImg6 from "../../../../assets/imgs/carousel-img6.png";
import { Button } from "../../../Button/Button";
import { UserDataContext } from "../../../../contexts/ContextsFiles/UserData";

export function SixthSlide() {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div
      className="h-[700px] flex flex-col text-left"
      style={{
        backgroundImage: `url(${carouselImg6})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-100 font-bold text-5xl text-white ml-16 mt-48">
        Uma experiência da próxima década.
      </h1>
      <p className="w-100 font-light text-2xl text-white ml-16 mt-6">
        Olhe para o futuro e entende novas tendências do mercado em experiências
        do futuro.
      </p>
      <Button
        className={`ml-16 w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl  text-BL300 cursor-pointer
        }`}
        title="Explore o novo"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

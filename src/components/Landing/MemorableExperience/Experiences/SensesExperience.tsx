import { useContext } from "react";
import { ExperiencesProps } from "./ExperiencesProps";
import SensesExperienceImage from "../../../../assets/imgs/senses-experience-img.png";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";

export function SensesExperience() {
  const { senses } = useContext(MemorableExperiencesContext);

  return (
    <ExperiencesProps
      show={senses}
      title={"Experiências memoráveis"}
      subTitle={"Explosão de sensações"}
      firstParagraph={
        "Experimente novas gastronomias e espetáculos musicais em momentos que irão marcar seus cinco sentidos."
      }
      secondParagraph={
        "Coma nos mais diferentes restaurantes e conheça lugares que inspiraram composições ao redor do mundo."
      }
      thirdParagraph={
        "Vivencie o lado sensorial das suas viagens com muito sabor e dança."
      }
      textButton={"Explore os sentidos"}
      imgExperience={
        <img src={SensesExperienceImage} alt="Explore os sentidos" />
      }
    />
  );
}

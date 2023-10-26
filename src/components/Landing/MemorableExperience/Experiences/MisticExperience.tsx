import { useContext } from "react";
import { ExperiencesProps } from "./ExperiencesProps";
import misticImage from "../../../../assets/imgs/mistic.png";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";

export function MisticExperience() {
  const { mistic } = useContext(MemorableExperiencesContext);

  return (
    <ExperiencesProps
      show={mistic}
      title={"Experiências memoráveis"}
      subTitle={"Procure a si mesmo"}
      firstParagraph={
        "Visite locais sagrados das mais diversas culturas ao redor do mundo e sinta a espiritualidade encher o seu ser."
      }
      secondParagraph={
        "Crie uma conexão entre a sua humanidade e a fé para compreender melhor a si mesmo, o mundo e as pessoas ao seu redor."
      }
      thirdParagraph={
        "Vivencie o lado místico das suas viagens com muita energia e evolução."
      }
      textButton={"Explore o místico"}
      imgExperience={<img src={misticImage} alt="Explore o místico" />}
    />
  );
}

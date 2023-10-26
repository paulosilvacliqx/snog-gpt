import { useContext } from "react";
import { ExperiencesProps } from "./ExperiencesProps";
import NewExperienceImage from "../../../../assets/imgs/new-experience-img.png";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";

export function NewExperience() {
  const { newExperience } = useContext(MemorableExperiencesContext);

  return (
    <ExperiencesProps
      show={newExperience}
      title={"Experiências memoráveis"}
      subTitle={"Futuro sem limites"}
      firstParagraph={
        "Conheça o futuro cheio de ideias que irão impactar e mudar a sua percepção e conhecimento sobre o mundo."
      }
      secondParagraph={
        "Aprenda e estude nos mais renomados eventos tecnológicos e empresas que estão moldando o amanhã."
      }
      thirdParagraph={
        "Vivencie o lado novo das suas viagens com muita inovação e tecnologia."
      }
      textButton={"Explore o novo"}
      imgExperience={<img src={NewExperienceImage} alt="Explore o novo" />}
    />
  );
}

import { useContext } from "react";
import { ExperiencesProps } from "./ExperiencesProps";
import unknowExperienceImage from "../../../../assets/imgs/unknow-experience-img.png";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";

export function UnknowExperience() {
  const { unknow } = useContext(MemorableExperiencesContext);

  return (
    <ExperiencesProps
      show={unknow}
      title={"Experiências memoráveis"}
      subTitle={"Conecte com a terra"}
      firstParagraph={
        "Conecte - se com a natureza e viva momentos cheios de adrenalina através de experiencias radicais."
      }
      secondParagraph={
        "Visite lugares com belezas naturais de tirar o fôlego e paisagens imensas que irão desafiar seus sentidos."
      }
      thirdParagraph={
        "Vivencie o lado desconhecido das suas viagens com muita emoção e aventura."
      }
      textButton={"Explore o desconhecido"}
      imgExperience={
        <img src={unknowExperienceImage} alt="Explore o desconhecido" />
      }
    />
  );
}

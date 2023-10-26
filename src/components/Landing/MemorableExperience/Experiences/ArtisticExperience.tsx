import { useContext } from "react";
import { ExperiencesProps } from "./ExperiencesProps";
import artisticImage from "../../../../assets/imgs/artistic-experience.png";
import { MemorableExperiencesContext } from "../../../../contexts/ContextsFiles/MemorableExperience";

import { Box, Fade, useDisclosure } from "@chakra-ui/react";

export function ArtisticExperience() {
  const { isOpen, onToggle } = useDisclosure();
  const { artistic } = useContext(MemorableExperiencesContext);
  return (
    <ExperiencesProps
      show={artistic}
      title={"Experiências memoráveis"}
      subTitle={"Inspirações extraordinárias"}
      firstParagraph={
        "Conheça o passado, futuro e presente da arte, design e moda com roteiros culturais cheios de inspiração e emoção."
      }
      secondParagraph={
        "Inspire-se e deslumbre-se com museus, arquitetura, pontos turísticos e locais cheios de história para contar através da arte."
      }
      thirdParagraph={
        "Vivencie o lado artístico das suas viagens com muita criatividade e paixão."
      }
      textButton={"Explore a artístico"}
      imgExperience={
        <img className="" src={artisticImage} alt="Explore a artístico" />
      }
    />
  );
}

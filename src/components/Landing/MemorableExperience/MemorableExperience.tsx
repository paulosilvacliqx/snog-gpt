import { useContext } from "react";
import { MemorableExperiencesContext } from "../../../contexts/ContextsFiles/MemorableExperience";
import { MisticExperience } from "./Experiences/MisticExperience";
import { ArtisticExperience } from "./Experiences/ArtisticExperience";
import { UnknowExperience } from "./Experiences/UnknowExperience";
import { SensesExperience } from "./Experiences/SensesExperience";
import { NewExperience } from "./Experiences/NewExperience";
import { FooterExperienceNavigation } from "./Experiences/FooterExperienceNavigation/FooterExperienceNavigation";

export function MemorableExperience() {
  const { artistic, mistic, unknow, senses } = useContext(
    MemorableExperiencesContext
  );

  return (
    // <main className="w-full h-full bg-P50 flex flex-col justify-center">
    //   {artistic ? (
    //     <ArtisticExperience />
    //   ) : mistic ? (
    //     <MisticExperience />
    //   ) : unknow ? (
    //     <UnknowExperience />
    //   ) : senses ? (
    //     <SensesExperience />
    //   ) : (
    //     <NewExperience />
    //   )}

    //   <FooterExperienceNavigation />
    // </main>

    <main className="w-full h-full bg-P50 flex flex-col justify-center">
      <>
        <ArtisticExperience />
        <MisticExperience />
        <UnknowExperience />
        <SensesExperience />
        <NewExperience />
      </>
      <FooterExperienceNavigation />
    </main>
  );
}

import { useContext } from "react";
import { MemorableExperiencesContext } from "../../../../../contexts/ContextsFiles/MemorableExperience";
import { ArtisticExperienceIcon } from "../../../../../assets/icons/artisticExperienceIcon";

import { MisticExperienceIcon } from "../../../../../assets/icons/misticExperienceIcon";
import { UnknowExperienceIcon } from "../../../../../assets/icons/unknowExperienceIcon";
import { SensesExperienceIcon } from "../../../../../assets/icons/sensesExperienceIcon";
import { NewExperienceIcon } from "../../../../../assets/icons/newExperienceIcon";

export function FooterExperienceNavigation() {
  const { artistic, setArtistic, mistic, setMistic, unknow, setUnknow, senses, setSenses, newExperience, setNewExperience } = useContext(MemorableExperiencesContext);

  function handleArtisticExperience() {
    setArtistic(true);
    setMistic(false);
    setUnknow(false);
    setSenses(false);
    setNewExperience(false);
  }

  function handleMisticExperience() {
    setMistic(true);
    setArtistic(false);
    setUnknow(false);
    setSenses(false);
    setNewExperience(false);
  }

  function handleUnknowExperience() {
    setUnknow(true);
    setArtistic(false);
    setMistic(false);
    setSenses(false);
    setNewExperience(false);
  }

  function handleSensesExperience() {
    setSenses(true);
    setArtistic(false);
    setMistic(false);
    setUnknow(false);
    setNewExperience(false);
  }

  function handleNewExperience() {
    setNewExperience(true);
    setArtistic(false);
    setMistic(false);
    setUnknow(false);
    setSenses(false);
  }

  return (
    <div className="m-w-1/2 flex items-center justify-center flex-row my-8">
      <div className="cursor-pointer" onClick={handleArtisticExperience}>
        <ArtisticExperienceIcon />
      </div>
      <div className="cursor-pointer" onClick={handleMisticExperience}>
        <MisticExperienceIcon />
      </div>
      <div className="cursor-pointer" onClick={handleUnknowExperience}>
        <UnknowExperienceIcon />
      </div>
      <div className="cursor-pointer" onClick={handleSensesExperience}>
        <SensesExperienceIcon />
      </div>
      <div className="cursor-pointer" onClick={handleNewExperience}>
        <NewExperienceIcon />
      </div>
    </div>
  );
}
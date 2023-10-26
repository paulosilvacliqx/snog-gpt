import React, { createContext, useState } from 'react';

interface MemorableExperiencesContextProps {
  artistic: boolean;
  setArtistic: React.Dispatch<React.SetStateAction<boolean>>
  mistic: boolean;
  setMistic: React.Dispatch<React.SetStateAction<boolean>>
  unknow: boolean;
  setUnknow: React.Dispatch<React.SetStateAction<boolean>>
  senses: boolean;
  setSenses: React.Dispatch<React.SetStateAction<boolean>>
  newExperience: boolean;
  setNewExperience: React.Dispatch<React.SetStateAction<boolean>>
}

// Create Context
export const MemorableExperiencesContext = createContext<MemorableExperiencesContextProps>({} as MemorableExperiencesContextProps);

// Create Provider
export const MemorableExperienceProvider = (props: any) => {
  const [artistic, setArtistic] = useState(true);
  const [mistic, setMistic] = useState(false);
  const [unknow, setUnknow] = useState(false);
  const [senses, setSenses] = useState(false);
  const [newExperience, setNewExperience] = useState(false);

  return (
    <MemorableExperiencesContext.Provider value={{
      artistic, setArtistic,
      mistic, setMistic,
      unknow, setUnknow,
      senses, setSenses,
      newExperience, setNewExperience
    }}>
      {props.children}
    </MemorableExperiencesContext.Provider>
  )
}
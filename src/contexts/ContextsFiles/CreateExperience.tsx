import React, { createContext, useState } from 'react';

interface CreateExperienceProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  destiny: string;
  setDestiny: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  roadMap: string;
  setRoadMap: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

// Create Context
export const CreateExperienceContext = createContext<CreateExperienceProps>({} as CreateExperienceProps);

// Create Provider
export const CreateExperienceProvider = (props: any) => {
  const [name, setName] = useState('');
  const [destiny, setDestiny] = useState('');
  const [description, setDescription] = useState('');
  const [roadMap, setRoadMap] = useState('');
  const [value, setValue] = useState('');

  return (
    <CreateExperienceContext.Provider value={{
      name, setName,
      destiny, setDestiny,
      description, setDescription,
      roadMap, setRoadMap,
      value, setValue,
    }}>
      {props.children}
    </CreateExperienceContext.Provider>
  )
}
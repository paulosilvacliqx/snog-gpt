import React, { createContext, useState } from 'react';

interface EditProfileProps {
  name: string; 
  setName: React.Dispatch<React.SetStateAction<string>>;
  nameUser: string;
  setNameUser: React.Dispatch<React.SetStateAction<string>>;
  contactUser: string;
  setContactUser: React.Dispatch<React.SetStateAction<string>>;
  localUser: string;
  setLocalUser: React.Dispatch<React.SetStateAction<string>>;
  interestsUser: string;
  setInterestsUser: React.Dispatch<React.SetStateAction<string>>;
  aboutUser: string;
  setAboutUser: React.Dispatch<React.SetStateAction<string>>;
}

// Create Context
export const EditProfileContext = createContext<EditProfileProps>({} as EditProfileProps);

// Create Provider
export const EditProfileProvider = (props: any) => {
  const [name, setName] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [contactUser, setContactUser] = useState('');
  const [localUser, setLocalUser] = useState('');
  const [interestsUser, setInterestsUser] = useState('');
  const [aboutUser, setAboutUser] = useState('');

  return (
    <EditProfileContext.Provider value={{
      name, setName,
      nameUser, setNameUser,
      contactUser, setContactUser,
      localUser, setLocalUser,
      interestsUser, setInterestsUser,
      aboutUser, setAboutUser,
    }}>
      {props.children}
    </EditProfileContext.Provider>
  )
}
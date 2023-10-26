import React, { createContext, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

interface RegisterUserProps {
  name: string; 
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string; 
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  contact: string; 
  setContact: React.Dispatch<React.SetStateAction<string>>;
  password: string; 
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string; 
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  openTerms: boolean;
  setOpenTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export const RegisterUserContext = createContext<RegisterUserProps>({} as RegisterUserProps);

// Create Provider
export const RegisterUserProvider = (props: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <RegisterUserContext.Provider value={{
      name, setName,
      email, setEmail,
      contact, setContact,
      password, setPassword,
      confirmPassword, setConfirmPassword,
      openTerms, setOpenTerms
    }}>
      {props.children}
    </RegisterUserContext.Provider>
  )
}
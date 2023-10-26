import React, { createContext, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

interface NewPasswordProps {
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmNewPassword: string;
  setConfirmNewPassword: React.Dispatch<React.SetStateAction<string>>;
  openNewPassword: boolean;
  setOpenNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  successNewPassword: boolean;
  setSuccessNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  viewCurrentPassword: boolean;
  setViewCurrentPassword: React.Dispatch<React.SetStateAction<boolean>>;
  viewNewPassword: boolean;
  setViewNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  viewConfirmNewPassword: boolean;
  setViewConfirmNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export const NewPasswordContext = createContext<NewPasswordProps>({} as NewPasswordProps);

// Create Provider
export const NewPasswordProvider = (props: any) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [openNewPassword, setOpenNewPassword] = useState(false);
  const [successNewPassword, setSuccessNewPassword] = useState(false);
  const [viewCurrentPassword, setViewCurrentPassword] = useState(false);
  const [viewNewPassword, setViewNewPassword] = useState(false);
  const [viewConfirmNewPassword, setViewConfirmNewPassword] = useState(false);

  return (
    <NewPasswordContext.Provider value={{
      currentPassword, setCurrentPassword,
      newPassword, setNewPassword,
      confirmNewPassword, setConfirmNewPassword,
      openNewPassword, setOpenNewPassword,
      viewCurrentPassword, setViewCurrentPassword,
      viewNewPassword, setViewNewPassword,
      viewConfirmNewPassword, setViewConfirmNewPassword,
      successNewPassword, setSuccessNewPassword
    }}>
      {props.children}
    </NewPasswordContext.Provider>
  )
}
import React, {
  createContext,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useState,
} from "react";

export interface UserDataAuth {
  displayName: string;
  email: string;
  telefone: string;
  photoURL: string;
  uid?: string;
}

interface UserDataProps {
  userData: UserDataAuth;
  setUserData: React.Dispatch<React.SetStateAction<UserDataAuth>>;
  idUser: string;
  setIdUser: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  openRecoverPassword: boolean;
  setOpenRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>;
  recoverSuccess: boolean;
  setRecoverSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export const UserDataContext = createContext<UserDataProps>(
  {} as UserDataProps
);

// Create Provider
export const UserDataProvider = (props: any) => {
  const [userData, setUserData] = useState({ uid: "" } as UserDataAuth);
  const [idUser, setIdUser] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openLogin, setOpenLogin] = useState(false);
  const [openRecoverPassword, setOpenRecoverPassword] = useState(false);
  const [recoverSuccess, setRecoverSuccess] = useState(false);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        idUser,
        setIdUser,
        accessToken,
        setAccessToken,
        email,
        setEmail,
        password,
        setPassword,
        openLogin,
        setOpenLogin,
        openRecoverPassword,
        setOpenRecoverPassword,
        recoverSuccess,
        setRecoverSuccess,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

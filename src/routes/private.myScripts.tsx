import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserDataContext } from "../contexts/ContextsFiles/UserData";
import { isAuthenticated } from "../services/auth";

export const PrivateMyScriptsRoute = ({ children }: any) => {
  const { userData } = useContext(UserDataContext);

  const auth = getAuth();
  useEffect(() => {
    if (!isAuthenticated() || userData.uid === undefined) {
      signOut(auth);
    }
  }, [userData]);

  return isAuthenticated() && userData.uid !== undefined ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { UserDataContext } from "../contexts/ContextsFiles/UserData"

export const PrivateFinalizationRoute = ({ children }: any) => {
  const { userData } = useContext(UserDataContext)

  return userData.uid !== '' ? children : <Navigate to="/" />
}
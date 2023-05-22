import { createContext, useEffect, useReducer } from "react";
import { initialStateUser, userReducer } from "../reducers/userReducer";
import { setUserAction } from "../actions/userActions";

export const UserContext = createContext()
export const UserProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialStateUser)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState.user))
  }, [userState.user])
  return (
    <UserContext.Provider value={{userState, userDispatch}}>
      {children}
    </UserContext.Provider>
  )
}
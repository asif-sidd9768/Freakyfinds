import { createContext, useReducer } from "react";
import { checkoutReducer, initialStateCheckout } from "../reducers/checkoutReducer";

export const CheckoutContext = createContext()
export const CheckoutProvider = ({children}) => {
  const [checkoutState, checkoutDispatch] = useReducer(checkoutReducer, initialStateCheckout)

  return (
    <CheckoutContext.Provider value={{checkoutState, checkoutDispatch}}>
      {children}
    </CheckoutContext.Provider>
  )
}
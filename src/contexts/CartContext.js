import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialStateCart } from "../reducers/CartReducer";
import { addToCartAction } from "../actions/cartActions";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialStateCart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems))
  }, [cartState])

  return (
    <CartContext.Provider value={{cartState, cartDispatch}}>
      {children}
    </CartContext.Provider>
  )
}
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, initialStateCart } from "../reducers/CartReducer";
import { addToCartAction, addToCartRequestAction, addToCartRequestFailure, cartItemQuantityChangeAction, cartItemQuantityChangeFailureAction, cartItemQuantityChangeRequestAction, deleteCartItemAction, deleteCartItemFailureAction, deleteCartItemRequestAction } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { addProductToCart, deleteCartProduct, updateCartProduct } from "../services/user/cartService";
import { NotificationContext } from "./NotificationContext";
import { UserContext } from "./UserContext";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialStateCart)
  const { showNotification } = useContext(NotificationContext)
  const { userState } = useContext(UserContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems))
  }, [cartState.cartItems])

  const handleAddToCart = async (navigate, product) => {
    if(cartState.isLoading){
      return
    }
    if(!userState.user){
      navigate("/login", {
        state: {from:location}
      })
      showNotification("Login/Register to add.", "error")
    }
    cartDispatch(addToCartRequestAction())
    try {
      const response = await addProductToCart(userState?.user?.user?.id, product, userState.user.token)
      cartDispatch(addToCartAction(response.data))
      showNotification("ITEM ADDED TO FINDS", "success")
    }catch(error){
      cartDispatch(addToCartRequestFailure(error))
      console.log(error)
    }
  }

  const handleDeleteFromCart = async (cartItemId) => {
    if(cartState.isLoading){
      return
    }
    cartDispatch(deleteCartItemRequestAction())
    try {
      await deleteCartProduct(userState?.user?.user?.id, cartItemId, userState.user.token) 
      cartDispatch(deleteCartItemAction(cartItemId))
    }catch(error){
      showNotification("ITEM REMOVED FROM FINDS", "error")
      console.log(error)
      cartDispatch(deleteCartItemFailureAction(error))
    }
  }

  const handleQuantityChange = async (productQuantity, cartItemId, change) => {
    if(cartState.isLoading){
      return
    }
    cartDispatch(cartItemQuantityChangeRequestAction())
    try {
      if(change === "decrease" && productQuantity === 1) {
        await deleteCartProduct(userState?.user?.user?.id, cartItemId, userState.user.token) 
        cartDispatch(deleteCartItemAction(cartItemId))
        showNotification(`REMOVED ITEM FROM CART`, "success")
      }else{
        const response = await updateCartProduct(userState?.user?.user?.id, cartItemId, userState.user.token, change) 
        cartDispatch(cartItemQuantityChangeAction({cartItemId, change}))
        showNotification(`${change.toUpperCase()}D QUANTITY`, "success")
      }
    }catch(error){
      console.log(error)
      cartDispatch(cartItemQuantityChangeFailureAction(error))
      showNotification(`${error?.response?.data?.message}`, "error")
      console.log(error)
    }
  }

  return (
    <CartContext.Provider value={{cartState, cartDispatch, handleAddToCart, handleDeleteFromCart, handleQuantityChange}}>
      {children}
    </CartContext.Provider>
  )
}
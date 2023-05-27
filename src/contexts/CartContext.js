import { createContext, useEffect, useReducer } from "react";
import { cartReducer, initialStateCart } from "../reducers/CartReducer";
import { addToCartAction, addToCartRequestAction, addToCartRequestFailure, cartItemQuantityChangeAction, cartItemQuantityChangeFailureAction, cartItemQuantityChangeRequestAction, deleteCartItemAction, deleteCartItemFailureAction, deleteCartItemRequestAction } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { addProductToCart, deleteCartProduct, updateCartProduct } from "../services/user/cartService";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialStateCart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems))
  }, [cartState.cartItems])

  const handleAddToCart = async (userState, showNotification, navigate, product) => {
    if(!userState.user){
      navigate("/login", {
        state: {from:location}
      })
      showNotification("Login/Register to add.", "error")
    }
    cartDispatch(addToCartRequestAction())
    try {
      const response = await addProductToCart(userState.user.id, product, userState.user.token)
      cartDispatch(addToCartAction(response.data))
      showNotification("ITEM ADDED TO FINDS", "success")
    }catch(error){
      cartDispatch(addToCartRequestFailure(error))
      console.log(error)
    }
  }

  const handleDeleteFromCart = async (userState, showNotification, cartItemId) => {
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

  const handleQuantityChange = async (userState, productQuantity, cartItemId, change, showNotification) => {
    cartDispatch(cartItemQuantityChangeRequestAction())
    console.log(productQuantity, change)
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
      cartDispatch(cartItemQuantityChangeFailureAction(error))
      showNotification(`FAIL TO ${change.toUpperCase()}D QUANTITY`, "error")
      console.log(error)
    }
  }

  return (
    <CartContext.Provider value={{cartState, cartDispatch, handleAddToCart, handleDeleteFromCart, handleQuantityChange}}>
      {children}
    </CartContext.Provider>
  )
}
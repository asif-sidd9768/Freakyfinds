import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { initialStateWishlist, wishlistReducer } from "../reducers/wishlistReducer";
import { addToWishlistAction, addToWishlistFailureAction, addToWishlistRequestAction, deleteFromWishlistAction, deleteFromWishlistFailureAction, deleteFromWishlistRequestAction } from "../actions/wishlistActions";
import { addProductToWishlistService, deleteProductFromWishlistService } from "../services/user/wishlistService";

export const WishlistContext = createContext()
export const WishlistProvider = ({children}) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialStateWishlist)
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistState.wishlistItems))
  }, [wishlistState])

  const handleAddToWishlist = async (userState, showNotification, product) => {
    wishlistDispatch(addToWishlistFailureAction())
    try{
      const result = await addProductToWishlistService(userState?.user?.token, userState?.user?.user?.id, product)
      wishlistDispatch(addToWishlistAction(product))
      showNotification("ITEM ADDED TO WISHLIST", "success")
    }catch(error){
      wishlistDispatch(addToWishlistRequestAction(error))
      console.log(error)
    }
  }

  const handleRemoveFromWishlist = async (userState, showNotification, product) => {
    wishlistDispatch(deleteFromWishlistRequestAction())
    try{
      const response = await deleteProductFromWishlistService(userState?.user?.token, userState?.user?.user?.id, product.id)
      wishlistDispatch(deleteFromWishlistAction(product.id))
      showNotification("ITEM REMOVED FROM WISHLIST", "error")
    }catch(error){
      wishlistDispatch(deleteFromWishlistFailureAction(error))
      console.log(error)
    }
  }

  return (
    <WishlistContext.Provider value={{wishlistState, wishlistDispatch, handleAddToWishlist, handleRemoveFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}
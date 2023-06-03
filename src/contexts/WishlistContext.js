import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { initialStateWishlist, wishlistReducer } from "../reducers/wishlistReducer";
import { addToWishlistAction, addToWishlistFailureAction, addToWishlistRequestAction, deleteFromWishlistAction, deleteFromWishlistFailureAction, deleteFromWishlistRequestAction } from "../actions/wishlistActions";
import { addProductToWishlistService, deleteProductFromWishlistService } from "../services/user/wishlistService";
import { NotificationContext } from "./NotificationContext";
import { UserContext } from "./UserContext";

export const WishlistContext = createContext()
export const WishlistProvider = ({children}) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialStateWishlist)
  const {showNotification} = useContext(NotificationContext)
  const { userState } = useContext(UserContext)
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistState.wishlistItems))
  }, [wishlistState])

  const handleAddToWishlist = async (navigate, product) => {
    if(wishlistState.isLoading){
      showNotification("Some work is in progress", "error")
      return
    }

    if(!userState.user){
      showNotification("Please login to add wishlist.", "error", true)
      return
    }

    wishlistDispatch(addToWishlistRequestAction())
    try{
      const result = await addProductToWishlistService(userState?.user?.token, userState?.user?.user?.id, product)
      wishlistDispatch(addToWishlistAction(product))
      showNotification("ITEM ADDED TO WISHLIST", "success")
    }catch(error){
      wishlistDispatch(addToWishlistFailureAction(error.response.data.message))
      showNotification(error.response.data.message, "error")
    }
  }

  const handleRemoveFromWishlist = async (productId) => {
    if(wishlistState.isLoading){
      showNotification("Some work is in progress", "error")
      return
    }
    wishlistDispatch(deleteFromWishlistRequestAction())
    try{
      const response = await deleteProductFromWishlistService(userState?.user?.token, userState?.user?.user?.id, productId)
      wishlistDispatch(deleteFromWishlistAction(productId))
      showNotification("ITEM REMOVED FROM WISHLIST", "success")
    }catch(error){
      wishlistDispatch(deleteFromWishlistFailureAction(error.response.data.message))
      showNotification(error.response.data.message, "error")
    }
  }

  return (
    <WishlistContext.Provider value={{wishlistState, wishlistDispatch, handleAddToWishlist, handleRemoveFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}
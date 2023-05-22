import { createContext } from "react";
import { useReducer } from "react";
import { initialStateWishlist, wishlistReducer } from "../reducers/wishlistReducer";

export const WishlistContext = createContext()
export const WishlistProvider = ({children}) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialStateWishlist)
  return (
    <WishlistContext.Provider value={{wishlistState, wishlistDispatch}}>
      {children}
    </WishlistContext.Provider>
  )
}
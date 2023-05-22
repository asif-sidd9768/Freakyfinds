export const initialStateWishlist = {
  wishlistItems: [],
  isLoading: false,
  error: null
}

export const wishlistReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_WISHLIST":
      return {...state, wishlistItems: [...state.wishlistItems, action.payload]}
    case "DELETE_FROM_WISHLIST":
      const updatedWishlistAfterDelete = state.wishlistItems.filter(({id}) => id !== action.payload)
      return {...state, wishlistItems: updatedWishlistAfterDelete}
  }
}
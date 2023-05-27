export const initialStateWishlist = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlist")) || [],
  isLoading: false,
  error: null
}

export const wishlistReducer = (state, action) => {
  switch(action.type) {
    case "SET_WISHLIST_ITEMS": 
      return {...state, wishlistItems: [...action.payload]}
    case "ADD_TO_WISHLIST_REQUEST":
      return {...state, isLoading: true}
    case "ADD_TO_WISHLIST":
      return {...state, wishlistItems: [...state.wishlistItems, action.payload], isLoading: false}
    case "ADD_TO_WISHLIST_FAILURE":
      return {...state, error:action.payload, isLoading: false}
    case "DELETE_FROM_WISHLIST_REQUEST":
      return {...state, isLoading: true}
    case "DELETE_FROM_WISHLIST":
      const updatedWishlistAfterDelete = state.wishlistItems.filter(({id}) => id !== action.payload)
      return {...state, wishlistItems: updatedWishlistAfterDelete, isLoading: false}
    case "DELETE_FROM_WISHLIST_FAILURE":
      return {...state, error: action.payload, isLoading: false}
  }
}
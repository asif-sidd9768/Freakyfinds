export const setWishlistAction = (products) => ({
  type:"SET_WISHLIST_ITEMS",
  payload: products
})

export const addToWishlistRequestAction = () => ({
  type:"ADD_TO_WISHLIST_REQUEST"
})

export const addToWishlistAction = (product) => ({
  type:"ADD_TO_WISHLIST",
  payload: product
})

export const addToWishlistFailureAction = (errorData) => ({
  type:"ADD_TO_WISHLIST_FAILURE",
  payload: errorData
})

export const deleteFromWishlistRequestAction = () => ({
  type:"DELETE_FROM_WISHLIST_REQUEST"
})

export const deleteFromWishlistAction = (productId) => ({
  type:"DELETE_FROM_WISHLIST",
  payload: productId
})

export const deleteFromWishlistFailureAction = (errorData) => ({
  type:"DELETE_FROM_WISHLIST_FAILURE",
  payload: errorData
})

export const removeWishlistItemsAction = () => ({
  type:"REMOVE_WISHLIST_ITEMS"
})
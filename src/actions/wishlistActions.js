export const addToWishlistAction = (product) => ({
  type:"ADD_TO_WISHLIST",
  payload: product
})

export const deleteFromWishlistAction = (productId) => ({
  type:"DELETE_FROM_WISHLIST",
  payload: productId
})
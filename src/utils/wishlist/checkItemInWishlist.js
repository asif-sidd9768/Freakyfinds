export const isItemInWishlist = (wishlistItems, productId) => {
  return wishlistItems.find(({id}) => id === productId)
}
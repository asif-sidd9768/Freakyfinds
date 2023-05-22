export const isItemInCart = (cartItems, itemToCheck) => {
  return cartItems.find(({product}) => product.id === itemToCheck)
}
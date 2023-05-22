export const addToCartAction = (product) => ({
  type:"ADD_TO_CART",
  payload: product
})

export const deleteCartItemAction = (productId) => ({
  type:"DELETE_ITEM_CART",
  payload: productId
})

export const cartItemQuantityChangeRequestAction = () => ({
  type:"QUANTITY_CHANGE_CART_ITEM_REQUEST"
})

export const cartItemQuantityChangeAction = (changeInfo) => ({
  type:"QUANTITY_CHANGE_CART_ITEM",
  payload: changeInfo
})

export const cartItemQuantityChangeFailureAction = (error) => ({
  type:"QUANTITY_CHANGE_CART_ITEM_FAILURE",
  payload: error
})

export const updateCartTotalAction = () => ({
  type:"UPDATE_CART_TOTAL"
})

export const updateCartShippingAction = (shippingMethod) => ({
  type:"UPDATE_CART_SHIPPING",
  payload: shippingMethod
})
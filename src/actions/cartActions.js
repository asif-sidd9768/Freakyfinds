export const setCartItemsAction = (products) => ({
  type:"SET_ITEMS_TO_CART",
  payload: products
})

export const addToCartRequestAction = () => ({
  type: "ADD_TO_CART_REQUEST"
})

export const addToCartAction = (product) => ({
  type:"ADD_TO_CART",
  payload: product
})

export const addToCartRequestFailure = (errorData) => ({
  type: "ADD_TO_CART_FAILURE",
  payload: errorData
})

export const deleteCartItemRequestAction = () => ({
  type:"DELETE_ITEM_CART_REQUEST"
})

export const deleteCartItemAction = (productId) => ({
  type:"DELETE_ITEM_CART",
  payload: productId
})

export const deleteCartItemFailureAction = (errorData) => ({
  type:"DELETE_ITEM_CART_FAILURE",
  payload: errorData
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

export const clearCartAction = () => ({
  type: "CLEAR_CART"
})
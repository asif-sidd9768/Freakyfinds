export const setUserRequestAction = () => ({
  type: "SET_USER_REQUEST"
})

export const setUserAction = (userData) => ({
  type:"SET_USER",
  payload: userData
})

export const setUserFailureAction = (errorData) => ({
  type: "SET_USER_FAILURE",
  payload: errorData
})

export const successCheckoutOrderUpdateAction = (orderData) => ({
  type:"SUCCESS_CHECKOUT_ORDER_UPDATE",
  payload: orderData
})

export const updatedBrowsedItemsAction = (items) => ({
  type:"UPDATE_BROWSED_ITEMS",
  payload: items
})
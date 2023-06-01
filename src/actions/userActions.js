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

export const registerUserRequestAction = () => ({
  type:"REGISTER_USER_REQUEST"
})

export const registerUserFailureAction = (errorData) => ({
  type:"REGISTER_USER_FAILURE",
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

export const removeUserAction = () => ({
  type:"REMOVE_USER"
})

export const updateAddressAction = (addressData) => ({
  type:"UPDATE_EDITING_ADDRESS",
  payload: addressData
})

export const setUpdatedAddressRequestAction = () => ({
  type:"SET_UPDATED_ADDRESS_REQUEST"
})

export const setUpdatedAddressAction = (updatedData) => ({
  type:"SET_UPDATED_ADDRESS",
  payload:updatedData
})

export const setUpdatedAddressFailureAction = (errorData) => ({
  type:"SET_UPDATED_ADDRESS_FAILURE",
  payload: errorData
})
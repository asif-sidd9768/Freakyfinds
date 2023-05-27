export const addCartItemsToCheckoutAction = (items) => ({
  type:"ADD_ITEMS",
  payload: items
})

export const updateShippingAddressAction = (address) => ({
  type:"UPDATE_SHIPPING_ADDRESS",
  payload: address
})

export const updateShippingMethodAction = (method) => ({
  type:"UPDATE_SHIPPING_METHOD",
  payload:method
})

export const updatePaymentMethodAction = (paymentMethod) => ({
  type:"UPDATE_PAYMENT_METHOD",
  payload: paymentMethod
})

export const checkoutSuccessAction = (orderData) => ({
  type: "CHECKOUT_SUCCESS",
  payload: orderData
})
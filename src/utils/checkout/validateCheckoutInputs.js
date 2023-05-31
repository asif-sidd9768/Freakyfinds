export const validateCheckoutInputs = (checkoutState, userState, showNotification) => {
  if(checkoutState.isLoading || userState.isLoading){
    showNotification("Some work is in progress", "error")
    return false
  }
  if(Object.keys(checkoutState.shippingAddress).length === 0){
    showNotification("Select shipping address.", "error")
    return false
  }
  if(checkoutState.paymentMethod === ""){
    showNotification("Select payment method.", "error")
    return false
  }
  return true
}
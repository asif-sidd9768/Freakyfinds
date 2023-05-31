// // import { checkoutSuccessRequestAction, checkoutSuccessFailureAction } from "../../../actions/checkoutActions"
// // import { handleOnlineCheckout } from "../../../utils/checkout/handleOnlineCheckout"
// // import { handleCodCheckout } from "../../../utils/checkout/handleCodCheckout"
// // import { handleSuccessfulCheckout, handleCheckoutError } from "../../../utils/checkout/checkoutHelpers"

// export const validateCheckoutInputs = (checkoutState, userState, showNotification) => {
//   if(checkoutState.isLoading || userState.isLoading){
//     showNotification("Some work is in progress", "error")
//     return false
//   }
//   if(Object.keys(checkoutState.shippingAddress).length === 0){
//     showNotification("Select shipping address.", "error")
//     return false
//   }
//   if(checkoutState.paymentMethod === ""){
//     showNotification("Select payment method.", "error")
//     return false
//   }
//   return true
// }

// export const performCheckout = async (checkoutState, userState, cartState, cartTotalAmount, logoImg, userDispatch, cartDispatch, checkoutDispatch, navigate, showNotification) => {
//   checkoutDispatch(checkoutSuccessRequestAction())
//   try {
//     const checkoutResult = checkoutState.paymentMethod === "online" ?
//       await handleOnlineCheckout(userState, cartState, checkoutState, cartTotalAmount, logoImg, userDispatch, cartDispatch, checkoutDispatch, navigate)
//       :
//       await handleCodCheckout(checkoutDispatch, userState, cartState, checkoutState, cartTotalAmount, cartDispatch, userDispatch, navigate)
      
//     if(checkoutResult?.data?.msg == "successful"){
//       handleSuccessfulCheckout(checkoutResult, userDispatch, cartDispatch, checkoutDispatch, navigate)
//     } else {
//       handleCheckoutError(checkoutResult?.msg, checkoutDispatch, showNotification)
//     }
//   }catch(error){
//     handleCheckoutError(error?.message, checkoutDispatch, showNotification)
//   }
// }

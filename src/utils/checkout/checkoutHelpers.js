// import { clearCartAction } from "../../actions/cartActions"
// import { checkoutSuccessAction, checkoutSuccessFailureAction } from "../../actions/checkoutActions"
// import { setUserAction } from "../../actions/userActions"

// export const handleSuccessfulCheckout = (checkoutResult, userDispatch, cartDispatch, checkoutDispatch, navigate) => {
//   cartDispatch(clearCartAction())
//   checkoutDispatch(checkoutSuccessAction())
//   userDispatch(setUserAction(checkoutResult.data.updatedUser))
//   navigate("/success", {
//     replace: true,
//     state: {
//       //...values
//       ...checkoutResult.data
//     }
//   })
// }

// export const handleCheckoutError = (errorMsg, checkoutDispatch, showNotification) => {
//   checkoutDispatch(checkoutSuccessFailureAction(errorMsg))
//   showNotification(errorMsg || "Something went wrong", "error")
// }

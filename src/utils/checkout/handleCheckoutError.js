import { checkoutSuccessFailureAction } from "../../actions/checkoutActions"

export const handleCheckoutError = (checkoutDispatch, errorMsg) => {
  checkoutDispatch(checkoutSuccessFailureAction(errorMsg))
  // showNotification(errorMsg || "Something went wrong", "error")
}
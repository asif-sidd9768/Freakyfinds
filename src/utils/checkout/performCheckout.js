import { checkoutSuccessRequestAction } from "../../actions/checkoutActions"
import { handleCheckoutError } from "./handleCheckoutError"
import { handleCodCheckout } from "./handleCodCheckout"
import { handleOnlineCheckout } from "./handleOnlineCheckout"
import { handleSuccessfulCheckout } from "./handleSuccessfulCheckout"

export const performCheckout = async (checkoutDispatch, checkoutState, userState, cartState, cartTotalAmount, logoImg, userDispatch, cartDispatch, navigate) => {
  console.log("here")
  checkoutDispatch(checkoutSuccessRequestAction())
  try {
    const checkoutResult = checkoutState.paymentMethod === "online" ?
      await handleOnlineCheckout(userState, cartState, checkoutState, cartTotalAmount, logoImg, userDispatch, cartDispatch, checkoutDispatch, navigate)
      :
      await handleCodCheckout(checkoutDispatch, userState, cartState, checkoutState, cartTotalAmount, cartDispatch, userDispatch, navigate)
      
    if(checkoutResult?.data?.msg == "successful"){
      handleSuccessfulCheckout(checkoutResult, userDispatch, cartDispatch, checkoutDispatch, navigate)
    } else {
      handleCheckoutError(checkoutDispatch, checkoutResult?.msg)
    }
  }catch(error){
    handleCheckoutError(checkoutDispatch, error?.message)
  }
}
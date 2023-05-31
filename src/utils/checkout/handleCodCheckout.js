import { clearCartAction } from "../../actions/cartActions";
import { addCartItemsToCheckoutAction, checkoutSuccessAction } from "../../actions/checkoutActions";
import { setUserAction } from "../../actions/userActions";
import { codOrderService, createOrderService, loadScript, successOrderService } from "../../services/checkoutService";
import { handleSuccessfulCheckout } from "./handleSuccessfulCheckout";

export const handleCodCheckout = async (
  checkoutDispatch, 
  userState, 
  cartState,
  checkoutState, 
  cartTotalAmount, 
  cartDispatch,
  userDispatch,
  navigate) => {
    checkoutDispatch(addCartItemsToCheckoutAction(cartState.cartItems))
    const orderDetails = {
      ...checkoutState, 
      cartItems: cartState.cartItems, 
      checkoutTotal: cartTotalAmount
    }
    const checkoutResult = await codOrderService(userState?.user?.token, {orderDetails})
    return checkoutResult
    if(checkoutResult.data.msg == "successful"){
        console.log({checkoutResult})
        handleSuccessfulCheckout(checkoutResult, userDispatch, cartDispatch, checkoutDispatch, navigate)
        // cartDispatch(clearCartAction())
        // checkoutDispatch(checkoutSuccessAction())
        // userDispatch(setUserAction(checkoutResult.data.updatedUser))
        // navigate("/success", {
        //   replace: true,
        //   state: {
        //     //...values
        //     ...checkoutResult.data
        //   }
        // })
      }else {
        alert(checkoutResult.msg);
      }
    return checkoutResult
    
}
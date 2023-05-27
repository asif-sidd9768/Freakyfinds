import { addCartItemsToCheckoutAction } from "../../actions/checkoutActions";
import { codOrderService, createOrderService, loadScript, successOrderService } from "../../services/checkoutService";

export const handleCodCheckout = async (
  checkoutDispatch, 
  userState, 
  cartState,
  checkoutState, 
  cartTotalAmount) => {
    checkoutDispatch(addCartItemsToCheckoutAction(cartState.cartItems))
    const orderDetails = {
      ...checkoutState, 
      cartItems: cartState.cartItems, 
      checkoutTotal: cartTotalAmount
    }
    const checkoutResult = await codOrderService(userState?.user?.token, {orderDetails})
    return checkoutResult
    
}
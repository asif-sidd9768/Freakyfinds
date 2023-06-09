import { useContext, useEffect } from "react"
import "./CartDetailsSection.css"
import { CartContext } from "../../../contexts/CartContext"
import { clearCartAction, updateCartShippingAction } from "../../../actions/cartActions"
import { CheckoutContext } from "../../../contexts/CheckoutContext"
import { addCartItemsToCheckoutAction, checkoutSuccessAction, checkoutSuccessFailureAction, checkoutSuccessRequestAction, updateShippingMethodAction } from "../../../actions/checkoutActions"
import { UserContext } from "../../../contexts/UserContext"
import logoImg from "../../../assets/images/logo-new.png"
import { useNavigate } from "react-router-dom"
import { NotificationContext } from "../../../contexts/NotificationContext"
import { handleOnlineCheckout } from "../../../utils/checkout/handleOnlineCheckout"
import { handleCodCheckout } from "../../../utils/checkout/handleCodCheckout"
import { setUserAction, successCheckoutOrderUpdateAction } from "../../../actions/userActions"
import { validateCheckoutInputs } from "../../../utils/checkout/validateCheckoutInputs"
import { performCheckout } from "../../../utils/checkout/performCheckout"

export const CartDetailsSection = () => {
  const { cartState,cartDispatch } = useContext(CartContext)
  const { userState, userDispatch } = useContext(UserContext)
  const { checkoutState, checkoutDispatch } = useContext(CheckoutContext)
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  
  const handleCartShippingChange = (event) => {
    console.log(event.target.value)
    cartDispatch(updateCartShippingAction(event.target.value))
    checkoutDispatch(updateShippingMethodAction(event.target.value))
  }
  const cartTotalAmount = Number(cartState.cartItemsTotal)

  const handleCheckout = async () => {
    if(!validateCheckoutInputs(checkoutState, userState, showNotification))return
    await performCheckout(checkoutDispatch,checkoutState,userState,cartState,cartTotalAmount,logoImg,userDispatch,cartDispatch,navigate)
  }

  return (
    <div className="cart-details-container">
      <p className="cart-details-title">Order Summary</p>
      <hr className="cart-products-title-divider" />
      <div className="cart-details-content-container">
        <p className="cart-details-summary">Items {cartState.cartItems.length} <span className="cart-details-summary-total">₹{(cartState.cartItemsTotal - cartState.cartShipping).toFixed(2) || 0}</span> </p>
        <div className="cart-details-shipping-container">
          <p className="cart-details-shipping-title">SHIPPING</p>
          <select onChange={handleCartShippingChange} className="cart-details-shipping-menu">
            <option value="standard">Standard - ₹40</option>
            <option value="fast">Fast - ₹80</option>
            <option value="sameDay">Same Day - ₹120</option>
          </select>
        </div>
        <div className="cart-details-shipping-container">
          <p className="cart-details-shipping-title">PROMO CODE</p>
          <input className="cart-details-promo-input" placeholder="Enter your code" />
          <button className="cart-details-promo-btn">APPLY</button>
        </div>
      </div>
      <hr className="cart-products-title-divider" />
      <div className="cart-details-checkout-container">
        <p className="cart-details-total-cost">Total Cost <span className="cart-details-total-cost-amount">₹{cartTotalAmount.toFixed(2)}</span></p>
        <button onClick={handleCheckout} className="cart-details-checkout-btn">CHECKOUT</button>
      </div>
    </div>
  )
}
import { useContext } from "react"
import "./CartDetailsSection.css"
import { CartContext } from "../../../contexts/CartContext"
import { updateCartShippingAction } from "../../../actions/cartActions"
import { CheckoutContext } from "../../../contexts/CheckoutContext"
import { updateShippingMethodAction } from "../../../actions/checkoutActions"

export const CartDetailsSection = () => {
  const { cartState,cartDispatch } = useContext(CartContext)
  const { checkoutState, checkoutDispatch } = useContext(CheckoutContext)
  
  const handleCartShippingChange = (event) => {
    cartDispatch(updateCartShippingAction(event.target.value))
    checkoutDispatch(updateShippingMethodAction(event.target.value))
  }

  const cartTotalAmount = cartState.cartShipping + Number(cartState.cartItemsTotal)

  return (
    <div className="cart-details-container">
      <p className="cart-details-title">Order Summary</p>
      <hr className="cart-products-title-divider" />
      <div className="cart-details-content-container">
        <p className="cart-details-summary">Items {cartState.cartItems.length} <span className="cart-details-summary-total">₹{cartState.cartItemsTotal || 0}</span> </p>
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
        <button className="cart-details-checkout-btn">CHECKOUT</button>
      </div>
    </div>
  )
}
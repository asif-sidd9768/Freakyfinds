import { useContext, useEffect } from "react"
import { CartDetailsSection } from "../components/Cart/CartDetailsSection/CartDetailsSection"
import { CartProductsSection } from "../components/Cart/CartProductsSection/CartProductsSection"
import { EmptyCart } from "../components/Cart/EmptyCart/EmptyCart"

import "../styles/CartPage.css"
import { CartContext } from "../contexts/CartContext"
import { CheckoutContext } from "../contexts/CheckoutContext"
import { resetPaymentAndShipping } from "../actions/checkoutActions"

export const CartPage = () => {
  const {cartState} = useContext(CartContext)
  const { checkoutDispatch } = useContext(CheckoutContext)

  if(cartState.cartItems.length === 0){
    return <EmptyCart />
  }

  useEffect(() => {
    checkoutDispatch(resetPaymentAndShipping())
  }, [])

  return (
    <div className="cart-page-container">
      <CartProductsSection className="cart-products" />
      <CartDetailsSection className="cart-details" />
    </div>
  )
}
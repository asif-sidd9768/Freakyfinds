import { useContext } from "react"
import { CartDetailsSection } from "../components/Cart/CartDetailsSection/CartDetailsSection"
import { CartProductsSection } from "../components/Cart/CartProductsSection/CartProductsSection"
import { EmptyCart } from "../components/Cart/EmptyCart/EmptyCart"

import "../styles/CartPage.css"
import { CartContext } from "../contexts/CartContext"

export const CartPage = () => {
  const {cartState} = useContext(CartContext)

  if(cartState.cartItems.length === 0){
    return <EmptyCart />
  }

  return (
    <div className="cart-page-container">
      <CartProductsSection className="cart-products" />
      <CartDetailsSection className="cart-details" />
    </div>
  )
}
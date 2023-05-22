import { CartDetailsSection } from "../components/Cart/CartDetailsSection/CartDetailsSection"
import { CartProductsSection } from "../components/Cart/CartProductsSection/CartProductsSection"

import "../styles/CartPage.css"

export const CartPage = () => {
  return (
    <div className="cart-page-container">
      <CartProductsSection className="cart-products" />
      <CartDetailsSection className="cart-details" />
    </div>
  )
}
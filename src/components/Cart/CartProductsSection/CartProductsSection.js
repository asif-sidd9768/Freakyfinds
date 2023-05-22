import { useContext, useEffect } from "react"
import "./CartProductsSection.css"
import { ProductContext } from "../../../contexts/ProductContext"
import { CartProduct } from "./CartProduct/CartProduct"
import { CartContext } from "../../../contexts/CartContext"
import { cartItemQuantityChangeAction, cartItemQuantityChangeFailureAction, cartItemQuantityChangeRequestAction, deleteCartItemAction, updateCartTotalAction } from "../../../actions/cartActions"
import { NotificationContext } from "../../../contexts/NotificationContext"
import { updateCartProduct } from "../../../services/products/cartService"
import { UserContext } from "../../../contexts/UserContext"
import { CheckoutContext } from "../../../contexts/CheckoutContext"
import { AddressDetail } from "../AddressDetail/AddressDetail"
import { addCartItemsToCheckoutAction, updateShippingAddressAction } from "../../../actions/checkoutActions"
import { PaymentMethod } from "../PaymentMethod/PaymentMethod"

export const CartProductsSection = () => {
  const { showNotification } = useContext(NotificationContext)
  const {checkoutState, checkoutDispatch} = useContext(CheckoutContext)
  const { userState } = useContext(UserContext)
  const { cartState, cartDispatch } = useContext(CartContext)


  useEffect(() => {
    console.log('run')
    checkoutDispatch(addCartItemsToCheckoutAction(cartState.cartItems))
  }, [cartState.cartItems])

  return (
    <div className="cart-products-container">
      <div>
        <div className="cart-products-title">Your <span className="cart-products-title-brandname">
            FreakyFinds
          </span>
          <p className="cart-products-items-count">{cartState.cartItems.length} Items</p>
        </div>
        <hr className="cart-products-title-divider" />
      </div>
      <div className="cart-product-list">
        {
          cartState.cartItems.map(({quantity, product, id}) => 
            <CartProduct key={id} product={product} quantity={quantity} id={id} />
          )
        }
      </div>
      <AddressDetail />
      <PaymentMethod />
    </div>
  )
}
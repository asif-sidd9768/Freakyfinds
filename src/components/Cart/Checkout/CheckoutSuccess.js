import { NavLink, useLocation, useNavigate } from "react-router-dom"

import "./CheckoutSuccess.css"
import { CartProduct } from "../CartProductsSection/CartProduct/CartProduct"
import { SHIPPING_FEES } from "../../../utils/cart/shipping"
import { PAYMENT_METHOD } from "../../../utils/cart/payment"

export const CheckoutSuccess = () => {
  const location = useLocation()
  const { state } = location
  const navigate = useNavigate()

  if (!location.state) {
    navigate('/', { replace: true });
    return null;
  }

  const subTotal = state?.orderData?.products?.reduce((acc, {product, quantity}) => acc + (product.price * quantity), 0)
  return (
    <div className="checkout-success-container">
      <p className="checkout-success-message"><span><i className="fa-solid fa-circle-check"></i></span>Your order has been confirmed and will be shipping soon.</p>
      <hr className="checkout-success-divider" />
      <div className="checkout-success-detail-grid">
        <div>
          <p className="checkout-success-detail-title">Order Id</p>
          <p className="checkout-success-detail-content">{state.orderId}</p>
        </div>
        <div>
          <p className="checkout-success-detail-title">Order Date</p>
          <p className="checkout-success-detail-content">{new Date(state.orderData?.orderDate).toDateString()}</p>
        </div>
        <div>
          <p className="checkout-success-detail-title">Shipping Method</p>
          <p className="checkout-success-detail-content">{state.orderData?.shippingMethod}</p>
        </div>
        <div>
          <p className="checkout-success-detail-title">Payment Method</p>
          <p className="checkout-success-detail-content">{PAYMENT_METHOD[state.orderData?.paymentMethod]}</p>
        </div>
      </div>
      {
        state?.orderData?.products?.map(({product, quantity, id}) => 
          <CartProduct key={id} product={product} quantity={quantity} />  
        )
      }
      <hr className="checkout-success-products-divider" />
      <div className="checkout-success-pricing-container">
        <div>
          <p>Subtotal</p>
          <p>₹{subTotal.toFixed(2)}</p>
        </div>
        <div>
          <p>{state.orderData?.shippingMethod} shipping</p>
          <p>₹{SHIPPING_FEES[state.orderData?.shippingMethod]}</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>₹{state.orderData?.totalCost.toFixed(2)}</p>
        </div>
        <hr />
      </div>
      <button className="checkout-success-continue-shop-btn" onClick={() => navigate("/", {replace: true})}>Continue Shopping</button>
    </div>
  )
}
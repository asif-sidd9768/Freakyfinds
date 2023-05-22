import { useContext } from "react"
import "./PaymentMethod.css"
import { CheckoutContext } from "../../../contexts/CheckoutContext"
import { updatePaymentMethodAction } from "../../../actions/checkoutActions"

export const PaymentMethod = () => {
  const { checkoutDispatch } = useContext(CheckoutContext)

  const handlePaymentMethodChange = (event) => {
    checkoutDispatch(updatePaymentMethodAction(event.target.value))
  }

  return (
    <div className="payment-method-container">
      <p className="payment-method-title">Payment Method</p>
      <div className="payment-method-options">
        <span><input onClick={handlePaymentMethodChange} value="online" type="radio" /> <span>Online Payment</span></span>
        <span><input onClick={handlePaymentMethodChange} value="cash-on-delivery" type="radio" /> <span>Cash on Delivery</span></span>
      </div>
    </div>
  )
}
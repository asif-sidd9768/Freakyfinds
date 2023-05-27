import { addCartItemsToCheckoutAction } from "../../actions/checkoutActions";
import { createOrderService, loadScript, successOrderService } from "../../services/checkoutService";
import { RESOURCE } from "../strings";

export const handleOnlineCheckout = async (
  checkoutDispatch, 
  userState, 
  cartState,
  checkoutState, 
  cartTotalAmount, logoImg, navigate) => {
      checkoutDispatch(addCartItemsToCheckoutAction(cartState.cartItems))
      // await checkoutDispatch(addCartItemsToCheckoutAction(cartState.cartItems))
      // console.log(checkoutState)
      const res = await loadScript()
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const result = await createOrderService(userState?.user?.token, {...checkoutState, cartItems: cartState.cartItems, checkoutTotal: cartTotalAmount})
      // Getting the order details back
      if (!result) {
        alert("Server error. Are you online?");
        return;
      }
      const { amount, id: order_id, currency } = result.data;
      const options = {
        key: "rzp_test_3YlyvltlggcbsN", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: RESOURCE.PAYMENT_NAME,
        description: "Test Transaction",
        image: { logoImg },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const orderDetails = {
              ...checkoutState, 
              cartItems: cartState.cartItems, 
              checkoutTotal: cartTotalAmount
            }
            const checkoutResult = await successOrderService(userState?.user?.token, {orderDetails, checkoutDetails: data});
            console.log(checkoutResult.data.checkoutDetails)
            if(checkoutResult.data.msg == "successful"){
              console.log('success is')
              navigate("/success", {
                replace: true,
                state: {
                  //...values
                  ...checkoutResult.data
                }
              })
            }else {
              alert(checkoutResult.data.msg);
            }
        },
        prefill: {
            name: RESOURCE.PAYMENT_NAME ,
            email: RESOURCE.PAYMENT_EMAIL,
            contact: RESOURCE.PAYMENT_CONTACT,
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
}
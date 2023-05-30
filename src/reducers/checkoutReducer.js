import { SHIPPING_FEES } from "../utils/cart/shipping";

export const initialStateCheckout = {
  cartItems: [],
  shippingAddress: {},
  shippingMethod: 'standard',
  paymentMethod: "",
  checkoutTotal: 0,
  checkoutSuccess: {},
  error: null,
  isLoading: false
}

export const checkoutReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return {...state, cartItems: [...action.payload]}
    case 'ADD_ITEM':
      // Adds an item to the cart
      return { 
        ...state, 
        cartItems: [...state.cartItems, action.payload]
      };
    case 'REMOVE_ITEM':
      // Removes an item from the cart
      return { 
        ...state, 
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case 'UPDATE_CART_ITEMS':
      // Updates the quantity of a specific item in the cart
      return { 
        ...state, 
        cartItems: state.cartItems.map(item => 
          item.id === action.payload.id ? action.payload : item
        )
      };
    case "RESET_PAYMENT_AND_SHIPPING":
      return {...state,shippingAddress:{}, paymentMethod: ""}
    case 'UPDATE_SHIPPING_ADDRESS':
      // Updates the shipping address
      return { ...state, shippingAddress: action.payload };
    case 'UPDATE_SHIPPING_METHOD':
      // Updates the shipping method
      return { ...state, shippingMethod: action.payload };
    case 'UPDATE_BILLING_ADDRESS':
      // Updates the billing address
      return { ...state, billingAddress: action.payload };
    case 'UPDATE_PAYMENT_METHOD':
      // Updates the payment method
      return { ...state, paymentMethod: action.payload };
    case 'CLEAR_CART':
      // Clears all items from the cart
      return {
        ...state,
        cartItems: []
      };
    case "CHECKOUT_SUCCESS_REQUEST":
      return {...state, isLoading: true}
    case 'CHECKOUT_SUCCESS':
      // Resets the checkout state back to the initial state after a successful checkout
      return initialStateCheckout;
    case "CHECKOUT_SUCCESS_FAILURE":
      return {...state, isLoading: false}
    default:
      return state;
  }
};

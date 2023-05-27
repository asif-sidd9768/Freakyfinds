import { SHIPPING_FEES } from "../utils/cart/shipping"

export const initialStateCart = {
  cartItems: JSON.parse(localStorage.getItem("user")) || [],
  cartItemsTotal: 0,
  isLoading: false,
  error: null,
  cartShipping: SHIPPING_FEES.standard
};

let cartData = JSON.parse(localStorage.getItem("cart"));

if (Array.isArray(cartData)) {
  initialStateCart.cartItems = cartData;
  initialStateCart.cartItemsTotal = cartData.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  ).toFixed(2);
}

export const cartReducer = (state, action) => {
  switch(action.type){
    case "SET_ITEMS_TO_CART":
      const cartTotalAfterSetItems = updateCartTotal(action.payload, state.cartShipping)
      return {...state, cartItems: [...action.payload], cartItemsTotal: cartTotalAfterSetItems}
    case "ADD_TO_CART_REQUEST": 
      return {...state, isLoading: true}
    case "ADD_TO_CART": 
      // const isItemExist = state.cartItems.find((cartItem) => cartItem._id === action.payload._id)
      // let cartItemsAfterAdd
      // if(isItemExist){
      //   cartItemsAfterAdd = state.cartItems.map(cartItem => cartItem._id === isItemExist.id ? {...isItemExist, quantity: isItemExist.quantity+1} : cartItem)
      // }else {
      //   cartItemsAfterAdd = [...state.cartItems, {...action.payload, quantity: action.payload.quantity}]
      // }
      const cartItemsAfterAdd = [...state.cartItems, action.payload]
      const cartTotalAfterAdd = updateCartTotal(cartItemsAfterAdd, state.cartShipping)
      return {...state, cartItems: [...cartItemsAfterAdd], cartItemsTotal: cartTotalAfterAdd, isLoading: false}
    case "ADD_TO_CART_FAILURE":
      return {...state, error: action.payload, isLoading:false}
    case "DELETE_ITEM_CART_REQUEST":
      return {...state, isLoading: true}
    case "DELETE_ITEM_CART":
      const updatedCartAfterDelete = state.cartItems.filter(({id}) => id !== action.payload)
      const cartTotalAfterDelete = updateCartTotal(updatedCartAfterDelete, state.cartShipping)
      return {...state, cartItems: updatedCartAfterDelete, cartItemsTotal: cartTotalAfterDelete, isLoading: false}
    case "DELETE_ITEM_CART_FAILURE":
      return {...state, error:action.payload, isLoading: false}
    case "QUANTITY_CHANGE_CART_ITEM_REQUEST":
      return {...state, isLoading: true}
    case "QUANTITY_CHANGE_CART_ITEM":
      const updatedCartAfterChange = state.cartItems.map((cartItem) => cartItem.id === action.payload.cartItemId ? {...cartItem, quantity: action.payload.change === "increase" ? cartItem.quantity + 1 : cartItem.quantity -1} : cartItem)
      const cartTotalAfterChange = updateCartTotal(updatedCartAfterChange, state.cartShipping)
      return {...state, cartItems: updatedCartAfterChange, cartItemsTotal: cartTotalAfterChange, isLoading:false}
    case "QUANTITY_CHANGE_CART_ITEM_FAILURE":
      return {...state, error: action.payload, isLoading:false}
    case "UPDATE_CART_SHIPPING":
      return {...state, cartShipping: SHIPPING_FEES[action.payload]}
    case "CLEAR_CART":
      return {...initialStateCart}
    default:
      const defaultTotal = updateCartTotal(state.cartItems)
      return {...state, cartItemsTotal: defaultTotal}
  }
}

const updateCartTotal = (items, shipping) => {
  const total = items.reduce((acc, {product, quantity}) => acc + (product.price  * quantity) , shipping).toFixed(2)
  return total
}
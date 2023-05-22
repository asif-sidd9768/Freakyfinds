import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { NotificationContext } from "../../../../contexts/NotificationContext"
import { cartItemQuantityChangeAction, cartItemQuantityChangeFailureAction, cartItemQuantityChangeRequestAction, deleteCartItemAction } from "../../../../actions/cartActions"
import { updateCartProduct } from "../../../../services/products/cartService"
import { UserContext } from "../../../../contexts/UserContext"

export const CartProduct = ({product, quantity, id}) => {
  const { userState } = useContext(UserContext)
  const { cartState, cartDispatch } = useContext(CartContext)
  const { showNotification } = useContext(NotificationContext)

  const handleCartItemDelete = (productId) => {
    cartDispatch(deleteCartItemAction(productId))
    showNotification("ITEM REMOVED FROM FINDS", "error")
  }

  const handleQuantityChange = async (productQuantity, cartItemId, change) => {
    cartDispatch(cartItemQuantityChangeRequestAction())
    try {
      if(change === "decrease" && productQuantity === 1) {
        cartDispatch(deleteCartItemAction(cartItemId))
      }else{
        const response = await updateCartProduct(userState?.user?.user?.id, cartItemId, userState.user.token, change) 
        cartDispatch(cartItemQuantityChangeAction({cartItemId, change}))
        showNotification(`${change.toUpperCase()}D QUANTITY`, "success")
      }
    }catch(error){
      cartDispatch(cartItemQuantityChangeFailureAction(error))
      showNotification(`FAIL TO ${change.toUpperCase()}D QUANTITY`, "error")
      console.log(error)
    }
  }

  return (
    <>
      <div className="cart-product-grid" key={product.id}>
        <div className="cart-image">
          <img src={product.image} />
        </div>
        <div className="cart-title">
          <p className="cart-product-title">{product.title}</p>
        </div>
        <div className="cart-category">
          <p className={`cart-product-category cart-product-category-${product.category}`}>{product.category}</p>
        </div>
        <div className="cart-quantity">
          <div className="cart-product-quantity">
            <span onClick={() => handleQuantityChange(product.quantity, id, "decrease")} className="cart-product-quantity-decrease">-</span>
            <span className="cart-product-quantity-count">{quantity}</span>
            <span onClick={() => handleQuantityChange(product.quantity, id, "increase")} className="cart-product-quantity-increase">+</span>
          </div>
          <span onClick={() => handleCartItemDelete(product.id)} className="cart-product-delete-btn"><i className="fa-solid fa-delete-left"></i></span>
        </div>
        <div className="cart-price">
          <p className="cart-product-price"><span className="cart-product-base-price">₹{product.price.toFixed(2)} x {product.quantity} = </span><span className="cart-product-total-price"> ₹{(product.price * quantity).toFixed(2)}</span></p>
        </div>
      </div>  
    </>
  )
}
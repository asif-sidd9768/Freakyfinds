import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { NotificationContext } from "../../../../contexts/NotificationContext"
import { cartItemQuantityChangeAction, cartItemQuantityChangeFailureAction, cartItemQuantityChangeRequestAction, deleteCartItemAction, deleteCartItemRequestAction, deleteCartItemRequestFailure } from "../../../../actions/cartActions"
import { deleteCartProduct, updateCartProduct } from "../../../../services/user/cartService"
import { UserContext } from "../../../../contexts/UserContext"
import { NavLink, useLocation } from "react-router-dom"

import "./CartProduct.css"

export const CartProduct = ({product, quantity, id}) => {
  const { userState } = useContext(UserContext)
  const { cartState, cartDispatch, handleDeleteFromCart, handleQuantityChange } = useContext(CartContext)
  const { showNotification } = useContext(NotificationContext)
  const location = useLocation()

  return (
    <>
      <div className="cart-product-grid" key={product.id}>
        <div className={`cart-image ${location.pathname === "/success" ? "cart-image-success-page" : ""}`}>
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
            {(location.pathname !== "/success") && (location.pathname !== "/profile") && 
            <><span onClick={() => handleQuantityChange(quantity, id, "decrease")} className="cart-product-quantity-decrease">-</span>
            <span className="cart-product-quantity-count">{quantity}</span>
            <span onClick={() => handleQuantityChange(quantity, id, "increase")} className="cart-product-quantity-increase">+</span>
            </>}
          </div>
          {
            (location.pathname !== "/success") && (location.pathname !== "/profile") && <button disabled={cartState.isLoading} onClick={() => handleDeleteFromCart(id)} className="cart-product-delete-btn"><i className="fa-solid fa-delete-left"></i></button>
          }
          {
            location.pathname === "/profile" && <NavLink to="/wishlist" className="cart-product-wishlist-btn">Click to see</NavLink>
          }
        </div>
        {location.pathname !== "/profile" && <div className="cart-price">
          <p className="cart-product-price"><span className="cart-product-base-price">{product.sale.onSale && <span className="cart-product-price-cut">₹{product?.price}</span>} ₹{product?.sale.onSale ? product?.sale?.salePrice.toFixed(2) : product?.price.toFixed(2)} x {(location.pathname === "/success") ? quantity : quantity} = </span><span className="cart-product-total-price"> ₹{((product.sale.onSale ? product.sale.salePrice*quantity : product.price*quantity))?.toFixed(2)}</span></p>
        </div>}
      </div>  
    </>
  )
}
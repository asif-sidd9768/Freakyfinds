import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { useLocation, useNavigate } from "react-router-dom"

import "./CartProduct.css"
import { WishlistContext } from "../../../../contexts/WishlistContext"
import { isItemInCart } from "../../../../utils/products/checItemInCart"
import { WishlistButton } from "../../../Button/Button"
import { isItemInWishlist } from "../../../../utils/wishlist/checkItemInWishlist"

export const CartProduct = ({product, quantity, id}) => {
  const {handleRemoveFromWishlist} = useContext(WishlistContext)
  const { wishlistState, handleAddToWishlist } = useContext(WishlistContext)
  const { cartState, handleAddToCart, handleDeleteFromCart, handleQuantityChange } = useContext(CartContext)
  const navigate = useNavigate()
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
          <p className={`cart-product-category cart-product-category-${product.category}`}>
            {product.category}             
          </p>
          <span className="cart-product-wishlist-text-btn">
            <button disabled={isItemInWishlist(wishlistState.wishlistItems, product.id)} onClick={() => handleAddToWishlist(navigate, product)} className="cart-product-wishlist-btn">
              {isItemInWishlist(wishlistState.wishlistItems, product.id) ? "Already in wishlist"  : "Add to wishlist"}
            </button>
          </span>
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
            (location.pathname !== "/success") && (location.pathname !== "/profile") && 
            <div className="cart-product-btn-container">
              <span className="cart-product-wishlist-icon-btn"><WishlistButton isAbsolute={false} type={isItemInWishlist(wishlistState.wishlistItems, product.id) ? "added" : "add"} onClick={() => {
                if (!isItemInWishlist(wishlistState.wishlistItems, product.id)) {
                  handleAddToWishlist(navigate, product);
                }
              }} /></span>
              <button disabled={cartState.isLoading} onClick={() => handleDeleteFromCart(id)} className="cart-product-delete-btn"  >
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </div>
          }
          {
            location.pathname === "/profile" && <>
              <button onClick={() => handleAddToCart(navigate, product)} disabled={isItemInCart(cartState.cartItems, product.id)} className="cart-product-wishlist-btn">{isItemInCart(cartState.cartItems,product.id) ? "Already in cart" : "Move to cart"}</button>
              <button onClick={() => handleRemoveFromWishlist(product.id)} className="cart-product-wishlist-btn">Remove from wishlist</button>
            </>
          }
        </div>
        {location.pathname !== "/profile" && <div className="cart-price">
          <p className="cart-product-price"><span className="cart-product-base-price">{product.sale.onSale && <span className="cart-product-price-cut">₹{product?.price}</span>} ₹{product?.sale.onSale ? product?.sale?.salePrice.toFixed(2) : product?.price.toFixed(2)} x {(location.pathname === "/success") ? quantity : quantity} = </span><span className="cart-product-total-price"> ₹{((product.sale.onSale ? product.sale.salePrice*quantity : product.price*quantity))?.toFixed(2)}</span></p>
        </div>}
      </div>  
    </>
  )
}
import { useContext } from "react"
import "./DetailSection.css"
import { CartContext } from "../../../contexts/CartContext"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { NavLink } from "react-router-dom"
import { addToCartAction } from "../../../actions/cartActions"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { addToWishlistAction, deleteFromWishlistAction } from "../../../actions/wishlistActions"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"

export const DetailSection = ({product}) => {
  const { cartState, cartDispatch } = useContext(CartContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
  return (
    <div className="detail-section-container">
      <p className="detail-section-category"><span>{product.category}</span></p>
      <p className="detail-section-star-rating">
        {
          Array.from({length: 5}, (_, i) => i + 1).map(i => 
            <span key={i}>
              <i className={`fa-solid fa-star ${i <= Math.round(product.rating.rate) ? "detail-section-rating-checked" : ""}`}></i>
            </span>  
          )
        }
        <span className="detail-section-rating-count">
          ({product.rating.count} Ratings)
        </span>
      </p>
      <p className="detail-section-price">₹{product.price.toFixed(2)}</p>
      <div className="detail-section-btns">
        {
          isItemInWishlist(wishlistState.wishlistItems, product.id)
          ?
          <button onClick={() => wishlistDispatch(deleteFromWishlistAction(product.id))} className="detail-section-wishlist-added-btn"><i className="fa-solid fa-heart"></i></button>
          :
          <button onClick={() => wishlistDispatch(addToWishlistAction(product))} className="detail-section-wishlist-btn"><i className="fa-solid fa-heart"></i></button>
        }
        {
          isItemInCart(cartState.cartItems, product.id)
          ?
          <NavLink to="/cart/sfsdf" className="detail-section-cart-added-btn">{RESOURCE.GO_TO_FINDS}</NavLink>
          :
          <button onClick={() => cartDispatch(addToCartAction(product))} className="detail-section-cart-btn">{RESOURCE.ADD_TO_FINDS}</button>
        }
      </div>
      <p className="detail-section-description">{product.description}</p>
      <hr className="detail-section-divider" />
    </div>
  )
}
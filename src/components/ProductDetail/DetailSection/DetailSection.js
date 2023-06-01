import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { NavLink, useNavigate } from "react-router-dom"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"

import "./DetailSection.css"
import { DetailSectionStarRating } from "./DetailSectionStarRating/DetailSectionStarRating"

export const DetailSection = ({product}) => {
  const { cartState, handleAddToCart } = useContext(CartContext)
  const { wishlistState, handleRemoveFromWishlist, handleAddToWishlist } = useContext(WishlistContext)
  const navigate = useNavigate()
  return (
    <div className="detail-section-container">
      <p className="detail-section-category"><span>{product.category}</span></p>
      <p className="detail-section-star-rating">
      <DetailSectionStarRating product={product} /> 
      <span className="detail-section-rating-count">
        ({product.rating.count} Ratings)
      </span>
      </p>
      <p className="detail-section-price">₹{product.price.toFixed(2)}</p>
      <div className="detail-section-btns">
        {
          isItemInWishlist(wishlistState.wishlistItems, product.id)
          ?
          <button onClick={() => handleRemoveFromWishlist(product.id)} className="detail-section-wishlist-added-btn"><i className="fa-solid fa-heart"></i></button>
          :
          <button onClick={() => handleAddToWishlist(navigate ,product)} className="detail-section-wishlist-btn"><i className="fa-solid fa-heart"></i></button>
        }
        {
          isItemInCart(cartState.cartItems, product.id)
          ?
          <NavLink to="/cart" className="detail-section-cart-added-btn">{RESOURCE.GO_TO_FINDS}</NavLink>
          :
          <button onClick={() => handleAddToCart(navigate, product)} disabled={product.stockQuantity < 1} className="detail-section-cart-btn">{product.stockQuantity < 1 ? "Out of Stock" : RESOURCE.ADD_TO_FINDS}</button>
        }
      </div>
      <p className="detail-section-description">{product.description}</p>
      <hr className="detail-section-divider" />
    </div>
  )
}
import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { NavLink, useNavigate } from "react-router-dom"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"

import "./DetailSection.css"
import { DetailSectionStarRating } from "./DetailSectionStarRating/DetailSectionStarRating"
import { Button, WishlistButton } from "../../Button/Button"

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
          <WishlistButton isAbsolute={false} type="added" onClick={() => handleRemoveFromWishlist(product.id)} />
          :
          <WishlistButton isAbsolute={false} type="add" onClick={() => handleAddToWishlist(navigate, product)} />
        }
        {
          isItemInCart(cartState.cartItems, product.id)
          ?
          <Button type="navigate" text={RESOURCE.GO_TO_FINDS} onClick={() => navigate("/cart")} size="default"  />
          :
          <Button 
            type={`${product.stockQuantity < 1 ? "out-of-stock" :"active"}`} 
            text={product.stockQuantity < 1 ? "Out of Stock" : RESOURCE.ADD_TO_FINDS} 
            onClick={() => handleAddToCart(navigate, product)}
            size="default" 
          />
        }
      </div>
      <p className="detail-section-description">{product.description}</p>
      <hr className="detail-section-divider" />
    </div>
  )
}
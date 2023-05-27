import { useContext, useEffect } from "react"

import { CartContext } from "../../../contexts/CartContext"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"
import { NotificationContext } from "../../../contexts/NotificationContext"
import { UserContext } from "../../../contexts/UserContext"

import "./ProductListCard.css"
import "../../../styles.css"

export const ProductListCard = (product) => {
  const { cartState, cartDispatch, handleAddToCart } = useContext(CartContext)
  const { userState } = useContext(UserContext)
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const location = useLocation()
  const { wishlistState, wishlistDispatch, handleAddToWishlist, handleRemoveFromWishlist } = useContext(WishlistContext)
  const {id, title, category, price, image, rating, sale} = product

  return (
    <div className="product-list-card-container">
      <div className="product-list-card-image-container">
        <img className="product-list-card-image" src={image} />
        <span className={`product-list-card-category product-list-card-category-${category}`}>{category}</span>
        <span className="product-list-card-rating"><i className="fa-solid fa-star"></i> {rating.rate}</span>
        <div className="product-list-card-price">
          <p className={`${sale.onSale ? "original-price-if-sale" :"original-price"} `}>₹{price.toFixed(2)}</p>
          {sale.onSale && <p className="sale-price">₹{sale.salePrice.toFixed(2)}</p>}
        </div>
        {
          isItemInWishlist(wishlistState.wishlistItems, id) 
          ? 
          <span onClick={() => handleRemoveFromWishlist(userState, showNotification, product)} className="product-list-card-wishlist-added-btn"><i className="fa-solid fa-heart"></i></span>
          :
          <span onClick={() => handleAddToWishlist(userState, showNotification, product)} className="product-list-card-wishlist-btn"><i className="fa-solid fa-heart"></i></span>  
        }
      </div>
      <div className="product-list-card-details-container">
        {sale.onSale && <span className="product-list-card-sale">Sale</span>}
        <div className="product-list-card-details">
            <NavLink to={`/product/${id}`} className="product-list-card-name">{title}</NavLink>
            {
              isItemInCart(cartState.cartItems, id) 
              ? 
              <NavLink to="/cart/sdhsd" className="product-list-card-cart-visit-btn">{RESOURCE.GO_TO_FINDS}</NavLink>
              :
              <button disabled={cartState.isLoading} onClick={() => handleAddToCart(userState, showNotification, navigate, product)} className="product-list-card-cart-btn">{RESOURCE.ADD_TO_FINDS}</button>
            }
        </div>
      </div>
    </div>
  )
}
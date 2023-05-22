import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { addToCartAction } from "../../../actions/cartActions"

import "./ProductListCard.css"
import "../../../styles.css"
import { NavLink } from "react-router-dom"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"
import { addToWishlistAction, deleteFromWishlistAction } from "../../../actions/wishlistActions"
import { NotificationContext } from "../../../contexts/NotificationContext"
import { addProductToCart } from "../../../services/products/cartService"
import { UserContext } from "../../../contexts/UserContext"

export const ProductListCard = (product) => {
  const { cartState, cartDispatch } = useContext(CartContext)
  const { userState } = useContext(UserContext)
  const { showNotification } = useContext(NotificationContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
  const {id, title, category, price, image, rating} = product

  const handleAddToCart = async () => {
    try {
      const response = await addProductToCart(userState.user.id, product, userState.user.token)
      console.log(response.data)
      cartDispatch(addToCartAction(response.data))
      showNotification("ITEM ADDED TO FINDS", "success")
    }catch(error){
      console.log(error)
    }
  }

  const handleAddToWishlist = () => {
    wishlistDispatch(addToWishlistAction(product))
    showNotification("ITEM ADDED TO WISHLIST", "success")
  }

  const handleRemoveFromWishlist = () => {
    wishlistDispatch(deleteFromWishlistAction(id))
    showNotification("ITEM REMOVED FROM WISHLIST", "error")
  }

  return (
    <div className="product-list-card-container">
      <div className="product-list-card-image-container">
        <img className="product-list-card-image" src={image} />
        <span className={`product-list-card-category product-list-card-category-${category}`}>{category}</span>
        <span className="product-list-card-rating"><i className="fa-solid fa-star"></i> {rating.rate}</span>
        <span className="product-list-card-price">₹{price.toFixed(2)}</span>
        {
          isItemInWishlist(wishlistState.wishlistItems, id) 
          ? 
          <span onClick={handleRemoveFromWishlist} className="product-list-card-wishlist-added-btn"><i className="fa-solid fa-heart"></i></span>
          :
          <span onClick={handleAddToWishlist} className="product-list-card-wishlist-btn"><i className="fa-solid fa-heart"></i></span>  
        }
      </div>
      <div className="product-list-card-details-container">
        <div className="product-list-card-details">
            <NavLink to={`/product/${id}`} className="product-list-card-name">{title}</NavLink>
            {
              isItemInCart(cartState.cartItems, id) 
              ? 
              <NavLink to="/cart/sdhsd" className="product-list-card-cart-visit-btn">{RESOURCE.GO_TO_FINDS}</NavLink>
              :
              <button onClick={handleAddToCart} className="product-list-card-cart-btn">{RESOURCE.ADD_TO_FINDS}</button>
            }
        </div>
      </div>
    </div>
  )
}
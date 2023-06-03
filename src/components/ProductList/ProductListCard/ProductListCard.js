import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext"
import { WishlistContext } from "../../../contexts/WishlistContext"
import { NavLink, useNavigate } from "react-router-dom"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { RESOURCE } from "../../../utils/strings"
import { isItemInWishlist } from "../../../utils/wishlist/checkItemInWishlist"
import { HighlightedString } from "../../HighlightedString/HighlightedString"
import { ProductContext } from "../../../contexts/ProductContext"

import "./ProductListCard.css"
import "../../../styles.css"
import { Button, WishlistButton } from "../../Button/Button"

export const ProductListCard = (product) => {
  const { cartState, handleAddToCart } = useContext(CartContext)
  const { productState } = useContext(ProductContext)
  const navigate = useNavigate()
  const { wishlistState, handleAddToWishlist, handleRemoveFromWishlist } = useContext(WishlistContext)
  const {id, title, category, price, image, rating, sale, stockQuantity} = product

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
            <WishlistButton isAbsolute={true} type="added" onClick={() => handleRemoveFromWishlist(product.id)}  />
          :
            <WishlistButton isAbsolute={true} type="add" onClick={() => handleAddToWishlist(navigate, product)} />
        }
      </div>
      <div className="product-list-card-details-container">
        {sale.onSale && <span className="product-list-card-sale">Sale</span>}
        <div className="product-list-card-details">
            <NavLink to={`/product/${id}`} className="product-list-card-name"><HighlightedString text={title} substring={productState.filters.searchParam} /></NavLink>
            {
              isItemInCart(cartState.cartItems, id) 
              ? 
              <Button type="navigate" text={RESOURCE.GO_TO_FINDS} onClick={() => navigate("/cart")} />
              :
              <Button 
                type={`${stockQuantity < 1 ? "out-of-stock" :"active"}`} 
                text={stockQuantity < 1 ? "Out of Stock" : RESOURCE.ADD_TO_FINDS} 
                onClick={() => handleAddToCart(navigate, product)} 
              />
            }
        </div>
      </div>
    </div>
  )
}
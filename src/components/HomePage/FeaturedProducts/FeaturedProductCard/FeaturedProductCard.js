import { useContext } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { addToCartAction } from "../../../../actions/cartActions"
import { isItemInCart } from "../../../../utils/products/checItemInCart"
import { CartContext } from "../../../../contexts/CartContext"
import { RESOURCE } from "../../../../utils/strings"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../../../contexts/UserContext"
import { NotificationContext } from "../../../../contexts/NotificationContext"

export const FeaturedProductCard = (pr) => {
  const { cartState, cartDispatch, handleAddToCart } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div className="featured-product" key={pr.id}>
      <img src={pr.image} />
      <NavLink to={`/product/${pr.id}`} title={pr.title} className="featured-product-extra">{pr.title}</NavLink>
      <span className="featured-product-extra">₹{pr.price.toFixed(2)}</span>
      <div className="featured-product-extra featured-product-btn-container">
        {
          isItemInCart(cartState.cartItems, pr.id) 
          ?
          <NavLink to="/cart" className="featured-product-added-btn">
            {RESOURCE.GO_TO_FINDS}
          </NavLink>
          :
          <button onClick={() => handleAddToCart(navigate, pr)} className="featured-product-btn">
            {RESOURCE.ADD_TO_FINDS}
          </button>
        }
      </div>
    </div>
  )
}
import { useContext } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { addToCartAction } from "../../../../actions/cartActions"
import { isItemInCart } from "../../../../utils/products/checItemInCart"
import { CartContext } from "../../../../contexts/CartContext"
import { RESOURCE } from "../../../../utils/strings"
import { NavLink } from "react-router-dom"

export const FeaturedProductCard = (pr) => {
  const { cartState, cartDispatch } = useContext(CartContext)
  return (
    <div className="featured-product" key={pr.id}>
      <img src={pr.image} />
      <p className="featured-product-extra" title={pr.title}>{pr.title}</p>
      <span className="featured-product-extra">₹{pr.price.toFixed(2)}</span>
      <div className="featured-product-extra featured-product-btn-container">
        {
          isItemInCart(cartState.cartItems, pr.id) 
          ?
          <NavLink to="/cart/sds" className="featured-product-added-btn">
            {RESOURCE.GO_TO_FINDS}
          </NavLink>
          :
          <button onClick={() => cartDispatch(addToCartAction(pr))} className="featured-product-btn">
            {RESOURCE.ADD_TO_FINDS}
          </button>
        }
      </div>
    </div>
  )
}
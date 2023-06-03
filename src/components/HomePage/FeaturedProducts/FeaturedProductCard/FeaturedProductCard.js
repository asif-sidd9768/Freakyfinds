import { useContext } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { isItemInCart } from "../../../../utils/products/checItemInCart"
import { CartContext } from "../../../../contexts/CartContext"
import { RESOURCE } from "../../../../utils/strings"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../../../Button/Button"

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
          <Button type="navigate" text={RESOURCE.GO_TO_FINDS} onClick={() => navigate("/cart")} />
          :
          <Button type="active" text={RESOURCE.ADD_TO_FINDS} onClick={() => handleAddToCart(navigate, pr)} />
        }
      </div>
    </div>
  )
}
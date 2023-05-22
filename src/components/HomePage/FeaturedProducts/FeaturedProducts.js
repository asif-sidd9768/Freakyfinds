import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import "./FeaturedProducts.css"
import { NavLink } from "react-router-dom"
import { RESOURCE } from "../../../utils/strings"
import { CartContext } from "../../../contexts/CartContext"
import { isItemInCart } from "../../../utils/products/checItemInCart"
import { addToCartAction, deleteCartItemAction } from "../../../actions/cartActions"
import { NotificationContext } from "../../../contexts/NotificationContext"

export const FeaturedProducts = () => {
  const { productState } = useContext(ProductContext)
  const { showNotification } = useContext(NotificationContext)
  const { cartState, cartDispatch } = useContext(CartContext)
  return (
    <div>
      <p className="featured-products-title">Featured Products</p>
      <p className="featured-products-tagline">Power up with our featured products!</p>
      <div className="featured-products-container">
        {
          productState.products.slice(0,4).map(pr => 
            
            <div className="featured-product" key={pr.id}>
              <img src={pr.image} />
              <p className="featured-product-extra" title={pr.title}>{pr.title}</p>
              <span className="featured-product-extra">₹{pr.price}</span>
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
      </div>
    </div>
  )
}
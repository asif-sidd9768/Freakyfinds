import { NavLink } from "react-router-dom"
import "./EmptyCart.css"

export const EmptyCart = () => {
  return(
    <div className="empty-cart-container">
      <p className="empty-cart-icon"><i className="fa-solid fa-cart-plus"></i></p>
      <p className="empty-cart-text">Whoops! Your cart is less freaky than we'd like. Let's find something to add.</p>
      <NavLink to="/" className="empty-cart-btn">Add Some Freakiness!</NavLink>
    </div>
  )
}
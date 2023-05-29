import { NavLink } from "react-router-dom"

export const EmptyList = ({text}) => {
  return (
    <div className="empty-orders-container">
      <p className="empty-cart-text">{text}</p>
      <NavLink to="/" className="empty-cart-btn">Add Some Freakiness!</NavLink> 
    </div>
  )
}
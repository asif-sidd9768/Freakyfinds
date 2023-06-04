import { NavLink, useLocation } from "react-router-dom"


export const EmptyList = ({text, showBtn=true}) => {
  const location = useLocation()
  return (
    <div className="empty-orders-container">
      <p className="empty-cart-text">{text}</p>
      {
        showBtn && <>{location.pathname !== "/shop" && <NavLink to="/" className="empty-cart-btn">Add Some Freakiness!</NavLink> }</>
      }
    </div>
  )
}
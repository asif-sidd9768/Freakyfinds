import { useContext } from "react"
import {NavLink} from "react-router-dom"
import { ProductContext } from "../../contexts/ProductContext"

import logoImg from "../../assets/images/logo-new.png"

import "./Navbar.css"
import { CartContext } from "../../contexts/CartContext"

export const Navbar = () => {
  const { productState } = useContext(ProductContext)
  const { cartState } = useContext(CartContext)

  const getActiveStyles = ({isActive}) => ({
    borderBottom: isActive ? "2px solid teal" : "",
    color: isActive ? "rgb(65, 65, 60)": ""
  })
  return (
    <div className="nav">
      <div className="nav-logo">
        {/* <img className="nav-logo-img" src={logoImg} /> */}
        <div className="nav-items">
        <NavLink style={getActiveStyles} className="nav-item nav-item-home" to="/">Home</NavLink>
        <NavLink style={getActiveStyles} className="nav-item nav-item-home" to="/shop">Shop</NavLink>
        <NavLink style={getActiveStyles} className="nav-item nav-item-home" to="/alal">Contact</NavLink>
        <NavLink style={getActiveStyles} className="nav-item nav-item-home" to="/alaal">About</NavLink>
        {/* <span className="nav-category-icons">
        {
          productState.categories.map(category => 
              <NavLink style={getActiveStyles} className="nav-item" to={`/${category}`}>{category}</NavLink>
            )
        }
        </span> */}
      </div>
      </div>
      
      <div className="nav-details nav-wishlist">
        <NavLink className="nav-item" to={`/wishlist`}><i className="fa-solid fa-heart"></i>Wishlist</NavLink>
      </div>
    </div>
  )
}
import { useContext, useEffect, useState } from "react"
import {NavLink} from "react-router-dom"
import { ProductContext } from "../../contexts/ProductContext"

import logoImg from "../../assets/images/logo-new.png"

import "./Navbar.css"
import { CartContext } from "../../contexts/CartContext"

export const Navbar = () => {
  const { productState } = useContext(ProductContext)
  const { cartState } = useContext(CartContext)
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const handleWindowSizeChange = () => {
    setIsMobileMenu(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleMenuClose = () => setIsMobileMenu(!isMobileMenu)


  const getActiveStyles = ({isActive}) => ({
    borderBottom: isActive ? "2px solid teal" : "",
    color: isActive ? "rgb(65, 65, 60)": ""
  })

  const getActiveStylesMobile = ({isActive}) => ({
    backgroundColor: isActive ? "teal" : "",
    color: isActive ? "beige": ""
  })
  return (
    <div className="nav">
      <div className="nav-logo">
        {/* <img className="nav-logo-img" src={logoImg} /> */}
        <div className="nav-items">
          <span onClick={() => setIsMobileMenu(!isMobileMenu)} className="mobile-menu-item mobile-menu-show">{isMobileMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</span>
          {
            !isMobileMenu && <>
              <NavLink style={getActiveStyles} className="nav-item nav-item-home mobile-menu-hide" to="/">Home</NavLink>
              <NavLink style={getActiveStyles} className="nav-item nav-item-home mobile-menu-hide" to="/shop">Shop</NavLink>
              <NavLink style={getActiveStyles} className="nav-item nav-item-home mobile-menu-hide" to="/contact-us">Contact</NavLink>
              <NavLink style={getActiveStyles} className="nav-item nav-item-home mobile-menu-hide" to="/auction"><i className="fa-solid fa-gavel"></i>Auction</NavLink>
            </>
          }
        </div>
      </div>
      
      <div className="nav-details nav-wishlist">
        <NavLink style={getActiveStyles} className="nav-item" to={`/wishlist`}><i className="fa-solid fa-heart"></i>Wishlist</NavLink>
      </div>
      {
        isMobileMenu && <div className="menu-mobile-container">
          <NavLink onClick={handleMenuClose} style={getActiveStylesMobile} className="nav-item nav-item-home mobile-menu-item" to="/">Home</NavLink>
          <NavLink onClick={handleMenuClose} style={getActiveStylesMobile} className="nav-item nav-item-home mobile-menu-item" to="/shop">Shop</NavLink>
          <NavLink onClick={handleMenuClose} style={getActiveStylesMobile} className="nav-item nav-item-home mobile-menu-item" to="/contact-us">Contact</NavLink>
          <NavLink onClick={handleMenuClose} style={getActiveStylesMobile} className="nav-item nav-item-home mobile-menu-item" to="/auction"><span className="auction-icon"><i className="fa-solid fa-gavel"></i></span>Auction</NavLink>
          <NavLink onClick={handleMenuClose} style={getActiveStylesMobile} className="nav-item nav-item-home mobile-menu-item" to={`/wishlist`}><i className="fa-solid fa-heart"></i>Wishlist</NavLink>
        </div>
      }
    </div>
  )
}
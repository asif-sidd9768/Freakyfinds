import { useContext, useEffect, useState } from "react";

import MenuLogo from "../../../assets/images/logo-new.png"
import "./MenuBar.css"
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { ProductContext } from "../../../contexts/ProductContext";
import { UserContext } from "../../../contexts/UserContext";
import { WishlistContext } from "../../../contexts/WishlistContext";
import { CheckoutContext } from "../../../contexts/CheckoutContext";
import { clearCartAction } from "../../../actions/cartActions";
import { removeUserAction } from "../../../actions/userActions";
import { removeWishlistItemsAction } from "../../../actions/wishlistActions";

export const MenuBar = () => {
  const { cartState, cartDispatch } = useContext(CartContext)
  const { productState } = useContext(ProductContext)
  const { userState, userDispatch } = useContext(UserContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
  const { checkoutState, checkoutDispatch } = useContext(CheckoutContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    cartDispatch(clearCartAction())
    userDispatch(removeUserAction())
    wishlistDispatch(removeWishlistItemsAction())
    localStorage.removeItem("user")
    localStorage.removeItem("wishlist")
    localStorage.removeItem("cart")
    toggleMenu()
  }

  return (
    <div className="menubar-container">
      <div className="menubar-profile-btn"> 
        <NavLink to="/profile"><i className="fa-solid fa-user"></i></NavLink>
      </div>
      <div onClick={toggleMenu} className="menubar-button">
        {isOpen ? 
          <span className="menubar-close-btn"><i className="fa-solid fa-circle-xmark"></i></span> 
          : <div className={`menubar-rotating-circle ${(productState.isLoading || wishlistState.isLoading || checkoutState.isLoading || cartState.isLoading || userState.isLoading) ? "rotate" : ""}`}>
              <img src={MenuLogo} className="menubar-logo-img" />
            </div>
          }
      </div>
      <div className={`menubar-items ${isOpen ? "open" : ""}`}>
        {
          userState.user ? <div onClick={handleLogout} className="menubar-item menubar-item-logout">Logout</div> 
          : <div onClick={() => {navigate("/login"); toggleMenu()}} className="menubar-item menubar-item-logout">Login</div>
        }
        {/* <div className="menubar-item">Item 2</div>
        <div className="menubar-item">Item 3</div>
        <div className="menubar-item">Item 4</div> */}
      </div>
      <div className="menubar-cart-btn">
        <NavLink className="menubar-cart-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i> <sup>{cartState.cartItems.length}</sup></NavLink>
      </div>
    </div>
  );
}
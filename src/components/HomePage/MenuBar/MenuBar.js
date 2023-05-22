import { useContext, useEffect, useState } from "react";

import MenuLogo from "../../../assets/images/logo-new.png"
import "./MenuBar.css"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { ProductContext } from "../../../contexts/ProductContext";

export const MenuBar = () => {
  const { cartState } = useContext(CartContext)
  const { productState } = useContext(ProductContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menubar-container">
      <div className="menubar-profile-btn"> 
        <NavLink to="/login"><i className="fa-solid fa-user"></i></NavLink>
      </div>
      <div onClick={toggleMenu} className="menubar-button">
        {isOpen ? 
          <span className="menubar-close-btn"><i className="fa-solid fa-circle-xmark"></i></span> 
          : <div className={`menubar-rotating-circle ${(productState.isLoading || cartState.isLoading) ? "rotate" : ""}`}>
              <img src={MenuLogo} className="menubar-logo-img" />
            </div>
          }
      </div>
      <div className={`menubar-items ${isOpen ? "open" : ""}`}>
        <div className="menubar-item">Item 1</div>
        <div className="menubar-item">Item 2</div>
        <div className="menubar-item">Item 3</div>
        <div className="menubar-item">Item 4</div>
      </div>
      <div className="menubar-cart-btn">
        <NavLink className="menubar-cart-link" to="/cart/sjdfsfds"><i className="fa-solid fa-cart-shopping"></i> <sup>{cartState.cartItems.length}</sup></NavLink>
      </div>
    </div>
  );
}
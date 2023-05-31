import "./Footer.css"
import Logo from "../../assets/images/logo-new.png"
import PaymentIcons from "../../assets/images/payment-icons.png"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div>
          <div className="footer-logo-text">
            <img className="footer-logo" src={Logo} />
            <span className="footer-text">FreakyFinds</span>
          </div>
        </div>
        <div className="footer-links-container">
          <span>
            <NavLink to="/auction" className="footer-link">Auction</NavLink>
            <NavLink to="/privacy-policy" className="footer-link">Privacy Policy</NavLink>
            <NavLink to="/return-policy" className="footer-link">Return/Refund Policy</NavLink>
            <NavLink to="/contact-us" className="footer-link">Contact</NavLink>
          </span>
        </div>
        <div className="footer-payment-cards">
          <img className="footer-payments" src={PaymentIcons} />
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Copyright 2023. All Rights Reserved.</p>
    </div>
  )
}
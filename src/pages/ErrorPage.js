import { NavLink } from "react-router-dom"
import LogoImg from "../assets/images/404-img.png"
import "../styles/ErrorPage.css"

export const ErrorPage = () => {
  return (
      <div className="error-bg">
      <section className="error-container">
        <img src={LogoImg} className="error-logo" alt="" />
        <div className="error-home-btn-container">
          <NavLink to="/" className="error-home-btn">Go Home</NavLink>
        </div>
      </section>
    </div>
  )
}
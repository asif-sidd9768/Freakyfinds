import "./MainBanner.css"
import MainLandingImage from "../../../assets/images/main-landing-image-bg-remove.png"
import { NavLink } from "react-router-dom"

export const MainBanner = () => {
  return (
    <div className="main-banner-container">
      <div className="main-banner-details">
        <p className="main-banner-title">FreakyFinds: Get Your Freak On!</p>
        <p className="main-banner-slogan">Our Weird is Your Wonderful, Dive into the Quirk!</p>
        <div>
          <NavLink to="/shop" className="main-banner-btn">Explore the Shop</NavLink>
        </div>
      </div>
      <div className="main-banner-images">
        <img className="main-banner-image" src={MainLandingImage} />
      </div>
      {/* <div className="main-landing-image-container">
        <p className="main-landing-title">Get The Best!</p>
        <img className="main-landing-image" src={MainLandingImage} />
      </div> */}
    </div>
  )
}
import { NavLink, useNavigate } from "react-router-dom"
import "./NewMainBanner.css"
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstLetter"
import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import { setProductFilterAction } from "../../../actions/productActions"

export const NewMainBanner = () => {
  const { productDispatch } = useContext(ProductContext)
  const navigate = useNavigate()
  const handleNavigate = (category) => {
    productDispatch(setProductFilterAction(category))
    navigate("/shop")  
  }
  return (
    <div className="new-banner-main-container">
      <div className="left-side-container">
        <div>
          <p className="left-side-text-one">In Store</p>
        </div>
        <div className="left-side-text-container">
          {
            ['men', 'women', 'electronics', 'jewelery'].map((category, index) => 
              <button key={index} onClick={() => handleNavigate(category)} className="left-side-text">{capitalizeFirstChar(category)}</button>
            )
          }
          {/* <NavLink to="men" className="left-side-text">Men</NavLink>
          <NavLink className="left-side-text">Women</NavLink>
          <NavLink className="left-side-text">Electronics</NavLink>
          <NavLink className="left-side-text">Jewelery</NavLink> */}
        </div>
      </div>
      <div className="middle-container">
        <div className="inside-middle-container">
          <div className="inside-middle-text-container">
            <p className="inside-middle-brandname">FreakyFinds</p>
            <p className="inside-middle-text">Experience the Freaky Fun</p>
            <p className="inside-middle-text">It's Shopping, Redefined</p>
          </div>
        </div>
      </div>
      <div className="right-side-container">
        <div className="right-side-text">
          Dare to Be Different - Shop at <span className="new-bannner-brand-name">Freaky Finds</span>
        <div className="right-side-btn-container">
          <NavLink to="/shop" className="right-side-btn">Explore More</NavLink>
        </div></div>
      </div>
    </div>
  )
}
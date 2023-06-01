import { useContext } from "react"

import { ProductContext } from "../../../contexts/ProductContext"
import { setProductFilterAction } from "../../../actions/productActions"
import { useNavigate } from "react-router-dom"
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstLetter"

import "./NewProductCategories.css"

export const NewProductCategories = () => {
  const {productDispatch} = useContext(ProductContext)
  const navigate = useNavigate()

  const handleNavigate = (category) => {
    productDispatch(setProductFilterAction(category))
    navigate("/shop")  
  }
  return (
    <div className="new-product-categories-main-container">
      <p className="new-product-categories-title">Our Collections</p>
      <p className="new-product-categories-slogan">Explore Our World, One Category at a Time.</p>
      <div className="new-product-categories-container">
        {
          ['men', 'women', 'electronics', 'jewelery'].map((category, index) => 
            <div key={index} className={`new-product-categories-${category}`}>
              <button onClick={() => handleNavigate(category)} className="new-product-categories-btn">
                Explore {capitalizeFirstChar(category)}
              </button>
            </div>
          )
        }
    </div>
    </div>
  )
}
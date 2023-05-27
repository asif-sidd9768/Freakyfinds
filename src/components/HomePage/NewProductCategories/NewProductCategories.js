import { useContext } from "react"
import "./NewProductCategories.css"
import { ProductContext } from "../../../contexts/ProductContext"
import { setProductFilterAction } from "../../../actions/productActions"
import { useNavigate } from "react-router-dom"
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstLetter"

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
      {/* <div className="new-product-categories-men">
        <button className="new-product-categories-btn">
          Explore Men
        </button>
      </div>
      <div className="new-product-categories-women">
        <button className="new-product-categories-btn">
          Explore Women
        </button>
      </div>
      <div className="new-product-categories-electronics">
        <button className="new-product-categories-btn">
          Explore Electronics
        </button>
      </div>
      <div className="new-product-categories-jewelery">
        <button className="new-product-categories-btn">
          Explore Jewelery
        </button>
      </div> */}
    </div>
    </div>
  )
}
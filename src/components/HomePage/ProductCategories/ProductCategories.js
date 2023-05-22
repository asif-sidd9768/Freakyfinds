import { useContext } from "react"
import { NavLink } from "react-router-dom"

import "./ProductCategories.css"
import { ProductContext } from "../../../contexts/ProductContext"
import Men from "../../../assets/images/men.png"
import Women from "../../../assets/images/women.png"
import Electronics from "../../../assets/images/electronics.png"
import Jewellery from "../../../assets/images/jewellery.png"

const categories = {
  men: {
    title: "Men",
    image: Men
  },
  women: {
    title: "Women",
    image: Women
  },
  electronics: {
    title: "Electronics",
    image: Electronics
  }, 
  jewelery: {
    title: "Jewellery",
    image: Jewellery
  }
}
export const ProductCategories = () => {
  const {productState} = useContext(ProductContext)
  return (
    <div className="product-categories-container">
      <p className="product-categories-title">Our Collections</p>
      <p className="product-categories-slogan">Explore Our World, One Category at a Time.</p>
      <div className="product-categories-grid">
        {
          productState.categories.map(category => 
            <div className="product-category-card" key={category}>
              <div className="product-category-details">
                <p className="product-category-title">{categories[category]?.title}</p>
                <NavLink to={`/${category}`} className="product-category-btn">Explore {categories[category]?.title}</NavLink>
              </div>
              <div><img src={categories[category]?.image} /></div>
            </div>  
          )
        }
      </div>
    </div>
  )
}
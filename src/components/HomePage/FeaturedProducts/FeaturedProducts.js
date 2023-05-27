import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import { FeaturedProductCard } from "./FeaturedProductCard/FeaturedProductCard"

import "./FeaturedProducts.css"

export const FeaturedProducts = () => {
  const { productState } = useContext(ProductContext)
  return (
    <div>
      <p className="featured-products-title">Featured Products</p>
      <p className="featured-products-tagline">Power up with our featured products!</p>
      <div className="featured-products-container">
        {
          productState.products.slice(0,4).map(pr => 
            <FeaturedProductCard key={pr.id} {...pr} />
          )
        }
      </div>
    </div>
  )
}
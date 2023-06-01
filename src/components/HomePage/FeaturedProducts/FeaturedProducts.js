import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import { FeaturedProductCard } from "./FeaturedProductCard/FeaturedProductCard"

import "./FeaturedProducts.css"
import Skeleton from "react-loading-skeleton"
import { SkeletonCards } from "../../SkeletonCards/SkeletonCards"

export const FeaturedProducts = () => {
  const { productState } = useContext(ProductContext)
  const featuredProducts = productState.products.filter(({isFeatured}) => isFeatured).slice(0,4)
  return (
    <div>
      <p className="featured-products-title">Featured Products</p>
      <p className="featured-products-tagline">Power up with our featured products!</p>
      <div className="featured-products-container">
        {
          productState.isLoading ? (
            <SkeletonCards cardCount={4} />
          ): <>
            {
              featuredProducts.map(pr => 
                <FeaturedProductCard key={pr.id} {...pr} />
              )
            }
          </>
        }
      </div>
    </div>
  )
}
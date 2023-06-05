import { useContext, useEffect } from "react"

import { ProductContext } from "../contexts/ProductContext"
import { ProductListCard } from "../components/ProductList/ProductListCard/ProductListCard"

import { ProductListFilter } from "../components/ProductList/ProductListFilter/ProductListFilter"
import { SkeletonCards } from "../components/SkeletonCards/SkeletonCards"
import { categoryFilter, getFilteredProducts, priceFilter, ratingFilter } from "../utils/products/filtersHelper"
import { EmptyList } from "../components/Profile/EmptyList/EmptyList"

import "../styles/ProductList.css"

export const ProductList =() => {
  const { productState } = useContext(ProductContext)
  const filteredProducts = getFilteredProducts(productState)
  return (
    <div>
      <ProductListFilter />
      {

      }
      <div className={`${filteredProducts.length > 0 ? "product-list-container" : "product-list-container-empty" }`}>
        {
          productState.isLoading ? (
            <SkeletonCards cardCount={12} />
          ) :
          <>
          {
            filteredProducts.length > 0 ? filteredProducts.map(product => 
              <ProductListCard key={product.id} {...product} />
            ) : <> 
            <EmptyList text="No products to show check another combination." />
            </>
          }
          </>
        }
      </div>
    </div>
  )
}
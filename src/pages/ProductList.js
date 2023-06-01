import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { ProductContext } from "../contexts/ProductContext"
import { ProductListCard } from "../components/ProductList/ProductListCard/ProductListCard"

import "../styles/ProductList.css"
import { ProductListFilter } from "../components/ProductList/ProductListFilter/ProductListFilter"
import { setProductFilterAction } from "../actions/productActions"
import Skeleton from "react-loading-skeleton"
import { SkeletonCards } from "../components/SkeletonCards/SkeletonCards"
import { categoryFilter, getFilteredProducts, priceFilter, ratingFilter } from "../utils/products/filtersHelper"
import { EmptyList } from "../components/Profile/EmptyList/EmptyList"

export const ProductList =() => {
  const { productState, productDispatch } = useContext(ProductContext)
  const filteredProducts = getFilteredProducts(productState)
  return (
    <div>
      <ProductListFilter />
      <div className="product-list-container">
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
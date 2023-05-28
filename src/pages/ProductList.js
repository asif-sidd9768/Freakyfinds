import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { ProductContext } from "../contexts/ProductContext"
import { ProductListCard } from "../components/ProductList/ProductListCard/ProductListCard"

import "../styles/ProductList.css"
import { ProductListFilter } from "../components/ProductList/ProductListFilter/ProductListFilter"
import { setProductFilterAction } from "../actions/productActions"

export const ProductList =() => {
  const { productState, productDispatch } = useContext(ProductContext)

  let filteredProducts = productState.filters.category === "all" ? 
  productState.products : 
  productState.products.filter(({category}) => category.toLowerCase() === productState.filters.category.toLowerCase())

  if(productState.filters.price){
    filteredProducts = [...filteredProducts].sort((prodA, prodB) => {
      if(productState.filters.price ===  "lowToHigh"){
        return prodA.price - prodB.price
      }else {
        return prodB.price - prodA.price
      }
    })
  }

  if(productState.filters.rating){
    filteredProducts = [...filteredProducts].sort((prodA, prodB) => {
      if(productState.filters.rating ===  "lowToHigh"){
        return prodA.rating.rate - prodB.rating.rate
      }else {
        return prodB.rating.rate - prodA.rating.rate
      }
    })
  }

  if(productState.filters.sale === 'yes'){
    filteredProducts = [...filteredProducts].filter(({sale}) => sale.onSale)
  }

  if(productState.filters.searchParam){
    filteredProducts = [...filteredProducts].filter(({title}) => title.toLowerCase().includes(productState.filters.searchParam.toLowerCase()))
  }

  return (
    <div>
      <ProductListFilter />
      <div className="product-list-container">
        {
          filteredProducts.map(product => 
            <ProductListCard key={product.id} {...product} />
          )
        }
      </div>
    </div>
  )
}
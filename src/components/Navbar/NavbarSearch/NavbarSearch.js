import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import { ProductListCard } from "../../ProductList/ProductListCard/ProductListCard"

import "./NavbarSearch.css"
import { EmptyList } from "../../Profile/EmptyList/EmptyList"

export const NavbarSearch = () => {
  const { productState } = useContext(ProductContext)
  const filteredProducts = productState.products.filter(({title}) => title.toLowerCase().includes(productState.filters.searchParam.toLowerCase()))

  if(filteredProducts.length === 0){
    return <div className="search-empty">
      <EmptyList showBtn={false} text="No products found, try another combination" />
    </div>
  }
  return (
    <div className="search-list-container">
      {
        filteredProducts.map(product => 
          <ProductListCard key={product.id} {...product} />  
        )
      }
    </div>
  )
}
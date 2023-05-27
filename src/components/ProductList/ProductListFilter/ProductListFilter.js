import { useContext } from "react"
import "./ProductListFilter.css"
import { ProductContext } from "../../../contexts/ProductContext"
import { setProductFilterAction, setProductPriceFilterAction, setProductRatingFilterAction } from "../../../actions/productActions"

export const ProductListFilter = () => {
  const { productState, productDispatch } = useContext(ProductContext)

  const handleCategoryChange = (event) => {
    productDispatch(setProductFilterAction(event.target.value))
  }

  const handlePriceFilter = (event) => {
    productDispatch(setProductPriceFilterAction(event.target.value))
  }

  const handleRatingFilter = (event) => {
    productDispatch(setProductRatingFilterAction(event.target.value))
  }

  return (
    <div className="product-list-filter-container">
      <div className="product-list-filter-category-container">
        <span className="product-list-filter-category-label">SHOW ME</span> <select defaultValue={productState.filters.category} onChange={handleCategoryChange} className="product-list-filter-category">
          <option value="all" className="product-list-filter-category-item">Everything</option>
          <option value="men"  className="product-list-filter-category-item">Men's</option>
          <option value="women" className="product-list-filter-category-item">Women's</option>
          <option value="electronics" className="product-list-filter-category-item">Electronics</option>
          <option value="jewelery" className="product-list-filter-category-item">Jewelery</option>
        </select>
      </div>
      <div className="product-list-filter-category-container">
        <span className="product-list-filter-category-label">SORT BY</span> <select value={productState.filters.rating} onChange={handleRatingFilter} className="product-list-filter-category">
          <option value="">Rating</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="product-list-filter-category-container">
        <span className="product-list-filter-category-label">SORT BY</span> <select value={productState.filters.price} onChange={handlePriceFilter} className="product-list-filter-category">
          <option value="">Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  )
}
import { useContext, useState } from "react"

import { ProductContext } from "../../../contexts/ProductContext"
import { productFilterRemoveAction, setProductFilterAction, setProductPriceFilterAction, setProductRatingFilterAction, setProductSaleFilterAction, setProductSearchFilterAction } from "../../../actions/productActions"
import { NotificationContext } from "../../../contexts/NotificationContext"

import "./ProductListFilter.css"

export const ProductListFilter = () => {
  const { productState, productDispatch } = useContext(ProductContext)
  const { showNotification } = useContext(NotificationContext)
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const createHandler = (actionCreator) => (event) => {
    if(productState.isLoading){
      showNotification("Loading the products, Please wait.")
      return;
    }
    productDispatch(actionCreator(event.target.value));
  };

  const handleCategoryChange = createHandler(setProductFilterAction);
  const handlePriceFilter = createHandler(setProductPriceFilterAction);
  const handleRatingFilter = createHandler(setProductRatingFilterAction);
  const handleSearchFilter = createHandler(setProductSearchFilterAction);
  const handleSaleFilter = createHandler(setProductSaleFilterAction);
  const handleRemoveFilter = (filterData) => productDispatch(productFilterRemoveAction(filterData))

  return (
    <div className="filters-container">
      <div className="mobile-filter-toggle">
        <button className={`${showMobileFilter ? "toggle-active" : ""}`} onClick={() => setShowMobileFilter(prevFilter => !prevFilter)}><i className="fa-solid fa-filter"></i></button>
      </div>
      <div className={`product-list-filters ${showMobileFilter ? "show-mobile-filters" : ""}`}>
        <div className="product-list-filter-container">
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">SHOW ME</span> <select value={productState.filters.category} onChange={handleCategoryChange} className="product-list-filter-category">
              <option value="all"  className="product-list-filter-category-item">Everything</option>
              <option value="men"  className="product-list-filter-category-item">Men's</option>
              <option value="women" className="product-list-filter-category-item">Women's</option>
              <option value="electronics" className="product-list-filter-category-item">Electronics</option>
              <option value="jewelery" className="product-list-filter-category-item">Jewelery</option>
            </select>
            {productState.filters.category && productState.filters.category !== "all" && <span onClick={() => handleRemoveFilter({category: "all"})} title="remove" className="product-list-filter-remove">x</span>}
          </div>
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">FILTER BY</span> <select value={productState.filters.rating} onChange={handleRatingFilter} className="product-list-filter-category">
              <option value="">Rating</option>
              <option value="4">4 & above</option>
              <option value="3">3 & above</option>
              <option value="2">2 & above</option>
              <option value="1">1 & above</option>
            </select>
            {productState.filters.rating && <span onClick={() => handleRemoveFilter({rating: ""})} title="remove" className="product-list-filter-remove">x</span>}
          </div>
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">SORT BY</span> <select value={productState.filters.price} onChange={handlePriceFilter} className="product-list-filter-category">
              <option value="">Price</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
            {productState.filters.price && <span onClick={() => handleRemoveFilter({price: ""})} title="remove" className="product-list-filter-remove">x</span>}
          </div>
        </div>
        <div className="product-list-filter-container">
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">ONLY SALE</span> <select defaultValue={productState.filters.sale} onChange={handleSaleFilter} className="product-list-filter-category">
              <option value="no" className="product-list-filter-category-item">No</option>
              <option value="yes"  className="product-list-filter-category-item">Yes</option>
            </select>
            {productState.filters.sale && productState.filters.sale !== "no" && <span onClick={() => handleRemoveFilter({sale: "no"})} title="remove" className="product-list-filter-remove">x</span>}
          </div>
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">SEARCH</span> 
              <input type="text" onChange={handleSearchFilter} className="product-list-filter-category" placeholder="&#128269; type to find" />
              {productState.filters.searchParam && <span onClick={() => handleRemoveFilter({searchParam: ""})} title="remove" className="product-list-filter-remove">x</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
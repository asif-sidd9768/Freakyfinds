import { useContext, useEffect, useState } from "react"

import { ProductContext } from "../../../contexts/ProductContext"
import { productFilterRemoveAction, removeProductFilters, setProductFilterAction, setProductPriceFilterAction, setProductPriceRangeFilter, setProductRatingFilterAction, setProductSaleFilterAction, setProductSearchFilterAction, setProductStockFilter } from "../../../actions/productActions"
import { NotificationContext } from "../../../contexts/NotificationContext"

import "./ProductListFilter.css"
import { initialStateProducts } from "../../../reducers/ProductsReducer"

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

  const maxPrice = Math.ceil(productState.products.reduce((acc, curr) => acc.price > curr.price ? acc : curr, productState.products[0])?.price) || ""

  const handleStockFilter = (event) => {
    event.target.checked ? productDispatch(setProductStockFilter(true)) : productDispatch(setProductStockFilter(false)) 
  }

  const handlePriceRangeFilter = (event) => {
    productDispatch(setProductPriceRangeFilter(event.target.value))
  }

  const handleClearAllFilters = () => {
    productDispatch(removeProductFilters())
  }

  const handleCategoryChange = createHandler(setProductFilterAction);
  const handlePriceFilter = createHandler(setProductPriceFilterAction);
  const handleRatingFilter = createHandler(setProductRatingFilterAction);
  const handleSaleFilter = createHandler(setProductSaleFilterAction);
  const handleRemoveFilter = (filterData) => productDispatch(productFilterRemoveAction(filterData))

  useEffect(() => {
    productDispatch(setProductPriceRangeFilter(maxPrice || ""))
  }, [maxPrice])

  return (
    <div className="filters-container">
      {JSON.stringify(productState.filters) !== JSON.stringify(initialStateProducts.filters) && <span onClick={handleClearAllFilters} title="clear all filters" className="filter-remove-btn">CLEAR ALL</span>}
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
            <span className="product-list-filter-category-label">ONLY SALE</span> 
            <div className="product-list-filter-radio">
              <span>
                <input checked={productState.filters.sale === "yes"} type="radio" name="sale" onChange={handleSaleFilter} value="yes" /> Yes
              </span>
              <span>
                <input checked={productState.filters.sale === "no"} type="radio" name="sale" onChange={handleSaleFilter} value="no" />No
              </span>
              {productState.filters.sale && productState.filters.sale !== "no" && <span onClick={() => handleRemoveFilter({sale: "no"})} title="remove" className="product-list-filter-remove">x</span>}
            </div>
          </div>
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">ONLY STOCK</span> 
            <div className="product-list-filter-radio">
              <span>
                <input checked={productState.filters.inStock} type="checkbox" onChange={handleStockFilter}  /> Inc. sold out
              </span>
              {productState.filters.inStock && <span onClick={() => handleRemoveFilter({inStock: false})} title="remove" className="product-list-filter-remove">x</span>}
            </div>
          </div>
          <div className="product-list-filter-category-container">
            <span className="product-list-filter-category-label">PRICE ({productState.filters.priceRange === 55000 ? "ALL" : `<=${productState.filters.priceRange}`}) </span> 
            <div className="product-list-filter-radio">
              <span className="product-price-range-slider">
                <span>0</span>
                <input onChange={handlePriceRangeFilter} type="range" value={productState.filters.priceRange} min="0" max={maxPrice} step="2500" />
                <span>{maxPrice}</span>
              </span>
              {productState.filters.priceRange<maxPrice && <span onClick={() => handleRemoveFilter({priceRange: maxPrice})} title="remove" className="product-list-filter-remove">x</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
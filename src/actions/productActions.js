export const setProductsRequestAction = () => ({
  type:"SET_PRODUCTS_REQUEST"
})

export const setProducts = (productsData) => ({
  type:"SET_PRODUCTS",
  payload: productsData
})

export const setProductsFailureAction = (error) => ({
  type:"SET_PRODUCTS_FAILURE",
  payload:error
})

export const setProductFilterAction = (filterType) => ({
  type:"SET_PRODUCT_CATEGORY_FILTER",
  payload: filterType
})

export const setProductPriceFilterAction = (filterType) => ({
  type:"SET_PRODUCT_PRICE_FILTER",
  payload:filterType
})

export const setProductRatingFilterAction = (filterType) => ({
  type:"SET_PRODUCT_RATING_FILTER",
  payload:filterType
})

export const setProductSaleFilterAction = (filterType) => ({
  type:"SET_PRODUCT_SALE_FILTER",
  payload: filterType
})

export const setProductSearchFilterAction = (searchParams) => ({
  type:"SET_PRODUCT_SEARCH_FILTER",
  payload: searchParams
})

export const productFilterRemoveAction = (filterData) => ({
  type:"PRODUCT_FILTER_REMOVE",
  payload: filterData
})

export const setProductStockFilter = (filterData) => ({
  type:"PRODUCT_STOCK_FILTER",
  payload: filterData
})
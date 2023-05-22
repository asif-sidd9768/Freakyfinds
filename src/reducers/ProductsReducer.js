export const initialStateProducts = {
  products: [],
  categories: [],
  filters: {
    price: "",
    rating: "",
    category: "all"
  },
  isLoading: true,
  error: null
}
export const productsReducers = (state, action) => {
  switch(action.type){
    case "SET_PRODUCTS":
      // const categories = action.payload.reduce((acc, curr) => ([...acc, !])))
      return {...state, products: action.payload, categories: [...new Set(action.payload.map(pr => pr.category))], isLoading: false}
    case "SET_PRODUCTS_FAILURE":
      return {...state, error: action.payload, isLoading: false}
    case "SET_PRODUCT_CATEGORY_FILTER": 
      return {...state, filters: {...state.filters, category: action.payload}}
    case "SET_PRODUCT_PRICE_FILTER":
      return {...state, filters: {...state.filters, price: action.payload, rating: ""}}
    case "SET_PRODUCT_RATING_FILTER":
      return {...state, filters: {...state.filters, rating: action.payload, price: ""}}
  }
}
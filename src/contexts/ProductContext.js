import { createContext, useEffect, useReducer } from "react";
import { initialStateProducts, productsReducers } from "../reducers/ProductsReducer";
import { setProducts, setProductsFailureAction } from "../actions/productActions";
import { getAllProducts } from "../services/products/productService";

export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
  const [productState, productDispatch] = useReducer(productsReducers, initialStateProducts)
  // [...new Set(prods.map(pr => pr.category.name))] 
  useEffect(() => {
    async function loadProducts (){
      try {
        const response = await getAllProducts()
        productDispatch(setProducts(response.data))
      }catch(error){
        productDispatch(setProductsFailureAction(error))
      }
    }
    loadProducts()
  }, [])

  return (
    <ProductContext.Provider value={{productState, productDispatch}}>
      {children}
    </ProductContext.Provider>
  )
}
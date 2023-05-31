import { createContext, useContext, useEffect, useReducer } from "react";
import { initialStateProducts, productsReducers } from "../reducers/ProductsReducer";
import { setProducts, setProductsFailureAction } from "../actions/productActions";
import { getAllProducts } from "../services/products/productService";
import { NotificationContext } from "./NotificationContext";

export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
  const [productState, productDispatch] = useReducer(productsReducers, initialStateProducts)
  const { showNotification } = useContext(NotificationContext)
  
  useEffect(() => {
    async function loadProducts (){
      try {
        const response = await getAllProducts()
        productDispatch(setProducts(response.data))
      }catch(error){
        productDispatch(setProductsFailureAction(error.response.data.message))
        showNotification(error.response.data.message, "error")
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
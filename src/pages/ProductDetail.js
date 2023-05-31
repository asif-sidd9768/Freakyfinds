import { useContext, useEffect, useRef, useState } from "react"
import { DetailSection } from "../components/ProductDetail/DetailSection/DetailSection"
import { ImageSection } from "../components/ProductDetail/ImageSection/ImageSection"

import "../styles/ProductDetail.css"
import { ProductContext } from "../contexts/ProductContext"
import { useParams } from "react-router-dom"
import { addItemToBrowsedService } from "../services/user/browsedService"
import { UserContext } from "../contexts/UserContext"
import { updatedBrowsedItemsAction } from "../actions/userActions"

export const ProductDetail = () => {
  const { productState } = useContext(ProductContext)
  const { userState, userDispatch } = useContext(UserContext)
  const {productId} = useParams()
  const foundProduct = productState.products.find(({id}) => id === productId)
  if(!foundProduct) {
    return 
  }

  useEffect(() => {
    async function updateBrowsed () {
      try{
        const response = await addItemToBrowsedService(userState?.user?.token, userState?.user?.user?.id, foundProduct.id)
        userDispatch(updatedBrowsedItemsAction(response.data))
      }catch(error){
        
      }
    }
    if(foundProduct){
      updateBrowsed()
    }
  }, [])
  return (
    <div>
      <div className="product-detail-heading">
        <p className="product-detail-heading-text">{foundProduct.title} </p>
      </div>
      <div className="product-detail-container">
        <ImageSection className="product-detail-image-section" product={foundProduct} />
        <DetailSection className="product-detail-detail-section" product={foundProduct} />
      </div>
    </div>
  )
}
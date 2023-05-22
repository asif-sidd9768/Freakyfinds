import { useContext } from "react"
import { DetailSection } from "../components/ProductDetail/DetailSection/DetailSection"
import { ImageSection } from "../components/ProductDetail/ImageSection/ImageSection"

import "../styles/ProductDetail.css"
import { ProductContext } from "../contexts/ProductContext"
import { useParams } from "react-router-dom"

export const ProductDetail = () => {
  const { productState } = useContext(ProductContext)
  const {productId} = useParams()
  const foundProduct = productState.products.find(({id}) => id === productId)

  if(!foundProduct) {
    return 
  }
  return (
    <div>
      <div className="product-detail-heading">
        {foundProduct.title} 
      </div>
      <div className="product-detail-container">
        <ImageSection className="product-detail-image-section" product={foundProduct} />
        <DetailSection className="product-detail-detail-section" product={foundProduct} />
      </div>
    </div>
  )
}
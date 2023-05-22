import { useState } from "react"
import "./ImageSection.css"

export const ImageSection = ({product}) => {
  const [selectedImage, setSelectedImage] = useState(1)
  return (
    <div className="image-section-container">
      <div>
        <img className="image-section-image" src={product.image} />
      </div>
      <div className="image-section-navigator-container">
        {
          [1,2,3].map(i => 
            <span key={i} className="image-section-navigator">
              <img src={product.image} className="image-section-navigator-image" />
            </span>   
          )
        }
      </div>
    </div>
  )
}
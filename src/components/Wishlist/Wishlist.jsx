import { useContext } from "react"
import "./Wishlist.css"
import { WishlistContext } from "../../contexts/WishlistContext"
import { ProductListCard } from "../ProductList/ProductListCard/ProductListCard"
import { EmptyCart } from "../Cart/EmptyCart/EmptyCart"

export const Wishlist = () => {
  const { wishlistState } = useContext(WishlistContext)
  return (
    <>
      {
        wishlistState.wishlistItems.length !== 0 ? 
          <div className="product-list-container">
            {
              wishlistState.wishlistItems.map(product => 
                <ProductListCard key={product.id} {...product} />
              )
            }
          </div>
        :
        <EmptyCart text={"wishlist"} />
      }
      
    </>
  )
}
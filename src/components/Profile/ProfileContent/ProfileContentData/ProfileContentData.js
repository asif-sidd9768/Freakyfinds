import { AddressList } from "../../../Cart/AddressDetail/AddressList/AddressList"
import { CartProduct } from "../../../Cart/CartProductsSection/CartProduct/CartProduct"
import { ProfileOrders } from "../ProfileOrders/ProfileOrders"

export const ProfileContentData = ({data: {dataContent, title}}) => {
  return (
    <div>
      {
        title === "addresses" && <AddressList />
      }
      {
        title === "wishlist" && <>
          {
            dataContent.map(product => 
              <CartProduct key={product.id} product={product} quantity={1} id={4} />
            )
          }
        </>
      }
      {
        title === "orders" && <ProfileOrders dataContent={dataContent} />
      }
    </div>
  )
}